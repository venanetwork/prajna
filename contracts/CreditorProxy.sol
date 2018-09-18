pragma solidity 0.4.24;

import "./ContractRegistry.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        DEBT_OFFER_CANCELLED,
        DEBT_OFFER_REMAIN_NOT_ENOUGH,
        DEBT_OFFER_LESS_THAN_MIN_FILL_AMOUNT,
        DEBT_OFFER_NON_CONSENSUAL,
        CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT
    }

    ContractRegistry public contractRegistry;

    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

    mapping (bytes32 => bool) public debtOfferCancelled;
    mapping (bytes32 => Remain) public orderRemain;
    struct Remain {
        bool recorded;
        uint remain;
    }

    event LogDebtOfferCancelledAsCreditor(
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash
    );

    event LogDebtOfferFilled(
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash,
        uint indexed _orderRemain
    );

    event LogError(
        uint8 indexed _errorId,
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash
    );



    function CreditorProxy(address _contractRegistry)
        public
    {
        contractRegistry = ContractRegistry(_contractRegistry);
    }

    event LogByte(bytes32 data);
    event LogBytes(bytes data);
    event LogUint(uint data);

    /*
     * Submit debt order to DebtKernel if it is consensual with creditor's request
     * Creditor signature in arguments is only used internally,
     * It will not be verified by the Debt Kernel.
     *
     * When fill as creditor, we will not check debtor's sig for the Simplicity.
     */
    function fillAsDebtor(
        address debtor,
        address[6] orderAddresses, // repayment-router, creditor, uw, tc, p-token, relayer
        uint[9] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime, minPa,
        bytes32[1] orderBytes32, // tcParams
        uint fillAmount,
        uint fillSalt,
        uint8[3] signaturesV, // debtV, credV, uw
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        whenNotPaused
        returns (bytes32 _agreementId)
    {
        // 1. validate creditor signature
        bytes32 creditorCommitmentHash = getCreditorCommitmentHash(orderAddresses, orderValues, orderBytes32);

        if (debtOfferCancelled[creditorCommitmentHash]) {
            LogError(uint8(Errors.DEBT_OFFER_CANCELLED), orderAddresses[1], creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        if (!isValidSignature(
            orderAddresses[1],
            creditorCommitmentHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            LogError(uint8(Errors.DEBT_OFFER_NON_CONSENSUAL), orderAddresses[1], creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        // 2. Assert remain is enough for this fill
        if (orderRemain[creditorCommitmentHash].recorded == false) {
            orderRemain[creditorCommitmentHash] = Remain({
                    recorded: true,
                    remain: orderValues[2]
                });
        }
        if ( orderRemain[creditorCommitmentHash].remain < fillAmount ) {
            LogError(uint8(Errors.DEBT_OFFER_REMAIN_NOT_ENOUGH), orderAddresses[1], creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }
        if ( orderValues[8] > fillAmount ) {
            LogError(uint8(Errors.DEBT_OFFER_LESS_THAN_MIN_FILL_AMOUNT), orderAddresses[1], creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        // 3. principle transfer: principal amount + creditor fee
        uint totalCreditorPayment = fillAmount.add(orderValues[5]);

        if (!assertExternalBalanceAndAllowanceInvariants(
            orderAddresses[1],
            orderAddresses[4],
            totalCreditorPayment
        )) {
            LogError(
                uint8(Errors.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT),
                orderAddresses[1],
                creditorCommitmentHash
            );
            return NULL_ISSUANCE_HASH;
        }

        // Transfer principal from creditor to creditorProxy
        if (totalCreditorPayment > 0) {
            require(transferTokensFrom(
                orderAddresses[4],
                orderAddresses[1],
                address(this),
                totalCreditorPayment
            ));
        }

        // 4. Fill debt order with this contract playing the role of creditor
        bytes32 agreementId = settleOrder(
            debtor,
            orderAddresses[1],
            orderAddresses,
            orderValues,
            orderBytes32,
            fillAmount,
            fillSalt,
            creditorCommitmentHash,
            signaturesV,
            signaturesR,
            signaturesS
        );
        return orderBytes32[0];

    }

    function settleOrder(
        address debtor,
        address creditor,
        address[6] orderAddresses, // repayment-router, creditor/debtor, uw, tc, p-token, relayer
        uint[9] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime, minPa,
        bytes32[1] orderBytes32, // tcParams
        uint fillAmount,
        uint fillSalt,
        bytes32 commitmentHash,
        uint8[3] signaturesV, // debtV, credV, uw
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        internal
        returns (bytes32 _agreementId) {

        orderAddresses[1] = debtor;

        bytes32 agreementId = contractRegistry.debtKernel().fillDebtOrder(
            address(this),
            orderAddresses,
            [
                orderValues[0],
                fillSalt,
                fillAmount,
                orderValues[3],
                orderValues[4],
                orderValues[5],
                orderValues[6],
                orderValues[7]
            ],
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );
        require(agreementId != NULL_ISSUANCE_HASH);
//
        // 5. transfer debt token to real creditor
        contractRegistry.debtToken().transfer(creditor, uint256(agreementId));

        // 6. record the orderRemain
        orderRemain[commitmentHash].remain = orderRemain[commitmentHash].remain.sub(fillAmount);

        // 7. log
        LogDebtOfferFilled(creditor, commitmentHash, orderRemain[commitmentHash].remain);

        return agreementId;
    }

    /**
     * Allows creditor to prevent a debt offer from being used in the future
     */
    function cancelDebtOfferAsCreditor(
        address[6] orderAddresses, // repayment-router, creditor, uw, tc, p-token, relayer
        uint[9] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime, minPa,
        bytes32[1] orderBytes32 // tcParams
    )
        public
        whenNotPaused
    {
        // sender must be the creditor
        require(msg.sender == orderAddresses[1]);
        bytes32 creditorCommitmentHash = getCreditorCommitmentHash(
            orderAddresses,
            orderValues,
            orderBytes32
        );
        debtOfferCancelled[creditorCommitmentHash] = true;
        LogDebtOfferCancelledAsCreditor(orderAddresses[1], creditorCommitmentHash);
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Returns the messaged signed by the creditor to indicate their commitment
     */
    function getCreditorCommitmentHash(
        address[6] orderAddresses, // repayment-router, creditor, uw, tc, p-token, relayer
        uint[9] orderValues, // riskRating, salt, pa, uwFee, rFee, cFee, dFee, expTime, minPa
        bytes32[1] termsContractParameters
    )
        internal
        returns (bytes32 _creditorCommitmentHash)
    {
        // the keccak256 method has a limited number of arguments, add debtorFee will make compiler complain about a too deep stack.
        // so the debtorFee will not included
//        bytes memory a = abi.encodePacked(
//            orderAddresses[0],
//            orderAddresses[1],
//            orderAddresses[2],
//            orderAddresses[3],
//            orderAddresses[4],
//            orderAddresses[5],
//            orderValues[2],
//            orderValues[3],
//            orderValues[4],
//            orderValues[5],
//            orderValues[7],
//            orderValues[8],
//            termsContractParameters[0]
//        );
//        bytes32 b = keccak256(a);
//        LogByte(b);

        bytes memory c1 = abi.encodePacked(
            orderAddresses[0],
            orderAddresses[1],
            orderAddresses[2],
            orderAddresses[3],
            orderAddresses[4],
            orderAddresses[5]
        );

        bytes memory c2 = abi.encodePacked(
            orderValues[0],
            orderValues[1],
            orderValues[2],
            orderValues[3],
            orderValues[4],
            orderValues[5],
            orderValues[6],
            orderValues[7],
            orderValues[8],
            termsContractParameters[0]
        );
        bytes32 c3 = keccak256(c1, c2);
//        LogByte(c3);
        return c3;
    }


    /**
     * Assert that the creditor has a sufficient token balance and has granted the token transfer
     * proxy contract sufficient allowance to suffice for the principal and creditor fee.
     */
    function assertExternalBalanceAndAllowanceInvariants(
        address creditor,
        address principalToken,
        uint totalCreditorPayment
    )
        internal
        returns (bool _isBalanceAndAllowanceSufficient)
    {
        if (getBalance(principalToken, creditor) < totalCreditorPayment ||
            getAllowance(principalToken, creditor) < totalCreditorPayment) {
            return false;
        }
        // ensure the token transfer proxy can transfer tokens from the creditor proxy
        if (getAllowance(principalToken, address(this)) < totalCreditorPayment) {
            require(setAllowance(principalToken, totalCreditorPayment));
        }
        return true;
    }

    /**
     * Given a hashed message, a signer's address, and a signature,
     * returns whether the signature is valid.
     */
    function isValidSignature(
        address signer,
        bytes32 hash,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        internal
        pure
        returns (bool _valid)
    {
        return signer == ecrecover(
            keccak256("\x19Ethereum Signed Message:\n32", hash),
            v,
            r,
            s
        );
    }

    /**
     * Helper function for querying an address' balance on a given token.
     */
    function getBalance(
        address token,
        address owner
    )
        internal
        view
        returns (uint _balance)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).balanceOf.gas(EXTERNAL_QUERY_GAS_LIMIT)(owner);
    }

    /**
     * Helper function for querying an address' allowance to the 0x transfer proxy.
     */
    function getAllowance(
        address token,
        address owner
    )
        internal
        view
        returns (uint _allowance)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).allowance.gas(EXTERNAL_QUERY_GAS_LIMIT)(
            owner,
            address(contractRegistry.tokenTransferProxy())
        );
    }

    /**
     * Helper function for approving this address' allowance to the 0x transfer proxy.
     */
    function setAllowance(
        address token,
        uint amount
    )
        internal
        returns (bool _success)
    {
        return ERC20(token).approve(
            address(contractRegistry.tokenTransferProxy()),
            amount
        );
    }

    /**
     * Helper function for transfering a specified amount of tokens between two parties
     * using the token transfer proxy contract.
     */
    function transferTokensFrom(
        address token,
        address from,
        address to,
        uint amount
    )
        internal
        returns (bool _success)
    {
        return contractRegistry.tokenTransferProxy().transferFrom(
            token,
            from,
            to,
            amount
        );
    }
}

import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import ethUtil = require("ethereumjs-util");
import * as leftPad from "left-pad";
import {ECDSASignature, SignableMessage} from '../types/signable_message';
import {Address} from '../../dist/types/types/common';
import {Bytes32} from '../../../types/common';
import * as solidity from '../../utils/solidity';

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };


// params for construction, TODO: need be more human readable
export interface CreditorOfferParams {
    kernelVersion: Address;
    creditor: Address;
    repaymentRouterVersion: Address;
    underwriter: Address;
    termsContract: Address;
    principalToken: Address;
    relayer: Address;
    underwriterRiskRating: BigNumber;
    salt: BigNumber;
    principalAmount: BigNumber;
    underwriterFee: BigNumber;
    relayerFee: BigNumber;
    creditorFee: BigNumber;
    debtorFee: BigNumber;
    expirationTimestampInSec: BigNumber;
    termsContractParameters: Bytes32;
    minPrincipalAmount: BigNumber;
}

// relayer store the signed SignedCreditorOffer
export interface SignedCriditorOfferParams {
    kernelVersion: Address;
    creditor: Address;
    repaymentRouterVersion: Address;
    underwriter: Address;
    termsContract: Address;
    principalToken: Address;
    relayer: Address;
    underwriterRiskRating: BigNumber;
    salt: BigNumber;
    principalAmount: BigNumber;
    underwriterFee: BigNumber;
    relayerFee: BigNumber;
    creditorFee: BigNumber;
    debtorFee: BigNumber;
    expirationTimestampInSec: BigNumber;
    termsContractParameters: Bytes32;
    minPrincipalAmount: BigNumber;
    creditorSignature: ECDSASignature;
}

export class CreditorOffer extends SignableMessage {
    public params: CreditorOfferParams;

    constructor(params: CreditorOfferParams) {
        super();
        this.params = params;
    }

    public getKernelVersion(): Address {
        return this.params.kernelVersion;
    }

    public getCreditor(): Address {
        return this.params.creditor;
    }

    public getRepaymentRouterVersion(): Address {
        return this.params.repaymentRouterVersion;
    }

    public getUnderwriter(): Address {
        return this.params.underwriter;
    }

    public getTermsContract(): Address {
        return this.params.termsContract;
    }

    public getPrincipalToken(): Address {
        return this.params.principalToken;
    }

    public getRelayer(): Address {
        return this.params.relayer;
    }

    public getUnderwriterRiskRating(): BigNumber {
        return this.params.underwriterRiskRating;
    }

    public getSalt(): BigNumber {
        return this.params.salt;
    }

    public getPrincipalAmount(): BigNumber {
        return this.params.principalAmount;
    }

    public getUnderwriterFee(): BigNumber {
        return this.params.underwriterFee;
    }

    public getRelayerFee(): BigNumber {
        return this.params.relayerFee;
    }

    public getCreditorFee(): BigNumber {
        return this.params.creditorFee;
    }

    public getDebtorFee(): BigNumber {
        return this.params.debtorFee;
    }

    public getExpiration(): BigNumber {
        return this.params.expirationTimestampInSec;
    }

    public getTermsContractParameters(): Bytes32 {
        return this.params.termsContractParameters;
    }

    public getMinPrincipalAmount(): BigNumber {
        return this.params.minPrincipalAmount;
    }

    public getHash(): Bytes32 {
        return this.getCreditorCommitmentHash();
    }

    public getUnderwriterCommitmentHash(): Bytes32 {
        const h3 = solidity.SHA3([
            this.getKernelVersion(),
            this.getCreditor(),
            this.getRepaymentRouterVersion(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getUnderwriterRiskRating(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getTermsContractParameters(),
            this.getMinPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getPrincipalAmount(),
            this.getPrincipalToken(),
            this.getExpiration(),
            this.getSalt(),
        ]);
        return ethUtil.bufferToHex(h3);
    }

    public getCreditorCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getRepaymentRouterVersion(),
            this.getCreditor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getRelayer(),

            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration(),
            this.getMinPrincipalAmount(),
            this.getTermsContractParameters(),
        ]);
        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;

        // // the following is how solidity.SHA3 works (tightly packed)
        // const bin3 = web3.toHex(this.getRepaymentRouterVersion()) +
        //     web3.toHex(this.getCreditor()).slice(2) +
        //     web3.toHex(this.getUnderwriter()).slice(2) +
        //     web3.toHex(this.getTermsContract()).slice(2) +
        //     web3.toHex(this.getPrincipalToken()).slice(2) +
        //     web3.toHex(this.getRelayer()).slice(2) +
        //     leftPad(this.getPrincipalAmount().toString(16), 64, 0) +
        //     leftPad(this.getUnderwriterFee().toString(16), 64, 0) +
        //     leftPad(this.getRelayerFee().toString(16), 64, 0) +
        //     leftPad(this.getCreditorFee().toString(16), 64, 0) +
        //     leftPad(this.getExpiration().toString(16), 64, 0) +
        //     leftPad(this.getMinPrincipalAmount().toString(16), 64, 0) +
        //     this.getTermsContractParameters().slice(2)
        // const hash3 = web3.sha3(bin3, {encoding: 'hex'});
        // console.log("bin3", bin3 )
        // console.log('hash3:', hash3)
        // console.log('----------------------------')
    }

    public getOrderAddresses(): Address[] {
        return [
            this.getRepaymentRouterVersion(),
            this.getCreditor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getRelayer(),
        ];
    }

    public getOrderValues(): BigNumber[] {
        return [
            this.getUnderwriterRiskRating(),
            this.getSalt(),
            this.getPrincipalAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration(),
            this.getMinPrincipalAmount(),
        ];
    }

    public async getSignedCreditorOffer(
        web3: Web3,
        // debtor: Address,
        // fillAmount: BigNumber,
    ): Promise<SignedCriditorOfferParams> {
        const creditorSignature = this.params.creditor
            ? await this.getSignature(web3, this.params.creditor, this.getCreditorCommitmentHash())
            : NULL_SIGNATURE;
        return {
            ...this.params,
            creditorSignature,
        };

        // const fillSalt = new BigNumber(
        //     Math.random()
        //         .toString()
        //         .substring(2),
        // );
        //
        // const h1 = solidity.SHA3([
        //     this.getRepaymentRouterVersion(),
        //     debtor,
        //     this.getUnderwriter(),
        //     this.getUnderwriterRiskRating(),
        //     this.getTermsContract(),
        //     this.getTermsContractParameters(),
        //     fillSalt,
        // ]);
        // const agreementId = ethUtil.bufferToHex(h1);
        //
        // const h2 = solidity.SHA3([
        //     this.getKernelVersion(),
        //     agreementId,
        //     this.getUnderwriterFee(),
        //     fillAmount,
        //     this.getPrincipalToken(),
        //     this.getDebtorFee(),
        //     this.getCreditorFee(),
        //     this.getRelayer(),
        //     this.getRelayerFee(),
        //     this.getExpiration(),
        // ]);
        // const debtOrderHash = ethUtil.bufferToHex(h2);
        //
        // const debtorSignature = debtor
        //     ? await this.getSignature(web3, debtor, debtOrderHash)
        //     : NULL_SIGNATURE;
        //
        // const underwriterSignature =
        //     !this.params.underwriter && this.params.underwriter !== NULL_ADDRESS
        //         ? await this.getSignature(
        //         web3,
        //         this.params.underwriter,
        //         this.getUnderwriterCommitmentHash(),
        //         )
        //         : NULL_SIGNATURE;
        //
        // return new SignedCreditorOffer(
        //     this,
        //     debtor,
        //     fillAmount,
        //     fillSalt,
        //     creditorSignature,
        //     debtorSignature,
        //     underwriterSignature,
        // );
    }
}

export class SignedCreditorOffer extends CreditorOffer {
    public creditorSignature: ECDSASignature;
    public debtorSignature: ECDSASignature;
    public underwriterSignature: ECDSASignature;
    public debtor: Address;
    public fillAmount: BigNumber;
    public fillSalt: BigNumber;

    constructor(
        debtOffer: CreditorOffer,
        debtor: Address,
        fillAmount: BigNumber,
        fillSalt: BigNumber,
        creditorSignature: ECDSASignature,
        debtorSignature: ECDSASignature,
        underwriterSignature: ECDSASignature,
    ) {
        super(debtOffer.params);
        this.debtor = debtor;
        this.fillAmount = fillAmount;
        this.fillSalt = fillSalt;
        this.creditorSignature = creditorSignature;
        this.debtorSignature = debtorSignature;
        this.underwriterSignature = underwriterSignature;
    }

    public getCreditorSignature(): ECDSASignature {
        return this.creditorSignature;
    }

    public getDebtorSignature(): ECDSASignature {
        return this.debtorSignature;
    }

    public getUnderwriterSignature(): ECDSASignature {
        return this.underwriterSignature;
    }

    public getOrderAddressesForKernel(): Address[] {
        return [
            this.getRepaymentRouterVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getTermsContract(),
            this.getPrincipalToken(),
            this.getRelayer(),
        ];
    }

    public getOrderValuesForKernel(): BigNumber[] {
        return [
            this.getUnderwriterRiskRating(),
            this.getFillSalt(),
            this.getFillAmount(),
            this.getUnderwriterFee(),
            this.getRelayerFee(),
            this.getCreditorFee(),
            this.getDebtorFee(),
            this.getExpiration(),
        ];
    }

    public getOrderBytes32(): Bytes32[] {
        return [this.getTermsContractParameters()];
    }

    public getCommitmentAddresses(): Address[] {
        return [
            this.getCreditor(),
            this.getRepaymentRouterVersion(),
            this.getUnderwriter(),
            this.getTermsContract(),
        ];
    }

    public getCommitmentValues(): BigNumber[] {
        return [
            this.getCreditorFee(),
            this.getUnderwriterRiskRating(),
            this.getExpiration(),
            this.getSalt(),
        ];
    }

    public getCommitmentBytes32(): Bytes32[] {
        return [this.getTermsContractParameters()];
    }

    public getSignaturesR(): Bytes32[] {
        return [this.debtorSignature.r, this.creditorSignature.r, this.underwriterSignature.r];
    }

    public getSignaturesS(): Bytes32[] {
        return [this.debtorSignature.s, this.creditorSignature.s, this.underwriterSignature.s];
    }

    public getSignaturesV(): number[] {
        return [this.debtorSignature.v, this.creditorSignature.v, this.underwriterSignature.v];
    }

    public getDebtor(): Address {
        return this.debtor;
    }

    public getFillAmount(): BigNumber {
        return this.fillAmount;
    }

    public getFillSalt(): BigNumber {
        return this.fillSalt;
    }

    public getAgreementId(): Bytes32 {
        const h1 = solidity.SHA3([
            this.getRepaymentRouterVersion(),
            this.getDebtor(),
            this.getUnderwriter(),
            this.getUnderwriterRiskRating(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
            this.getFillSalt(),
        ]);
        return ethUtil.bufferToHex(h1);
    }
}

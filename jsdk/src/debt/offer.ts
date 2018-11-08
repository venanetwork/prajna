import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import ethUtil = require("ethereumjs-util");
import * as leftPad from "left-pad";
import {ECDSASignature, SignableMessage} from '../types/signable_message';
import {Bytes32} from '../../../types/common';
import * as solidity from '../../utils/solidity';
import {Address} from '../types/common';
import * as promisify from "tiny-promisify";

const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_SIGNATURE = { r: "0x0", s: "0x0", v: 0 };

export type DurationUnit =
    | "hour"
    | "hours"
    | "day"
    | "days"
    | "week"
    | "weeks"
    | "month"
    | "months"
    | "year"
    | "years";

// params for construction, used by frontend to created signed Offer
export interface CreditorOfferParams {
    principalAmount: number;
    principalToken: string;
    collateralAmount: number;
    collateralToken: string;
    interestRate: number;
    termDuration: number;
    termUnit: DurationUnit;
    creditorAddress: string;
    expiresInDuration: number;
    expiresInUnit: DurationUnit; // min fill amount of a debt
    minPrincipleAmount: number;
    relayerAddress?: string; // null for now
    relayerFeeAmount?: number; // null for now
    creditorFeeAmount?: number;
}

// relayer store the signed SignedCreditorOffer
export interface SignedCreditorOfferParams {
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
    creditorSignature?: ECDSASignature;
}

export class CreditorOffer {
    public params: SignedCreditorOfferParams;

    constructor(params: SignedCreditorOfferParams) {
        super();
        this.params = params;
    }

    public async getSignature(
        web3: Web3,
        signer: Address,
        hash?: Bytes32,
    ): Promise<ECDSASignature> {
        const signature = await promisify(web3.eth.sign)(signer, hash || this.getCreditorCommitmentHash());
        const { v, r, s } = ethUtil.fromRpcSig(signature);
        return {
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
            v,
        };
    }

    public getCreditorCommitmentHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.params.repaymentRouterVersion,
            this.params.creditor,
            this.params.underwriter,
            this.params.termsContract,
            this.params.principalToken,
            this.params.relayer,

            this.params.underwriterRiskRating,
            this.params.salt,
            this.params.principalAmount,
            this.params.underwriterFee,
            this.params.relayerFee,
            this.params.creditorFee,
            this.params.debtorFee,
            this.params.expirationTimestampInSec,
            this.params.minPrincipalAmount,
            this.params.termsContractParameters,
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

    public async getSignedCreditorOffer(
        web3: Web3,
        // debtor: Address,
        // fillAmount: BigNumber,
    ): Promise<SignedCreditorOfferParams> {
        this.params.creditorSignature = this.params.creditor
            ? await this.getSignature(web3, this.params.creditor, this.getCreditorCommitmentHash())
            : NULL_SIGNATURE;

        return this.params;

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

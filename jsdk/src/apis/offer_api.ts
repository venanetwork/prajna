import * as Web3 from 'web3';
import {ContractsAPI} from './contracts_api';
import {CreditorOffer, CreditorOfferParams, SignedCreditorOfferParams} from '../debt/offer';
import {BigNumber} from 'bignumber.js';

export class OfferAPI {
    private web3: Web3;
    private contracts: ContractsAPI;

    public constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
    }

    // TODO: here we neeed on layer of wrapping, make params more simple
    public async createCreditorOffer(params: CreditorOfferParams): Promise<SignedCreditorOfferParams> {
        let creditorOffer = new CreditorOffer(params);
        return creditorOffer.getSignedCreditorOffer(this.web3);
    }

    public async fillCreditorOfferAsDebtor(debtor: string, fillAmount: BigNumber, signedCreditorOffer: SignedCreditorOfferParams) {

        let orderAddresses = [
            signedCreditorOffer.repaymentRouterVersion,
            signedCreditorOffer.creditor,
            signedCreditorOffer.underwriter,
            signedCreditorOffer.termsContract,
            signedCreditorOffer.principalToken,
            signedCreditorOffer.relayer,
        ];

        let orderValue = [
            signedCreditorOffer.underwriterRiskRating,
            signedCreditorOffer.salt,
            signedCreditorOffer.principalAmount,
            signedCreditorOffer.underwriterFee,
            signedCreditorOffer.relayerFee,
            signedCreditorOffer.creditorFee,
            signedCreditorOffer.debtorFee,
            signedCreditorOffer.expirationTimestampInSec,
            signedCreditorOffer.minPrincipalAmount,
        ];

        const fillSalt = new BigNumber(
            Math.random()
                .toString()
                .substring(2),
        );

        let creditorProxy = await this.contracts.loadCreditorProxyAsync();
        console.log(creditorProxy);
        const txHash = await creditorProxy.fillAsDebtor.sendTransactionAsync(
            debtor,
            orderAddresses,
            orderValue,
            [signedCreditorOffer.termsContractParameters],
            fillAmount,
            fillSalt,
            [signedCreditorOffer.creditorSignature.v],
            [signedCreditorOffer.creditorSignature.r],
            [signedCreditorOffer.creditorSignature.s],
            {from: debtor, gas: 4710000},
        );
        return txHash;
    }
}

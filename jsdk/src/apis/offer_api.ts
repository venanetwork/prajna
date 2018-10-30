import * as Web3 from 'web3';
import {ContractsAPI} from './contracts_api';
import {CreditorOffer, CreditorOfferParams, SignedCreditorOffer, SignedCreditorOfferParams} from '../debt/offer';

export class OrderAPI {
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

    public fillCreditorOfferAsDebtor() {

    }
}

import * as Web3 from "web3";
import {ContractsAPI} from './contracts_api';
import {CreditorOffer, SignedCreditorOffer} from '../debt/offer';
import {CreditorOfferParams} from '../types/offer_schema';

export class OrderAPI {
    private web3: Web3;
    private contracts: ContractsAPI;

    public constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
    }


    // TODO: here we neeed on layer of wrapping, make params more simple
    public createCreditorOffer(params: CreditorOfferParams) : SignedCreditorOffer {

        let creditorOffer = new CreditorOffer(params);

    }

    public fillCreditorOfferAsDebtor() {

    }
}

import * as Web3 from "web3";

import {
    ContractsAPI
    // OrderAPI,
    // AdaptersAPI,
    // BlockchainAPI,
    // LogsAPI,
    // ServicingAPI,
    // SignerAPI,
    // TokenAPI,
} from "./apis/contracts_api";

import * as DharmaTypes from "./types";
import {OfferAPI} from './apis/offer_api';
import {WETH9API} from './apis/weth_api';

class Prajna {
    public static Types = DharmaTypes;

    // public order: OrderAPI;
    public contracts: ContractsAPI;
    public offer: OfferAPI;
    public weth: WETH9API;

    private web3: Web3;

    constructor(web3?: Web3, addressBook: DharmaTypes.AddressBook = {}) {
        /**
         * There are two ways we can access a web3 provider:
         * 1. We pass in the address of an Eth node, e.g. https://localhost:8545
         * 2. Web3 has been injected into the browser window (e.g. via Metamask.)
         */
        if (web3) {
            // If a host is specified, instantiate web3 with it as the provider.
            this.web3 = web3;
        } else {
            // Otherwise throw...
            throw new Error("Pass in the address of your blockchain node.");
        }

        this.contracts = new ContractsAPI(this.web3, addressBook);
        this.offer = new OfferAPI(this.web3, this.contracts);
        this.weth = new WETH9API(this.web3, this.contracts);
    }
}

export { Prajna };

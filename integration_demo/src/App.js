import React, {Component} from 'react';
import './App.css';
import {Prajna} from "@venaprotocal/jsdk";
import web3 from "./web3.js";
import * as moment from "moment";
import * as BigNumber from "bignumber.js";
import * as promisify from "tiny-promisify";

// Instantiate a new instance of Prajna, passing in the host of the local blockchain.
const prajna = new Prajna("http://localhost:8545");
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_BYTES32 = "0x0000000000000000000000000000000000000000000000000000000000000000";

function ether(amount){
    let n = new BigNumber(amount);
    const weiString = web3.toWei(n.toString(), "ether");
    return new BigNumber(weiString);
}

class App extends Component {

    async componentDidMount() {
        let debtKernal = await prajna.contracts.loadDebtKernelAsync();
        let repaymentRouter = await prajna.contracts.loadRepaymentRouterAsync();
        let CREDITOR_1 = 0xDFa1dFc89A50c4965189C73F459615E1E239caA1;
        console.log(CREDITOR_1);

        let latestBlock = await promisify(web3.eth.getBlock)("latest");
        console.log(latestBlock);

        let defaultOfferParams = {
            kernelVersion: debtKernal.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            underwriter: NULL_ADDRESS,
            termsContract: NULL_ADDRESS,
            principalToken: NULL_ADDRESS,
            relayer: NULL_ADDRESS,
            underwriterRiskRating: 0,
            salt: new BigNumber(
                Math.random()
                    .toString()
                    .substring(2),
            ),
            principalAmount: ether(1),
            underwriterFee: ether(0.0015),
            relayerFee: ether(0.0015),
            creditorFee: ether(0.002),
            debtorFee: ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlock.timestamp)
                    .add(30, "days")
                    .unix(),
            ),
            termsContractParameters: NULL_BYTES32,
            minPrincipalAmount: ether(0.2),
        };
        console.log(defaultOfferParams)
        let order = await prajna.offer.createCreditorOffer(defaultOfferParams);
        console.log(order)
    }

    render() {
        return (
            <div className="App">
            </div>
        );
    }
}

export default App;

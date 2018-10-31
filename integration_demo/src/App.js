import React, {Component} from 'react';
import './App.css';
import {Prajna} from "@venaprotocal/jsdk";
import web3 from "./web3.js";
import * as moment from "moment";
import * as BigNumber from "bignumber.js";

// Instantiate a new instance of Prajna, passing in the host of the local blockchain.
const prajna = new Prajna("http://localhost:8545");
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_BYTES32 = "0x0000000000000000000000000000000000000000000000000000000000000000";

function ether(amount){
    let n = new BigNumber(amount);
    const weiString = web3.utils.toWei(n.toString(), "ether");
    return new BigNumber(weiString);
}

class App extends Component {

    async componentDidMount() {
        let debtKernal = await prajna.contracts.loadDebtKernelAsync();
        console.log(debtKernal)
        let repaymentRouter = await prajna.contracts.loadRepaymentRouterAsync();
        console.log(repaymentRouter)
        // let tc = await prajna.contracts.loadTermsContractAsync();
        // console.log(tc)
        let CREDITOR_1 = await web3.eth.getAccounts();
        console.log(CREDITOR_1);

        let latestBlock = await web3.eth.getBlock("latest");
        console.log(latestBlock);

        console.log(ether(1))


        let defaultOfferParams = {
            kernelVersion: debtKernal.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            underwriter: NULL_ADDRESS,
            termsContract: NULL_ADDRESS,
            principalToken:NULL_ADDRESS,
            relayer: NULL_ADDRESS,
            underwriterRiskRating: 0,
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
            NULL_BYTES32,
            minPrincipalAmount: ether(0.2),
            salt: new BigNumber(
                Math.random()
                    .toString()
                    .substring(2),
            ),
        };

        let order = await Prajna.offer.createCreditorOffer(defaultOfferParams)
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

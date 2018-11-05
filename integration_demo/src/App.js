import React, {Component} from 'react';
import './App.css';
import {Prajna} from "@venaprotocal/jsdk";
import web3 from "./web3.js";
import * as moment from "moment";
import * as BigNumber from "bignumber.js";
import * as promisify from "tiny-promisify";
import { Button } from "antd";

// Instantiate a new instance of Prajna, passing in the host of the local blockchain.
const prajna = new Prajna(web3);
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_BYTES32 = "0x0000000000000000000000000000000000000000000000000000000000000000";

function ether(amount){
    let n = new BigNumber(amount);
    const weiString = web3.toWei(n.toString(), "ether");
    return new BigNumber(weiString);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {order: null};
    }

    async componentDidMount() {

    }

    onCreate = async () => {
        // 1. sign the messages
        let debtKernal = await prajna.contracts.loadDebtKernelAsync();
        let repaymentRouter = await prajna.contracts.loadRepaymentRouterAsync();
        let CREDITOR_1 = web3.eth.accounts[0];
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
        this.setState({order: order});
    }

    onFill = async () => {
        let debtor = web3.eth.accounts[0];
        console.log(debtor, ether(1), this.state.order)
        let tx = await prajna.offer.fillCreditorOfferAsDebtor(debtor, ether(1), this.state.order);
        console.log(tx)
    }

    render() {
        return (
            <div className="App">
                <p>Change the Account 1 (as creditor):</p>
                <Button type="default" onClick={this.onCreate}>Create A Order</Button>
                <p>Change the Account 2 (as debtor):</p>
                <Button type="primary" onClick={this.onFill}>Fill This Order</Button>
            </div>
        );
    }
}

export default App;

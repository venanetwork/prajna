import React, {Component} from 'react';
import './App.css';
import {Prajna} from "@venaprotocol/jsdk";
import web3 from "./web3.js";
import * as moment from "moment";
import * as BigNumber from "bignumber.js";
import * as promisify from "tiny-promisify";
import { Button } from "antd";
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";

import CreditorTable from "./Components/creditorTable.js";

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
       let order = prajna.offer.createCreditorOffer({
           principalAmount: 10,
           principalToken: "WETH",
           collateralAmount: 100,
           collateralToken: "USDT",
           interestRate: 10,
           termDuration: 2,
           termUnit: "weeks",
           creditorAddress: web3.eth.accounts[0],
           expiresInDuration: 2,
           expiresInUnit: "weeks",
           minPrincipleAmount: 1,
       });

       this.setState({order: order});
    };

    onFill = async () => {
        let debtor = web3.eth.accounts[0];
        let tx = await prajna.offer.fillCreditorOfferAsDebtor(debtor, ether(1), this.state.order);
        let receipt = await promisify(web3.eth.getTransactionReceipt)(tx);
        // let block = await web3.eth.getBlock(receipt.blockNumber);
        let logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
        console.log(logs)
    };

    onWrap = async () => {
        let address = web3.eth.accounts[0];
        console.log("address is --->",address);
        console.log(prajna);
        //let accounts = await web3.eth.getBalance(address)
        //console.log("before deposit---->",accounts);
        prajna.weth.deposit(address, 10000000000);
        //console.log("after deposit----->",accounts);
    }

    onWithDraw = async() => {
        let address = web3.eth.accounts[0];
        console.log("before deposit---->",web3.eth.getBalance(address));
        prajna.weth.withdraw(address,1000000000);
        console.log("after deposit----->",web3.eth.getBalance(address));
    }

    render() {
        return (
            <div className = "container">
                <div className = "navigation"></div>
                <div className = "content">
                    <div className="App">
                        <button onClick={this.onWrap}>wrap some eth</button>
                        <p>Change the Account 1 (as creditor):</p>
                        <Button type="default" onClick={this.onCreate}>Create A Order</Button>
                        <p>Change the Account 2 (as debtor):</p>
                        <Button type="primary" onClick={this.onFill}>Fill This Order</Button>
                    </div>
                    <CreditorTable/>
                </div>
            </div>
        );
    }
}

export default App;

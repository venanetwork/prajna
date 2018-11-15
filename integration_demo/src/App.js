import React, {Component} from 'react';
import './App.css';
import {Prajna} from "@venaprotocol/jsdk";
import web3 from "./web3.js";
import * as moment from "moment";
import * as BigNumber from "bignumber.js";
import * as promisify from "tiny-promisify";
import { Button,Input } from "antd";
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";

import CreditorTable from "./Components/creditorTable.js";

// Instantiate a new instance of Prajna, passing in the host of the local blockchain.
const prajna = new Prajna(web3);
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const NULL_BYTES32 = "0x0000000000000000000000000000000000000000000000000000000000000000";
const Search = Input.Search;

function ether(amount){
    let n = new BigNumber(amount);
    const weiString = web3.toWei(n.toString(), "ether");
    return new BigNumber(weiString);
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          order: null,
          approve_address:"",
          des_address:"",
          src_address:"",
          weth_balance:0,
        };
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

    onWethBalance = async() => {
      let weth_balance = await prajna.weth.totalSupply();
      console.log("weth_balance = ",weth_balance);
      this.setState({weth_balance:weth_balance});
    }

    onWrap = async () => {
        let address = await web3.eth.accounts[0];
        console.log("address is --->",address);
        //let accounts = await web3.eth.getBalance(address);
        //console.log("before deposit---->",accounts);
        await prajna.weth.deposit(address, 1000000000000000);
        await this.onWethBalance();
        //console.log("after deposit----->",accounts);
    }

    onWithDraw = async() => {
        let address = await web3.eth.accounts[0];
        prajna.weth.withdraw(address,1000000000);
    }

    onApprove = async() => {
        let guy_address = await this.state.approve_address;
        let src_address = await web3.eth.accounts[0];
        //console.log("this.state.approve_address",this.state.approve_address);
        prajna.weth.approve(src_address,guy_address,100000000);
    }

    onTransfer = async() => {
        let src_address = await web3.eth.accounts[0];
        let des_address = await this.state.des_address;
        prajna.weth.transfer(src_address,des_address,1000000000000000);
    }

    onBalanceOf = async() => {
        let address = await web3.eth.accounts[0];
        let balance;
        console.log("11111");
        prajna.weth.balanceOf(address).then(res=>balance=res);
        console.log("balance = ",balance);
        this.onWethBalance();
        if (balance != null){
          console.log("balance = ",balance);
          //this.setState({weth_balance:balance});
        } 
    }

    handleAdressSetting(str,address){
      this.setState({
        [str] : address,
      })
      if (str == "approve_address"){
        this.onApprove();
      }
      else if(str == "des_address"){
        this.onTransfer();
      }
    }

    render() {
        let self = this;
        return (
            <div className = "container">
                <div className = "navigation"></div>
                <div className = "content">
                    <div className="App">
                        <p style={{color:"red"}}> your accounts WETH balance: {this.state.weth_balance} </p>
                        <p> onclick to wrap your eth </p>
                        <Button onClick={this.onWrap}>wrap some eth</Button>
                        <p> onclick to withdraw weth </p>
                        <Button type="default" onClick={this.onWithDraw}> Withdraw</Button>
                        <p> approve your order to destination address </p>
                        <Search enterButton = "Set Approve Address" onSearch={this.handleAdressSetting.bind(this,'approve_address')} style={{width:600}} />
                        <p> transfer your weth to destination address </p>
                        <Search enterButton = "Set Transfer Address" onSearch={this.handleAdressSetting.bind(this,'des_address')} style={{width:600}} />                        
                        <p> Balance Test: </p>
                        <Button type = "default" onClick={this.onBalanceOf}>Check Your Balance</Button>
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

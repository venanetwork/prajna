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
          weth_balance:"",
        };
        //web3.eth.defaultAccount = web3.eth.accounts[0];
        //web3.personal.unlockAccount(web3.eth.defaultAccount);
    }

    async componentDidMount() {
       await this.onBalanceOf();
    }

    onCreate = async () => {
        // 1. sign the messages
       let order = await prajna.offer.createCreditorOffer({
           principalAmount: new BigNumber(723489020 * 10 ** 18),
           principalToken: "WETH",
           collateralAmount: 100,
           collateralToken: "USDT",
           interestRate: new BigNumber(0.012),
           termDuration: new BigNumber(4),
           termUnit: "days",
           creditorAddress: web3.eth.accounts[0],
           expiresInDuration: 2,
           expiresInUnit: "weeks",
           minPrincipleAmount: 1,
       });

       console.log(order);

       await prajna.offer.signCreditorOffer(order);

       this.setState({order: order});
    };

    onFill = async () => {
        let debtor = await promisify(web3.eth.getAccounts)();
        let tx = await prajna.offer.fillCreditorOfferAsDebtor(debtor[0], ether(1), this.state.order);
        let receipt = await promisify(web3.eth.getTransactionReceipt)(tx);
        // let block = await web3.eth.getBlock(receipt.blockNumber);
        let logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
        console.log(logs)
    };
    /*
        目前存在的缺陷 1.不能实时获取余额，要手动调函数才可以[转账、转换的时候余额不会刷新，更换账号余额也不会更新]
          @jacky -18.11.15        
    */
    onWrap = async () => {
        let address = await promisify(web3.eth.getAccounts)();
        await prajna.weth.deposit(address[0], 1000000000000000);
        await this.onBalanceOf(); 
    }

    onWithDraw = async() => {
        let address = await promisify(web3.eth.getAccounts)();
        prajna.weth.withdraw(address[0],1000000000);
        await this.onBalanceOf();
    }

    onApprove = async() => {
        let guy_address = await this.state.approve_address;
        let src_address = await promisify(web3.eth.getAccounts)();
        prajna.weth.approve(src_address,guy_address[0],100000000);
        await this.onBalanceOf();
    }

    onTransfer = async() => {
        let src_address = await promisify(web3.eth.getAccounts)();
        let des_address = await this.state.des_address;
        prajna.weth.transfer(src_address[0],des_address,1000000000000000);
        await this.onBalanceOf();
    }

    onBalanceOf = async() => {
        //let address = await web3.eth.accounts[0];
        let address = await promisify(web3.eth.getAccounts)();
        let balance = await prajna.weth.balanceOf(address[0]).then(res=>res.toString(10));
        if (balance != null){
          this.setState({weth_balance:balance});
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
                        <Button type="primary" onClick={this.onBalanceOf}>Click Button to refresh your balance</Button>
                        <p style={{color:"red"}}> your accounts WETH balance: {this.state.weth_balance} </p>
                        <p> onclick to wrap your eth </p>
                        <Button onClick={this.onWrap}>wrap some eth</Button>
                        <p> onclick to withdraw weth </p>
                        <Button type="default" onClick={this.onWithDraw}> Withdraw</Button>
                        <p> approve your order to destination address </p>
                        <Search enterButton = "Set Approve Address" onSearch={this.handleAdressSetting.bind(this,'approve_address')} style={{width:600}} />
                        <p> transfer your weth to destination address </p>
                        <Search enterButton = "Set Transfer Address" onSearch={this.handleAdressSetting.bind(this,'des_address')} style={{width:600}} />                        
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

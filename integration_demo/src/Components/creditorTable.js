import { Input,Button } from 'antd';
import React,{ Component } from 'react';

const inputStyle = {
  margin:"auto",
  textAlign:"center",
  width:"40rem", 
  padding:"1rem",
}


class CreditorTable extends Component{
  constructor(props){
    super(props);
    this.state = {
        principalAmount:0,
        principalToken:'',
        collateralAmount:0,
        collateralToken:'',
        interestRate:0,
        termDuration:0,
        termUnit:'',
        debtorAddress:'',
        expiresInDuration:0,
        expiresInUnit:'',
        minFillAmount:0,  
    }
  }
  // 监听input变化的函数
  handleInputChange(str,e){
    this.setState({
      [str] : e.target.value,
    })
  }

  onCommitTable(){
    console.log(this.state)
  }

  render(){
    return (
      <div>
        <div style={inputStyle}>
          <Input addonBefore="principalAmount" type = "number" min = "1" onChange = {this.handleInputChange.bind(this,'principalAmount')} placeholder = "请输入想要借出"/>
        </div>
        <div style={inputStyle} >
          <Input list = "tokenType" addonBefore="principalToken" onChange = {this.handleInputChange.bind(this,'principalToken')} placeholder = "请输入想要借出的货币类型"/>
          <datalist id = "tokenType">
            <option value = "USTD"/>
            <option value = "Vena"/>
          </datalist>
        </div>
        <div style={inputStyle}>
          <Input addonBefore="collateralAmount" type = "number" min = "1" onChange = {this.handleInputChange.bind(this,'collateralAmount')} placeholder = "请输入抵押数量"/>
        </div>
        <div style={inputStyle}>
          <Input list = "collateralTokenType" addonBefore="collateralToken" onChange = {this.handleInputChange.bind(this,'collateralToken')} placeholder = "请输入抵押的token类型"/>
          <datalist id = "collateralTokenType">
            <option value = "WETH"/>
            <option value = "BTC"/>
          </datalist>
        </div>
        <div style={inputStyle}>
          <Input addonBefore="interestRate" type = "number" min = "0.0" step = "0.1" onChange = {this.handleInputChange.bind(this,"interestRate")} placeholder = "抵押率"/>
        </div>
        <div style={inputStyle}>
          <Input addonBefore="termDuration" type = "number" min = "1" onChange = {this.handleInputChange.bind(this,"termDuration")} placeholder = "抵押时间长度"/>
        </div>  
        <div style={inputStyle}>
          <Input list = "times" addonBefore="termUnit" onChange = {this.handleInputChange.bind(this,"termUnit")} placeholder = "抵押时间单位"/>
          <datalist id = "times" >
            <option value = "years"/>
            <option value = "months"/>
            <option value = "days"/>
            <option value = "hours"/>
          </datalist>
        </div> 
        <div style={inputStyle}>
          <Input addonBefore="debtorAddress" onChange = {this.handleInputChange.bind(this,"debtorAddress")} placeholder = "债务人地址"/>
        </div>
        <div style={inputStyle}>
          <Input addonBefore="expiresInDuration" type = "number" min = "1" onChange = {this.handleInputChange.bind(this,"expiresInDuration")} placeholder = "订单过期时间长度"/>
        </div>
        <div style={inputStyle}>
          <Input list = "times" addonBefore="expiresInUnit" onChange = {this.handleInputChange.bind(this,"expiresInUnit")} placeholder = "订单过期时间单位"/>
           <datalist id = "times" >
            <option value = "years"/>
            <option value = "months"/>
            <option value = "days"/>
            <option value = "hours"/>
          </datalist>   
        </div>
        <div style={inputStyle}>
          <Input addonBefore="minFillAmount" type = "number" min = "1" onChange = {this.handleInputChange.bind(this,"minFillAmount")} placeholder = "最小抵押数量"/>
        </div> 
        <Button type="primary" onClick={this.onCommitTable.bind(this)} style = {{display:"block",margin:"auto"}}>Commit The Table</Button>                                                                          
      </div>
    );
  }
}


export default CreditorTable;
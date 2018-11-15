import * as Web3 from 'web3';
import {ContractsAPI} from './contracts_api';
import {BigNumber} from 'bignumber.js';

export class WETH9API {
    private web3: Web3;
    private contracts: ContractsAPI;

    public constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
        // this.weth9Contract = this.contracts.loadWETH9ContractAsync(); error?
    }

    public async deposit(address: string, value: number) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.deposit.sendTransactionAsync({from: address, gas: 4710000, value: new BigNumber(value)});
    }

    public async withdraw(address: string, value: number) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.withdraw.sendTransactionAsync(new BigNumber(value), {from:address,gas:4710000});
    }

    public async approve(src_address:string,guy_address:string,wad:number) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.approve.sendTransactionAsync(guy_address,new BigNumber(wad),{from:src_address,gas:4710000});
    }

    public async transfer(src_address:string,des_address:string,wad:number){
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.transfer.sendTransactionAsync(des_address,new BigNumber(wad),{from:src_address,gas:4710000});
    }

    public async transferFrom(src_address:string,des_address:string,wad:number){
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.transferFrom.sendTransactionAsync(src_address,des_address,new BigNumber(wad),{gas:4710000});
    }

    public async totalSupply(){
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        return weth9Contract.totalSupply.callAsync();
    }

    public async balanceOf(address: string) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        return weth9Contract.balanceOf.callAsync(address);
    }

    public async allowance(src_address: string,des_address:string) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.allowance.callAsync(src_address,des_address);
    }

}

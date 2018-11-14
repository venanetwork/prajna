import * as Web3 from 'web3';
import {ContractsAPI} from './contracts_api';
import {BigNumber} from 'bignumber.js';

export class WETH9API {
    private web3: Web3;
    private contracts: ContractsAPI;

    public constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
    }

    public async deposit(address: string, value: number) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.deposit.sendTransactionAsync({from: address, gas: 4710000, value: new BigNumber(value)});
    }

    public async withdraw(address: string, value: number) {
        let weth9Contract = await this.contracts.loadWETH9ContractAsync();
        weth9Contract.withdraw.sendTransactionAsync(new BigNumber(value), {from:address,gas:4710000});
    }

    public async balanceOf(address: string) {

    }

    public async approve() {

    }

    public async allowance(address: string) {

    }
}

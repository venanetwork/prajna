/**
 * This file is auto-generated using abi-gen. Don't edit directly.
 * Templates can be found at https://github.com/0xProject/0x.js/tree/development/packages/abi-gen-templates.
 */
import {promisify} from '@0xproject/utils';
import {BigNumber} from 'bignumber.js';
import * as fs from "fs-extra";
import * as Web3 from 'web3';
import {WETH9 as ContractArtifactst} from 'prajna';
import {BaseContract} from './base_contract_wrapper';
import {classUtils} from '../../../utils/class_utils';
import {TxData, TxDataPayable} from '../../../src/types/';


export class WETH9Contract extends BaseContract {
    public name = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as WETH9Contract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.name.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public decimals = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as WETH9Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.decimals.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public balanceOf = {
        async callAsync(
            index_0: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as WETH9Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.balanceOf.call,
                self.web3ContractInstance,
            )(
                index_0,
            );
            return result;
        },
    };
    public symbol = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<string
    > {
            const self = this as WETH9Contract;
            const result = await promisify<string
    >(
                self.web3ContractInstance.symbol.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public allowance = {
        async callAsync(
            index_0: string,
            index_1: string,
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as WETH9Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.allowance.call,
                self.web3ContractInstance,
            )(
                index_0,
                index_1,
            );
            return result;
        },
    };
    public deposit = {
        async sendTransactionAsync(
            txData: TxDataPayable = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.deposit.estimateGasAsync.bind(
                    self,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.deposit, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            txData: TxData = {},
        ): Promise<number> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.deposit.estimateGas, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.deposit.getData, self.web3ContractInstance,
            )(
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public withdraw = {
        async sendTransactionAsync(
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.withdraw.estimateGasAsync.bind(
                    self,
                    wad,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.withdraw, self.web3ContractInstance,
            )(
                wad,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.withdraw.estimateGas, self.web3ContractInstance,
            )(
                wad,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.withdraw.getData, self.web3ContractInstance,
            )(
                wad,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public totalSupply = {
        async callAsync(
            defaultBlock?: Web3.BlockParam,
        ): Promise<BigNumber
    > {
            const self = this as WETH9Contract;
            const result = await promisify<BigNumber
    >(
                self.web3ContractInstance.totalSupply.call,
                self.web3ContractInstance,
            )(
            );
            return result;
        },
    };
    public approve = {
        async sendTransactionAsync(
            guy: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.approve.estimateGasAsync.bind(
                    self,
                    guy,
                    wad,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.approve, self.web3ContractInstance,
            )(
                guy,
                wad,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            guy: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance,
            )(
                guy,
                wad,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            guy: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.approve.getData, self.web3ContractInstance,
            )(
                guy,
                wad,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public transfer = {
        async sendTransactionAsync(
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transfer.estimateGasAsync.bind(
                    self,
                    dst,
                    wad,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transfer, self.web3ContractInstance,
            )(
                dst,
                wad,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance,
            )(
                dst,
                wad,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.transfer.getData, self.web3ContractInstance,
            )(
                dst,
                wad,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };
    public transferFrom = {
        async sendTransactionAsync(
            src: string,
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
                self.transferFrom.estimateGasAsync.bind(
                    self,
                    src,
                    dst,
                    wad,
                ),
            );
            const txHash = await promisify<string>(
                self.web3ContractInstance.transferFrom, self.web3ContractInstance,
            )(
                src,
                dst,
                wad,
                txDataWithDefaults,
            );
            return txHash;
        },
        async estimateGasAsync(
            src: string,
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<number> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const gas = await promisify<number>(
                self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance,
            )(
                src,
                dst,
                wad,
                txDataWithDefaults,
            );
            return gas;
        },
        async getABIEncodedTransactionData(
            src: string,
            dst: string,
            wad: BigNumber,
            txData: TxData = {},
        ): Promise<string> {
            const self = this as WETH9Contract;
            const txDataWithDefaults = await self.applyDefaultsToTxDataAsync(
                txData,
            );
            const abiEncodedTransactionData = await promisify<string>(
                self.web3ContractInstance.transferFrom.getData, self.web3ContractInstance,
            )(
                src,
                dst,
                wad,
                txDataWithDefaults,
            );
            return abiEncodedTransactionData;
        },
    };

    static async deployed(web3: Web3, defaults: Partial<TxData>): Promise<WETH9Contract> {
        const currentNetwork = web3.version.network;
        const { abi, networks } = await ContractArtifactst;
        const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);

        return new WETH9Contract(web3ContractInstance, defaults);
    }
    static async at(address: string, web3: Web3, defaults: Partial<TxData>): Promise<WETH9Contract> {
        const { abi } = await this.getArtifactsData(web3);
        const web3ContractInstance = web3.eth.contract(abi).at(address);

        return new WETH9Contract(web3ContractInstance, defaults);
    }

    constructor(web3ContractInstance: Web3.ContractInstance, defaults: Partial<TxData>) {
        super(web3ContractInstance, defaults);
        classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count

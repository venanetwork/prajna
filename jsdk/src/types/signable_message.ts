import * as Web3 from "web3";
import * as promisify from "tiny-promisify";

import ethUtil = require("ethereumjs-util");
import {Address, Bytes32} from '../../../types/common';

export interface ECDSASignature {
    r: string;
    s: string;
    v: number;
}

export abstract class SignableMessage {
    public abstract getHash(): Bytes32;

    // need change web3 version to 0.20.6 to solve cross origin,
    // related to issue: https://github.com/ethereum/web3.js/issues/1802
    protected async getSignature(
        web3: Web3,
        signer: Address,
        hash?: Bytes32,
    ): Promise<ECDSASignature> {
        const signature = await promisify(web3.eth.sign)(signer, hash || this.getHash());
        const { v, r, s } = ethUtil.fromRpcSig(signature);
        return {
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
            v,
        };
    }
}

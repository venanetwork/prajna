import * as Web3 from 'web3';
import {ContractsAPI} from './contracts_api';
import {CreditorOffer, CreditorOfferParams, SignedCreditorOfferParams} from '../debt/offer';
import {BigNumber} from 'bignumber.js';
import {ECDSASignature} from '../types/signable_message';
import {Address} from '../types/common';
import {Bytes32} from '../../../types/common';
import {NULL_ADDRESS, NULL_BYTES32} from '../../utils/constants';
import * as promisify from "tiny-promisify";
import {TimeInterval} from '../types/time_interval';
import {wapperTermsContractParameters} from "../adapters/simple_interest_terms_contract_adpter";

export class OfferAPI {
    private web3: Web3;
    private contracts: ContractsAPI;

    public constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
    }

    // TODO: currently a p2p parma setting, relayer and underwritter fee is set to 0,
    public async createCreditorOffer(params: CreditorOfferParams): Promise<SignedCreditorOfferParams> {
        const {
            principalAmount,  
            principalToken,
            collateralAmount,
            collateralToken,
            interestRate,    
            termDuration,      
            termUnit,        
            creditorAddress,
            expiresInDuration, 
            expiresInUnit,    
            minPrincipleAmount,
            relayerAddress,
            relayerFeeAmount,
            creditorFeeAmount,
        } = params;

        let kernelVersion = await this.contracts.loadDebtKernelAsync();
        let rp = await this.contracts.loadRepaymentRouterAsync();
        let tc = NULL_ADDRESS;
        let pt = await this.contracts.getTokenAddressBySymbolAsync(principalToken);
        const expiresIn = new TimeInterval(expiresInDuration, expiresInUnit);
        let lastBlock = await promisify(this.web3.eth.getBlock)("latest");
        const expirationTimestampInSec = expiresIn.fromTimestamp(new BigNumber(lastBlock.timestamp));

        /*
           use packParameters to wrap termsContractParameters
           @params{
                principalTokenIndex,
                pricipalAmount,
                interestRate,
                amortizationUint, // equal to termUnit
                termLength,
           }
        */
        let principalTokenIndex = await this.contracts.getTokenIndexBySymbolAsync(principalToken);
        let termLengthExpire = new TimeInterval(termDuration,termUnit);
        let termLength = termLengthExpire.fromTimestamp(new BigNumber(lastBlock.timestamp));
        let amortizationUnit = termUnit;

        const packedParms = {
            principalTokenIndex,
            principalAmount,
            interestRate,
            amortizationUnit,
            termLength,
        }

        let wapperTermsContractParameter = new wapperTermsContractParameters(this.web3,this.contracts);;
        let termsContractParametersByte = wapperTermsContractParameter.packParameters(packedParms);


        let signedCreditorOfferparams = {
            kernelVersion:  kernelVersion.address,
            creditor: creditorAddress,
            repaymentRouterVersion: rp.address,
            underwriter: NULL_ADDRESS,
            termsContract: tc,
            principalToken: pt,  
            relayer: NULL_ADDRESS,
            underwriterRiskRating: new BigNumber(0),
            salt: new BigNumber(Math.random().toString().substring(2)),
            principalAmount: new BigNumber(principalAmount),
            underwriterFee: new BigNumber(0),
            relayerFee: new BigNumber(0),
            creditorFee: new BigNumber(0),
            debtorFee: new BigNumber(0),
            expirationTimestampInSec: new BigNumber(expirationTimestampInSec),
            termsContractParameters: termsContractParametersByte,
            minPrincipalAmount: new BigNumber(minPrincipleAmount),
        };

        return signedCreditorOfferparams;
    }

    public async signCreditorOffer(params: SignedCreditorOfferParams): Promise<SignedCreditorOfferParams> {
        let creditorOffer = new CreditorOffer(params);
        return creditorOffer.getSignedCreditorOffer(this.web3);
    }

    public async fillCreditorOfferAsDebtor(debtor: string, fillAmount: BigNumber,
        signedCreditorOffer: SignedCreditorOfferParams) {

        let orderAddresses = [
            signedCreditorOffer.repaymentRouterVersion,
            signedCreditorOffer.creditor,
            signedCreditorOffer.underwriter,
            signedCreditorOffer.termsContract,
            signedCreditorOffer.principalToken,
            signedCreditorOffer.relayer,
        ];

        let orderValue = [
            signedCreditorOffer.underwriterRiskRating,
            signedCreditorOffer.salt,
            signedCreditorOffer.principalAmount,
            signedCreditorOffer.underwriterFee,
            signedCreditorOffer.relayerFee,
            signedCreditorOffer.creditorFee,
            signedCreditorOffer.debtorFee,
            signedCreditorOffer.expirationTimestampInSec,
            signedCreditorOffer.minPrincipalAmount,
        ];

        const fillSalt = new BigNumber(
            Math.random()
                .toString()
                .substring(2),
        );

        let creditorProxy = await this.contracts.loadCreditorProxyAsync();
        const receipt = await creditorProxy.fillAsDebtor.sendTransactionAsync(
            debtor,
            orderAddresses,
            orderValue,
            [signedCreditorOffer.termsContractParameters],
            fillAmount,
            fillSalt,
            [signedCreditorOffer.creditorSignature.v],
            [signedCreditorOffer.creditorSignature.r],
            [signedCreditorOffer.creditorSignature.s],
            {from: debtor, gas: 4710000},
        );
        console.log(receipt)
        return receipt;
    }
}

/*
	提供一个合约字段封装接口
	added by jacky-18.11.16
*/
import * as Web3 from 'web3';
import * as singleLineString from "single-line-string";
import {ContractsAPI} from '../apis/contracts_api';
import {BigNumber} from 'bignumber.js';
import {Address} from '../types/common';
import {Bytes32} from '../../../types/common';
import {NULL_ADDRESS, NULL_BYTES32} from '../../utils/constants';
import * as promisify from "tiny-promisify";
import {TimeInterval} from '../types/time_interval';

const AmortizationUnitCodes = ["hours", "days", "weeks", "months", "years"];

enum AmortizationUnitCode {
    HOURS,
    DAYS,
    WEEKS,
    MONTHS,
    YEARS,
}

export type AmortizationUnit = "hours" | "days" | "weeks" | "months" | "years";

const MAX_PRINCIPAL_TOKEN_INDEX_HEX = "0xff";
const MAX_PRINCIPAL_AMOUNT_HEX = "0xffffffffffffffffffffffff";
const MAX_TERM_LENGTH_VALUE_HEX = "0xffff";

const MAX_INTEREST_RATE_PRECISION = 4;
const FIXED_POINT_SCALING_FACTOR = 10 ** MAX_INTEREST_RATE_PRECISION;
const MAX_INTEREST_RATE = 2 ** 24 / FIXED_POINT_SCALING_FACTOR;

const SimpleInterestAdapterErrors = {
    INVALID_TOKEN_INDEX: (tokenIndex: BigNumber) =>
        singleLineString`Token Registry does not track a token at index
                         ${tokenIndex.toString()}.`,
    INVALID_PRINCIPAL_AMOUNT: () =>
        singleLineString`Principal amount must be a whole number greater than 0
                         and less than 2^96 - 1.`,
    INVALID_INTEREST_RATE: () =>
        singleLineString`Interest amount cannot be negative,
                         greater than 1677.7216, or have more than
                         ${MAX_INTEREST_RATE_PRECISION} decimal places.`,
    INVALID_AMORTIZATION_UNIT_TYPE: (amortizationUnitType:string) =>
        singleLineString`Amortization unit must be of type HOURS, DAYS,
                         WEEKS, MONTHS, or YEARS.But now its = ${amortizationUnitType}`,
    INVALID_TERM_LENGTH: () =>
        singleLineString`Term length value cannot be negative or greater
                         than ${parseInt(MAX_TERM_LENGTH_VALUE_HEX, 16)}`,

    MISMATCHED_TOKEN_SYMBOL: (principalTokenIndex: BigNumber, symbol: string) =>
        singleLineString`Terms contract parameters are invalid for the given debt order.
                         Principal token at index ${principalTokenIndex.toString()}, specified
                         in the terms contract, does not correspond to specified token
                         with symbol ${symbol}`,

    MISMATCHED_TERMS_CONTRACT: (termsContract: string) =>
        singleLineString`Terms contract at address ${termsContract} is not
                         a SimpleInterestTermsContract.  As such, this adapter will not
                         interface with the terms contract as expected`,
};

interface SimpleInterestTermsContractParms {
    principalAmount: BigNumber;
    interestRate: BigNumber;
    amortizationUnit: AmortizationUnit;
    termLength: BigNumber;
    principalTokenIndex: BigNumber;
}

export class wapperTermsContractParameters{
    private web3: Web3;
    private contracts: ContractsAPI;

    constructor(web3: Web3, contracts: ContractsAPI) {
        this.web3 = web3;
        this.contracts = contracts;
    }

    public packParameters(termsContractParameter:SimpleInterestTermsContractParms):string{
         const {
            principalTokenIndex,
            principalAmount,
            interestRate,
            amortizationUnit,
            termLength,
        } = termsContractParameter;

        this.assertPrincipalTokenIndexWithinBounds(principalTokenIndex);
        this.assertPrincipalAmountWithinBounds(principalAmount);
        this.assertInterestRateValid(interestRate);
        this.assertValidAmortizationUnit(amortizationUnit);
        this.assertTermLengthWholeAndWithinBounds(termLength);

        const interestRateFixedPoint = interestRate.mul(FIXED_POINT_SCALING_FACTOR);

        const principalTokenIndexHex = principalTokenIndex.toString(16);
        const principalAmountHex = principalAmount.toString(16);
        const interestRateFixedPointHex = interestRateFixedPoint.toString(16);
        const amortizationUnitTypeHex = AmortizationUnitCode[
            amortizationUnit.toUpperCase()
        ].toString(16);
        const termLengthHex = termLength.toString(16);

        return (
            "0x" +
            principalTokenIndexHex.padStart(2, "0") +
            principalAmountHex.padStart(24, "0") +
            interestRateFixedPointHex.padStart(6, "0") +
            amortizationUnitTypeHex.padStart(1, "0") +
            termLengthHex.padStart(4, "0") +
            "0".repeat(27)
        );   	
    }

     public assertPrincipalTokenIndexWithinBounds(principalTokenIndex: BigNumber) {
        if (principalTokenIndex.lt(0) || principalTokenIndex.gt(MAX_PRINCIPAL_TOKEN_INDEX_HEX)) {
            throw new Error(SimpleInterestAdapterErrors.INVALID_TOKEN_INDEX(principalTokenIndex));
        }
    }

    public assertPrincipalAmountWithinBounds(principalAmount: BigNumber) {
        if (principalAmount.lt(0) || principalAmount.gt(MAX_PRINCIPAL_AMOUNT_HEX)) {
            throw new Error(SimpleInterestAdapterErrors.INVALID_PRINCIPAL_AMOUNT());
        }
    }

    public assertInterestRateValid(interestRate: BigNumber) {
        const [, rightOfDecimal] = interestRate.toString().split(".");

        const numDecimals = typeof rightOfDecimal !== "undefined" ? rightOfDecimal.length : 0;

        if (
            interestRate.lt(0) ||
            interestRate.gt(MAX_INTEREST_RATE) ||
            numDecimals > MAX_INTEREST_RATE_PRECISION
        ) {
            throw new Error(SimpleInterestAdapterErrors.INVALID_INTEREST_RATE());
        }
    }

    public assertValidAmortizationUnit(amortizationUnitType: AmortizationUnit) {
        if (!AmortizationUnitCodes.includes(amortizationUnitType)) {

            throw new Error(SimpleInterestAdapterErrors.INVALID_AMORTIZATION_UNIT_TYPE(amortizationUnitType));
        }
    }

    public assertTermLengthWholeAndWithinBounds(termLengthInAmortizationUnits: BigNumber) {
        if (
            termLengthInAmortizationUnits.lt(0) ||
            termLengthInAmortizationUnits.gt(MAX_TERM_LENGTH_VALUE_HEX)
        ) {
            throw new Error(SimpleInterestAdapterErrors.INVALID_TERM_LENGTH());
        } 
    }
}
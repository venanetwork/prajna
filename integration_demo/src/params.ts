export type DurationUnit =
    | "hour"
    | "hours"
    | "day"
    | "days"
    | "week"
    | "weeks"
    | "month"
    | "months"
    | "year"
    | "years";


export interface FormParams {
    principalAmount: number;
    principalToken: string;
    collateralAmount: number;
    collateralToken: string;
    interestRate: number;
    termDuration: number;
    termUnit: DurationUnit;
    debtorAddress: string;
    expiresInDuration: number;
    expiresInUnit: DurationUnit; // min fill amount of a debt
    minFillAmount: number;
    relayerAddress?: string; // null for now
    relayerFeeAmount?: number; // null for now
    creditorFeeAmount?: number;
}

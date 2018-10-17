import { BaseContract } from "../base_contract";
import { CollateralizedSimpleInterestTermsContractContract } from "../generated/collateralized_simple_interest_terms_contract";
import { CollateralizerContract } from "../generated/collateralizer";
import { ContractRegistryContract } from "../generated/contract_registry";
import { DebtKernelContract } from "../generated/debt_kernel";
import { DebtRegistryContract } from "../generated/debt_registry";
import { DebtTokenContract } from "../generated/debt_token";
import { DummyTokenContract } from "../generated/dummy_token";
import { ERC20Contract } from "../generated/erc20";
import { RepaymentRouterContract } from "../generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../generated/simple_interest_terms_contract";
import { TermsContractContract } from "../generated/terms_contract";
import { TokenRegistryContract } from "../generated/token_registry";
import { TokenTransferProxyContract } from "../generated/token_transfer_proxy";

export type ContractWrapper =
    | DebtKernelContract
    | DebtRegistryContract
    | DebtTokenContract
    | TokenTransferProxyContract
    | ERC20Contract
    | RepaymentRouterContract
    | SimpleInterestTermsContractContract
    | CollateralizedSimpleInterestTermsContractContract
    | TermsContractContract
    | TokenRegistryContract
    | CollateralizerContract
    | ContractRegistryContract;

export {
    BaseContract,
    DebtKernelContract,
    DebtRegistryContract,
    DebtTokenContract,
    DummyTokenContract,
    TokenRegistryContract,
    TokenTransferProxyContract,
    ERC20Contract,
    TermsContractContract,
    SimpleInterestTermsContractContract,
    CollateralizedSimpleInterestTermsContractContract,
    RepaymentRouterContract,
    CollateralizerContract,
    ContractRegistryContract,
};

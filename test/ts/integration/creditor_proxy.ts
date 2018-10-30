// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";

// Test Utils
import * as Units from "../test_utils/units";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";
import ChaiSetup from "../test_utils/chai_setup";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import { Web3Utils } from "../../../utils/web3_utils";

// Types
import { SignedDebtOffer } from "../../../types/proxy/debt_offer";

// Logs
import { LogApproval, LogTransfer } from "../logs/debt_token";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";
import { LogDebtOrderFilled } from "../logs/debt_kernel";
import { LogDebtOfferFilled, LogError } from "../logs/creditor_proxy";

// Factories
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";

// Wrappers
import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { CreditorProxyErrorCodes } from "../../../types/errors";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

// Constants
import { REVERT_ERROR } from "../test_utils/constants";
import {CreditorOffer, SignedCreditorOffer} from '../../../types/proxy/creditor_offer';
import {CreditorOfferParams} from '../../../types/proxy/schema';

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const creditorProxyArtifacts = artifacts.require("CreditorProxy");
const debtTokenArtifacts = artifacts.require("DebtToken");
const debtKernelArtifacts = artifacts.require("DebtKernel");

contract("Creditor Proxy (Integration Tests)", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;
    let contractRegistry: ContractRegistryContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let defaultOfferParams: CreditorOfferParams;
    let defaultFillAmout: BigNumber = Units.ether(0.4);

    let multiSig: DharmaMultiSigWalletContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const DEBTOR_1 = ACCOUNTS[2];
    const CREDITOR_1 = ACCOUNTS[3];
    const CREDITOR_2 = ACCOUNTS[5];
    const UNDERWRITER = ACCOUNTS[4];
    const RELAYER = ACCOUNTS[6];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[7];
    const ALTERNATIVE_TOKEN_ADDRESS = ACCOUNTS[8];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        creditorProxy = await CreditorProxyContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: new BigNumber(0), // Our migrations set REP up to be at index 0 of the registry
            principalAmount: Units.ether(1), // principal of 1 ether
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5), // interest rate of 2.5%
            amortizationUnitType: new BigNumber(1), // The amortization unit type (weekly)
            termLengthUnits: new BigNumber(4), // Term length in amortization units.
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOfferParams = {
            kernelVersion: kernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            underwriter: UNDERWRITER,
            termsContract: simpleInterestTermsContract.address,
            principalToken: dummyREPToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
            principalAmount: Units.ether(1),
            underwriterFee: Units.ether(0.0015),
            relayerFee: Units.ether(0.0015),
            creditorFee: Units.ether(0.002),
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            termsContractParameters,
            minPrincipalAmount: Units.ether(0.2),
            salt: new BigNumber(
                Math.random()
                    .toString()
                    .substring(2),
            ),
        };

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyArtifacts.abi);
        ABIDecoder.addABI(debtTokenArtifacts.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtKernelArtifacts.abi);

        var events = creditorProxy.web3ContractInstance.allEvents();
        events.watch((error: any, event: any) => {
            if (!error) {
                console.log(event);
                for (var k in event.args) {
                    console.log("args key: ", k, "value: ", event["args"][k].toString());
                }
            } else {
                console.log("err key", error.toString());
            }
        });
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(creditorProxyArtifacts.abi);
    });

    describe("Initialization & Upgrades", async () => {
        it("points to correct contract registry", async () => {
            expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });

    describe("#fill as debtor", () => {
        let creditorOffer: CreditorOffer;
        let signedCreditorOffer: SignedCreditorOffer;

        const testShouldReturnError = async (
            signedOffer: SignedCreditorOffer,
            errorCode: number,
            signaturesV?: number[],
            signaturesR?: string[],
            signaturesS?: string[],
        ) => {
            const txHash = await creditorProxy.fillAsDebtor.sendTransactionAsync(
                signedCreditorOffer.getDebtor(),
                signedCreditorOffer.getOrderAddresses(),
                signedCreditorOffer.getOrderValues(),
                signedCreditorOffer.getOrderBytes32(),
                signedCreditorOffer.getFillAmount(),
                signedCreditorOffer.getFillSalt(),
                signaturesV || signedCreditorOffer.getSignaturesV(),
                signaturesR || signedCreditorOffer.getSignaturesR(),
                signaturesS || signedCreditorOffer.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(
                    creditorProxy.address,
                    errorCode,
                    signedCreditorOffer.getCreditor(),
                    signedCreditorOffer.getCreditorCommitmentHash(),
                ),
            );
        };

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token = await DummyTokenContract.at(
                signedCreditorOffer.getPrincipalToken(),
                web3,
                TX_DEFAULTS,
            );

            const debtor = signedCreditorOffer.getDebtor();
            const creditor = signedCreditorOffer.getCreditor();

            const debtorBalanceAndAllowance = new BigNumber(0);
            const creditorBalanceAndAllowance = signedCreditorOffer
                .getFillAmount()
                .plus(signedCreditorOffer.getCreditorFee());

            await token.setBalance.sendTransactionAsync(debtor, debtorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                debtorBalanceAndAllowance,
                {
                    from: debtor,
                },
            );

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                creditorBalanceAndAllowance,
                { from: creditor },
            );

            return [debtorBalanceAndAllowance, creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(signedCreditorOffer.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(
                signedCreditorOffer.getCreditor(),
            );
            const underwriterBalance = await principalToken.balanceOf.callAsync(
                signedCreditorOffer.getUnderwriter(),
            );
            const relayerBalance = await principalToken.balanceOf.callAsync(signedCreditorOffer.getRelayer());
            const creditorProxyBalance = await principalToken.balanceOf.callAsync(
                creditorProxy.address,
            );

            return [
                debtorBalance,
                creditorBalance,
                underwriterBalance,
                relayerBalance,
                creditorProxyBalance,
            ];
        };

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let principalToken: DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;
                let creditorProxyBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;
                let block: Web3.BlockWithoutTransactionData;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupDebtOffer();
                    await setupBalancesAndAllowances();

                    principalToken = await DummyTokenContract.at(
                        signedCreditorOffer.getPrincipalToken(),
                        web3,
                        TX_DEFAULTS,
                    );

                    [
                        debtorBalanceBefore,
                        creditorBalanceBefore,
                        underwriterBalanceBefore,
                        relayerBalanceBefore,
                        creditorProxyBalanceBefore,
                    ] = await getAgentBalances(principalToken);

                    console.log(signedCreditorOffer.getDebtor(),
                        signedCreditorOffer.getOrderAddresses(),
                        signedCreditorOffer.getOrderValues().map(x => x.toString(16)),
                        signedCreditorOffer.getOrderBytes32(),
                        signedCreditorOffer.getFillAmount(),
                        signedCreditorOffer.getFillSalt(),
                        signedCreditorOffer.getSignaturesV(),
                        signedCreditorOffer.getSignaturesR(),
                        signedCreditorOffer.getSignaturesS())

                    const txHash = await creditorProxy.fillAsDebtor.sendTransactionAsync(
                        signedCreditorOffer.getDebtor(),
                        signedCreditorOffer.getOrderAddresses(),
                        signedCreditorOffer.getOrderValues(),
                        signedCreditorOffer.getOrderBytes32(),
                        signedCreditorOffer.getFillAmount(),
                        signedCreditorOffer.getFillSalt(),
                        signedCreditorOffer.getSignaturesV(),
                        signedCreditorOffer.getSignaturesR(),
                        signedCreditorOffer.getSignaturesS(),
                        { from: filler, gas: 4710000 },
                    );

                    receipt = await web3.eth.getTransactionReceipt(txHash);
                    block = await web3.eth.getBlock(receipt.blockNumber);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should deduct principal + creditor fee from creditor account", async () => {
                    const balance = await principalToken.balanceOf.callAsync(
                        signedCreditorOffer.getCreditor(),
                    );
                    const expectedBalance = creditorBalanceBefore.minus(
                        signedCreditorOffer.getFillAmount().plus(signedCreditorOffer.getCreditorFee()),
                    );
                    expect(balance.toString()).to.equal(expectedBalance.toString());
                });

                it("should transfer newly minted debt token to creditor", async () => {
                    await expect(
                        debtTokenContract.ownerOf.callAsync(
                            new BigNumber(signedCreditorOffer.getAgreementId()),
                        ),
                    ).to.eventually.equal(signedCreditorOffer.getCreditor());
                });

                it("should not change the creditor proxy balance", async () => {
                    const balance = await principalToken.balanceOf.callAsync(creditorProxy.address);
                    expect(balance.toString()).to.equal(creditorProxyBalanceBefore.toString());
                });

                describe("Logs Emitted:", () => {
                    it("should emit approval log allowing transfer proxy to tranfer by creditor proxy", async () => {
                        if (
                            signedCreditorOffer
                                .getFillAmount()
                                .plus(signedCreditorOffer.getCreditorFee())
                                .gt(0)
                        ) {
                            await expect(logs.shift()).to.deep.equal(
                                LogApproval(
                                    signedCreditorOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    tokenTransferProxy.address,
                                    signedCreditorOffer.getFillAmount().plus(signedCreditorOffer.getCreditorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor to creditor proxy", async () => {
                        if (
                            signedCreditorOffer
                                .getFillAmount()
                                .plus(signedCreditorOffer.getCreditorFee())
                                .gt(0)
                        ) {
                            expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    signedCreditorOffer.getPrincipalToken(),
                                    signedCreditorOffer.getCreditor(),
                                    creditorProxy.address,
                                    signedCreditorOffer.getFillAmount().plus(signedCreditorOffer.getCreditorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit registry insert log", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogInsertEntry(
                                debtRegistryContract.address,
                                new DebtRegistryEntry(
                                    {
                                        beneficiary: creditorProxy.address,
                                        debtor: signedCreditorOffer.getDebtor(),
                                        termsContract: signedCreditorOffer.getTermsContract(),
                                        termsContractParameters: signedCreditorOffer.getTermsContractParameters(),
                                        underwriter: signedCreditorOffer.getUnderwriter(),
                                        underwriterRiskRating: signedCreditorOffer.getUnderwriterRiskRating(),
                                        version: signedCreditorOffer.getRepaymentRouterVersion(),
                                    },
                                    signedCreditorOffer.getFillSalt(),
                                ),
                            ),
                        );
                    });

                    it("should emit debt token transfer log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogTransfer(
                                debtTokenContract.address,
                                NULL_ADDRESS,
                                creditorProxy.address,
                                new BigNumber(signedCreditorOffer.getAgreementId()),
                            ),
                        );
                    });

                    it("should emit transfer log from creditor proxy to debtor (if principal - debtor fee > 0)", async () => {
                        if (
                            signedCreditorOffer
                                .getFillAmount()
                                .minus(signedCreditorOffer.getDebtorFee())
                                .gt(0)
                        ) {
                            expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    signedCreditorOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    signedCreditorOffer.getDebtor(),
                                    signedCreditorOffer.getFillAmount().minus(signedCreditorOffer.getDebtorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor proxy to underwriter (if present)", async () => {
                        if (signedCreditorOffer.getUnderwriter() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    signedCreditorOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    signedCreditorOffer.getUnderwriter(),
                                    signedCreditorOffer.getUnderwriterFee(),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor proxy to relayer (if present)", async () => {
                        if (signedCreditorOffer.getRelayer() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    signedCreditorOffer.getPrincipalToken(),
                                    creditorProxy.address,
                                    signedCreditorOffer.getRelayer(),
                                    signedCreditorOffer.getRelayerFee(),
                                ),
                            );
                        }
                    });

                    it("should emit debt order filled log", () => {
                        console.log(logs.shift());
                        // expect(logs.shift()).to.deep.equal(
                        //     LogDebtOrderFilled(
                        //         kernel.address,
                        //         debtOffer.getAgreementId(),
                        //         debtOffer.getPrincipalAmount(),
                        //         debtOffer.getPrincipalToken(),
                        //         debtOffer.getUnderwriter(),
                        //         debtOffer.getUnderwriterFee(),
                        //         debtOffer.getRelayer(),
                        //         debtOffer.getRelayerFee(),
                        //     ),
                        // );
                    });

                    it("should emit modify benefeciary log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogModifyEntryBeneficiary(
                                debtRegistryContract.address,
                                signedCreditorOffer.getAgreementId(),
                                creditorProxy.address,
                                signedCreditorOffer.getCreditor(),
                            ),
                        );
                    });

                    it("should emit transfer log from creditor proxy to creditor", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogTransfer(
                                debtTokenContract.address,
                                creditorProxy.address,
                                signedCreditorOffer.getCreditor(),
                                new BigNumber(signedCreditorOffer.getAgreementId()),
                            ),
                        );
                    });

                    it("should emit debt offer filled log", async () => {
                        expect(logs.shift()).to.deep.equal(
                            LogDebtOfferFilled(
                                creditorProxy.address,
                                signedCreditorOffer.getCreditor(),
                                signedCreditorOffer.getCreditorCommitmentHash(),
                                signedCreditorOffer
                                    .getPrincipalAmount()
                                    .minus(signedCreditorOffer.getFillAmount()),
                            ),
                        );
                    });
                });
            };
        };

        before(reset);

        describe("User fills valid, consentual debt offer", () => {

            describe(
                "...with underwriter and relayer",
                testOfferFill(CONTRACT_OWNER, async () => {
                    creditorOffer = new CreditorOffer(defaultOfferParams);
                    signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
                }),
            );

            // describe(
            //     "...with no principal and no creditor / debtor fees",
            //     testOfferFill(CONTRACT_OWNER, async () => {
            //         const params = _.clone(defaultOfferParams);
            //         Object.assign(params, {
            //             creditorFee: new BigNumber(0),
            //             debtorFee: new BigNumber(0),
            //             principalAmount: new BigNumber(0),
            //             relayer: NULL_ADDRESS,
            //             relayerFee: new BigNumber(0),
            //             underwriter: NULL_ADDRESS,
            //             underwriterFee: new BigNumber(0),
            //             underwriterRiskRating: new BigNumber(0),
            //             minPrincipalAmount: new BigNumber(0),
            //         });
            //
            //         creditorOffer = new CreditorOffer(params);
            //         signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, new BigNumber(0));
            //     }),
            // );
            //
            // describe(
            //     "...with no principal and nonzero creditor fee",
            //     testOfferFill(CONTRACT_OWNER, async () => {
            //         const params = _.clone(defaultOfferParams);
            //         Object.assign(params, {
            //             creditorFee: Units.ether(0.002),
            //             debtorFee: new BigNumber(0),
            //             principalAmount: new BigNumber(0),
            //             relayer: NULL_ADDRESS,
            //             relayerFee: new BigNumber(0),
            //             underwriter: UNDERWRITER,
            //             underwriterFee: Units.ether(0.002),
            //             minPrincipalAmount: new BigNumber(0),
            //         });
            //
            //         creditorOffer = new CreditorOffer(params);
            //         signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, new BigNumber(0));
            //     }),
            // );
            //
            // describe(
            //     "...when creditor and debtor are same address",
            //     testOfferFill(CONTRACT_OWNER, async () => {
            //         const params = _.clone(defaultOfferParams);
            //         Object.assign(params, {
            //             creditorFee: Units.ether(0.002),
            //             debtorFee: new BigNumber(0),
            //             principalAmount: new BigNumber(0),
            //             relayer: NULL_ADDRESS,
            //             relayerFee: new BigNumber(0),
            //             underwriter: UNDERWRITER,
            //             underwriterFee: Units.ether(0.002),
            //             minPrincipalAmount: new BigNumber(0),
            //         });
            //
            //         creditorOffer = new CreditorOffer(params);
            //         signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, CREDITOR_1, new BigNumber(0));
            //     }),
            // );
        });

        // describe("User fills valid for multiple times, consentual debt offer", () => {
        //     describe(
        //         "...with underwriter and relayer first time",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //         }),
        //     );
        //     describe(
        //         "...with underwriter and relayer second times",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //         }),
        //     );
        //     describe(
        //         "...with underwriter and relayer third times",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //         }),
        //     );
        // });

        // describe("User fills invalid debt order", () => {
        //     describe("...when creditor has not granted the transfer proxy sufficient allowance", () => {
        //         before(async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //
        //             const token = await DummyTokenContract.at(
        //                 signedCreditorOffer.getPrincipalToken(),
        //                 web3,
        //                 TX_DEFAULTS,
        //             );
        //             await token.approve.sendTransactionAsync(
        //                 tokenTransferProxy.address,
        //                 signedCreditorOffer.getFillAmount().plus(signedCreditorOffer.getCreditorFee().minus(1)),
        //                 { from: signedCreditorOffer.getCreditor() },
        //             );
        //         });
        //
        //         it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
        //             await testShouldReturnError(
        //                 signedCreditorOffer,
        //                 CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        //             );
        //         });
        //     });
        //
        //     describe("...when creditor does not have sufficient balance", () => {
        //         before(async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //
        //             const token = await DummyTokenContract.at(
        //                 signedCreditorOffer.getPrincipalToken(),
        //                 web3,
        //                 TX_DEFAULTS,
        //             );
        //             await token.setBalance.sendTransactionAsync(
        //                 signedCreditorOffer.getCreditor(),
        //                 signedCreditorOffer.getPrincipalAmount().plus(signedCreditorOffer.getCreditorFee().minus(1)),
        //                 { from: CONTRACT_OWNER },
        //             );
        //         });
        //
        //         it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
        //             await testShouldReturnError(
        //                 signedCreditorOffer,
        //                 CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        //             );
        //         });
        //     });
        //
        //     describe("...when debt offer remain is not enough", () => {});
        //
        //     describe("...when debt offer has been cancelled", () => {});
        //
        //     describe("...when debt kernel returns NULL_ISSUANCE_HASH", () => {});
        // });

        // describe("User fills nonconsensual debt offer", () => {
        //     let mismatchedOffer: SignedDebtOffer;
        //     before(async () => {
        //         creditorOffer = new CreditorOffer(defaultOfferParams);
        //         signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(
        //             web3,
        //             DEBTOR_1,
        //             defaultFillAmout,
        //         );
        //         await setupBalancesAndAllowances();
        //     });
        //
        //     describe("...when submitted by creditor *without* creditor signature attached", () => {
        //
        //         it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
        //             await testShouldReturnError(
        //                 signedCreditorOffer,
        //                 CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
        //                 [
        //                     signedCreditorOffer.getSignaturesV()[0],
        //                     null,
        //                     signedCreditorOffer.getSignaturesV()[2],
        //                 ],
        //                 [
        //                     signedCreditorOffer.getSignaturesR()[0],
        //                     null,
        //                     signedCreditorOffer.getSignaturesR()[2],
        //                 ],
        //                 [
        //                     signedCreditorOffer.getSignaturesS()[0],
        //                     null,
        //                     signedCreditorOffer.getSignaturesS()[2],
        //                 ],
        //             );
        //         });
        //     });
        //
        // });
    });
});

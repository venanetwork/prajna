import { BigNumber } from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import { LogDebtOfferCancelled, LogDebtOfferFilled, LogError } from "../logs/creditor_proxy";

import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { MockDebtKernelContract } from "../../../types/generated/mock_debt_kernel";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

import { CreditorProxyErrorCodes } from "../../../types/errors";
import { CreditorOffer, SignedCreditorOffer } from "../../../types/proxy/creditor_offer";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import { Web3Utils } from "../../../utils/web3_utils";
import { CreditorOfferParams } from "../../../types/proxy/schema";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up Web3 utils
const web3Utils = new Web3Utils(web3);

const contractRegistryArtifact = artifacts.require("ContractRegistry");
const creditorProxyArtifact = artifacts.require("CreditorProxy");
const mockDebtKernelArtifact = artifacts.require("MockDebtKernel");
const mockERC20TokenArtifact = artifacts.require("MockERC20Token");

contract("Creditor Proxy (Unit Tests)", async (ACCOUNTS) => {
    let contractRegistry: ContractRegistryContract;
    let creditorProxy: CreditorProxyContract;
    let mockDebtKernel: MockDebtKernelContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockPrincipalToken: MockERC20TokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let repaymentRouter: RepaymentRouterContract;

    let defaultOfferParams: CreditorOfferParams;
    let defaultFillAmout: BigNumber = Units.ether(0.4);

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const RELAYER = ACCOUNTS[2];
    const UNDERWRITER = ACCOUNTS[3];

    const CREDITOR_1 = ACCOUNTS[4];
    const CREDITOR_2 = ACCOUNTS[5];
    const CREDITORS = [CREDITOR_1, CREDITOR_2];

    const DEBTOR_1 = ACCOUNTS[6];
    const DEBTOR_2 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2];

    const MOCK_COLLATERALIZER_ADDRESS = ACCOUNTS[8];
    const MOCK_DEBT_REGISTRY_ADDRESS = ACCOUNTS[9];
    const MOCK_TOKEN_REGISTRY_ADDRESS = ACCOUNTS[10];
    const MOCK_TERMS_CONTRACT_ADDRESS = ACCOUNTS[8];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const NULL_ISSUANCE_HASH = "0x0000000000000000000000000000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        mockPrincipalToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);

        // Step 1: Instantiate a truffle instance of the contract.
        const mockDebtKernelArtifactInstance = await mockDebtKernelArtifact.new(
            mockTokenTransferProxy.address,
        );
        const contractRegistryArtifactInstance = await contractRegistryArtifact.new(
            MOCK_COLLATERALIZER_ADDRESS,
            mockDebtKernelArtifactInstance.address,
            MOCK_DEBT_REGISTRY_ADDRESS,
            mockDebtToken.address,
            repaymentRouter.address,
            MOCK_TOKEN_REGISTRY_ADDRESS,
            mockTokenTransferProxy.address,
            { from: CONTRACT_OWNER },
        );
        const creditorProxyArtifactInstance = await creditorProxyArtifact.new(
            contractRegistryArtifactInstance.address,
        );

        // Step 2: Instantiate a web3 instance of the contract.
        const mockDebtKernelWeb3ContractInstance = web3.eth
            .contract(mockDebtKernelArtifact.abi)
            .at(mockDebtKernelArtifactInstance.address);
        const contractRegistryWeb3ContractInstance = web3.eth
            .contract(contractRegistryArtifact.abi)
            .at(contractRegistryArtifactInstance.address);
        const creditorProxyWeb3ContractInstance = web3.eth
            .contract(creditorProxyArtifact.abi)
            .at(creditorProxyArtifactInstance.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        mockDebtKernel = new MockDebtKernelContract(
            mockDebtKernelWeb3ContractInstance,
            TX_DEFAULTS,
        );
        contractRegistry = new ContractRegistryContract(
            contractRegistryWeb3ContractInstance,
            TX_DEFAULTS,
        );
        creditorProxy = new CreditorProxyContract(creditorProxyWeb3ContractInstance, TX_DEFAULTS);

        const latestBlockTime = await web3Utils.getLatestBlockTime();
        defaultOfferParams = {
            kernelVersion: mockDebtKernel.address,
            creditor: CREDITOR_1,
            repaymentRouterVersion: repaymentRouter.address,
            underwriter: UNDERWRITER,
            termsContract: MOCK_TERMS_CONTRACT_ADDRESS,
            principalToken: mockPrincipalToken.address,
            relayer: RELAYER,
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1),
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
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            minPrincipalAmount: Units.ether(0.2),
            salt: new BigNumber(
                Math.random()
                    .toString()
                    .substring(2),
            ),
        };

        ABIDecoder.addABI(creditorProxyArtifact.abi);
        ABIDecoder.addABI(mockERC20TokenArtifact.abi);

        // Step 4: print all log for this contract
        var events = creditorProxyWeb3ContractInstance.allEvents();
        events.watch((error, event) => {
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

    describe("Initialization", () => {
        it("points to the Contract Registry passed in through the constructor", async () => {
            await expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });

    describe("#cancelDebtOffer", () => {
        let debtOffer: SignedCreditorOffer;

        // describe("user who is not the creditor cancelled debt offer", () => {
        //     before(async () => {
        //         debtOffer = await offerFactory.generateDebtOffer();
        //     });
        //     it("should throw", async () => {
        //         await expect(
        //             creditorProxy.cancelDebtOffer.sendTransactionAsync(
        //                 debtOffer.getCommitmentAddresses(),
        //                 debtOffer.getCommitmentValues(),
        //                 debtOffer.getCommitmentBytes32(),
        //                 { from: ATTACKER },
        //             ),
        //         ).to.eventually.be.rejectedWith(REVERT_ERROR);
        //     });
        // });
        //
        // describe("creditor cancels issuance", () => {
        //     let debtOfferCancelledLog: ABIDecoder.DecodedLog;
        //
        //     before(async () => {
        //         debtOffer = await offerFactory.generateDebtOffer();
        //
        //         const txHash = await creditorProxy.cancelDebtOffer.sendTransactionAsync(
        //             debtOffer.getCommitmentAddresses(),
        //             debtOffer.getCommitmentValues(),
        //             debtOffer.getCommitmentBytes32(),
        //             { from: debtOffer.getCreditor() },
        //         );
        //
        //         const receipt = await web3.eth.getTransactionReceipt(txHash);
        //         [debtOfferCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
        //     });
        //
        //     it("should emit debt offer cancelled log", async () => {
        //         expect(debtOfferCancelledLog).to.deep.equal(
        //             LogDebtOfferCancelled(
        //                 creditorProxy.address,
        //                 debtOffer.getCreditor(),
        //                 debtOffer.getCreditorCommitmentHash(),
        //             ),
        //         );
        //     });
        //
        //     it("should return the debt offer as cancelled", async () => {
        //         await expect(
        //             creditorProxy.debtOfferCancelled.callAsync(
        //                 debtOffer.getCreditorCommitmentHash(),
        //             ),
        //         ).to.eventually.be.true;
        //     });
        // });
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
                signaturesV || signedOffer.getSignaturesV(),
                signaturesR || signedOffer.getSignaturesR(),
                signaturesS || signedOffer.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(
                    creditorProxy.address,
                    errorCode,
                    signedOffer.getCreditor(),
                    signedOffer.getCreditorCommitmentHash(),
                ),
            );
        };

        const setupMocks = async () => {
            const creditorPayment = signedCreditorOffer
                .getFillAmount()
                .plus(signedCreditorOffer.getCreditorFee());

            await mockDebtToken.reset.sendTransactionAsync();
            await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                new BigNumber(signedCreditorOffer.getAgreementId()),
            );

            await mockPrincipalToken.reset.sendTransactionAsync();
            await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                signedCreditorOffer.getCreditor(),
                creditorPayment,
            );
            await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                creditorProxy.address,
                creditorPayment,
            );
            await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                signedCreditorOffer.getCreditor(),
                mockTokenTransferProxy.address,
                creditorPayment,
            );

            await mockDebtKernel.reset.sendTransactionAsync();
            await mockDebtKernel.mockCreateReturnValue.sendTransactionAsync(
                signedCreditorOffer.getAgreementId(),
            );
        };

        const testOfferFill = (filler: string, setupDebtOffer: () => Promise<void>) => {
            return () => {
                let signedCreditorOfferFilledLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await setupDebtOffer();

                    await setupMocks();

                    console.log("before fill: ", signedCreditorOffer.getCreditorCommitmentHash());
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
                        { from: filler },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    [signedCreditorOfferFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should approve the transfer proxy to transfer the principal", async () => {
                    if (signedCreditorOffer.getFillAmount().greaterThan(0)) {
                        await expect(
                            mockPrincipalToken.wasApproveCalledWith.callAsync(
                                mockTokenTransferProxy.address,
                                signedCreditorOffer
                                    .getFillAmount()
                                    .plus(signedCreditorOffer.getCreditorFee()),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should transfer principal + creditor fees to creditorProxy", async () => {
                    if (signedCreditorOffer.getFillAmount().greaterThan(0)) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                signedCreditorOffer.getCreditor(),
                                creditorProxy.address,
                                signedCreditorOffer
                                    .getFillAmount()
                                    .plus(signedCreditorOffer.getCreditorFee()),
                            ),
                        ).to.eventually.be.true;
                    }
                });

                it("should call the kernel's fillDebtOrder", async () => {
                    // console.log('------------------------------------')
                    // console.log( creditorProxy.address,
                    //     signedCreditorOffer.getOrderAddressesForKernel(),
                    //     signedCreditorOffer.getOrderValuesForKernel().map(x => x.toString(10)),
                    //     signedCreditorOffer.getOrderBytes32(),
                    //     signedCreditorOffer.getSignaturesV(),
                    //     signedCreditorOffer.getSignaturesR(),
                    //     signedCreditorOffer.getSignaturesS(),)
                    await expect(
                        mockDebtKernel.wasFillDebtOrderCalledWith.callAsync(
                            creditorProxy.address,
                            signedCreditorOffer.getOrderAddressesForKernel(),
                            signedCreditorOffer.getOrderValuesForKernel(),
                            signedCreditorOffer.getOrderBytes32(),
                            signedCreditorOffer.getSignaturesV(),
                            signedCreditorOffer.getSignaturesR(),
                            signedCreditorOffer.getSignaturesS(),
                        ),
                    ).to.eventually.be.true;
                });

                it("should transfer a newly minted debt token to the creditor", async () => {
                    await expect(
                        mockDebtToken.wasTransferCalledWith.callAsync(
                            signedCreditorOffer.getCreditor(),
                            new BigNumber(signedCreditorOffer.getAgreementId()),
                        ),
                    ).to.eventually.be.true;
                });

                it("should emit signedCreditorOfferFilled Log", () => {
                    expect(signedCreditorOfferFilledLog).to.deep.equal(
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
            };
        };

        // describe("User fills valid for one times, consentual debt offer", () => {
        //     describe(
        //         "...with underwriter and relayer",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //         }),
        //     );
        //
        //     describe(
        //         "...with no principal and no creditor / debtor fees",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             const params = _.clone(defaultOfferParams);
        //             Object.assign(params, {
        //                 creditorFee: new BigNumber(0),
        //                 debtorFee: new BigNumber(0),
        //                 principalAmount: new BigNumber(0),
        //                 relayer: NULL_ADDRESS,
        //                 relayerFee: new BigNumber(0),
        //                 underwriter: NULL_ADDRESS,
        //                 underwriterFee: new BigNumber(0),
        //                 underwriterRiskRating: new BigNumber(0),
        //                 minPrincipalAmount: new BigNumber(0),
        //             });
        //
        //             creditorOffer = new CreditorOffer(params);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, new BigNumber(0));
        //         }),
        //     );
        //
        //     describe(
        //         "...with no principal and nonzero creditor fee",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             const params = _.clone(defaultOfferParams);
        //             Object.assign(params, {
        //                 creditorFee: Units.ether(0.002),
        //                 debtorFee: new BigNumber(0),
        //                 principalAmount: new BigNumber(0),
        //                 relayer: NULL_ADDRESS,
        //                 relayerFee: new BigNumber(0),
        //                 underwriter: UNDERWRITER,
        //                 underwriterFee: Units.ether(0.002),
        //                 minPrincipalAmount: new BigNumber(0),
        //             });
        //
        //             creditorOffer = new CreditorOffer(params);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_2, new BigNumber(0));
        //         }),
        //     );
        //
        //     describe(
        //         "...when creditor and debtor are same address",
        //         testOfferFill(CONTRACT_OWNER, async () => {
        //             const params = _.clone(defaultOfferParams);
        //             Object.assign(params, {
        //                 creditorFee: Units.ether(0.002),
        //                 debtorFee: new BigNumber(0),
        //                 principalAmount: new BigNumber(0),
        //                 relayer: NULL_ADDRESS,
        //                 relayerFee: new BigNumber(0),
        //                 underwriter: UNDERWRITER,
        //                 underwriterFee: Units.ether(0.002),
        //                 minPrincipalAmount: new BigNumber(0),
        //             });
        //
        //             creditorOffer = new CreditorOffer(params);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, CREDITOR_1, new BigNumber(0));
        //         }),
        //     );
        // });

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

        // describe("User fills invalid debt offer", () => {
        //     describe("...when creditor has granted transfer proxy insufficient allowance", () => {
        //         before(async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //             await setupMocks();
        //             await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
        //                 signedCreditorOffer.getCreditor(),
        //                 mockTokenTransferProxy.address,
        //                 signedCreditorOffer
        //                     .getFillAmount()
        //                     .plus(signedCreditorOffer.getCreditorFee())
        //                     .minus(Units.ether(0.01)),
        //             );
        //         });
        //         it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
        //             await testShouldReturnError(
        //                 signedCreditorOffer,
        //                 CreditorProxyErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        //             );
        //         });
        //     });
        //
        //     describe("...when creditor has insufficient balance", () => {
        //         before(async () => {
        //             creditorOffer = new CreditorOffer(defaultOfferParams);
        //             signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(web3, DEBTOR_1, defaultFillAmout);
        //             await setupMocks();
        //             await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
        //                 signedCreditorOffer.getCreditor(),
        //                 signedCreditorOffer
        //                     .getFillAmount()
        //                     .plus(signedCreditorOffer.getCreditorFee())
        //                     .minus(Units.ether(0.01)),
        //             );
        //         });
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
        // });

        describe("User fills nonconsensual debt offer", () => {
            before(async () => {
                creditorOffer = new CreditorOffer(defaultOfferParams);
                signedCreditorOffer = await creditorOffer.getSignedCreditorOffer(
                    web3,
                    DEBTOR_1,
                    defaultFillAmout,
                );
                await setupMocks();
            });

            describe("...when submitted by creditor *without* creditor signature attached", async () => {
                it("should return DEBT_OFFER_NON_CONSENSUAL error", async () => {
                    await testShouldReturnError(
                        signedCreditorOffer,
                        CreditorProxyErrorCodes.DEBT_OFFER_NON_CONSENSUAL,
                        [
                            signedCreditorOffer.getSignaturesV()[0],
                            null,
                            signedCreditorOffer.getSignaturesV()[2],
                        ],
                        [
                            signedCreditorOffer.getSignaturesR()[0],
                            null,
                            signedCreditorOffer.getSignaturesR()[2],
                        ],
                        [
                            signedCreditorOffer.getSignaturesS()[0],
                            null,
                            signedCreditorOffer.getSignaturesS()[2],
                        ],
                    );
                });
            });

            describe("creditor's signature commits to creditor fee =/= offer's", async () => {});

            describe("creditor's signature commits to underwriter =/= offer's", async () => {});
        });
    });
});

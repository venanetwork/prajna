export const IncompatibleTermsContract = 
{
  "contractName": "IncompatibleTermsContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
          "type": "address"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getTermEndTimestamp",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506102cb806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100b75780635f0280ba146100fc578063977a5e64146101af57806399114d8414610218575b600080fd5b34801561007e57600080fd5b506100a16004803603810190808035600019169060200190929190505050610267565b6040518082815260200191505060405180910390f35b3480156100c357600080fd5b506100e66004803603810190808035600019169060200190929190505050610271565b6040518082815260200191505060405180910390f35b34801561010857600080fd5b506101956004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061027b565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101fe6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610289565b604051808215151515815260200191505060405180910390f35b34801561022457600080fd5b50610251600480360381019080803560001916906020019092919080359060200190929190505050610294565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820ec94136bae5f874b1cec21e888a1ce70c9a8d7acf7388a5d6bdaf6837f14ba5a0029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100b75780635f0280ba146100fc578063977a5e64146101af57806399114d8414610218575b600080fd5b34801561007e57600080fd5b506100a16004803603810190808035600019169060200190929190505050610267565b6040518082815260200191505060405180910390f35b3480156100c357600080fd5b506100e66004803603810190808035600019169060200190929190505050610271565b6040518082815260200191505060405180910390f35b34801561010857600080fd5b506101956004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061027b565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101fe6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610289565b604051808215151515815260200191505060405180910390f35b34801561022457600080fd5b50610251600480360381019080803560001916906020019092919080359060200190929190505050610294565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820ec94136bae5f874b1cec21e888a1ce70c9a8d7acf7388a5d6bdaf6837f14ba5a0029",
  "sourceMap": "867:3132:29:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;867:3132:29;;;;;;;",
  "deployedSourceMap": "867:3132:29:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3726:144:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3876:121:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2377:258:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1500:166:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3244:201:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/jackyshen/prajna/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        8707
      ]
    },
    "id": 8708,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8641,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:29"
      },
      {
        "absolutePath": "/Users/jackyshen/prajna/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 8642,
        "nodeType": "ImportDirective",
        "scope": 8708,
        "sourceUnit": 4202,
        "src": "609:33:29",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8643,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4201,
              "src": "905:13:29",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4201",
                "typeString": "contract TermsContract"
              }
            },
            "id": 8644,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:29"
          }
        ],
        "contractDependencies": [
          4201
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 8707,
        "linearizedBaseContracts": [
          8707,
          4201
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8655,
              "nodeType": "Block",
              "src": "1637:29:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8652,
                  "id": 8654,
                  "nodeType": "Return",
                  "src": "1647:12:29"
                }
              ]
            },
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    doesn't rely on taking any sorts of actions when the loan term begins,\n    we simply validate DebtKernel is the transaction sender, and return\n    `true` if the debt agreement is associated with this terms contract.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return _success bool. Acknowledgment of whether",
            "id": 8656,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8646,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1536:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8645,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8648,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1565:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8651,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1618:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8650,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:29"
            },
            "scope": 8707,
            "src": "1500:166:29",
            "stateMutability": "nonpayable",
            "superFunction": 4162,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8673,
              "nodeType": "Block",
              "src": "2606:29:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8670,
                  "id": 8672,
                  "nodeType": "Return",
                  "src": "2616:12:29"
                }
              ]
            },
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 8674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8658,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2413:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8657,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8660,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2442:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8662,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2465:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8664,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2494:24:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8666,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2528:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8669,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2587:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8668,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:29"
            },
            "scope": 8707,
            "src": "2377:258:29",
            "stateMutability": "nonpayable",
            "superFunction": 4177,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8685,
              "nodeType": "Block",
              "src": "3420:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8683,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8682,
                  "id": 8684,
                  "nodeType": "Return",
                  "src": "3430:8:29"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.",
            "id": 8686,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3288:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8678,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3317:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8681,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3386:28:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8680,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:29"
            },
            "scope": 8707,
            "src": "3244:201:29",
            "stateMutability": "view",
            "superFunction": 4186,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8695,
              "nodeType": "Block",
              "src": "3845:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8692,
                  "id": 8694,
                  "nodeType": "Return",
                  "src": "3855:8:29"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value repaid to date.\n @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid by the specified block timestamp.",
            "id": 8696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8688,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8696,
                  "src": "3756:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8687,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8691,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 8696,
                  "src": "3822:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8690,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:29"
            },
            "scope": 8707,
            "src": "3726:144:29",
            "stateMutability": "view",
            "superFunction": 4193,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8705,
              "nodeType": "Block",
              "src": "3972:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8702,
                  "id": 8704,
                  "nodeType": "Return",
                  "src": "3982:8:29"
                }
              ]
            },
            "documentation": null,
            "id": 8706,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8698,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8706,
                  "src": "3914:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8697,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8702,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8701,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8706,
                  "src": "3962:4:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8700,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:29"
            },
            "scope": 8707,
            "src": "3876:121:29",
            "stateMutability": "view",
            "superFunction": 4200,
            "visibility": "public"
          }
        ],
        "scope": 8708,
        "src": "867:3132:29"
      }
    ],
    "src": "584:3416:29"
  },
  "legacyAST": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        8707
      ]
    },
    "id": 8708,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8641,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:29"
      },
      {
        "absolutePath": "/Users/jackyshen/prajna/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 8642,
        "nodeType": "ImportDirective",
        "scope": 8708,
        "sourceUnit": 4202,
        "src": "609:33:29",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8643,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4201,
              "src": "905:13:29",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4201",
                "typeString": "contract TermsContract"
              }
            },
            "id": 8644,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:29"
          }
        ],
        "contractDependencies": [
          4201
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 8707,
        "linearizedBaseContracts": [
          8707,
          4201
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8655,
              "nodeType": "Block",
              "src": "1637:29:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8653,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8652,
                  "id": 8654,
                  "nodeType": "Return",
                  "src": "1647:12:29"
                }
              ]
            },
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    doesn't rely on taking any sorts of actions when the loan term begins,\n    we simply validate DebtKernel is the transaction sender, and return\n    `true` if the debt agreement is associated with this terms contract.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return _success bool. Acknowledgment of whether",
            "id": 8656,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8649,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8646,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1536:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8645,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8648,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1565:14:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8647,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8652,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8651,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8656,
                  "src": "1618:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8650,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:29"
            },
            "scope": 8707,
            "src": "1500:166:29",
            "stateMutability": "nonpayable",
            "superFunction": 4162,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8673,
              "nodeType": "Block",
              "src": "2606:29:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8671,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8670,
                  "id": 8672,
                  "nodeType": "Return",
                  "src": "2616:12:29"
                }
              ]
            },
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 8674,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8658,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2413:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8657,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8660,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2442:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8662,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2465:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8664,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2494:24:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8663,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8666,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2528:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8670,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8669,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8674,
                  "src": "2587:13:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8668,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:29"
            },
            "scope": 8707,
            "src": "2377:258:29",
            "stateMutability": "nonpayable",
            "superFunction": 4177,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8685,
              "nodeType": "Block",
              "src": "3420:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8683,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8682,
                  "id": 8684,
                  "nodeType": "Return",
                  "src": "3430:8:29"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.",
            "id": 8686,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8679,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8676,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3288:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8675,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 8678,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3317:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8677,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8682,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8681,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 8686,
                  "src": "3386:28:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8680,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:29"
            },
            "scope": 8707,
            "src": "3244:201:29",
            "stateMutability": "view",
            "superFunction": 4186,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8695,
              "nodeType": "Block",
              "src": "3845:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8692,
                  "id": 8694,
                  "nodeType": "Return",
                  "src": "3855:8:29"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value repaid to date.\n @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid by the specified block timestamp.",
            "id": 8696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8689,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8688,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8696,
                  "src": "3756:19:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8687,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8692,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8691,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 8696,
                  "src": "3822:17:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8690,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:29"
            },
            "scope": 8707,
            "src": "3726:144:29",
            "stateMutability": "view",
            "superFunction": 4193,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8705,
              "nodeType": "Block",
              "src": "3972:25:29",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8703,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:29",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8702,
                  "id": 8704,
                  "nodeType": "Return",
                  "src": "3982:8:29"
                }
              ]
            },
            "documentation": null,
            "id": 8706,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8698,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8706,
                  "src": "3914:20:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8697,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:29"
            },
            "payable": false,
            "returnParameters": {
              "id": 8702,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8701,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8706,
                  "src": "3962:4:29",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8700,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:29",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:29"
            },
            "scope": 8707,
            "src": "3876:121:29",
            "stateMutability": "view",
            "superFunction": 4200,
            "visibility": "public"
          }
        ],
        "scope": 8708,
        "src": "867:3132:29"
      }
    ],
    "src": "584:3416:29"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {},
      "links": {},
      "address": "0x12bfe5fb2d83d7b67dfe15b36b4a87c9cee196a6",
      "transactionHash": "0x950b9d981dbe312ab2c2004253bedb060637de47eaae7af2f5cf43da70ae50d2"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T07:22:41.581Z"
}
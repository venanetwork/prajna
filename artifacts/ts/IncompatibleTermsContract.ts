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
  "bytecode": "0x608060405234801561001057600080fd5b506102cb806100206000396000f30060806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100b75780635f0280ba146100fc578063977a5e64146101af57806399114d8414610218575b600080fd5b34801561007e57600080fd5b506100a16004803603810190808035600019169060200190929190505050610267565b6040518082815260200191505060405180910390f35b3480156100c357600080fd5b506100e66004803603810190808035600019169060200190929190505050610271565b6040518082815260200191505060405180910390f35b34801561010857600080fd5b506101956004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061027b565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101fe6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610289565b604051808215151515815260200191505060405180910390f35b34801561022457600080fd5b50610251600480360381019080803560001916906020019092919080359060200190929190505050610294565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820f5d2534ba3e0a202bb31ed6aa53ce45e5fa6ecfdb103a5f419b624884c97fd0f0029",
  "deployedBytecode": "0x60806040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100b75780635f0280ba146100fc578063977a5e64146101af57806399114d8414610218575b600080fd5b34801561007e57600080fd5b506100a16004803603810190808035600019169060200190929190505050610267565b6040518082815260200191505060405180910390f35b3480156100c357600080fd5b506100e66004803603810190808035600019169060200190929190505050610271565b6040518082815260200191505060405180910390f35b34801561010857600080fd5b506101956004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061027b565b604051808215151515815260200191505060405180910390f35b3480156101bb57600080fd5b506101fe6004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610289565b604051808215151515815260200191505060405180910390f35b34801561022457600080fd5b50610251600480360381019080803560001916906020019092919080359060200190929190505050610294565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820f5d2534ba3e0a202bb31ed6aa53ce45e5fa6ecfdb103a5f419b624884c97fd0f0029",
  "sourceMap": "867:3132:28:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;867:3132:28;;;;;;;",
  "deployedSourceMap": "867:3132:28:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3726:144:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3876:121:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2377:258:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1500:166:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3244:201:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        8463
      ]
    },
    "id": 8464,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8397,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:28"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 8398,
        "nodeType": "ImportDirective",
        "scope": 8464,
        "sourceUnit": 4202,
        "src": "609:33:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8399,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4201,
              "src": "905:13:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4201",
                "typeString": "contract TermsContract"
              }
            },
            "id": 8400,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:28"
          }
        ],
        "contractDependencies": [
          4201
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 8463,
        "linearizedBaseContracts": [
          8463,
          4201
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8411,
              "nodeType": "Block",
              "src": "1637:29:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8408,
                  "id": 8410,
                  "nodeType": "Return",
                  "src": "1647:12:28"
                }
              ]
            },
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    doesn't rely on taking any sorts of actions when the loan term begins,\n    we simply validate DebtKernel is the transaction sender, and return\n    `true` if the debt agreement is associated with this terms contract.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return _success bool. Acknowledgment of whether",
            "id": 8412,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8402,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1536:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8401,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:28",
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
                  "id": 8404,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1565:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8407,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1618:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8406,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:28"
            },
            "scope": 8463,
            "src": "1500:166:28",
            "stateMutability": "nonpayable",
            "superFunction": 4162,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8429,
              "nodeType": "Block",
              "src": "2606:29:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8426,
                  "id": 8428,
                  "nodeType": "Return",
                  "src": "2616:12:28"
                }
              ]
            },
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 8430,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8414,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2413:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8413,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:28",
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
                  "id": 8416,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2442:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8415,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:28",
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
                  "id": 8418,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2465:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:28",
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
                  "id": 8420,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2494:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:28",
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
                  "id": 8422,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2528:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8425,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2587:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8424,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:28"
            },
            "scope": 8463,
            "src": "2377:258:28",
            "stateMutability": "nonpayable",
            "superFunction": 4177,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8441,
              "nodeType": "Block",
              "src": "3420:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8438,
                  "id": 8440,
                  "nodeType": "Return",
                  "src": "3430:8:28"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.",
            "id": 8442,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8432,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3288:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8431,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:28",
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
                  "id": 8434,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3317:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8437,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3386:28:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8436,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:28"
            },
            "scope": 8463,
            "src": "3244:201:28",
            "stateMutability": "view",
            "superFunction": 4186,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8451,
              "nodeType": "Block",
              "src": "3845:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8448,
                  "id": 8450,
                  "nodeType": "Return",
                  "src": "3855:8:28"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value repaid to date.\n @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid by the specified block timestamp.",
            "id": 8452,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8444,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8452,
                  "src": "3756:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8443,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8447,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 8452,
                  "src": "3822:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8446,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:28"
            },
            "scope": 8463,
            "src": "3726:144:28",
            "stateMutability": "view",
            "superFunction": 4193,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8461,
              "nodeType": "Block",
              "src": "3972:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8458,
                  "id": 8460,
                  "nodeType": "Return",
                  "src": "3982:8:28"
                }
              ]
            },
            "documentation": null,
            "id": 8462,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8454,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8462,
                  "src": "3914:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8453,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8457,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8462,
                  "src": "3962:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8456,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:28"
            },
            "scope": 8463,
            "src": "3876:121:28",
            "stateMutability": "view",
            "superFunction": 4200,
            "visibility": "public"
          }
        ],
        "scope": 8464,
        "src": "867:3132:28"
      }
    ],
    "src": "584:3416:28"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
    "exportedSymbols": {
      "IncompatibleTermsContract": [
        8463
      ]
    },
    "id": 8464,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 8397,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:28"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TermsContract.sol",
        "file": "../../TermsContract.sol",
        "id": 8398,
        "nodeType": "ImportDirective",
        "scope": 8464,
        "sourceUnit": 4202,
        "src": "609:33:28",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 8399,
              "name": "TermsContract",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4201,
              "src": "905:13:28",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TermsContract_$4201",
                "typeString": "contract TermsContract"
              }
            },
            "id": 8400,
            "nodeType": "InheritanceSpecifier",
            "src": "905:13:28"
          }
        ],
        "contractDependencies": [
          4201
        ],
        "contractKind": "contract",
        "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
        "fullyImplemented": true,
        "id": 8463,
        "linearizedBaseContracts": [
          8463,
          4201
        ],
        "name": "IncompatibleTermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 8411,
              "nodeType": "Block",
              "src": "1637:29:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8409,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1654:5:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8408,
                  "id": 8410,
                  "nodeType": "Return",
                  "src": "1647:12:28"
                }
              ]
            },
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    doesn't rely on taking any sorts of actions when the loan term begins,\n    we simply validate DebtKernel is the transaction sender, and return\n    `true` if the debt agreement is associated with this terms contract.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return _success bool. Acknowledgment of whether",
            "id": 8412,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8405,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8402,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1536:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8401,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1536:7:28",
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
                  "id": 8404,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1565:14:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8403,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1565:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1526:59:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8408,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8407,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8412,
                  "src": "1618:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8406,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1618:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1617:15:28"
            },
            "scope": 8463,
            "src": "1500:166:28",
            "stateMutability": "nonpayable",
            "superFunction": 4162,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8429,
              "nodeType": "Block",
              "src": "2606:29:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 8427,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "2623:5:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "functionReturnParameters": 8426,
                  "id": 8428,
                  "nodeType": "Return",
                  "src": "2616:12:28"
                }
              ]
            },
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 8430,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8423,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8414,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2413:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8413,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:28",
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
                  "id": 8416,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2442:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8415,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2442:7:28",
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
                  "id": 8418,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2465:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8417,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2465:7:28",
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
                  "id": 8420,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2494:24:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8419,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2494:7:28",
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
                  "id": 8422,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2528:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 8421,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2528:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2403:151:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8425,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 8430,
                  "src": "2587:13:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 8424,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2587:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2586:15:28"
            },
            "scope": 8463,
            "src": "2377:258:28",
            "stateMutability": "nonpayable",
            "superFunction": 4177,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8441,
              "nodeType": "Block",
              "src": "3420:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3437:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8438,
                  "id": 8440,
                  "nodeType": "Return",
                  "src": "3430:8:28"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.",
            "id": 8442,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8435,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8432,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3288:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8431,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3288:7:28",
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
                  "id": 8434,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3317:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8433,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3317:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3278:62:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8438,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8437,
                  "name": "_expectedRepaymentValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 8442,
                  "src": "3386:28:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8436,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3386:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3385:30:28"
            },
            "scope": 8463,
            "src": "3244:201:28",
            "stateMutability": "view",
            "superFunction": 4186,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8451,
              "nodeType": "Block",
              "src": "3845:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8449,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3862:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8448,
                  "id": 8450,
                  "nodeType": "Return",
                  "src": "3855:8:28"
                }
              ]
            },
            "documentation": "Returns the cumulative units-of-value repaid to date.\n @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid by the specified block timestamp.",
            "id": 8452,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8445,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8444,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8452,
                  "src": "3756:19:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8443,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3756:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3755:21:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8448,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8447,
                  "name": "_valueRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 8452,
                  "src": "3822:17:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8446,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3822:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3821:19:28"
            },
            "scope": 8463,
            "src": "3726:144:28",
            "stateMutability": "view",
            "superFunction": 4193,
            "visibility": "public"
          },
          {
            "body": {
              "id": 8461,
              "nodeType": "Block",
              "src": "3972:25:28",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "hexValue": "30",
                    "id": 8459,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "number",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "3989:1:28",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_0_by_1",
                      "typeString": "int_const 0"
                    },
                    "value": "0"
                  },
                  "functionReturnParameters": 8458,
                  "id": 8460,
                  "nodeType": "Return",
                  "src": "3982:8:28"
                }
              ]
            },
            "documentation": null,
            "id": 8462,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 8455,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8454,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 8462,
                  "src": "3914:20:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 8453,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3914:7:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3904:36:28"
            },
            "payable": false,
            "returnParameters": {
              "id": 8458,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 8457,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 8462,
                  "src": "3962:4:28",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 8456,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3962:4:28",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3961:6:28"
            },
            "scope": 8463,
            "src": "3876:121:28",
            "stateMutability": "view",
            "superFunction": 4200,
            "visibility": "public"
          }
        ],
        "scope": 8464,
        "src": "867:3132:28"
      }
    ],
    "src": "584:3416:28"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {},
      "links": {},
      "address": "0xfc96542c969065eda2bced5bfe9d4c212ca7b1c5",
      "transactionHash": "0xfd5a6c52a8220103175a2d838241d3ae50f1f8875a70f4091a729293e37320ba"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:40.814Z"
}
export const TermsContract = 
{
  "contractName": "TermsContract",
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
          "name": "",
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
          "name": "",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\n\ninterface TermsContract {\n     /// When called, the registerTermStart function registers the fact that\n     ///    the debt agreement has begun.  This method is called as a hook by the\n     ///    DebtKernel when a debt order associated with `agreementId` is filled.\n     ///    Method is not required to make any sort of internal state change\n     ///    upon the debt agreement's start, but MUST return `true` in order to\n     ///    acknowledge receipt of the transaction.  If, for any reason, the\n     ///    debt agreement stored at `agreementId` is incompatible with this contract,\n     ///    MUST return `false`, which will cause the pertinent order fill to fail.\n     ///    If this method is called for a debt agreement whose term has already begun,\n     ///    must THROW.  Similarly, if this method is called by any contract other\n     ///    than the current DebtKernel, must THROW.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  debtor address. The debtor in this particular issuance.\n     /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    ) public returns (bool _success);\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    ) public returns (bool _success);\n\n     /// Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    ) public view returns (uint256);\n\n     /// Returns the cumulative units-of-value repaid by the point at which this method is called.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid up until now.\n    function getValueRepaidToDate(\n        bytes32 agreementId\n    ) public view returns (uint256);\n\n    /**\n     * A method that returns a Unix timestamp representing the end of the debt agreement's term.\n     * contract.\n     */\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint);\n}\n",
  "sourcePath": "/Users/jackyshen/prajna/contracts/TermsContract.sol",
  "ast": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/TermsContract.sol",
    "exportedSymbols": {
      "TermsContract": [
        4201
      ]
    },
    "id": 4202,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4153,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:9"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4201,
        "linearizedBaseContracts": [
          4201
        ],
        "name": "TermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  This method is called as a hook by the\n    DebtKernel when a debt order associated with `agreementId` is filled.\n    Method is not required to make any sort of internal state change\n    upon the debt agreement's start, but MUST return `true` in order to\n    acknowledge receipt of the transaction.  If, for any reason, the\n    debt agreement stored at `agreementId` is incompatible with this contract,\n    MUST return `false`, which will cause the pertinent order fill to fail.\n    If this method is called for a debt agreement whose term has already begun,\n    must THROW.  Similarly, if this method is called by any contract other\n    than the current DebtKernel, must THROW.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  debtor address. The debtor in this particular issuance.\n @return _success bool. Acknowledgment of whether",
            "id": 4162,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4155,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1794:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4154,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:9",
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
                  "id": 4157,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1823:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:59:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4160,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1860:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4159,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1860:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1859:15:9"
            },
            "scope": 4201,
            "src": "1758:117:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 4177,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4164,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2622:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4163,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:9",
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
                  "id": 4166,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2651:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4165,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2651:7:9",
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
                  "id": 4168,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2674:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4167,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2674:7:9",
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
                  "id": 4170,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2703:24:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:9",
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
                  "id": 4172,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2737:20:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2612:151:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4175,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2780:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2779:15:9"
            },
            "scope": 4201,
            "src": "2586:209:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.",
            "id": 4186,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4179,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3475:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4178,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3475:7:9",
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
                  "id": 4181,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3504:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3504:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3465:62:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3549:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4183,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3549:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3548:9:9"
            },
            "scope": 4201,
            "src": "3431:127:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Returns the cumulative units-of-value repaid by the point at which this method is called.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid up until now.",
            "id": 4193,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4188,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4193,
                  "src": "3895:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4187,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3895:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3885:35:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4193,
                  "src": "3942:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3941:9:9"
            },
            "scope": 4201,
            "src": "3856:95:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "A method that returns a Unix timestamp representing the end of the debt agreement's term.\ncontract.",
            "id": 4200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4195,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4200,
                  "src": "4125:20:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4194,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4115:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4200,
                  "src": "4173:4:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4173:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4172:6:9"
            },
            "scope": 4201,
            "src": "4087:92:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4202,
        "src": "610:3571:9"
      }
    ],
    "src": "584:3598:9"
  },
  "legacyAST": {
    "absolutePath": "/Users/jackyshen/prajna/contracts/TermsContract.sol",
    "exportedSymbols": {
      "TermsContract": [
        4201
      ]
    },
    "id": 4202,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4153,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:9"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "interface",
        "documentation": null,
        "fullyImplemented": false,
        "id": 4201,
        "linearizedBaseContracts": [
          4201
        ],
        "name": "TermsContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": "When called, the registerTermStart function registers the fact that\n    the debt agreement has begun.  This method is called as a hook by the\n    DebtKernel when a debt order associated with `agreementId` is filled.\n    Method is not required to make any sort of internal state change\n    upon the debt agreement's start, but MUST return `true` in order to\n    acknowledge receipt of the transaction.  If, for any reason, the\n    debt agreement stored at `agreementId` is incompatible with this contract,\n    MUST return `false`, which will cause the pertinent order fill to fail.\n    If this method is called for a debt agreement whose term has already begun,\n    must THROW.  Similarly, if this method is called by any contract other\n    than the current DebtKernel, must THROW.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  debtor address. The debtor in this particular issuance.\n @return _success bool. Acknowledgment of whether",
            "id": 4162,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerTermStart",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4155,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1794:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4154,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1794:7:9",
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
                  "id": 4157,
                  "name": "debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1823:14:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4156,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1823:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1784:59:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4161,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4160,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4162,
                  "src": "1860:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4159,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1860:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1859:15:9"
            },
            "scope": 4201,
            "src": "1758:117:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "When called, the registerRepayment function records the debtor's\n  repayment, as well as any auxiliary metadata needed by the contract\n  to determine ex post facto the value repaid (e.g. current USD\n  exchange rate)\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  payer address. The address of the payer.\n @param  beneficiary address. The address of the payment's beneficiary.\n @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n @param  tokenAddress address. The address of the token with which the repayment transaction was executed.",
            "id": 4177,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "registerRepayment",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4173,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4164,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2622:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4163,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2622:7:9",
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
                  "id": 4166,
                  "name": "payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2651:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4165,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2651:7:9",
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
                  "id": 4168,
                  "name": "beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2674:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4167,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2674:7:9",
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
                  "id": 4170,
                  "name": "unitsOfRepayment",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2703:24:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4169,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2703:7:9",
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
                  "id": 4172,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2737:20:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4171,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2737:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2612:151:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4176,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4175,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4177,
                  "src": "2780:13:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4174,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2780:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2779:15:9"
            },
            "scope": 4201,
            "src": "2586:209:9",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n  Note this is not a constant function -- this value can vary on basis of any number of\n  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.",
            "id": 4186,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getExpectedRepaymentValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4182,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4179,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3475:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4178,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3475:7:9",
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
                  "id": 4181,
                  "name": "timestamp",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3504:17:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4180,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3504:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3465:62:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4185,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4184,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4186,
                  "src": "3549:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4183,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3549:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3548:9:9"
            },
            "scope": 4201,
            "src": "3431:127:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "Returns the cumulative units-of-value repaid by the point at which this method is called.\n @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n @return uint256 The cumulative units-of-value repaid up until now.",
            "id": 4193,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getValueRepaidToDate",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4189,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4188,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4193,
                  "src": "3895:19:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4187,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "3895:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3885:35:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4192,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4191,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4193,
                  "src": "3942:7:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4190,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3942:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3941:9:9"
            },
            "scope": 4201,
            "src": "3856:95:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": "A method that returns a Unix timestamp representing the end of the debt agreement's term.\ncontract.",
            "id": 4200,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getTermEndTimestamp",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4196,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4195,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4200,
                  "src": "4125:20:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4194,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "4125:7:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4115:36:9"
            },
            "payable": false,
            "returnParameters": {
              "id": 4199,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4198,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 4200,
                  "src": "4173:4:9",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4197,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "4173:4:9",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4172:6:9"
            },
            "scope": 4201,
            "src": "4087:92:9",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4202,
        "src": "610:3571:9"
      }
    ],
    "src": "584:3598:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T07:22:14.484Z"
}
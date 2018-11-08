export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
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
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "constant": false,
      "inputs": [
        {
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
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
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        10168
      ]
    },
    "id": 10169,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10127,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 10128,
        "nodeType": "ImportDirective",
        "scope": 10169,
        "sourceUnit": 10201,
        "src": "26:26:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10129,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10200,
              "src": "162:10:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$10200",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 10130,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:36"
          }
        ],
        "contractDependencies": [
          10200
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10168,
        "linearizedBaseContracts": [
          10168,
          10200
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10139,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10132,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "196:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10131,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:36",
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
                  "id": 10134,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "211:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10133,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "249:7:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:36"
            },
            "scope": 10168,
            "src": "177:81:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10150,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10141,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "283:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10140,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:36",
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
                  "id": 10143,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "297:10:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10142,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:36",
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
                  "id": 10145,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "309:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10148,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "340:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10147,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:36"
            },
            "scope": 10168,
            "src": "261:85:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10152,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "366:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:36",
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
                  "id": 10154,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "383:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10157,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "414:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10156,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:36"
            },
            "scope": 10168,
            "src": "349:71:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10167,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10161,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "438:21:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10160,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:36",
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
                  "id": 10163,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "461:23:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:36",
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
                  "id": 10165,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "486:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:36"
            },
            "src": "423:78:36"
          }
        ],
        "scope": 10169,
        "src": "144:359:36"
      }
    ],
    "src": "0:504:36"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        10168
      ]
    },
    "id": 10169,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10127,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:36"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 10128,
        "nodeType": "ImportDirective",
        "scope": 10169,
        "sourceUnit": 10201,
        "src": "26:26:36",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10129,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10200,
              "src": "162:10:36",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$10200",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 10130,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:36"
          }
        ],
        "contractDependencies": [
          10200
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10168,
        "linearizedBaseContracts": [
          10168,
          10200
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10139,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10135,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10132,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "196:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10131,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:36",
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
                  "id": 10134,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "211:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10133,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10138,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10137,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10139,
                  "src": "249:7:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10136,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:36"
            },
            "scope": 10168,
            "src": "177:81:36",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10150,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10146,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10141,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "283:12:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10140,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:36",
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
                  "id": 10143,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "297:10:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10142,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:36",
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
                  "id": 10145,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "309:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10144,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10149,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10148,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10150,
                  "src": "340:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10147,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:36"
            },
            "scope": 10168,
            "src": "261:85:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10159,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10155,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10152,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "366:15:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10151,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:36",
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
                  "id": 10154,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "383:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10153,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:36"
            },
            "payable": false,
            "returnParameters": {
              "id": 10158,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10157,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10159,
                  "src": "414:4:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10156,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:36"
            },
            "scope": 10168,
            "src": "349:71:36",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10167,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10166,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10161,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "438:21:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10160,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:36",
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
                  "id": 10163,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "461:23:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10162,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:36",
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
                  "id": 10165,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10167,
                  "src": "486:13:36",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10164,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:36",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:36"
            },
            "src": "423:78:36"
          }
        ],
        "scope": 10169,
        "src": "144:359:36"
      }
    ],
    "src": "0:504:36"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:23.843Z"
}
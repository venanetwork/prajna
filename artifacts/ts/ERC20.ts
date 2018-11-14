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
        10412
      ]
    },
    "id": 10413,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10371,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 10372,
        "nodeType": "ImportDirective",
        "scope": 10413,
        "sourceUnit": 10445,
        "src": "26:26:37",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10373,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10444,
              "src": "162:10:37",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$10444",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 10374,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:37"
          }
        ],
        "contractDependencies": [
          10444
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10412,
        "linearizedBaseContracts": [
          10412,
          10444
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10383,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10376,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "196:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10375,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:37",
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
                  "id": 10378,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "211:15:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10377,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10381,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "249:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:37"
            },
            "scope": 10412,
            "src": "177:81:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10394,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10385,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "283:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:37",
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
                  "id": 10387,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "297:10:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:37",
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
                  "id": 10389,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "309:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10392,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "340:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10391,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:37"
            },
            "scope": 10412,
            "src": "261:85:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10403,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10396,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "366:15:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:37",
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
                  "id": 10398,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "383:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10401,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "414:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10400,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:37"
            },
            "scope": 10412,
            "src": "349:71:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10411,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10405,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "438:21:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10404,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:37",
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
                  "id": 10407,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "461:23:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10406,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:37",
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
                  "id": 10409,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "486:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10408,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:37"
            },
            "src": "423:78:37"
          }
        ],
        "scope": 10413,
        "src": "144:359:37"
      }
    ],
    "src": "0:504:37"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
    "exportedSymbols": {
      "ERC20": [
        10412
      ]
    },
    "id": 10413,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10371,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
        "file": "./ERC20Basic.sol",
        "id": 10372,
        "nodeType": "ImportDirective",
        "scope": 10413,
        "sourceUnit": 10445,
        "src": "26:26:37",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10373,
              "name": "ERC20Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10444,
              "src": "162:10:37",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Basic_$10444",
                "typeString": "contract ERC20Basic"
              }
            },
            "id": 10374,
            "nodeType": "InheritanceSpecifier",
            "src": "162:10:37"
          }
        ],
        "contractDependencies": [
          10444
        ],
        "contractKind": "contract",
        "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
        "fullyImplemented": false,
        "id": 10412,
        "linearizedBaseContracts": [
          10412,
          10444
        ],
        "name": "ERC20",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10383,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "allowance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10379,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10376,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "196:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10375,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "196:7:37",
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
                  "id": 10378,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "211:15:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10377,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "211:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "195:32:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10382,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10381,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10383,
                  "src": "249:7:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10380,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "249:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "248:9:37"
            },
            "scope": 10412,
            "src": "177:81:37",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10394,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10390,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10385,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "283:12:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "283:7:37",
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
                  "id": 10387,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "297:10:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10386,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "297:7:37",
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
                  "id": 10389,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "309:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10388,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "309:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "282:41:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10393,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10392,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10394,
                  "src": "340:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10391,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "340:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "339:6:37"
            },
            "scope": 10412,
            "src": "261:85:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10403,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10399,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10396,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "366:15:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10395,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "366:7:37",
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
                  "id": 10398,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "383:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10397,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "365:32:37"
            },
            "payable": false,
            "returnParameters": {
              "id": 10402,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10401,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10403,
                  "src": "414:4:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10400,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "414:4:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "413:6:37"
            },
            "scope": 10412,
            "src": "349:71:37",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10411,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10410,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10405,
                  "indexed": true,
                  "name": "owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "438:21:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10404,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "438:7:37",
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
                  "id": 10407,
                  "indexed": true,
                  "name": "spender",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "461:23:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10406,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "461:7:37",
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
                  "id": 10409,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10411,
                  "src": "486:13:37",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10408,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "486:7:37",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "437:63:37"
            },
            "src": "423:78:37"
          }
        ],
        "scope": 10413,
        "src": "144:359:37"
      }
    ],
    "src": "0:504:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T07:22:14.601Z"
}
export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        10444
      ]
    },
    "id": 10445,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10414,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 10444,
        "linearizedBaseContracts": [
          10444
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10419,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10417,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10419,
                  "src": "223:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:38"
            },
            "scope": 10444,
            "src": "179:53:38",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10426,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10421,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10426,
                  "src": "254:11:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10420,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10424,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10426,
                  "src": "288:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10423,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:38"
            },
            "scope": 10444,
            "src": "235:62:38",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10435,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10428,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "318:10:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:38",
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
                  "id": 10430,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "330:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10433,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "361:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10432,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:38"
            },
            "scope": 10444,
            "src": "300:67:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10443,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10442,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10437,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "385:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10436,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:38",
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
                  "id": 10439,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "407:18:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:38",
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
                  "id": 10441,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "427:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:38"
            },
            "src": "370:72:38"
          }
        ],
        "scope": 10445,
        "src": "155:289:38"
      }
    ],
    "src": "0:445:38"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
    "exportedSymbols": {
      "ERC20Basic": [
        10444
      ]
    },
    "id": 10445,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10414,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
        "fullyImplemented": false,
        "id": 10444,
        "linearizedBaseContracts": [
          10444
        ],
        "name": "ERC20Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10419,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10415,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "199:2:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10418,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10417,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10419,
                  "src": "223:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10416,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "223:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "222:9:38"
            },
            "scope": 10444,
            "src": "179:53:38",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10426,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10422,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10421,
                  "name": "who",
                  "nodeType": "VariableDeclaration",
                  "scope": 10426,
                  "src": "254:11:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10420,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "253:13:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10425,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10424,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10426,
                  "src": "288:7:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10423,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:9:38"
            },
            "scope": 10444,
            "src": "235:62:38",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10435,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10431,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10428,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "318:10:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10427,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "318:7:38",
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
                  "id": 10430,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "330:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10429,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "330:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "317:27:38"
            },
            "payable": false,
            "returnParameters": {
              "id": 10434,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10433,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10435,
                  "src": "361:4:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10432,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "361:4:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "360:6:38"
            },
            "scope": 10444,
            "src": "300:67:38",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10443,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10442,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10437,
                  "indexed": true,
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "385:20:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10436,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "385:7:38",
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
                  "id": 10439,
                  "indexed": true,
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "407:18:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10438,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "407:7:38",
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
                  "id": 10441,
                  "indexed": false,
                  "name": "value",
                  "nodeType": "VariableDeclaration",
                  "scope": 10443,
                  "src": "427:13:38",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10440,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:7:38",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "384:57:38"
            },
            "src": "370:72:38"
          }
        ],
        "scope": 10445,
        "src": "155:289:38"
      }
    ],
    "src": "0:445:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T09:13:41.387Z"
}
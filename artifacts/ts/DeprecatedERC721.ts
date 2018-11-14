export const DeprecatedERC721 = 
{
  "contractName": "DeprecatedERC721",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
          "type": "string"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "name": "_operator",
          "type": "address"
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
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
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "name": "_tokenId",
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "_exists",
          "type": "bool"
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
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
          "type": "address"
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
          "type": "string"
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
          "name": "_operator",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "name": "",
          "type": "string"
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "takeOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "tokensOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
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
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721.sol\";\n\n/**\n * @title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n * @dev Only use this interface for compatibility with previously deployed contracts\n * @dev Use ERC721 for interacting with new contracts which are standard-compliant\n */\ncontract DeprecatedERC721 is ERC721 {\n  function takeOwnership(uint256 _tokenId) public;\n  function transfer(address _to, uint256 _tokenId) public;\n  function tokensOf(address _owner) public view returns (uint256[]);\n}\n\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
    "exportedSymbols": {
      "DeprecatedERC721": [
        10811
      ]
    },
    "id": 10812,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10787,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 10788,
        "nodeType": "ImportDirective",
        "scope": 10812,
        "sourceUnit": 10866,
        "src": "26:22:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10789,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10865,
              "src": "359:6:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$10865",
                "typeString": "contract ERC721"
              }
            },
            "id": 10790,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:41"
          }
        ],
        "contractDependencies": [
          10838,
          10858,
          10865,
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 10811,
        "linearizedBaseContracts": [
          10811,
          10865,
          10858,
          10838,
          10972
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10795,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10792,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10795,
                  "src": "393:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:41"
            },
            "scope": 10811,
            "src": "370:48:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10802,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10797,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10802,
                  "src": "439:11:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:41",
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
                  "id": 10799,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10802,
                  "src": "452:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10801,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:41"
            },
            "scope": 10811,
            "src": "421:56:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10810,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10804,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10810,
                  "src": "498:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10808,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10810,
                  "src": "535:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10806,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10807,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:41"
            },
            "scope": 10811,
            "src": "480:66:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10812,
        "src": "330:218:41"
      }
    ],
    "src": "0:550:41"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
    "exportedSymbols": {
      "DeprecatedERC721": [
        10811
      ]
    },
    "id": 10812,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10787,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 10788,
        "nodeType": "ImportDirective",
        "scope": 10812,
        "sourceUnit": 10866,
        "src": "26:22:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10789,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10865,
              "src": "359:6:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$10865",
                "typeString": "contract ERC721"
              }
            },
            "id": 10790,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:41"
          }
        ],
        "contractDependencies": [
          10838,
          10858,
          10865,
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 10811,
        "linearizedBaseContracts": [
          10811,
          10865,
          10858,
          10838,
          10972
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10795,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10793,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10792,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10795,
                  "src": "393:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10791,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10794,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:41"
            },
            "scope": 10811,
            "src": "370:48:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10802,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10800,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10797,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10802,
                  "src": "439:11:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10796,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:41",
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
                  "id": 10799,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10802,
                  "src": "452:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10798,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10801,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:41"
            },
            "scope": 10811,
            "src": "421:56:41",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10810,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10805,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10804,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10810,
                  "src": "498:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10803,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10809,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10808,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10810,
                  "src": "535:9:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10806,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:41",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10807,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:41"
            },
            "scope": 10811,
            "src": "480:66:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10812,
        "src": "330:218:41"
      }
    ],
    "src": "0:550:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T07:22:14.603Z"
}
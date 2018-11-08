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
        10567
      ]
    },
    "id": 10568,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10543,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 10544,
        "nodeType": "ImportDirective",
        "scope": 10568,
        "sourceUnit": 10622,
        "src": "26:22:40",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10545,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10621,
              "src": "359:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$10621",
                "typeString": "contract ERC721"
              }
            },
            "id": 10546,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:40"
          }
        ],
        "contractDependencies": [
          10594,
          10614,
          10621,
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 10567,
        "linearizedBaseContracts": [
          10567,
          10621,
          10614,
          10594,
          10728
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10551,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10548,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10551,
                  "src": "393:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:40"
            },
            "scope": 10567,
            "src": "370:48:40",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10558,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10553,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10558,
                  "src": "439:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10552,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:40",
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
                  "id": 10555,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10558,
                  "src": "452:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:40"
            },
            "scope": 10567,
            "src": "421:56:40",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10566,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10560,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10566,
                  "src": "498:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10559,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10564,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10566,
                  "src": "535:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10562,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10563,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:40"
            },
            "scope": 10567,
            "src": "480:66:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10568,
        "src": "330:218:40"
      }
    ],
    "src": "0:550:40"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/DeprecatedERC721.sol",
    "exportedSymbols": {
      "DeprecatedERC721": [
        10567
      ]
    },
    "id": 10568,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10543,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:40"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
        "file": "./ERC721.sol",
        "id": 10544,
        "nodeType": "ImportDirective",
        "scope": 10568,
        "sourceUnit": 10622,
        "src": "26:22:40",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10545,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10621,
              "src": "359:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$10621",
                "typeString": "contract ERC721"
              }
            },
            "id": 10546,
            "nodeType": "InheritanceSpecifier",
            "src": "359:6:40"
          }
        ],
        "contractDependencies": [
          10594,
          10614,
          10621,
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 methods shipped in OpenZeppelin v1.7.0, removed in the latest version of the standard\n@dev Only use this interface for compatibility with previously deployed contracts\n@dev Use ERC721 for interacting with new contracts which are standard-compliant",
        "fullyImplemented": false,
        "id": 10567,
        "linearizedBaseContracts": [
          10567,
          10621,
          10614,
          10594,
          10728
        ],
        "name": "DeprecatedERC721",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10551,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "takeOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10548,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10551,
                  "src": "393:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10547,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "393:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "392:18:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "417:0:40"
            },
            "scope": 10567,
            "src": "370:48:40",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10558,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10556,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10553,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10558,
                  "src": "439:11:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10552,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "439:7:40",
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
                  "id": 10555,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10558,
                  "src": "452:16:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10554,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "452:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "438:31:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10557,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "476:0:40"
            },
            "scope": 10567,
            "src": "421:56:40",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10566,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokensOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10560,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10566,
                  "src": "498:14:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10559,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "498:7:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "497:16:40"
            },
            "payable": false,
            "returnParameters": {
              "id": 10565,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10564,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10566,
                  "src": "535:9:40",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 10562,
                      "name": "uint256",
                      "nodeType": "ElementaryTypeName",
                      "src": "535:7:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 10563,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "535:9:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "534:11:40"
            },
            "scope": 10567,
            "src": "480:66:40",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10568,
        "src": "330:218:40"
      }
    ],
    "src": "0:550:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:23.853Z"
}
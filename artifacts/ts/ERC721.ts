export const ERC721 = 
{
  "contractName": "ERC721",
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC721Basic.sol\";\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Enumerable is ERC721Basic {\n  function totalSupply() public view returns (uint256);\n  function tokenOfOwnerByIndex(address _owner, uint256 _index) public view returns (uint256 _tokenId);\n  function tokenByIndex(uint256 _index) public view returns (uint256);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, optional metadata extension\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Metadata is ERC721Basic {\n  function name() public view returns (string _name);\n  function symbol() public view returns (string _symbol);\n  function tokenURI(uint256 _tokenId) public view returns (string);\n}\n\n/**\n * @title ERC-721 Non-Fungible Token Standard, full implementation interface\n * @dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721 is ERC721Basic, ERC721Enumerable, ERC721Metadata {\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        10621
      ],
      "ERC721Enumerable": [
        10594
      ],
      "ERC721Metadata": [
        10614
      ]
    },
    "id": 10622,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10569,
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
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 10570,
        "nodeType": "ImportDirective",
        "scope": 10622,
        "sourceUnit": 10729,
        "src": "26:27:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10571,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "243:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10572,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:41"
          }
        ],
        "contractDependencies": [
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10594,
        "linearizedBaseContracts": [
          10594,
          10728
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10577,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10573,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10575,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10577,
                  "src": "303:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10574,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:41"
            },
            "scope": 10594,
            "src": "259:53:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10586,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10579,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "344:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:41",
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
                  "id": 10581,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "360:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10584,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "397:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:41"
            },
            "scope": 10594,
            "src": "315:100:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10593,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10588,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10593,
                  "src": "440:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10591,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10593,
                  "src": "477:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:41"
            },
            "scope": 10594,
            "src": "418:68:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10622,
        "src": "214:274:41"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10595,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "673:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10596,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:41"
          }
        ],
        "contractDependencies": [
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10614,
        "linearizedBaseContracts": [
          10614,
          10728
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10601,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10599,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10601,
                  "src": "726:12:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10598,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:41"
            },
            "scope": 10614,
            "src": "689:51:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10606,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10604,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 10606,
                  "src": "782:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10603,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:41"
            },
            "scope": 10614,
            "src": "743:55:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10613,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10608,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10613,
                  "src": "819:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10613,
                  "src": "858:6:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10610,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:41"
            },
            "scope": 10614,
            "src": "801:65:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10622,
        "src": "646:222:41"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10615,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "1047:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10616,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:41"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10617,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10594,
              "src": "1060:16:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$10594",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 10618,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:41"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10619,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10614,
              "src": "1078:14:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$10614",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 10620,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:41"
          }
        ],
        "contractDependencies": [
          10594,
          10614,
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10621,
        "linearizedBaseContracts": [
          10621,
          10614,
          10594,
          10728
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 10622,
        "src": "1028:68:41"
      }
    ],
    "src": "0:1097:41"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        10621
      ],
      "ERC721Enumerable": [
        10594
      ],
      "ERC721Metadata": [
        10614
      ]
    },
    "id": 10622,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10569,
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
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 10570,
        "nodeType": "ImportDirective",
        "scope": 10622,
        "sourceUnit": 10729,
        "src": "26:27:41",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10571,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "243:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10572,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:41"
          }
        ],
        "contractDependencies": [
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10594,
        "linearizedBaseContracts": [
          10594,
          10728
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10577,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10573,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10576,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10575,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10577,
                  "src": "303:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10574,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:41"
            },
            "scope": 10594,
            "src": "259:53:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10586,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10582,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10579,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "344:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:41",
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
                  "id": 10581,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "360:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10580,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10585,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10584,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10586,
                  "src": "397:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10583,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:41"
            },
            "scope": 10594,
            "src": "315:100:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10593,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10589,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10588,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10593,
                  "src": "440:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10587,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10591,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10593,
                  "src": "477:7:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10590,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:41"
            },
            "scope": 10594,
            "src": "418:68:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10622,
        "src": "214:274:41"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10595,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "673:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10596,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:41"
          }
        ],
        "contractDependencies": [
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10614,
        "linearizedBaseContracts": [
          10614,
          10728
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10601,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10597,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10600,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10599,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10601,
                  "src": "726:12:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10598,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:41"
            },
            "scope": 10614,
            "src": "689:51:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10606,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10602,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10605,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10604,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 10606,
                  "src": "782:14:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10603,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:41"
            },
            "scope": 10614,
            "src": "743:55:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10613,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10609,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10608,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10613,
                  "src": "819:16:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10607,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:41"
            },
            "payable": false,
            "returnParameters": {
              "id": 10612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10611,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10613,
                  "src": "858:6:41",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10610,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:41",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:41"
            },
            "scope": 10614,
            "src": "801:65:41",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10622,
        "src": "646:222:41"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10615,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10728,
              "src": "1047:11:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10728",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10616,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:41"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10617,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10594,
              "src": "1060:16:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$10594",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 10618,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:41"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10619,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10614,
              "src": "1078:14:41",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$10614",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 10620,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:41"
          }
        ],
        "contractDependencies": [
          10594,
          10614,
          10728
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10621,
        "linearizedBaseContracts": [
          10621,
          10614,
          10594,
          10728
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 10622,
        "src": "1028:68:41"
      }
    ],
    "src": "0:1097:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:23.854Z"
}
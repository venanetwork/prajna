export const ERC721Metadata = 
{
  "contractName": "ERC721Metadata",
  "abi": [
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
        10865
      ],
      "ERC721Enumerable": [
        10838
      ],
      "ERC721Metadata": [
        10858
      ]
    },
    "id": 10866,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10813,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 10814,
        "nodeType": "ImportDirective",
        "scope": 10866,
        "sourceUnit": 10973,
        "src": "26:27:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10815,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "243:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10816,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:42"
          }
        ],
        "contractDependencies": [
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10838,
        "linearizedBaseContracts": [
          10838,
          10972
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10821,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10819,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10821,
                  "src": "303:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:42"
            },
            "scope": 10838,
            "src": "259:53:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10830,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10823,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "344:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:42",
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
                  "id": 10825,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "360:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10828,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "397:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:42"
            },
            "scope": 10838,
            "src": "315:100:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10832,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10837,
                  "src": "440:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10835,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10837,
                  "src": "477:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10834,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:42"
            },
            "scope": 10838,
            "src": "418:68:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10866,
        "src": "214:274:42"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10839,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "673:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10840,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:42"
          }
        ],
        "contractDependencies": [
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10858,
        "linearizedBaseContracts": [
          10858,
          10972
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10845,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10843,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10845,
                  "src": "726:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10842,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:42"
            },
            "scope": 10858,
            "src": "689:51:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10850,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10848,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 10850,
                  "src": "782:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10847,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:42"
            },
            "scope": 10858,
            "src": "743:55:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10852,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10857,
                  "src": "819:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10855,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10857,
                  "src": "858:6:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10854,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:42"
            },
            "scope": 10858,
            "src": "801:65:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10866,
        "src": "646:222:42"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10859,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "1047:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10860,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:42"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10861,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10838,
              "src": "1060:16:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$10838",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 10862,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:42"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10863,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10858,
              "src": "1078:14:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$10858",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 10864,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:42"
          }
        ],
        "contractDependencies": [
          10838,
          10858,
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10865,
        "linearizedBaseContracts": [
          10865,
          10858,
          10838,
          10972
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 10866,
        "src": "1028:68:42"
      }
    ],
    "src": "0:1097:42"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721.sol",
    "exportedSymbols": {
      "ERC721": [
        10865
      ],
      "ERC721Enumerable": [
        10838
      ],
      "ERC721Metadata": [
        10858
      ]
    },
    "id": 10866,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10813,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:42"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
        "file": "./ERC721Basic.sol",
        "id": 10814,
        "nodeType": "ImportDirective",
        "scope": 10866,
        "sourceUnit": 10973,
        "src": "26:27:42",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10815,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "243:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10816,
            "nodeType": "InheritanceSpecifier",
            "src": "243:11:42"
          }
        ],
        "contractDependencies": [
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional enumeration extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10838,
        "linearizedBaseContracts": [
          10838,
          10972
        ],
        "name": "ERC721Enumerable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10821,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "totalSupply",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10817,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "279:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10820,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10819,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10821,
                  "src": "303:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10818,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "303:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "302:9:42"
            },
            "scope": 10838,
            "src": "259:53:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10830,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenOfOwnerByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10826,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10823,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "344:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10822,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "344:7:42",
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
                  "id": 10825,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "360:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10824,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "360:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "343:32:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10829,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10828,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10830,
                  "src": "397:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10827,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "397:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "396:18:42"
            },
            "scope": 10838,
            "src": "315:100:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10837,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenByIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10833,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10832,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 10837,
                  "src": "440:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10831,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "440:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "439:16:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10836,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10835,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10837,
                  "src": "477:7:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10834,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "477:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "476:9:42"
            },
            "scope": 10838,
            "src": "418:68:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10866,
        "src": "214:274:42"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10839,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "673:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10840,
            "nodeType": "InheritanceSpecifier",
            "src": "673:11:42"
          }
        ],
        "contractDependencies": [
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, optional metadata extension\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10858,
        "linearizedBaseContracts": [
          10858,
          10972
        ],
        "name": "ERC721Metadata",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": null,
            "documentation": null,
            "id": 10845,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "name",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "702:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10844,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10843,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 10845,
                  "src": "726:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10842,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "726:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "725:14:42"
            },
            "scope": 10858,
            "src": "689:51:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10850,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "symbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "758:2:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10848,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 10850,
                  "src": "782:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10847,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "782:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "781:16:42"
            },
            "scope": 10858,
            "src": "743:55:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10857,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "tokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10852,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10857,
                  "src": "819:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10851,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "819:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "818:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10855,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10857,
                  "src": "858:6:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 10854,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "858:6:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "857:8:42"
            },
            "scope": 10858,
            "src": "801:65:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10866,
        "src": "646:222:42"
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10859,
              "name": "ERC721Basic",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10972,
              "src": "1047:11:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Basic_$10972",
                "typeString": "contract ERC721Basic"
              }
            },
            "id": 10860,
            "nodeType": "InheritanceSpecifier",
            "src": "1047:11:42"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10861,
              "name": "ERC721Enumerable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10838,
              "src": "1060:16:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Enumerable_$10838",
                "typeString": "contract ERC721Enumerable"
              }
            },
            "id": 10862,
            "nodeType": "InheritanceSpecifier",
            "src": "1060:16:42"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 10863,
              "name": "ERC721Metadata",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10858,
              "src": "1078:14:42",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Metadata_$10858",
                "typeString": "contract ERC721Metadata"
              }
            },
            "id": 10864,
            "nodeType": "InheritanceSpecifier",
            "src": "1078:14:42"
          }
        ],
        "contractDependencies": [
          10838,
          10858,
          10972
        ],
        "contractKind": "contract",
        "documentation": "@title ERC-721 Non-Fungible Token Standard, full implementation interface\n@dev See https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10865,
        "linearizedBaseContracts": [
          10865,
          10858,
          10838,
          10972
        ],
        "name": "ERC721",
        "nodeType": "ContractDefinition",
        "nodes": [],
        "scope": 10866,
        "src": "1028:68:42"
      }
    ],
    "src": "0:1097:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:05:01.678Z"
}
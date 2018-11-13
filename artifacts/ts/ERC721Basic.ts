export const ERC721Basic = 
{
  "contractName": "ERC721Basic",
  "abi": [
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
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 Non-Fungible Token Standard basic interface\n * @dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md\n */\ncontract ERC721Basic {\n  event Transfer(address indexed _from, address indexed _to, uint256 _tokenId);\n  event Approval(address indexed _owner, address indexed _approved, uint256 _tokenId);\n  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);  \n\n  function balanceOf(address _owner) public view returns (uint256 _balance);\n  function ownerOf(uint256 _tokenId) public view returns (address _owner);\n  function exists(uint256 _tokenId) public view returns (bool _exists);\n  \n  function approve(address _to, uint256 _tokenId) public;\n  function getApproved(uint256 _tokenId) public view returns (address _operator);\n  \n  function setApprovalForAll(address _operator, bool _approved) public;\n  function isApprovedForAll(address _owner, address _operator) public view returns (bool);\n\n  function transferFrom(address _from, address _to, uint256 _tokenId) public;\n  function safeTransferFrom(address _from, address _to, uint256 _tokenId) public;  \n  function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes _data) public;\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
    "exportedSymbols": {
      "ERC721Basic": [
        10972
      ]
    },
    "id": 10973,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10867,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10972,
        "linearizedBaseContracts": [
          10972
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10875,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10869,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "208:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:43",
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
                  "id": 10871,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "231:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:43",
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
                  "id": 10873,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "252:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:43"
            },
            "src": "193:77:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10883,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10877,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "288:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:43",
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
                  "id": 10879,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "312:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10878,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:43",
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
                  "id": 10881,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "339:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:43"
            },
            "src": "273:84:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10891,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10885,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "381:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10884,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:43",
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
                  "id": 10887,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "405:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10886,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:43",
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
                  "id": 10889,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "432:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10888,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:43"
            },
            "src": "360:88:43"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10898,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10893,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10898,
                  "src": "473:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10896,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 10898,
                  "src": "510:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:43"
            },
            "scope": 10972,
            "src": "454:74:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10905,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10900,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10905,
                  "src": "548:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10903,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10905,
                  "src": "587:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10902,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:43"
            },
            "scope": 10972,
            "src": "531:72:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10907,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10912,
                  "src": "622:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10910,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 10912,
                  "src": "661:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:43"
            },
            "scope": 10972,
            "src": "606:69:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10919,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10914,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10919,
                  "src": "698:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10913,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:43",
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
                  "id": 10916,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10919,
                  "src": "711:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:43"
            },
            "scope": 10972,
            "src": "681:55:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10926,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10921,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10926,
                  "src": "760:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10924,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10926,
                  "src": "799:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10923,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:43"
            },
            "scope": 10972,
            "src": "739:79:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10928,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "851:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10927,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:43",
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
                  "id": 10930,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "870:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:43"
            },
            "scope": 10972,
            "src": "824:69:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10942,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10935,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "922:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:43",
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
                  "id": 10937,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "938:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10936,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10940,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "978:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10939,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:43"
            },
            "scope": 10972,
            "src": "896:88:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10951,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10944,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1010:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10943,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:43",
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
                  "id": 10946,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1025:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10945,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:43",
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
                  "id": 10948,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1038:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:43"
            },
            "scope": 10972,
            "src": "988:75:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10960,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10953,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1092:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:43",
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
                  "id": 10955,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1107:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10954,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:43",
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
                  "id": 10957,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1120:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10956,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:43"
            },
            "scope": 10972,
            "src": "1066:79:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10969,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10962,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1176:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10961,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:43",
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
                  "id": 10964,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1191:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:43",
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
                  "id": 10966,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1204:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:43",
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
                  "id": 10968,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1222:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10967,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10970,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:43"
            },
            "scope": 10972,
            "src": "1150:92:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10973,
        "src": "168:1076:43"
      }
    ],
    "src": "0:1245:43"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
    "exportedSymbols": {
      "ERC721Basic": [
        10972
      ]
    },
    "id": 10973,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10867,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:43"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10972,
        "linearizedBaseContracts": [
          10972
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10875,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10869,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "208:21:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10868,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:43",
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
                  "id": 10871,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "231:19:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10870,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:43",
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
                  "id": 10873,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10875,
                  "src": "252:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:43"
            },
            "src": "193:77:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10883,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10882,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10877,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "288:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10876,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:43",
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
                  "id": 10879,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "312:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10878,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:43",
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
                  "id": 10881,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10883,
                  "src": "339:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10880,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:43"
            },
            "src": "273:84:43"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10891,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10890,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10885,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "381:22:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10884,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:43",
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
                  "id": 10887,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "405:25:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10886,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:43",
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
                  "id": 10889,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10891,
                  "src": "432:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10888,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:43"
            },
            "src": "360:88:43"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10898,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10894,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10893,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10898,
                  "src": "473:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10892,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10897,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10896,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 10898,
                  "src": "510:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10895,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:43"
            },
            "scope": 10972,
            "src": "454:74:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10905,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10900,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10905,
                  "src": "548:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10899,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10904,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10903,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10905,
                  "src": "587:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10902,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:43"
            },
            "scope": 10972,
            "src": "531:72:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10912,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10908,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10907,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10912,
                  "src": "622:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10906,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10910,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 10912,
                  "src": "661:12:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10909,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:43"
            },
            "scope": 10972,
            "src": "606:69:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10919,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10917,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10914,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10919,
                  "src": "698:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10913,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:43",
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
                  "id": 10916,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10919,
                  "src": "711:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10915,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10918,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:43"
            },
            "scope": 10972,
            "src": "681:55:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10926,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10922,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10921,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10926,
                  "src": "760:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10920,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10925,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10924,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10926,
                  "src": "799:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10923,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:43"
            },
            "scope": 10972,
            "src": "739:79:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10933,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10928,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "851:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10927,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:43",
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
                  "id": 10930,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10933,
                  "src": "870:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10929,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:43"
            },
            "scope": 10972,
            "src": "824:69:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10942,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10938,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10935,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "922:14:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10934,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:43",
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
                  "id": 10937,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "938:17:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10936,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10941,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10940,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10942,
                  "src": "978:4:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10939,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:43"
            },
            "scope": 10972,
            "src": "896:88:43",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10951,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10949,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10944,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1010:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10943,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:43",
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
                  "id": 10946,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1025:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10945,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:43",
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
                  "id": 10948,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10951,
                  "src": "1038:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10947,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10950,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:43"
            },
            "scope": 10972,
            "src": "988:75:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10960,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10958,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10953,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1092:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10952,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:43",
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
                  "id": 10955,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1107:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10954,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:43",
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
                  "id": 10957,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10960,
                  "src": "1120:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10956,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10959,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:43"
            },
            "scope": 10972,
            "src": "1066:79:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10971,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10969,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10962,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1176:13:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10961,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:43",
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
                  "id": 10964,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1191:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10963,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:43",
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
                  "id": 10966,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1204:16:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10965,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:43",
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
                  "id": 10968,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10971,
                  "src": "1222:11:43",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10967,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:43",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:43"
            },
            "payable": false,
            "returnParameters": {
              "id": 10970,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:43"
            },
            "scope": 10972,
            "src": "1150:92:43",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10973,
        "src": "168:1076:43"
      }
    ],
    "src": "0:1245:43"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T08:15:10.684Z"
}
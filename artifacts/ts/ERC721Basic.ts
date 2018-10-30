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
        10728
      ]
    },
    "id": 10729,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10623,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10728,
        "linearizedBaseContracts": [
          10728
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10631,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10625,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "208:21:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:42",
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
                  "id": 10627,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "231:19:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10626,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:42",
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
                  "id": 10629,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "252:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:42"
            },
            "src": "193:77:42"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10639,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10633,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "288:22:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10632,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:42",
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
                  "id": 10635,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "312:25:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10634,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:42",
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
                  "id": 10637,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "339:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10636,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:42"
            },
            "src": "273:84:42"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10647,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10641,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "381:22:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:42",
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
                  "id": 10643,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "405:25:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:42",
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
                  "id": 10645,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "432:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10644,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:42"
            },
            "src": "360:88:42"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10654,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10649,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10654,
                  "src": "473:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10652,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 10654,
                  "src": "510:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10651,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:42"
            },
            "scope": 10728,
            "src": "454:74:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10661,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10656,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10661,
                  "src": "548:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10659,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10661,
                  "src": "587:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:42"
            },
            "scope": 10728,
            "src": "531:72:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10668,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10663,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10668,
                  "src": "622:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10662,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10666,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 10668,
                  "src": "661:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10665,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:42"
            },
            "scope": 10728,
            "src": "606:69:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10675,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10670,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10675,
                  "src": "698:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:42",
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
                  "id": 10672,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10675,
                  "src": "711:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:42"
            },
            "scope": 10728,
            "src": "681:55:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10682,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10677,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10682,
                  "src": "760:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10680,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10682,
                  "src": "799:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:42"
            },
            "scope": 10728,
            "src": "739:79:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10689,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10684,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10689,
                  "src": "851:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:42",
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
                  "id": 10686,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10689,
                  "src": "870:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10685,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:42"
            },
            "scope": 10728,
            "src": "824:69:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10698,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10691,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "922:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:42",
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
                  "id": 10693,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "938:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10696,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "978:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10695,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:42"
            },
            "scope": 10728,
            "src": "896:88:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10700,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1010:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:42",
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
                  "id": 10702,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1025:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:42",
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
                  "id": 10704,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1038:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10703,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:42"
            },
            "scope": 10728,
            "src": "988:75:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10709,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1092:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:42",
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
                  "id": 10711,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1107:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:42",
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
                  "id": 10713,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1120:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:42"
            },
            "scope": 10728,
            "src": "1066:79:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10727,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10718,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1176:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:42",
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
                  "id": 10720,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1191:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:42",
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
                  "id": 10722,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1204:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:42",
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
                  "id": 10724,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1222:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10723,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:42"
            },
            "scope": 10728,
            "src": "1150:92:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10729,
        "src": "168:1076:42"
      }
    ],
    "src": "0:1245:42"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Basic.sol",
    "exportedSymbols": {
      "ERC721Basic": [
        10728
      ]
    },
    "id": 10729,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 10623,
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
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 Non-Fungible Token Standard basic interface\n@dev see https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md",
        "fullyImplemented": false,
        "id": 10728,
        "linearizedBaseContracts": [
          10728
        ],
        "name": "ERC721Basic",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 10631,
            "name": "Transfer",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10625,
                  "indexed": true,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "208:21:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10624,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "208:7:42",
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
                  "id": 10627,
                  "indexed": true,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "231:19:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10626,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "231:7:42",
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
                  "id": 10629,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10631,
                  "src": "252:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10628,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "252:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "207:62:42"
            },
            "src": "193:77:42"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10639,
            "name": "Approval",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10638,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10633,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "288:22:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10632,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "288:7:42",
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
                  "id": 10635,
                  "indexed": true,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "312:25:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10634,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "312:7:42",
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
                  "id": 10637,
                  "indexed": false,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10639,
                  "src": "339:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10636,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "339:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "287:69:42"
            },
            "src": "273:84:42"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 10647,
            "name": "ApprovalForAll",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 10646,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10641,
                  "indexed": true,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "381:22:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10640,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "381:7:42",
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
                  "id": 10643,
                  "indexed": true,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "405:25:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10642,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "405:7:42",
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
                  "id": 10645,
                  "indexed": false,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10647,
                  "src": "432:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10644,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "432:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "380:67:42"
            },
            "src": "360:88:42"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10654,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "balanceOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10650,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10649,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10654,
                  "src": "473:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10648,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "473:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "472:16:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10653,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10652,
                  "name": "_balance",
                  "nodeType": "VariableDeclaration",
                  "scope": 10654,
                  "src": "510:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10651,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "510:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "509:18:42"
            },
            "scope": 10728,
            "src": "454:74:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10661,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "ownerOf",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10657,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10656,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10661,
                  "src": "548:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10655,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "548:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "547:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10660,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10659,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10661,
                  "src": "587:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10658,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "587:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "586:16:42"
            },
            "scope": 10728,
            "src": "531:72:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10668,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "exists",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10663,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10668,
                  "src": "622:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10662,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "622:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "621:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10667,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10666,
                  "name": "_exists",
                  "nodeType": "VariableDeclaration",
                  "scope": 10668,
                  "src": "661:12:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10665,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "661:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "660:14:42"
            },
            "scope": 10728,
            "src": "606:69:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10675,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10670,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10675,
                  "src": "698:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "698:7:42",
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
                  "id": 10672,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10675,
                  "src": "711:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10671,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "711:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "697:31:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "735:0:42"
            },
            "scope": 10728,
            "src": "681:55:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10682,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getApproved",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10678,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10677,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10682,
                  "src": "760:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10676,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "760:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "759:18:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10681,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10680,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10682,
                  "src": "799:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10679,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "799:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "798:19:42"
            },
            "scope": 10728,
            "src": "739:79:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10689,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10684,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10689,
                  "src": "851:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10683,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "851:7:42",
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
                  "id": 10686,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 10689,
                  "src": "870:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10685,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "850:35:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "892:0:42"
            },
            "scope": 10728,
            "src": "824:69:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10698,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isApprovedForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10691,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "922:14:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10690,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "922:7:42",
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
                  "id": 10693,
                  "name": "_operator",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "938:17:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10692,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "938:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "921:35:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10697,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10696,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 10698,
                  "src": "978:4:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 10695,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "978:4:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "977:6:42"
            },
            "scope": 10728,
            "src": "896:88:42",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10707,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10705,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10700,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1010:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10699,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1010:7:42",
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
                  "id": 10702,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1025:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1025:7:42",
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
                  "id": 10704,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10707,
                  "src": "1038:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10703,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1038:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1009:46:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10706,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1062:0:42"
            },
            "scope": 10728,
            "src": "988:75:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10716,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10714,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10709,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1092:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10708,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1092:7:42",
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
                  "id": 10711,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1107:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10710,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1107:7:42",
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
                  "id": 10713,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10716,
                  "src": "1120:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10712,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1120:7:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1091:46:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10715,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1144:0:42"
            },
            "scope": 10728,
            "src": "1066:79:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": null,
            "documentation": null,
            "id": 10727,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 10725,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 10718,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1176:13:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10717,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1176:7:42",
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
                  "id": 10720,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1191:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 10719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1191:7:42",
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
                  "id": 10722,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1204:16:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 10721,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:42",
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
                  "id": 10724,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 10727,
                  "src": "1222:11:42",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 10723,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:42",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1175:59:42"
            },
            "payable": false,
            "returnParameters": {
              "id": 10726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1241:0:42"
            },
            "scope": 10728,
            "src": "1150:92:42",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 10729,
        "src": "168:1076:42"
      }
    ],
    "src": "0:1245:42"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-18T08:16:26.411Z"
}
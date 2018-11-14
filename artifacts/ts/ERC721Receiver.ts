export const ERC721Receiver = 
{
  "contractName": "ERC721Receiver",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
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
      "name": "onERC721Received",
      "outputs": [
        {
          "name": "",
          "type": "bytes4"
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
  "source": "pragma solidity ^0.4.18;\n\n/**\n * @title ERC721 token receiver interface\n * @dev Interface for any contract that wants to support safeTransfers\n *  from ERC721 asset contracts.\n */\ncontract ERC721Receiver {\n  /**\n   * @dev Magic value to be returned upon successful reception of an NFT\n   *  Equals to `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`,\n   *  which can be also obtained as `ERC721Receiver(0).onERC721Received.selector`\n   */\n  bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba; \n\n  /**\n   * @notice Handle the receipt of an NFT\n   * @dev The ERC721 smart contract calls this function on the recipient\n   *  after a `safetransfer`. This function MAY throw to revert and reject the\n   *  transfer. This function MUST use 50,000 gas or less. Return of other\n   *  than the magic value MUST result in the transaction being reverted.\n   *  Note: the contract address is always the message sender.\n   * @param _from The sending address \n   * @param _tokenId The NFT identifier which is being transfered\n   * @param _data Additional data with no specified format\n   * @return `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`\n   */\n  function onERC721Received(address _from, uint256 _tokenId, bytes _data) public returns(bytes4);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
    "exportedSymbols": {
      "ERC721Receiver": [
        11572
      ]
    },
    "id": 11573,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11557,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:45"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\n from ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 11572,
        "linearizedBaseContracts": [
          11572
        ],
        "name": "ERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 11560,
            "name": "ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 11572,
            "src": "455:44:45",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 11558,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:45",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30786630623965356261",
              "id": 11559,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "489:10:45",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4038714810_by_1",
                "typeString": "int_const 4038714810"
              },
              "value": "0xf0b9e5ba"
            },
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\n after a `safetransfer`. This function MAY throw to revert and reject the\n transfer. This function MUST use 50,000 gas or less. Return of other\n than the magic value MUST result in the transaction being reverted.\n Note: the contract address is always the message sender.\n@param _from The sending address \n@param _tokenId The NFT identifier which is being transfered\n@param _data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`",
            "id": 11571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11562,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1189:13:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11561,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:7:45",
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
                  "id": 11564,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1204:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:45",
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
                  "id": 11566,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1222:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11565,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1188:46:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 11570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1250:6:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11568,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1249:8:45"
            },
            "scope": 11572,
            "src": "1163:95:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 11573,
        "src": "180:1080:45"
      }
    ],
    "src": "0:1261:45"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol",
    "exportedSymbols": {
      "ERC721Receiver": [
        11572
      ]
    },
    "id": 11573,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 11557,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".18"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:45"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title ERC721 token receiver interface\n@dev Interface for any contract that wants to support safeTransfers\n from ERC721 asset contracts.",
        "fullyImplemented": false,
        "id": 11572,
        "linearizedBaseContracts": [
          11572
        ],
        "name": "ERC721Receiver",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 11560,
            "name": "ERC721_RECEIVED",
            "nodeType": "VariableDeclaration",
            "scope": 11572,
            "src": "455:44:45",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes4",
              "typeString": "bytes4"
            },
            "typeName": {
              "id": 11558,
              "name": "bytes4",
              "nodeType": "ElementaryTypeName",
              "src": "455:6:45",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes4",
                "typeString": "bytes4"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30786630623965356261",
              "id": 11559,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "489:10:45",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_4038714810_by_1",
                "typeString": "int_const 4038714810"
              },
              "value": "0xf0b9e5ba"
            },
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": "@notice Handle the receipt of an NFT\n@dev The ERC721 smart contract calls this function on the recipient\n after a `safetransfer`. This function MAY throw to revert and reject the\n transfer. This function MUST use 50,000 gas or less. Return of other\n than the magic value MUST result in the transaction being reverted.\n Note: the contract address is always the message sender.\n@param _from The sending address \n@param _tokenId The NFT identifier which is being transfered\n@param _data Additional data with no specified format\n@return `bytes4(keccak256(\"onERC721Received(address,uint256,bytes)\"))`",
            "id": 11571,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "onERC721Received",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 11567,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11562,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1189:13:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 11561,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1189:7:45",
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
                  "id": 11564,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1204:16:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 11563,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1204:7:45",
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
                  "id": 11566,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1222:11:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 11565,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:5:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1188:46:45"
            },
            "payable": false,
            "returnParameters": {
              "id": 11570,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 11569,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 11571,
                  "src": "1250:6:45",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 11568,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1250:6:45",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1249:8:45"
            },
            "scope": 11572,
            "src": "1163:95:45",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 11573,
        "src": "180:1080:45"
      }
    ],
    "src": "0:1261:45"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:05:01.730Z"
}
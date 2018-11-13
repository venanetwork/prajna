export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
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
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/mocks/MockContract.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/mocks/MockContract.sol",
    "exportedSymbols": {
      "MockContract": [
        6703
      ]
    },
    "id": 6704,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6520,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6703,
        "linearizedBaseContracts": [
          6703
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 6525,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "638:61:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6521,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 6523,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:19",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  }
                ],
                "id": 6522,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 6524,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6530,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "795:61:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string => bytes32[])"
            },
            "typeName": {
              "id": 6529,
              "keyType": {
                "id": 6526,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 6527,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 6528,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6536,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "862:75:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 6535,
              "keyType": {
                "id": 6531,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 6534,
                "keyType": {
                  "id": 6532,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 6533,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6542,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "943:68:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 6541,
              "keyType": {
                "id": 6537,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 6540,
                "keyType": {
                  "id": 6538,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 6539,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6566,
              "nodeType": "Block",
              "src": "1145:143:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6555,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6546,
                        "src": "1197:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6551,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6530,
                          "src": "1155:22:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6553,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6552,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6544,
                          "src": "1178:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1155:36:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6557,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6558,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6536,
                          "src": "1221:17:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 6561,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6559,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6544,
                          "src": "1239:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1221:31:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 6562,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6560,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6546,
                        "src": "1253:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1221:46:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6563,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6548,
                      "src": "1270:11:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 6565,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:19"
                }
              ]
            },
            "documentation": null,
            "id": 6567,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6544,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1052:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6543,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6546,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1081:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6545,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6548,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1112:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6547,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:19"
            },
            "scope": 6703,
            "src": "1018:270:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6582,
              "nodeType": "Block",
              "src": "1441:70:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6576,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6536,
                        "src": "1458:17:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 6578,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6577,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6569,
                        "src": "1476:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1458:31:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 6580,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6579,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6571,
                      "src": "1490:13:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1458:46:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6575,
                  "id": 6581,
                  "nodeType": "Return",
                  "src": "1451:53:19"
                }
              ]
            },
            "documentation": null,
            "id": 6583,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6569,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1322:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6568,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6571,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1343:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6570,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6574,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1411:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6573,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:19"
            },
            "scope": 6703,
            "src": "1294:217:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6655,
              "nodeType": "Block",
              "src": "1541:586:19",
              "statements": [
                {
                  "body": {
                    "id": 6653,
                    "nodeType": "Block",
                    "src": "1581:540:19",
                    "statements": [
                      {
                        "assignments": [
                          6597
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6597,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 6656,
                            "src": "1595:26:19",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 6596,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 6602,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6598,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6702,
                              "src": "1624:15:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 6599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 6601,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 6600,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6587,
                            "src": "1642:1:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1624:20:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:19"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 6608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 6604,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6597,
                                  "src": "1669:12:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 6603,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 6605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 6606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 6607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:19",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 6652,
                        "nodeType": "IfStatement",
                        "src": "1659:452:19",
                        "trueBody": {
                          "id": 6651,
                          "nodeType": "Block",
                          "src": "1696:415:19",
                          "statements": [
                            {
                              "body": {
                                "id": 6644,
                                "nodeType": "Block",
                                "src": "1785:250:19",
                                "statements": [
                                  {
                                    "assignments": [
                                      6623
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 6623,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 6656,
                                        "src": "1807:21:19",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 6622,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 6629,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 6624,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6530,
                                          "src": "1831:22:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 6626,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6625,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6597,
                                          "src": "1854:12:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1831:36:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 6628,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 6627,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6610,
                                        "src": "1868:1:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "1831:39:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:19"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6635,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:19",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6630,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6542,
                                            "src": "1899:13:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 6632,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6631,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6597,
                                            "src": "1913:12:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1899:27:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 6634,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6633,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6623,
                                          "src": "1927:13:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1899:42:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 6636,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:19"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6642,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:19",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6637,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6536,
                                            "src": "1970:17:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 6639,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6638,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6597,
                                            "src": "1988:12:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1970:31:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 6641,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6640,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6623,
                                          "src": "2002:13:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1970:46:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 6643,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:19"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 6618,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 6613,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6610,
                                  "src": "1731:1:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 6614,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6530,
                                      "src": "1735:22:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 6616,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 6615,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6597,
                                      "src": "1758:12:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1735:36:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 6617,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 6645,
                              "initializationExpression": {
                                "assignments": [
                                  6610
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 6610,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6656,
                                    "src": "1719:6:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 6609,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 6612,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 6611,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:19",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:19"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 6620,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:19",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 6619,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6610,
                                    "src": "1780:1:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 6621,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:19"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:19"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 6649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:19",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 6646,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6530,
                                    "src": "2060:22:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 6648,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 6647,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6597,
                                    "src": "2083:12:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2060:36:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 6650,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:19"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 6590,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6587,
                      "src": "1568:1:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6654,
                  "initializationExpression": {
                    "assignments": [
                      6587
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6587,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 6656,
                        "src": "1556:6:19",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6586,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 6589,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 6588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:19"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 6594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:19",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 6593,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6587,
                        "src": "1576:1:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 6595,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:19"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:19"
                }
              ]
            },
            "documentation": null,
            "id": 6656,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:19"
            },
            "scope": 6703,
            "src": "1517:610:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6678,
              "nodeType": "Block",
              "src": "2221:114:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6663,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6542,
                          "src": "2231:13:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 6666,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6664,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6658,
                          "src": "2245:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2231:27:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 6667,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6665,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6660,
                        "src": "2259:4:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2231:33:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 6668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6670,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6675,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6660,
                        "src": "2323:4:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6671,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6530,
                          "src": "2281:22:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6673,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6672,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6658,
                          "src": "2304:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2281:36:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6677,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:19"
                }
              ]
            },
            "documentation": null,
            "id": 6679,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6658,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6679,
                  "src": "2165:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6657,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6660,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6679,
                  "src": "2186:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6659,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:19"
            },
            "scope": 6703,
            "src": "2133:202:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6694,
              "nodeType": "Block",
              "src": "2478:57:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6688,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6542,
                        "src": "2495:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 6690,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6689,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6681,
                        "src": "2509:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2495:27:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 6692,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6691,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6683,
                      "src": "2523:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2495:33:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6687,
                  "id": 6693,
                  "nodeType": "Return",
                  "src": "2488:40:19"
                }
              ]
            },
            "documentation": null,
            "id": 6695,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6681,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2376:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6680,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6683,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2397:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6682,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6686,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2458:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6685,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:19"
            },
            "scope": 6703,
            "src": "2341:194:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6702,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6696,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6700,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 6702,
                  "src": "2586:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string[10]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6697,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 6699,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6698,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string[10]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:19"
            },
            "scope": 6703,
            "src": "2541:71:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6704,
        "src": "610:2004:19"
      }
    ],
    "src": "584:2031:19"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/mocks/MockContract.sol",
    "exportedSymbols": {
      "MockContract": [
        6703
      ]
    },
    "id": 6704,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6520,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:19"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6703,
        "linearizedBaseContracts": [
          6703
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 6525,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "638:61:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6521,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "30",
                  "id": 6523,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:19",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  },
                  "value": "0"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_rational_0_by_1",
                    "typeString": "int_const 0"
                  }
                ],
                "id": 6522,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 6524,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:19",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6530,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "795:61:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string => bytes32[])"
            },
            "typeName": {
              "id": 6529,
              "keyType": {
                "id": 6526,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 6527,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 6528,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_bytes32_$dyn_storage_ptr",
                  "typeString": "bytes32[]"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6536,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "862:75:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 6535,
              "keyType": {
                "id": 6531,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 6534,
                "keyType": {
                  "id": 6532,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 6533,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6542,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 6703,
            "src": "943:68:19",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 6541,
              "keyType": {
                "id": 6537,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:19",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 6540,
                "keyType": {
                  "id": 6538,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:19",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 6539,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:19",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  }
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6566,
              "nodeType": "Block",
              "src": "1145:143:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6555,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6546,
                        "src": "1197:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6551,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6530,
                          "src": "1155:22:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6553,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6552,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6544,
                          "src": "1178:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1155:36:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6556,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6557,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6564,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6558,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6536,
                          "src": "1221:17:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 6561,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6559,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6544,
                          "src": "1239:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1221:31:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 6562,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6560,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6546,
                        "src": "1253:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1221:46:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6563,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6548,
                      "src": "1270:11:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 6565,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:19"
                }
              ]
            },
            "documentation": null,
            "id": 6567,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6549,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6544,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1052:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6543,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6546,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1081:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6545,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6548,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6567,
                  "src": "1112:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6547,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:19"
            },
            "scope": 6703,
            "src": "1018:270:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6582,
              "nodeType": "Block",
              "src": "1441:70:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6576,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6536,
                        "src": "1458:17:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 6578,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6577,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6569,
                        "src": "1476:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1458:31:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 6580,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6579,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6571,
                      "src": "1490:13:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1458:46:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6575,
                  "id": 6581,
                  "nodeType": "Return",
                  "src": "1451:53:19"
                }
              ]
            },
            "documentation": null,
            "id": 6583,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6572,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6569,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1322:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6568,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6571,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1343:21:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6570,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6575,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6574,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6583,
                  "src": "1411:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6573,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:19"
            },
            "scope": 6703,
            "src": "1294:217:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6655,
              "nodeType": "Block",
              "src": "1541:586:19",
              "statements": [
                {
                  "body": {
                    "id": 6653,
                    "nodeType": "Block",
                    "src": "1581:540:19",
                    "statements": [
                      {
                        "assignments": [
                          6597
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6597,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 6656,
                            "src": "1595:26:19",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 6596,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 6602,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6598,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6702,
                              "src": "1624:15:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 6599,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 6601,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 6600,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6587,
                            "src": "1642:1:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "1624:20:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:19"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 6608,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 6604,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6597,
                                  "src": "1669:12:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_string_memory_ptr",
                                    "typeString": "string memory"
                                  }
                                ],
                                "id": 6603,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 6605,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:19",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 6606,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:19",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "!=",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 6607,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:19",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 6652,
                        "nodeType": "IfStatement",
                        "src": "1659:452:19",
                        "trueBody": {
                          "id": 6651,
                          "nodeType": "Block",
                          "src": "1696:415:19",
                          "statements": [
                            {
                              "body": {
                                "id": 6644,
                                "nodeType": "Block",
                                "src": "1785:250:19",
                                "statements": [
                                  {
                                    "assignments": [
                                      6623
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 6623,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 6656,
                                        "src": "1807:21:19",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 6622,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 6629,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 6624,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6530,
                                          "src": "1831:22:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 6626,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6625,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6597,
                                          "src": "1854:12:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string memory"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "1831:36:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 6628,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 6627,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6610,
                                        "src": "1868:1:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      },
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "IndexAccess",
                                      "src": "1831:39:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:19"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6635,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:19",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6630,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6542,
                                            "src": "1899:13:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 6632,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6631,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6597,
                                            "src": "1913:12:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1899:27:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 6634,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6633,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6623,
                                          "src": "1927:13:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1899:42:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bool",
                                          "typeString": "bool"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 6636,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:19"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6642,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:19",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6637,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6536,
                                            "src": "1970:17:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 6639,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6638,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6597,
                                            "src": "1988:12:19",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_string_memory_ptr",
                                              "typeString": "string memory"
                                            }
                                          },
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "nodeType": "IndexAccess",
                                          "src": "1970:31:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 6641,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6640,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6623,
                                          "src": "2002:13:19",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": true,
                                        "nodeType": "IndexAccess",
                                        "src": "1970:46:19",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      },
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 6643,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:19"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 6618,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 6613,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6610,
                                  "src": "1731:1:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "<",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 6614,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6530,
                                      "src": "1735:22:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 6616,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 6615,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6597,
                                      "src": "1758:12:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_string_memory_ptr",
                                        "typeString": "string memory"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1735:36:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 6617,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:19",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 6645,
                              "initializationExpression": {
                                "assignments": [
                                  6610
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 6610,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6656,
                                    "src": "1719:6:19",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 6609,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:19",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 6612,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 6611,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:19",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:19"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 6620,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:19",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 6619,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6610,
                                    "src": "1780:1:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "id": 6621,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:19"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:19"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 6649,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:19",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 6646,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6530,
                                    "src": "2060:22:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 6648,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 6647,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6597,
                                    "src": "2083:12:19",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2060:36:19",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                    "typeString": "bytes32[] storage ref"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 6650,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:19"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 6592,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 6590,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6587,
                      "src": "1568:1:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6654,
                  "initializationExpression": {
                    "assignments": [
                      6587
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6587,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 6656,
                        "src": "1556:6:19",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6586,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 6589,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 6588,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:19"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 6594,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:19",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 6593,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6587,
                        "src": "1576:1:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 6595,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:19"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:19"
                }
              ]
            },
            "documentation": null,
            "id": 6656,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6584,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6585,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:19"
            },
            "scope": 6703,
            "src": "1517:610:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6678,
              "nodeType": "Block",
              "src": "2221:114:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6669,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6663,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6542,
                          "src": "2231:13:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 6666,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6664,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6658,
                          "src": "2245:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2231:27:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 6667,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6665,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6660,
                        "src": "2259:4:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2231:33:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 6668,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6670,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:19"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6675,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6660,
                        "src": "2323:4:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 6671,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6530,
                          "src": "2281:22:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6673,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6672,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6658,
                          "src": "2304:12:19",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory_ptr",
                            "typeString": "string memory"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "2281:36:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6674,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6676,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6677,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:19"
                }
              ]
            },
            "documentation": null,
            "id": 6679,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6658,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6679,
                  "src": "2165:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6657,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6660,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6679,
                  "src": "2186:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6659,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:19"
            },
            "scope": 6703,
            "src": "2133:202:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6694,
              "nodeType": "Block",
              "src": "2478:57:19",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6688,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6542,
                        "src": "2495:13:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 6690,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6689,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6681,
                        "src": "2509:12:19",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "2495:27:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 6692,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6691,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6683,
                      "src": "2523:4:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2495:33:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6687,
                  "id": 6693,
                  "nodeType": "Return",
                  "src": "2488:40:19"
                }
              ]
            },
            "documentation": null,
            "id": 6695,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6684,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6681,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2376:19:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6680,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 6683,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2397:12:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6682,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6686,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 6695,
                  "src": "2458:14:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6685,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:19"
            },
            "scope": 6703,
            "src": "2341:194:19",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6702,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6696,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:19"
            },
            "payable": false,
            "returnParameters": {
              "id": 6701,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6700,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 6702,
                  "src": "2586:24:19",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string[10]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6697,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:19",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 6699,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6698,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:19",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:19",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string[10]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:19"
            },
            "scope": 6703,
            "src": "2541:71:19",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6704,
        "src": "610:2004:19"
      }
    ],
    "src": "584:2031:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T08:15:10.608Z"
}
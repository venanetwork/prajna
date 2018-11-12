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
        6459
      ]
    },
    "id": 6460,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6276,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6459,
        "linearizedBaseContracts": [
          6459
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 6281,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "638:61:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6277,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:18",
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
                  "id": 6279,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:18",
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
                "id": 6278,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 6280,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:18",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6286,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "795:61:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string => bytes32[])"
            },
            "typeName": {
              "id": 6285,
              "keyType": {
                "id": 6282,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 6283,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 6284,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:18",
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
            "id": 6292,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "862:75:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 6291,
              "keyType": {
                "id": 6287,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 6290,
                "keyType": {
                  "id": 6288,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 6289,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:18",
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
            "id": 6298,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "943:68:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 6297,
              "keyType": {
                "id": 6293,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 6296,
                "keyType": {
                  "id": 6294,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 6295,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:18",
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
              "id": 6322,
              "nodeType": "Block",
              "src": "1145:143:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6311,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6302,
                        "src": "1197:13:18",
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
                          "id": 6307,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6286,
                          "src": "1155:22:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6309,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6308,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6300,
                          "src": "1178:12:18",
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
                        "src": "1155:36:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6313,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6320,
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
                          "id": 6314,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6292,
                          "src": "1221:17:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 6317,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6315,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6300,
                          "src": "1239:12:18",
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
                        "src": "1221:31:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 6318,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6316,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6302,
                        "src": "1253:13:18",
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
                      "src": "1221:46:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6319,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6304,
                      "src": "1270:11:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 6321,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:18"
                }
              ]
            },
            "documentation": null,
            "id": 6323,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6300,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1052:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6299,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:18",
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
                  "id": 6302,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1081:21:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6301,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:18",
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
                  "id": 6304,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1112:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6303,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:18"
            },
            "scope": 6459,
            "src": "1018:270:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6338,
              "nodeType": "Block",
              "src": "1441:70:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6332,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6292,
                        "src": "1458:17:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 6334,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6333,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6325,
                        "src": "1476:12:18",
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
                      "src": "1458:31:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 6336,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6335,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6327,
                      "src": "1490:13:18",
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
                    "src": "1458:46:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6331,
                  "id": 6337,
                  "nodeType": "Return",
                  "src": "1451:53:18"
                }
              ]
            },
            "documentation": null,
            "id": 6339,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6325,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1322:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:18",
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
                  "id": 6327,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1343:21:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6330,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1411:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6329,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:18"
            },
            "scope": 6459,
            "src": "1294:217:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6411,
              "nodeType": "Block",
              "src": "1541:586:18",
              "statements": [
                {
                  "body": {
                    "id": 6409,
                    "nodeType": "Block",
                    "src": "1581:540:18",
                    "statements": [
                      {
                        "assignments": [
                          6353
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6353,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 6412,
                            "src": "1595:26:18",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 6352,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 6358,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6354,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6458,
                              "src": "1624:15:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 6355,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:18",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 6357,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 6356,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6343,
                            "src": "1642:1:18",
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
                          "src": "1624:20:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:18"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 6364,
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
                                  "id": 6360,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6353,
                                  "src": "1669:12:18",
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
                                "id": 6359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:18",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 6361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 6362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:18",
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
                            "id": 6363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:18",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 6408,
                        "nodeType": "IfStatement",
                        "src": "1659:452:18",
                        "trueBody": {
                          "id": 6407,
                          "nodeType": "Block",
                          "src": "1696:415:18",
                          "statements": [
                            {
                              "body": {
                                "id": 6400,
                                "nodeType": "Block",
                                "src": "1785:250:18",
                                "statements": [
                                  {
                                    "assignments": [
                                      6379
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 6379,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 6412,
                                        "src": "1807:21:18",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 6378,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 6385,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 6380,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6286,
                                          "src": "1831:22:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 6382,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6381,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6353,
                                          "src": "1854:12:18",
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
                                        "src": "1831:36:18",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 6384,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 6383,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6366,
                                        "src": "1868:1:18",
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
                                      "src": "1831:39:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:18"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6391,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:18",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6386,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6298,
                                            "src": "1899:13:18",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 6388,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6387,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6353,
                                            "src": "1913:12:18",
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
                                          "src": "1899:27:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 6390,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6389,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6379,
                                          "src": "1927:13:18",
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
                                        "src": "1899:42:18",
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
                                    "id": 6392,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:18"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6398,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:18",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6393,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6292,
                                            "src": "1970:17:18",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 6395,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6394,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6353,
                                            "src": "1988:12:18",
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
                                          "src": "1970:31:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 6397,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6396,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6379,
                                          "src": "2002:13:18",
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
                                        "src": "1970:46:18",
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
                                    "id": 6399,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:18"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 6374,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 6369,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6366,
                                  "src": "1731:1:18",
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
                                      "id": 6370,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6286,
                                      "src": "1735:22:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 6372,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 6371,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6353,
                                      "src": "1758:12:18",
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
                                    "src": "1735:36:18",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 6373,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:18",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:18",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 6401,
                              "initializationExpression": {
                                "assignments": [
                                  6366
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 6366,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6412,
                                    "src": "1719:6:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 6365,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 6368,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 6367,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:18",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:18"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 6376,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:18",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 6375,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6366,
                                    "src": "1780:1:18",
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
                                "id": 6377,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:18"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:18"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 6405,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:18",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 6402,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6286,
                                    "src": "2060:22:18",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 6404,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 6403,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6353,
                                    "src": "2083:12:18",
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
                                  "src": "2060:36:18",
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
                              "id": 6406,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:18"
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
                    "id": 6348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 6346,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6343,
                      "src": "1568:1:18",
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
                      "id": 6347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6410,
                  "initializationExpression": {
                    "assignments": [
                      6343
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6343,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 6412,
                        "src": "1556:6:18",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6342,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 6345,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 6344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:18"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 6350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:18",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 6349,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6343,
                        "src": "1576:1:18",
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
                    "id": 6351,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:18"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:18"
                }
              ]
            },
            "documentation": null,
            "id": 6412,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6340,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:18"
            },
            "scope": 6459,
            "src": "1517:610:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6434,
              "nodeType": "Block",
              "src": "2221:114:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6425,
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
                          "id": 6419,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6298,
                          "src": "2231:13:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 6422,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6420,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6414,
                          "src": "2245:12:18",
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
                        "src": "2231:27:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 6423,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6421,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6416,
                        "src": "2259:4:18",
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
                      "src": "2231:33:18",
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
                      "id": 6424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6426,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6431,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6416,
                        "src": "2323:4:18",
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
                          "id": 6427,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6286,
                          "src": "2281:22:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6429,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6428,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6414,
                          "src": "2304:12:18",
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
                        "src": "2281:36:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6433,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:18"
                }
              ]
            },
            "documentation": null,
            "id": 6435,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6414,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6435,
                  "src": "2165:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6413,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:18",
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
                  "id": 6416,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6435,
                  "src": "2186:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6415,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6418,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:18"
            },
            "scope": 6459,
            "src": "2133:202:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6450,
              "nodeType": "Block",
              "src": "2478:57:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6444,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6298,
                        "src": "2495:13:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 6446,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6445,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6437,
                        "src": "2509:12:18",
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
                      "src": "2495:27:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 6448,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6447,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6439,
                      "src": "2523:4:18",
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
                    "src": "2495:33:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6443,
                  "id": 6449,
                  "nodeType": "Return",
                  "src": "2488:40:18"
                }
              ]
            },
            "documentation": null,
            "id": 6451,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6437,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2376:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6436,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:18",
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
                  "id": 6439,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2397:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6438,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6442,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2458:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6441,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:18"
            },
            "scope": 6459,
            "src": "2341:194:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6452,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6456,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "2586:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string[10]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6453,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 6455,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string[10]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:18"
            },
            "scope": 6459,
            "src": "2541:71:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6460,
        "src": "610:2004:18"
      }
    ],
    "src": "584:2031:18"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/mocks/MockContract.sol",
    "exportedSymbols": {
      "MockContract": [
        6459
      ]
    },
    "id": 6460,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 6276,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:18"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": false,
        "id": 6459,
        "linearizedBaseContracts": [
          6459
        ],
        "name": "MockContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 6281,
            "name": "DEFAULT_SIGNATURE_ARGS",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "638:61:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 6277,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "638:7:18",
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
                  "id": 6279,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "number",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "697:1:18",
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
                "id": 6278,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "lValueRequested": false,
                "nodeType": "ElementaryTypeNameExpression",
                "src": "689:7:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_type$_t_bytes32_$",
                  "typeString": "type(bytes32)"
                },
                "typeName": "bytes32"
              },
              "id": 6280,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "typeConversion",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "689:10:18",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 6286,
            "name": "functionCallSignatures",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "795:61:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
              "typeString": "mapping(string => bytes32[])"
            },
            "typeName": {
              "id": 6285,
              "keyType": {
                "id": 6282,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "804:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "795:29:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                "typeString": "mapping(string => bytes32[])"
              },
              "valueType": {
                "baseType": {
                  "id": 6283,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "814:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "id": 6284,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "814:9:18",
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
            "id": 6292,
            "name": "mockedReturnValue",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "862:75:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bytes32))"
            },
            "typeName": {
              "id": 6291,
              "keyType": {
                "id": 6287,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "871:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "862:48:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bytes32))"
              },
              "valueType": {
                "id": 6290,
                "keyType": {
                  "id": 6288,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "890:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "881:28:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                  "typeString": "mapping(bytes32 => bytes32)"
                },
                "valueType": {
                  "id": 6289,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "901:7:18",
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
            "id": 6298,
            "name": "functionCalls",
            "nodeType": "VariableDeclaration",
            "scope": 6459,
            "src": "943:68:18",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
              "typeString": "mapping(string => mapping(bytes32 => bool))"
            },
            "typeName": {
              "id": 6297,
              "keyType": {
                "id": 6293,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "952:6:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              },
              "nodeType": "Mapping",
              "src": "943:45:18",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                "typeString": "mapping(string => mapping(bytes32 => bool))"
              },
              "valueType": {
                "id": 6296,
                "keyType": {
                  "id": 6294,
                  "name": "bytes32",
                  "nodeType": "ElementaryTypeName",
                  "src": "971:7:18",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  }
                },
                "nodeType": "Mapping",
                "src": "962:25:18",
                "typeDescriptions": {
                  "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                  "typeString": "mapping(bytes32 => bool)"
                },
                "valueType": {
                  "id": 6295,
                  "name": "bool",
                  "nodeType": "ElementaryTypeName",
                  "src": "982:4:18",
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
              "id": 6322,
              "nodeType": "Block",
              "src": "1145:143:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6311,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6302,
                        "src": "1197:13:18",
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
                          "id": 6307,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6286,
                          "src": "1155:22:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6309,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6308,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6300,
                          "src": "1178:12:18",
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
                        "src": "1155:36:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6310,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1155:41:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6312,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1155:56:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6313,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:56:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6320,
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
                          "id": 6314,
                          "name": "mockedReturnValue",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6292,
                          "src": "1221:17:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                          }
                        },
                        "id": 6317,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6315,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6300,
                          "src": "1239:12:18",
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
                        "src": "1221:31:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                          "typeString": "mapping(bytes32 => bytes32)"
                        }
                      },
                      "id": 6318,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6316,
                        "name": "argsSignature",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6302,
                        "src": "1253:13:18",
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
                      "src": "1221:46:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 6319,
                      "name": "returnValue",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6304,
                      "src": "1270:11:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "src": "1221:60:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "id": 6321,
                  "nodeType": "ExpressionStatement",
                  "src": "1221:60:18"
                }
              ]
            },
            "documentation": null,
            "id": 6323,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "mockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6305,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6300,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1052:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6299,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1052:6:18",
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
                  "id": 6302,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1081:21:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6301,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1081:7:18",
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
                  "id": 6304,
                  "name": "returnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6323,
                  "src": "1112:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6303,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1112:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1042:95:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6306,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:18"
            },
            "scope": 6459,
            "src": "1018:270:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6338,
              "nodeType": "Block",
              "src": "1441:70:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6332,
                        "name": "mockedReturnValue",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6292,
                        "src": "1458:17:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                        }
                      },
                      "id": 6334,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6333,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6325,
                        "src": "1476:12:18",
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
                      "src": "1458:31:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                        "typeString": "mapping(bytes32 => bytes32)"
                      }
                    },
                    "id": 6336,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6335,
                      "name": "argsSignature",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6327,
                      "src": "1490:13:18",
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
                    "src": "1458:46:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "functionReturnParameters": 6331,
                  "id": 6337,
                  "nodeType": "Return",
                  "src": "1451:53:18"
                }
              ]
            },
            "documentation": null,
            "id": 6339,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getMockReturnValue",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6328,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6325,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1322:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6324,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1322:6:18",
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
                  "id": 6327,
                  "name": "argsSignature",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1343:21:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6326,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1343:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1321:44:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6331,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6330,
                  "name": "_mockReturnValue",
                  "nodeType": "VariableDeclaration",
                  "scope": 6339,
                  "src": "1411:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6329,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1411:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1410:26:18"
            },
            "scope": 6459,
            "src": "1294:217:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6411,
              "nodeType": "Block",
              "src": "1541:586:18",
              "statements": [
                {
                  "body": {
                    "id": 6409,
                    "nodeType": "Block",
                    "src": "1581:540:18",
                    "statements": [
                      {
                        "assignments": [
                          6353
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 6353,
                            "name": "functionName",
                            "nodeType": "VariableDeclaration",
                            "scope": 6412,
                            "src": "1595:26:18",
                            "stateVariable": false,
                            "storageLocation": "memory",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string"
                            },
                            "typeName": {
                              "id": 6352,
                              "name": "string",
                              "nodeType": "ElementaryTypeName",
                              "src": "1595:6:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_string_storage_ptr",
                                "typeString": "string"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 6358,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 6354,
                              "name": "getFunctionList",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 6458,
                              "src": "1624:15:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_nonpayable$__$returns$_t_array$_t_string_memory_$10_memory_ptr_$",
                                "typeString": "function () returns (string memory[10] memory)"
                              }
                            },
                            "id": 6355,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1624:17:18",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                              "typeString": "string memory[10] memory"
                            }
                          },
                          "id": 6357,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 6356,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6343,
                            "src": "1642:1:18",
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
                          "src": "1624:20:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_string_memory",
                            "typeString": "string memory"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "1595:49:18"
                      },
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 6364,
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
                                  "id": 6360,
                                  "name": "functionName",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6353,
                                  "src": "1669:12:18",
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
                                "id": 6359,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "1663:5:18",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                  "typeString": "type(bytes storage pointer)"
                                },
                                "typeName": "bytes"
                              },
                              "id": 6361,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "1663:19:18",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes_memory",
                                "typeString": "bytes memory"
                              }
                            },
                            "id": 6362,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "length",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1663:26:18",
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
                            "id": 6363,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1693:1:18",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          "src": "1663:31:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 6408,
                        "nodeType": "IfStatement",
                        "src": "1659:452:18",
                        "trueBody": {
                          "id": 6407,
                          "nodeType": "Block",
                          "src": "1696:415:18",
                          "statements": [
                            {
                              "body": {
                                "id": 6400,
                                "nodeType": "Block",
                                "src": "1785:250:18",
                                "statements": [
                                  {
                                    "assignments": [
                                      6379
                                    ],
                                    "declarations": [
                                      {
                                        "constant": false,
                                        "id": 6379,
                                        "name": "callSignature",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 6412,
                                        "src": "1807:21:18",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        "typeName": {
                                          "id": 6378,
                                          "name": "bytes32",
                                          "nodeType": "ElementaryTypeName",
                                          "src": "1807:7:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                          }
                                        },
                                        "value": null,
                                        "visibility": "internal"
                                      }
                                    ],
                                    "id": 6385,
                                    "initialValue": {
                                      "argumentTypes": null,
                                      "baseExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "id": 6380,
                                          "name": "functionCallSignatures",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6286,
                                          "src": "1831:22:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                                          }
                                        },
                                        "id": 6382,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6381,
                                          "name": "functionName",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6353,
                                          "src": "1854:12:18",
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
                                        "src": "1831:36:18",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                          "typeString": "bytes32[] storage ref"
                                        }
                                      },
                                      "id": 6384,
                                      "indexExpression": {
                                        "argumentTypes": null,
                                        "id": 6383,
                                        "name": "j",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 6366,
                                        "src": "1868:1:18",
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
                                      "src": "1831:39:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                      }
                                    },
                                    "nodeType": "VariableDeclarationStatement",
                                    "src": "1807:63:18"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6391,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1892:49:18",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6386,
                                            "name": "functionCalls",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6298,
                                            "src": "1899:13:18",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                                            }
                                          },
                                          "id": 6388,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6387,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6353,
                                            "src": "1913:12:18",
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
                                          "src": "1899:27:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                                            "typeString": "mapping(bytes32 => bool)"
                                          }
                                        },
                                        "id": 6390,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6389,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6379,
                                          "src": "1927:13:18",
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
                                        "src": "1899:42:18",
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
                                    "id": 6392,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1892:49:18"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 6398,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "UnaryOperation",
                                      "operator": "delete",
                                      "prefix": true,
                                      "src": "1963:53:18",
                                      "subExpression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                          "argumentTypes": null,
                                          "baseExpression": {
                                            "argumentTypes": null,
                                            "id": 6393,
                                            "name": "mockedReturnValue",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6292,
                                            "src": "1970:17:18",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                              "typeString": "mapping(string memory => mapping(bytes32 => bytes32))"
                                            }
                                          },
                                          "id": 6395,
                                          "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 6394,
                                            "name": "functionName",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 6353,
                                            "src": "1988:12:18",
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
                                          "src": "1970:31:18",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                            "typeString": "mapping(bytes32 => bytes32)"
                                          }
                                        },
                                        "id": 6397,
                                        "indexExpression": {
                                          "argumentTypes": null,
                                          "id": 6396,
                                          "name": "callSignature",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 6379,
                                          "src": "2002:13:18",
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
                                        "src": "1970:46:18",
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
                                    "id": 6399,
                                    "nodeType": "ExpressionStatement",
                                    "src": "1963:53:18"
                                  }
                                ]
                              },
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 6374,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 6369,
                                  "name": "j",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 6366,
                                  "src": "1731:1:18",
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
                                      "id": 6370,
                                      "name": "functionCallSignatures",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6286,
                                      "src": "1735:22:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                        "typeString": "mapping(string memory => bytes32[] storage ref)"
                                      }
                                    },
                                    "id": 6372,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 6371,
                                      "name": "functionName",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 6353,
                                      "src": "1758:12:18",
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
                                    "src": "1735:36:18",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                                      "typeString": "bytes32[] storage ref"
                                    }
                                  },
                                  "id": 6373,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "1735:43:18",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "1731:47:18",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "id": 6401,
                              "initializationExpression": {
                                "assignments": [
                                  6366
                                ],
                                "declarations": [
                                  {
                                    "constant": false,
                                    "id": 6366,
                                    "name": "j",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 6412,
                                    "src": "1719:6:18",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "typeName": {
                                      "id": 6365,
                                      "name": "uint",
                                      "nodeType": "ElementaryTypeName",
                                      "src": "1719:4:18",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                  }
                                ],
                                "id": 6368,
                                "initialValue": {
                                  "argumentTypes": null,
                                  "hexValue": "30",
                                  "id": 6367,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "1728:1:18",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                  },
                                  "value": "0"
                                },
                                "nodeType": "VariableDeclarationStatement",
                                "src": "1719:10:18"
                              },
                              "loopExpression": {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 6376,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "UnaryOperation",
                                  "operator": "++",
                                  "prefix": false,
                                  "src": "1780:3:18",
                                  "subExpression": {
                                    "argumentTypes": null,
                                    "id": 6375,
                                    "name": "j",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6366,
                                    "src": "1780:1:18",
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
                                "id": 6377,
                                "nodeType": "ExpressionStatement",
                                "src": "1780:3:18"
                              },
                              "nodeType": "ForStatement",
                              "src": "1714:321:18"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 6405,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2053:43:18",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 6402,
                                    "name": "functionCallSignatures",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6286,
                                    "src": "2060:22:18",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                                      "typeString": "mapping(string memory => bytes32[] storage ref)"
                                    }
                                  },
                                  "id": 6404,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 6403,
                                    "name": "functionName",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 6353,
                                    "src": "2083:12:18",
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
                                  "src": "2060:36:18",
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
                              "id": 6406,
                              "nodeType": "ExpressionStatement",
                              "src": "2053:43:18"
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
                    "id": 6348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 6346,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6343,
                      "src": "1568:1:18",
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
                      "id": 6347,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1572:2:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_10_by_1",
                        "typeString": "int_const 10"
                      },
                      "value": "10"
                    },
                    "src": "1568:6:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6410,
                  "initializationExpression": {
                    "assignments": [
                      6343
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 6343,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 6412,
                        "src": "1556:6:18",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 6342,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1556:4:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 6345,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 6344,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1565:1:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1556:10:18"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 6350,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1576:3:18",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 6349,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6343,
                        "src": "1576:1:18",
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
                    "id": 6351,
                    "nodeType": "ExpressionStatement",
                    "src": "1576:3:18"
                  },
                  "nodeType": "ForStatement",
                  "src": "1551:570:18"
                }
              ]
            },
            "documentation": null,
            "id": 6412,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "reset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6340,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1531:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6341,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1541:0:18"
            },
            "scope": 6459,
            "src": "1517:610:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6434,
              "nodeType": "Block",
              "src": "2221:114:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 6425,
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
                          "id": 6419,
                          "name": "functionCalls",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6298,
                          "src": "2231:13:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                            "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                          }
                        },
                        "id": 6422,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6420,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6414,
                          "src": "2245:12:18",
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
                        "src": "2231:27:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                          "typeString": "mapping(bytes32 => bool)"
                        }
                      },
                      "id": 6423,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6421,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6416,
                        "src": "2259:4:18",
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
                      "src": "2231:33:18",
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
                      "id": 6424,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2267:4:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2231:40:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 6426,
                  "nodeType": "ExpressionStatement",
                  "src": "2231:40:18"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 6431,
                        "name": "args",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6416,
                        "src": "2323:4:18",
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
                          "id": 6427,
                          "name": "functionCallSignatures",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6286,
                          "src": "2281:22:18",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_string_memory_$_t_array$_t_bytes32_$dyn_storage_$",
                            "typeString": "mapping(string memory => bytes32[] storage ref)"
                          }
                        },
                        "id": 6429,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 6428,
                          "name": "functionName",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 6414,
                          "src": "2304:12:18",
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
                        "src": "2281:36:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_bytes32_$dyn_storage",
                          "typeString": "bytes32[] storage ref"
                        }
                      },
                      "id": 6430,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2281:41:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_bytes32_$returns$_t_uint256_$",
                        "typeString": "function (bytes32) returns (uint256)"
                      }
                    },
                    "id": 6432,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2281:47:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 6433,
                  "nodeType": "ExpressionStatement",
                  "src": "2281:47:18"
                }
              ]
            },
            "documentation": null,
            "id": 6435,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "functionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6417,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6414,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6435,
                  "src": "2165:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6413,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2165:6:18",
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
                  "id": 6416,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6435,
                  "src": "2186:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6415,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2186:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2164:35:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6418,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2221:0:18"
            },
            "scope": 6459,
            "src": "2133:202:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 6450,
              "nodeType": "Block",
              "src": "2478:57:18",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 6444,
                        "name": "functionCalls",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6298,
                        "src": "2495:13:18",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_string_memory_$_t_mapping$_t_bytes32_$_t_bool_$_$",
                          "typeString": "mapping(string memory => mapping(bytes32 => bool))"
                        }
                      },
                      "id": 6446,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 6445,
                        "name": "functionName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6437,
                        "src": "2509:12:18",
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
                      "src": "2495:27:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bool_$",
                        "typeString": "mapping(bytes32 => bool)"
                      }
                    },
                    "id": 6448,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 6447,
                      "name": "args",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6439,
                      "src": "2523:4:18",
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
                    "src": "2495:33:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 6443,
                  "id": 6449,
                  "nodeType": "Return",
                  "src": "2488:40:18"
                }
              ]
            },
            "documentation": null,
            "id": 6451,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "wasFunctionCalledWithArgs",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6440,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6437,
                  "name": "functionName",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2376:19:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 6436,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2376:6:18",
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
                  "id": 6439,
                  "name": "args",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2397:12:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 6438,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2397:7:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2375:35:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6443,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6442,
                  "name": "wasCalled",
                  "nodeType": "VariableDeclaration",
                  "scope": 6451,
                  "src": "2458:14:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 6441,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2458:4:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2457:16:18"
            },
            "scope": 6459,
            "src": "2341:194:18",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "internal"
          },
          {
            "body": null,
            "documentation": null,
            "id": 6458,
            "implemented": false,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "getFunctionList",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 6452,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2565:2:18"
            },
            "payable": false,
            "returnParameters": {
              "id": 6457,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 6456,
                  "name": "functionNames",
                  "nodeType": "VariableDeclaration",
                  "scope": 6458,
                  "src": "2586:24:18",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$10_memory_ptr",
                    "typeString": "string[10]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 6453,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "2586:6:18",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 6455,
                    "length": {
                      "argumentTypes": null,
                      "hexValue": "3130",
                      "id": 6454,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2593:2:18",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": null,
                        "typeString": null
                      },
                      "value": "10"
                    },
                    "nodeType": "ArrayTypeName",
                    "src": "2586:10:18",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$10_storage_ptr",
                      "typeString": "string[10]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2585:26:18"
            },
            "scope": 6459,
            "src": "2541:71:18",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 6460,
        "src": "610:2004:18"
      }
    ],
    "src": "584:2031:18"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-12T07:00:43.494Z"
}
export const DummyToken = 
{
  "contractName": "DummyToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
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
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
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
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
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
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint256"
        },
        {
          "name": "_totalSupply",
          "type": "uint256"
        },
        {
          "name": "_initialBalanceHolders",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
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
      "constant": false,
      "inputs": [
        {
          "name": "_target",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "setBalance",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600360146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001c8338038062001c838339810180604052810190808051820192919060200180518201929190602001805190602001909291908051906020019092919080518201929190505050600080600033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508760049080519060200190620000d792919062000199565b508660059080519060200190620000f092919062000199565b50856006819055508460018190555083519250600091505b828210156200018b5783828151811015156200012057fe5b906020019060200201519050826001548115156200013a57fe5b046000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550818060010192505062000108565b505050505050505062000248565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001dc57805160ff19168380011785556200020d565b828001600101855582156200020d579182015b828111156200020c578251825591602001919060010190620001ef565b5b5090506200021c919062000220565b5090565b6200024591905b808211156200024157600081600090555060010162000227565b5090565b90565b611a2b80620002586000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610125578063095ea7b3146101b557806318160ddd1461021a57806323b872dd14610245578063313ce567146102ca57806340c10f19146102f5578063661884631461035a57806370a08231146103bf5780637d64bcb4146104165780638da5cb5b1461044557806395d89b411461049c578063a9059cbb1461052c578063d73dd62314610591578063dd62ed3e146105f6578063e30443bc1461066d578063f2fde38b146106ba575b600080fd5b34801561010257600080fd5b5061010b6106fd565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b5061013a610710565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017a57808201518184015260208101905061015f565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c157600080fd5b50610200600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b604051808215151515815260200191505060405180910390f35b34801561022657600080fd5b5061022f6108a0565b6040518082815260200191505060405180910390f35b34801561025157600080fd5b506102b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108aa565b604051808215151515815260200191505060405180910390f35b3480156102d657600080fd5b506102df610c64565b6040518082815260200191505060405180910390f35b34801561030157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c6a565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e50565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110e1565b6040518082815260200191505060405180910390f35b34801561042257600080fd5b5061042b611129565b604051808215151515815260200191505060405180910390f35b34801561045157600080fd5b5061045a6111f1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104a857600080fd5b506104b1611217565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f15780820151818401526020810190506104d6565b50505050905090810190601f16801561051e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053857600080fd5b50610577600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112b5565b604051808215151515815260200191505060405180910390f35b34801561059d57600080fd5b506105dc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114d4565b604051808215151515815260200191505060405180910390f35b34801561060257600080fd5b50610657600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116d0565b6040518082815260200191505060405180910390f35b34801561067957600080fd5b506106b8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611757565b005b3480156106c657600080fd5b506106fb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611870565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107a65780601f1061077b576101008083540402835291602001916107a6565b820191906000526020600020905b81548152906001019060200180831161078957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156108e757600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561093457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109bf57600080fd5b610a10826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610aa3826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b7482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cc857600080fd5b600360149054906101000a900460ff16151515610ce457600080fd5b610cf9826001546119e190919063ffffffff16565b600181905550610d50826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610f61576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ff5565b610f7483826119c890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118757600080fd5b600360149054906101000a900460ff161515156111a357600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112ad5780601f10611282576101008083540402835291602001916112ad565b820191906000526020600020905b81548152906001019060200180831161129057829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156112f257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561133f57600080fd5b611390826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611423826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061156582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117b557600080fd5b6117be836110e1565b9050808210156117fa576117ef6117de83836119c890919063ffffffff16565b6001546119c890919063ffffffff16565b600181905550611828565b61182161181082846119c890919063ffffffff16565b6001546119e190919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118cc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156119d657fe5b818303905092915050565b60008082840190508381101515156119f557fe5b80915050929150505600a165627a7a72305820ad0729b49e512378fb4b9ea30d49eec2a206c8f6a7818d45a3055878ed3dc4030029",
  "deployedBytecode": "0x6080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f657806306fdde0314610125578063095ea7b3146101b557806318160ddd1461021a57806323b872dd14610245578063313ce567146102ca57806340c10f19146102f5578063661884631461035a57806370a08231146103bf5780637d64bcb4146104165780638da5cb5b1461044557806395d89b411461049c578063a9059cbb1461052c578063d73dd62314610591578063dd62ed3e146105f6578063e30443bc1461066d578063f2fde38b146106ba575b600080fd5b34801561010257600080fd5b5061010b6106fd565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b5061013a610710565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017a57808201518184015260208101905061015f565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156101c157600080fd5b50610200600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506107ae565b604051808215151515815260200191505060405180910390f35b34801561022657600080fd5b5061022f6108a0565b6040518082815260200191505060405180910390f35b34801561025157600080fd5b506102b0600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108aa565b604051808215151515815260200191505060405180910390f35b3480156102d657600080fd5b506102df610c64565b6040518082815260200191505060405180910390f35b34801561030157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c6a565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610e50565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b50610400600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110e1565b6040518082815260200191505060405180910390f35b34801561042257600080fd5b5061042b611129565b604051808215151515815260200191505060405180910390f35b34801561045157600080fd5b5061045a6111f1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156104a857600080fd5b506104b1611217565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104f15780820151818401526020810190506104d6565b50505050905090810190601f16801561051e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561053857600080fd5b50610577600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112b5565b604051808215151515815260200191505060405180910390f35b34801561059d57600080fd5b506105dc600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506114d4565b604051808215151515815260200191505060405180910390f35b34801561060257600080fd5b50610657600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116d0565b6040518082815260200191505060405180910390f35b34801561067957600080fd5b506106b8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611757565b005b3480156106c657600080fd5b506106fb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611870565b005b600360149054906101000a900460ff1681565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107a65780601f1061077b576101008083540402835291602001916107a6565b820191906000526020600020905b81548152906001019060200180831161078957829003601f168201915b505050505081565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156108e757600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561093457600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109bf57600080fd5b610a10826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610aa3826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b7482600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b60065481565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cc857600080fd5b600360149054906101000a900460ff16151515610ce457600080fd5b610cf9826001546119e190919063ffffffff16565b600181905550610d50826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610f61576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610ff5565b610f7483826119c890919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118757600080fd5b600360149054906101000a900460ff161515156111a357600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112ad5780601f10611282576101008083540402835291602001916112ad565b820191906000526020600020905b81548152906001019060200180831161129057829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141515156112f257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561133f57600080fd5b611390826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119c890919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611423826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061156582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546119e190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117b557600080fd5b6117be836110e1565b9050808210156117fa576117ef6117de83836119c890919063ffffffff16565b6001546119c890919063ffffffff16565b600181905550611828565b61182161181082846119c890919063ffffffff16565b6001546119e190919063ffffffff16565b6001819055505b816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118cc57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190857600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008282111515156119d657fe5b818303905092915050565b60008082840190508381101515156119f557fe5b80915050929150505600a165627a7a72305820ad0729b49e512378fb4b9ea30d49eec2a206c8f6a7818d45a3055878ed3dc4030029",
  "sourceMap": "151:1173:16:-;;;544:5:38;514:35;;;;;;;;;;;;;;;;;;;;300:656:16;8:9:-1;5:2;;;30:1;27;20:12;5:2;300:656:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;605:29;762:6;823:15;509:10:34;501:5;;:18;;;;;;;;;;;;;;;;;;496:5:16;489:4;:12;;;;;;;;;;;;:::i;:::-;;520:7;511:6;:16;;;;;;;;;;;;:::i;:::-;;548:9;537:8;:20;;;;582:12;567;:27;;;;637:22;:29;605:61;;771:1;762:10;;757:193;778:24;774:1;:28;757:193;;;841:22;864:1;841:25;;;;;;;;;;;;;;;;;;823:43;;915:24;900:12;;:39;;;;;;;;880:8;:17;889:7;880:17;;;;;;;;;;;;;;;:59;;;;804:3;;;;;;;757:193;;;300:656;;;;;;;;151:1173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "151:1173:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;514:35:38;;;;;;;;;;;;;;;;;;;;;;;;;;;223:18:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;223:18:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;223:18:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1798:183:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;371:83:35;;;;;;;;;;;;;;;;;;;;;;;736:439:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;736:439:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;273:20:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;273:20:16;;;;;;;;;;;;;;;;;;;;;;;853:264:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;853:264:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3602:398:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1189:107:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1231:135:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1231:135:38;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:34;;;;;;;;;;;;;;;;;;;;;;;;;;;247::16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:20:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;247:20:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;608:379:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2883:257:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2300:126:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;962:360:16;;8:9:-1;5:2;;;30:1;27;20:12;5:2;962:360:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;514:35:38;;;;;;;;;;;;;:::o;223:18:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1798:183:39:-;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:35:-;415:7;437:12;;430:19;;371:83;:::o;736:439:39:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;273:20:16:-;;;;:::o;853:264:38:-;931:4;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:38;;;;;;;;;;;588:16;580:25;;;;;;;;958;975:7;958:12;;:16;;:25;;;;:::i;:::-;943:12;:40;;;;1005:26;1023:7;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;989:8;:13;998:3;989:13;;;;;;;;;;;;;;;:42;;;;1042:3;1037:18;;;1047:7;1037:18;;;;;;;;;;;;;;;;;;1082:3;1061:34;;1078:1;1061:34;;;1087:7;1061:34;;;;;;;;;;;;;;;;;;1108:4;1101:11;;853:264;;;;:::o;3602:398:39:-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:35:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;1231:135:38:-;1290:4;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;589:15:38;;;;;;;;;;;588:16;580:25;;;;;;;;1320:4;1302:15;;:22;;;;;;;;;;;;;;;;;;1330:14;;;;;;;;;;1357:4;1350:11;;1231:135;:::o;238:20:34:-;;;;;;;;;;;;;:::o;247::16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;608:379:35:-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:39:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;962:360:16:-;1039:16;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1058:18:16;1068:7;1058:9;:18::i;:::-;1039:37;;1099:11;1090:6;:20;1086:194;;;1141:41;1158:23;1174:6;1158:11;:15;;:23;;;;:::i;:::-;1141:12;;:16;;:41;;;;:::i;:::-;1126:12;:56;;;;1086:194;;;1228:41;1245:23;1256:11;1245:6;:10;;:23;;;;:::i;:::-;1228:12;;:16;;:41;;;;:::i;:::-;1213:12;:56;;;;1086:194;1309:6;1289:8;:17;1298:7;1289:17;;;;;;;;;;;;;;;:26;;;;962:360;;;:::o;832:169:34:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;835:110:33:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"zeppelin-solidity/contracts/token/ERC20/MintableToken.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\n\n\ncontract DummyToken is MintableToken {\n    using SafeMath for uint;\n    string public name;\n    string public symbol;\n    uint public decimals;\n\n    function DummyToken(\n        string _name,\n        string _symbol,\n        uint _decimals,\n        uint _totalSupply,\n        address[] _initialBalanceHolders)\n        public\n    {\n        name = _name;\n        symbol = _symbol;\n        decimals = _decimals;\n        totalSupply_ = _totalSupply;\n\n        uint numInitialBalanceHolders = _initialBalanceHolders.length;\n\n        // Distribute the total supply evenly among the initial balance holders\n        for (uint i = 0; i < numInitialBalanceHolders; i++) {\n            address account = _initialBalanceHolders[i];\n            balances[account] = totalSupply_ / numInitialBalanceHolders;\n        }\n    }\n\n    function setBalance(address _target, uint _value) public onlyOwner {\n        uint currBalance = balanceOf(_target);\n        if (_value < currBalance) {\n            totalSupply_ = totalSupply_.sub(currBalance.sub(_value));\n        } else {\n            totalSupply_ = totalSupply_.add(_value.sub(currBalance));\n        }\n        balances[_target] = _value;\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/dummy_tokens/DummyToken.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/dummy_tokens/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        5885
      ]
    },
    "id": 5886,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5761,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:16"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 5762,
        "nodeType": "ImportDirective",
        "scope": 5886,
        "sourceUnit": 10296,
        "src": "25:67:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 5763,
        "nodeType": "ImportDirective",
        "scope": 5886,
        "sourceUnit": 9974,
        "src": "93:55:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5764,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10295,
              "src": "174:13:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$10295",
                "typeString": "contract MintableToken"
              }
            },
            "id": 5765,
            "nodeType": "InheritanceSpecifier",
            "src": "174:13:16"
          }
        ],
        "contractDependencies": [
          10029,
          10125,
          10168,
          10200,
          10295,
          10541
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5885,
        "linearizedBaseContracts": [
          5885,
          10295,
          10029,
          10541,
          10125,
          10168,
          10200
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5768,
            "libraryName": {
              "contractScope": null,
              "id": 5766,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9973,
              "src": "200:8:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$9973",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "194:24:16",
            "typeName": {
              "id": 5767,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "213:4:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 5770,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "223:18:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5769,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "223:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5772,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "247:20:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5771,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "247:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5774,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "273:20:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5773,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "273:4:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5835,
              "nodeType": "Block",
              "src": "479:477:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5788,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5770,
                      "src": "489:4:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5789,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5776,
                      "src": "496:5:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "489:12:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5791,
                  "nodeType": "ExpressionStatement",
                  "src": "489:12:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5792,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5772,
                      "src": "511:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5793,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5778,
                      "src": "520:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "511:16:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5795,
                  "nodeType": "ExpressionStatement",
                  "src": "511:16:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5796,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5774,
                      "src": "537:8:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5797,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5780,
                      "src": "548:9:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "537:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5799,
                  "nodeType": "ExpressionStatement",
                  "src": "537:20:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5800,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10044,
                      "src": "567:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5801,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5782,
                      "src": "582:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "567:27:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5803,
                  "nodeType": "ExpressionStatement",
                  "src": "567:27:16"
                },
                {
                  "assignments": [
                    5805
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5805,
                      "name": "numInitialBalanceHolders",
                      "nodeType": "VariableDeclaration",
                      "scope": 5836,
                      "src": "605:29:16",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5804,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:4:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5808,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 5806,
                      "name": "_initialBalanceHolders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5785,
                      "src": "637:22:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 5807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "637:29:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:61:16"
                },
                {
                  "body": {
                    "id": 5833,
                    "nodeType": "Block",
                    "src": "809:141:16",
                    "statements": [
                      {
                        "assignments": [
                          5820
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5820,
                            "name": "account",
                            "nodeType": "VariableDeclaration",
                            "scope": 5836,
                            "src": "823:15:16",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 5819,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "823:7:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 5824,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5821,
                            "name": "_initialBalanceHolders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5785,
                            "src": "841:22:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 5823,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5822,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5810,
                            "src": "864:1:16",
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
                          "src": "841:25:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "823:43:16"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5825,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10042,
                              "src": "880:8:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5827,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5826,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5820,
                              "src": "889:7:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "880:17:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 5828,
                              "name": "totalSupply_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10044,
                              "src": "900:12:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 5829,
                              "name": "numInitialBalanceHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5805,
                              "src": "915:24:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "900:39:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "880:59:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5832,
                        "nodeType": "ExpressionStatement",
                        "src": "880:59:16"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5813,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5810,
                      "src": "774:1:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5814,
                      "name": "numInitialBalanceHolders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5805,
                      "src": "778:24:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "774:28:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5834,
                  "initializationExpression": {
                    "assignments": [
                      5810
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5810,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 5836,
                        "src": "762:6:16",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5809,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "762:4:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 5812,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 5811,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "771:1:16",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "762:10:16"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 5817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "804:3:16",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 5816,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5810,
                        "src": "804:1:16",
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
                    "id": 5818,
                    "nodeType": "ExpressionStatement",
                    "src": "804:3:16"
                  },
                  "nodeType": "ForStatement",
                  "src": "757:193:16"
                }
              ]
            },
            "documentation": null,
            "id": 5836,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DummyToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5776,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "329:12:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5775,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:6:16",
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
                  "id": 5778,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "351:14:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5777,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:6:16",
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
                  "id": 5780,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "375:14:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5779,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:16",
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
                  "id": 5782,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "399:17:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5781,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:4:16",
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
                  "id": 5785,
                  "name": "_initialBalanceHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "426:32:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5783,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "426:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5784,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "426:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:140:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5787,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "479:0:16"
            },
            "scope": 5885,
            "src": "300:656:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5883,
              "nodeType": "Block",
              "src": "1029:293:16",
              "statements": [
                {
                  "assignments": [
                    5846
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5846,
                      "name": "currBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 5884,
                      "src": "1039:16:16",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5845,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1039:4:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5850,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5848,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5838,
                        "src": "1068:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5847,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10124
                      ],
                      "referencedDeclaration": 10124,
                      "src": "1058:9:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 5849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1058:18:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1039:37:16"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5851,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5840,
                      "src": "1090:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5852,
                      "name": "currBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5846,
                      "src": "1099:11:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1090:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5875,
                    "nodeType": "Block",
                    "src": "1199:81:16",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 5865,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10044,
                            "src": "1213:12:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 5870,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5846,
                                    "src": "1256:11:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5868,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5840,
                                    "src": "1245:6:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 5869,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9948,
                                  "src": "1245:10:16",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 5871,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1245:23:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5866,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10044,
                                "src": "1228:12:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5867,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9972,
                              "src": "1228:16:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1228:41:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1213:56:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5874,
                        "nodeType": "ExpressionStatement",
                        "src": "1213:56:16"
                      }
                    ]
                  },
                  "id": 5876,
                  "nodeType": "IfStatement",
                  "src": "1086:194:16",
                  "trueBody": {
                    "id": 5864,
                    "nodeType": "Block",
                    "src": "1112:81:16",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5862,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 5854,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10044,
                            "src": "1126:12:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 5859,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5840,
                                    "src": "1174:6:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5857,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5846,
                                    "src": "1158:11:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 5858,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9948,
                                  "src": "1158:15:16",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 5860,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1158:23:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5855,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10044,
                                "src": "1141:12:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9948,
                              "src": "1141:16:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5861,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1141:41:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1126:56:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5863,
                        "nodeType": "ExpressionStatement",
                        "src": "1126:56:16"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5877,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10042,
                        "src": "1289:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5879,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5878,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5838,
                        "src": "1298:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1289:17:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5880,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5840,
                      "src": "1309:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1289:26:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5882,
                  "nodeType": "ExpressionStatement",
                  "src": "1289:26:16"
                }
              ]
            },
            "documentation": null,
            "id": 5884,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5843,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5842,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "1019:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1019:9:16"
              }
            ],
            "name": "setBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5838,
                  "name": "_target",
                  "nodeType": "VariableDeclaration",
                  "scope": 5884,
                  "src": "982:15:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "982:7:16",
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
                  "id": 5840,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5884,
                  "src": "999:11:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5839,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "981:30:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1029:0:16"
            },
            "scope": 5885,
            "src": "962:360:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5886,
        "src": "151:1173:16"
      }
    ],
    "src": "0:1325:16"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/dummy_tokens/DummyToken.sol",
    "exportedSymbols": {
      "DummyToken": [
        5885
      ]
    },
    "id": 5886,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5761,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:16"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol",
        "id": 5762,
        "nodeType": "ImportDirective",
        "scope": 5886,
        "sourceUnit": 10296,
        "src": "25:67:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
        "id": 5763,
        "nodeType": "ImportDirective",
        "scope": 5886,
        "sourceUnit": 9974,
        "src": "93:55:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5764,
              "name": "MintableToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10295,
              "src": "174:13:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_MintableToken_$10295",
                "typeString": "contract MintableToken"
              }
            },
            "id": 5765,
            "nodeType": "InheritanceSpecifier",
            "src": "174:13:16"
          }
        ],
        "contractDependencies": [
          10029,
          10125,
          10168,
          10200,
          10295,
          10541
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5885,
        "linearizedBaseContracts": [
          5885,
          10295,
          10029,
          10541,
          10125,
          10168,
          10200
        ],
        "name": "DummyToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5768,
            "libraryName": {
              "contractScope": null,
              "id": 5766,
              "name": "SafeMath",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9973,
              "src": "200:8:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_SafeMath_$9973",
                "typeString": "library SafeMath"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "194:24:16",
            "typeName": {
              "id": 5767,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "213:4:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            }
          },
          {
            "constant": false,
            "id": 5770,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "223:18:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5769,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "223:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5772,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "247:20:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 5771,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "247:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 5774,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 5885,
            "src": "273:20:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 5773,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "273:4:16",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5835,
              "nodeType": "Block",
              "src": "479:477:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5788,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5770,
                      "src": "489:4:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5789,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5776,
                      "src": "496:5:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "489:12:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5791,
                  "nodeType": "ExpressionStatement",
                  "src": "489:12:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5794,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5792,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5772,
                      "src": "511:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5793,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5778,
                      "src": "520:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "511:16:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 5795,
                  "nodeType": "ExpressionStatement",
                  "src": "511:16:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5798,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5796,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5774,
                      "src": "537:8:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5797,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5780,
                      "src": "548:9:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "537:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5799,
                  "nodeType": "ExpressionStatement",
                  "src": "537:20:16"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5802,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5800,
                      "name": "totalSupply_",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10044,
                      "src": "567:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5801,
                      "name": "_totalSupply",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5782,
                      "src": "582:12:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "567:27:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5803,
                  "nodeType": "ExpressionStatement",
                  "src": "567:27:16"
                },
                {
                  "assignments": [
                    5805
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5805,
                      "name": "numInitialBalanceHolders",
                      "nodeType": "VariableDeclaration",
                      "scope": 5836,
                      "src": "605:29:16",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5804,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "605:4:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5808,
                  "initialValue": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "id": 5806,
                      "name": "_initialBalanceHolders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5785,
                      "src": "637:22:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    },
                    "id": 5807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "length",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "637:29:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "605:61:16"
                },
                {
                  "body": {
                    "id": 5833,
                    "nodeType": "Block",
                    "src": "809:141:16",
                    "statements": [
                      {
                        "assignments": [
                          5820
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 5820,
                            "name": "account",
                            "nodeType": "VariableDeclaration",
                            "scope": 5836,
                            "src": "823:15:16",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            },
                            "typeName": {
                              "id": 5819,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "823:7:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 5824,
                        "initialValue": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 5821,
                            "name": "_initialBalanceHolders",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5785,
                            "src": "841:22:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                              "typeString": "address[] memory"
                            }
                          },
                          "id": 5823,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 5822,
                            "name": "i",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 5810,
                            "src": "864:1:16",
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
                          "src": "841:25:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "823:43:16"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5831,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 5825,
                              "name": "balances",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10042,
                              "src": "880:8:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                                "typeString": "mapping(address => uint256)"
                              }
                            },
                            "id": 5827,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 5826,
                              "name": "account",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5820,
                              "src": "889:7:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": true,
                            "nodeType": "IndexAccess",
                            "src": "880:17:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "id": 5830,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 5828,
                              "name": "totalSupply_",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10044,
                              "src": "900:12:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "/",
                            "rightExpression": {
                              "argumentTypes": null,
                              "id": 5829,
                              "name": "numInitialBalanceHolders",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 5805,
                              "src": "915:24:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "src": "900:39:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "880:59:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5832,
                        "nodeType": "ExpressionStatement",
                        "src": "880:59:16"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5813,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5810,
                      "src": "774:1:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5814,
                      "name": "numInitialBalanceHolders",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5805,
                      "src": "778:24:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "774:28:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 5834,
                  "initializationExpression": {
                    "assignments": [
                      5810
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 5810,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 5836,
                        "src": "762:6:16",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 5809,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "762:4:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 5812,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 5811,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "771:1:16",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "762:10:16"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 5817,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "804:3:16",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 5816,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5810,
                        "src": "804:1:16",
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
                    "id": 5818,
                    "nodeType": "ExpressionStatement",
                    "src": "804:3:16"
                  },
                  "nodeType": "ForStatement",
                  "src": "757:193:16"
                }
              ]
            },
            "documentation": null,
            "id": 5836,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "DummyToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5786,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5776,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "329:12:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5775,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "329:6:16",
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
                  "id": 5778,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "351:14:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 5777,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "351:6:16",
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
                  "id": 5780,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "375:14:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5779,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "375:4:16",
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
                  "id": 5782,
                  "name": "_totalSupply",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "399:17:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5781,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:4:16",
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
                  "id": 5785,
                  "name": "_initialBalanceHolders",
                  "nodeType": "VariableDeclaration",
                  "scope": 5836,
                  "src": "426:32:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5783,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "426:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5784,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "426:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "319:140:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5787,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "479:0:16"
            },
            "scope": 5885,
            "src": "300:656:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5883,
              "nodeType": "Block",
              "src": "1029:293:16",
              "statements": [
                {
                  "assignments": [
                    5846
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 5846,
                      "name": "currBalance",
                      "nodeType": "VariableDeclaration",
                      "scope": 5884,
                      "src": "1039:16:16",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 5845,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1039:4:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 5850,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5848,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5838,
                        "src": "1068:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 5847,
                      "name": "balanceOf",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        10124
                      ],
                      "referencedDeclaration": 10124,
                      "src": "1058:9:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view returns (uint256)"
                      }
                    },
                    "id": 5849,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1058:18:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1039:37:16"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 5853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 5851,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5840,
                      "src": "1090:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 5852,
                      "name": "currBalance",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5846,
                      "src": "1099:11:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1090:20:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "id": 5875,
                    "nodeType": "Block",
                    "src": "1199:81:16",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5873,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 5865,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10044,
                            "src": "1213:12:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 5870,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5846,
                                    "src": "1256:11:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5868,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5840,
                                    "src": "1245:6:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 5869,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9948,
                                  "src": "1245:10:16",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 5871,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1245:23:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5866,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10044,
                                "src": "1228:12:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5867,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "add",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9972,
                              "src": "1228:16:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1228:41:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1213:56:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5874,
                        "nodeType": "ExpressionStatement",
                        "src": "1213:56:16"
                      }
                    ]
                  },
                  "id": 5876,
                  "nodeType": "IfStatement",
                  "src": "1086:194:16",
                  "trueBody": {
                    "id": 5864,
                    "nodeType": "Block",
                    "src": "1112:81:16",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 5862,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 5854,
                            "name": "totalSupply_",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 10044,
                            "src": "1126:12:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 5859,
                                    "name": "_value",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5840,
                                    "src": "1174:6:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 5857,
                                    "name": "currBalance",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 5846,
                                    "src": "1158:11:16",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "id": 5858,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "memberName": "sub",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": 9948,
                                  "src": "1158:15:16",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                    "typeString": "function (uint256,uint256) pure returns (uint256)"
                                  }
                                },
                                "id": 5860,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "1158:23:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 5855,
                                "name": "totalSupply_",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 10044,
                                "src": "1141:12:16",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 5856,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sub",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": 9948,
                              "src": "1141:16:16",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$bound_to$_t_uint256_$",
                                "typeString": "function (uint256,uint256) pure returns (uint256)"
                              }
                            },
                            "id": 5861,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1141:41:16",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "src": "1126:56:16",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "id": 5863,
                        "nodeType": "ExpressionStatement",
                        "src": "1126:56:16"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 5877,
                        "name": "balances",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10042,
                        "src": "1289:8:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_uint256_$",
                          "typeString": "mapping(address => uint256)"
                        }
                      },
                      "id": 5879,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 5878,
                        "name": "_target",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5838,
                        "src": "1298:7:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1289:17:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5880,
                      "name": "_value",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5840,
                      "src": "1309:6:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1289:26:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 5882,
                  "nodeType": "ExpressionStatement",
                  "src": "1289:26:16"
                }
              ]
            },
            "documentation": null,
            "id": 5884,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5843,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5842,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "1019:9:16",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1019:9:16"
              }
            ],
            "name": "setBalance",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5838,
                  "name": "_target",
                  "nodeType": "VariableDeclaration",
                  "scope": 5884,
                  "src": "982:15:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "982:7:16",
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
                  "id": 5840,
                  "name": "_value",
                  "nodeType": "VariableDeclaration",
                  "scope": 5884,
                  "src": "999:11:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 5839,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "999:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "981:30:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1029:0:16"
            },
            "scope": 5885,
            "src": "962:360:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5886,
        "src": "151:1173:16"
      }
    ],
    "src": "0:1325:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-18T08:16:43.695Z"
}
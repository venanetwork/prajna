export const DebtToken = 
{
  "contractName": "DebtToken",
  "abi": [
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
      "constant": true,
      "inputs": [],
      "name": "CREATION_CONTEXT",
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
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
      "inputs": [],
      "name": "unpause",
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
      "inputs": [],
      "name": "paused",
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
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "inputs": [],
      "name": "registry",
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
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
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
      "constant": true,
      "inputs": [],
      "name": "URI_CONTEXT",
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
          "name": "_registry",
          "type": "address"
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
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
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
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "_isSupported",
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
          "name": "_version",
          "type": "address"
        },
        {
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "name": "_debtor",
          "type": "address"
        },
        {
          "name": "_underwriter",
          "type": "address"
        },
        {
          "name": "_underwriterRiskRating",
          "type": "uint256"
        },
        {
          "name": "_termsContract",
          "type": "address"
        },
        {
          "name": "_termsContractParameters",
          "type": "bytes32"
        },
        {
          "name": "_salt",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
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
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedMintAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeMintAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedMintAgents",
      "outputs": [
        {
          "name": "_agents",
          "type": "address[]"
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
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTokenURIAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedTokenURIAgents",
      "outputs": [
        {
          "name": "_agents",
          "type": "address[]"
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
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeTokenURIAuthorization",
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
          "name": "_to",
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
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setTokenURI",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600b60146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b50604051602080620038e1833981018060405281019080805190602001909291905050506040805190810160405280600981526020017f44656274546f6b656e00000000000000000000000000000000000000000000008152506040805190810160405280600381526020017f44445400000000000000000000000000000000000000000000000000000000008152508160049080519060200190620000d492919062000179565b508060059080519060200190620000ed92919062000179565b50505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000228565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001bc57805160ff1916838001178555620001ed565b82800160010185558215620001ed579182015b82811115620001ec578251825591602001919060010190620001cf565b5b509050620001fc919062000200565b5090565b6200022591905b808211156200022157600081600090555060010162000207565b5090565b90565b6136a980620002386000396000f3006080604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101f35780630343e1221461025757806306fdde03146102c3578063081812fc14610353578063095ea7b3146103c0578063162094c41461040d57806318160ddd146104805780631fe23d7f146104ab57806321d371271461053b57806323b872dd146105a75780632f745c591461061457806333d26177146106755780633f4ba83a146106b857806342842e0e146106cf5780634f558e791461073c5780634f6ccce7146107815780635c975abb146107c25780636352211e146107f157806370a082311461085e5780637b103999146108b557806381ac3fbc1461090c5780638456cb591461094f5780638da5cb5b1461096657806395d89b41146109bd57806399f1050114610a4d5780639c0d9c4314610b46578063a22cb46514610b89578063a9059cbb14610bd8578063b5c2f7ea14610c25578063b88d4fde14610cb5578063c87b56dd14610d68578063e985e9c514610e0e578063f2fde38b14610e89575b600080fd5b3480156101bc57600080fd5b506101f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecc565b005b3480156101ff57600080fd5b5061023d60048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610f76565b604051808215151515815260200191505060405180910390f35b34801561026357600080fd5b5061026c610fc4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102af578082015181840152602081019050610294565b505050509050019250505060405180910390f35b3480156102cf57600080fd5b506102d8610fd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103185780820151818401526020810190506102fd565b50505050905090810190601f1680156103455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035f57600080fd5b5061037e60048036038101908080359060200190929190505050611077565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cc57600080fd5b5061040b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110b4565b005b34801561041957600080fd5b5061047e60048036038101908080359060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506110de565b005b34801561048c57600080fd5b50610495611127565b6040518082815260200191505060405180910390f35b3480156104b757600080fd5b506104c0611134565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105005780820151818401526020810190506104e5565b50505050905090810190601f16801561052d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561054757600080fd5b5061055061116d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610593578082015181840152602081019050610578565b505050509050019250505060405180910390f35b3480156105b357600080fd5b50610612600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061117e565b005b34801561062057600080fd5b5061065f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111b4565b6040518082815260200191505060405180910390f35b34801561068157600080fd5b506106b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061122b565b005b3480156106c457600080fd5b506106cd6112d5565b005b3480156106db57600080fd5b5061073a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611395565b005b34801561074857600080fd5b50610767600480360381019080803590602001909291905050506113cb565b604051808215151515815260200191505060405180910390f35b34801561078d57600080fd5b506107ac6004803603810190808035906020019092919050505061143c565b6040518082815260200191505060405180910390f35b3480156107ce57600080fd5b506107d7611474565b604051808215151515815260200191505060405180910390f35b3480156107fd57600080fd5b5061081c60048036038101908080359060200190929190505050611487565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561086a57600080fd5b5061089f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611504565b6040518082815260200191505060405180910390f35b3480156108c157600080fd5b506108ca611588565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561091857600080fd5b5061094d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ae565b005b34801561095b57600080fd5b50610964611658565b005b34801561097257600080fd5b5061097b611719565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156109c957600080fd5b506109d261173f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a125780820151818401526020810190506109f7565b50505050905090810190601f168015610a3f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a5957600080fd5b50610b30600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803590602001909291905050506117e1565b6040518082815260200191505060405180910390f35b348015610b5257600080fd5b50610b87600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a2b565b005b348015610b9557600080fd5b50610bd6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611ad5565b005b348015610be457600080fd5b50610c23600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611aff565b005b348015610c3157600080fd5b50610c3a611b0e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c7a578082015181840152602081019050610c5f565b50505050905090810190601f168015610ca75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610cc157600080fd5b50610d66600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611b47565b005b348015610d7457600080fd5b50610d9360048036038101908080359060200190929190505050611b7f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610dd3578082015181840152602081019050610db8565b50505050905090810190601f168015610e005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610e1a57600080fd5b50610e6f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c48565b604051808215151515815260200191505060405180910390f35b348015610e9557600080fd5b50610eca600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cdc565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f2857600080fd5b610f73816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611e349092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060610fd0600d612127565b905090565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106d5780601f106110425761010080835404028352916020019161106d565b820191906000526020600020905b81548152906001019060200180831161105057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff161515156110d057600080fd5b6110da82826121b9565b5050565b600b60149054906101000a900460ff161515156110fa57600080fd5b61110e33601061237f90919063ffffffff16565b151561111957600080fd5b61112382826123d8565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b60606111796010612127565b905090565b600b60149054906101000a900460ff1615151561119a57600080fd5b6111a48183612418565b6111af838383612610565b505050565b60006111bf83611504565b821015156111cc57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561121857fe5b9060005260206000200154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561128757600080fd5b6112d2816040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525060106127279092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561133157600080fd5b600b60149054906101000a900460ff16151561134c57600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156113b157600080fd5b6113bb8183612418565b6113c6838383612906565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611446611127565b8210151561145357600080fd5b60088281548110151561146257fe5b90600052602060002001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156114fb57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561154157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561160a57600080fd5b611655816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611e349092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116b457600080fd5b600b60149054906101000a900460ff161515156116d057600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117d75780601f106117ac576101008083540402835291602001916117d7565b820191906000526020600020905b8154815290600101906020018083116117ba57829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561180057600080fd5b61181433600d61237f90919063ffffffff16565b151561181f57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b1580156119cc57600080fd5b505af11580156119e0573d6000803e3d6000fd5b505050506040513d60208110156119f657600080fd5b81019080805190602001909291905050509050611a1789826001900461293e565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a8757600080fd5b611ad2816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d6127279092919063ffffffff16565b50565b600b60149054906101000a900460ff16151515611af157600080fd5b611afb8282612995565b5050565b611b0a338383611395565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611b6357600080fd5b611b6d8284612418565b611b7984848484612ad1565b50505050565b6060611b8a826113cb565b1515611b9557600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c3c5780601f10611c1157610100808354040283529160200191611c3c565b820191906000526020600020905b815481529060010190602001808311611c1f57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d3857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611d7457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611e43868661237f565b1515611e4e57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611eb057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611f4057fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561202457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001866002018181805490500391508161206b9190613580565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b838110156120e55780820151818401526020810190506120ca565b50505050905090810190601f1680156121125780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b6060816002018054806020026020016040519081016040528092919081815260200182805480156121ad57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612163575b50505050509050919050565b60006121c482611487565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561220157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061224157506122408133611c48565b5b151561224c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661226d83611077565b73ffffffffffffffffffffffffffffffffffffffff161415806122bd5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561237a57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6123e1826113cb565b15156123ec57600080fd5b80600a600084815260200190815260200160002090805190602001906124139291906135ac565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156124cb57600080fd5b505af11580156124df573d6000803e3d6000fd5b505050506040513d60208110156124f557600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561260c57600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156125f357600080fd5b505af1158015612607573d6000803e3d6000fd5b505050505b5050565b8061261b3382612b10565b151561262657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561266257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561269e57600080fd5b6126a88483612ba5565b6126b28483612d0e565b6126bc8383612f26565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6127318383612ffd565b151561273c57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156128c75780820151818401526020810190506128ac565b50505050905090810190601f1680156128f45780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806129113382612b10565b151561291c57600080fd5b6129388484846020604051908101604052806000815250611b47565b50505050565b6129488282613012565b600880549050600960008381526020019081526020016000208190555060088190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156129d057600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81612adc3382612b10565b1515612ae757600080fd5b612af285858561117e565b612afe858585856130c2565b1515612b0957600080fd5b5050505050565b600080612b1c83611487565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612b8b57508373ffffffffffffffffffffffffffffffffffffffff16612b7384611077565b73ffffffffffffffffffffffffffffffffffffffff16145b80612b9c5750612b9b8185611c48565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612bc582611487565b73ffffffffffffffffffffffffffffffffffffffff16141515612be757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612d0a5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612d1d85856132b0565b60076000858152602001908152602001600020549250612d896001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506133de90919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612dd757fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612e3157fe5b90600052602060002001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612e8d57fe5b9060005260206000200181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612eed919061362c565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612f3283836133f7565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050906001820390600052602060002001600090919290919091505550806007600084815260200190815260200160002081905550505050565b6000613009838361237f565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561304e57600080fd5b6130588282612f26565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000806130e48573ffffffffffffffffffffffffffffffffffffffff1661354f565b15156130f357600191506132a7565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156131b557808201518184015260208101905061319a565b50505050905090810190601f1680156131e25780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561320357600080fd5b505af1158015613217573d6000803e3d6000fd5b505050506040513d602081101561322d57600080fd5b8101908080519060200190929190505050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff166132d082611487565b73ffffffffffffffffffffffffffffffffffffffff161415156132f257600080fd5b6133456001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546133de90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156133ec57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561346457600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506135086001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461356290919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561357657fe5b8091505092915050565b8154818355818111156135a7578183600052602060002091820191016135a69190613658565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106135ed57805160ff191683800117855561361b565b8280016001018555821561361b579182015b8281111561361a5782518255916020019190600101906135ff565b5b5090506136289190613658565b5090565b815481835581811115613653578183600052602060002091820191016136529190613658565b5b505050565b61367a91905b8082111561367657600081600090555060010161365e565b5090565b905600a165627a7a72305820e49e76de03fe75e6dbc88c1071996635c9d9551da380c6e555138462683503950029",
  "deployedBytecode": "0x6080604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101f35780630343e1221461025757806306fdde03146102c3578063081812fc14610353578063095ea7b3146103c0578063162094c41461040d57806318160ddd146104805780631fe23d7f146104ab57806321d371271461053b57806323b872dd146105a75780632f745c591461061457806333d26177146106755780633f4ba83a146106b857806342842e0e146106cf5780634f558e791461073c5780634f6ccce7146107815780635c975abb146107c25780636352211e146107f157806370a082311461085e5780637b103999146108b557806381ac3fbc1461090c5780638456cb591461094f5780638da5cb5b1461096657806395d89b41146109bd57806399f1050114610a4d5780639c0d9c4314610b46578063a22cb46514610b89578063a9059cbb14610bd8578063b5c2f7ea14610c25578063b88d4fde14610cb5578063c87b56dd14610d68578063e985e9c514610e0e578063f2fde38b14610e89575b600080fd5b3480156101bc57600080fd5b506101f1600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ecc565b005b3480156101ff57600080fd5b5061023d60048036038101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610f76565b604051808215151515815260200191505060405180910390f35b34801561026357600080fd5b5061026c610fc4565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102af578082015181840152602081019050610294565b505050509050019250505060405180910390f35b3480156102cf57600080fd5b506102d8610fd5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103185780820151818401526020810190506102fd565b50505050905090810190601f1680156103455780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561035f57600080fd5b5061037e60048036038101908080359060200190929190505050611077565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156103cc57600080fd5b5061040b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506110b4565b005b34801561041957600080fd5b5061047e60048036038101908080359060200190929190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091929192905050506110de565b005b34801561048c57600080fd5b50610495611127565b6040518082815260200191505060405180910390f35b3480156104b757600080fd5b506104c0611134565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105005780820151818401526020810190506104e5565b50505050905090810190601f16801561052d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561054757600080fd5b5061055061116d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610593578082015181840152602081019050610578565b505050509050019250505060405180910390f35b3480156105b357600080fd5b50610612600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061117e565b005b34801561062057600080fd5b5061065f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111b4565b6040518082815260200191505060405180910390f35b34801561068157600080fd5b506106b6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061122b565b005b3480156106c457600080fd5b506106cd6112d5565b005b3480156106db57600080fd5b5061073a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611395565b005b34801561074857600080fd5b50610767600480360381019080803590602001909291905050506113cb565b604051808215151515815260200191505060405180910390f35b34801561078d57600080fd5b506107ac6004803603810190808035906020019092919050505061143c565b6040518082815260200191505060405180910390f35b3480156107ce57600080fd5b506107d7611474565b604051808215151515815260200191505060405180910390f35b3480156107fd57600080fd5b5061081c60048036038101908080359060200190929190505050611487565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561086a57600080fd5b5061089f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611504565b6040518082815260200191505060405180910390f35b3480156108c157600080fd5b506108ca611588565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561091857600080fd5b5061094d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115ae565b005b34801561095b57600080fd5b50610964611658565b005b34801561097257600080fd5b5061097b611719565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156109c957600080fd5b506109d261173f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610a125780820151818401526020810190506109f7565b50505050905090810190601f168015610a3f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a5957600080fd5b50610b30600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803590602001909291905050506117e1565b6040518082815260200191505060405180910390f35b348015610b5257600080fd5b50610b87600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611a2b565b005b348015610b9557600080fd5b50610bd6600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611ad5565b005b348015610be457600080fd5b50610c23600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611aff565b005b348015610c3157600080fd5b50610c3a611b0e565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c7a578082015181840152602081019050610c5f565b50505050905090810190601f168015610ca75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610cc157600080fd5b50610d66600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509192919290505050611b47565b005b348015610d7457600080fd5b50610d9360048036038101908080359060200190929190505050611b7f565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610dd3578082015181840152602081019050610db8565b50505050905090810190601f168015610e005780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610e1a57600080fd5b50610e6f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611c48565b604051808215151515815260200191505060405180910390f35b348015610e9557600080fd5b50610eca600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cdc565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f2857600080fd5b610f73816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611e349092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6060610fd0600d612127565b905090565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561106d5780601f106110425761010080835404028352916020019161106d565b820191906000526020600020905b81548152906001019060200180831161105057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff161515156110d057600080fd5b6110da82826121b9565b5050565b600b60149054906101000a900460ff161515156110fa57600080fd5b61110e33601061237f90919063ffffffff16565b151561111957600080fd5b61112382826123d8565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b60606111796010612127565b905090565b600b60149054906101000a900460ff1615151561119a57600080fd5b6111a48183612418565b6111af838383612610565b505050565b60006111bf83611504565b821015156111cc57600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561121857fe5b9060005260206000200154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561128757600080fd5b6112d2816040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525060106127279092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561133157600080fd5b600b60149054906101000a900460ff16151561134c57600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156113b157600080fd5b6113bb8183612418565b6113c6838383612906565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611446611127565b8210151561145357600080fd5b60088281548110151561146257fe5b90600052602060002001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156114fb57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561154157600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561160a57600080fd5b611655816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611e349092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156116b457600080fd5b600b60149054906101000a900460ff161515156116d057600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156117d75780601f106117ac576101008083540402835291602001916117d7565b820191906000526020600020905b8154815290600101906020018083116117ba57829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561180057600080fd5b61181433600d61237f90919063ffffffff16565b151561181f57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b1580156119cc57600080fd5b505af11580156119e0573d6000803e3d6000fd5b505050506040513d60208110156119f657600080fd5b81019080805190602001909291905050509050611a1789826001900461293e565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a8757600080fd5b611ad2816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d6127279092919063ffffffff16565b50565b600b60149054906101000a900460ff16151515611af157600080fd5b611afb8282612995565b5050565b611b0a338383611395565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611b6357600080fd5b611b6d8284612418565b611b7984848484612ad1565b50505050565b6060611b8a826113cb565b1515611b9557600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611c3c5780601f10611c1157610100808354040283529160200191611c3c565b820191906000526020600020905b815481529060010190602001808311611c1f57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611d3857600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611d7457600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611e43868661237f565b1515611e4e57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611eb057fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611f4057fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561202457fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001866002018181805490500391508161206b9190613580565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b838110156120e55780820151818401526020810190506120ca565b50505050905090810190601f1680156121125780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b6060816002018054806020026020016040519081016040528092919081815260200182805480156121ad57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612163575b50505050509050919050565b60006121c482611487565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561220157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061224157506122408133611c48565b5b151561224c57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661226d83611077565b73ffffffffffffffffffffffffffffffffffffffff161415806122bd5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561237a57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6123e1826113cb565b15156123ec57600080fd5b80600a600084815260200190815260200160002090805190602001906124139291906135ac565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1580156124cb57600080fd5b505af11580156124df573d6000803e3d6000fd5b505050506040513d60208110156124f557600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614151561260c57600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b1580156125f357600080fd5b505af1158015612607573d6000803e3d6000fd5b505050505b5050565b8061261b3382612b10565b151561262657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561266257600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561269e57600080fd5b6126a88483612ba5565b6126b28483612d0e565b6126bc8383612f26565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6127318383612ffd565b151561273c57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156128c75780820151818401526020810190506128ac565b50505050905090810190601f1680156128f45780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806129113382612b10565b151561291c57600080fd5b6129388484846020604051908101604052806000815250611b47565b50505050565b6129488282613012565b600880549050600960008381526020019081526020016000208190555060088190806001815401808255809150509060018203906000526020600020016000909192909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156129d057600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b81612adc3382612b10565b1515612ae757600080fd5b612af285858561117e565b612afe858585856130c2565b1515612b0957600080fd5b5050505050565b600080612b1c83611487565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612b8b57508373ffffffffffffffffffffffffffffffffffffffff16612b7384611077565b73ffffffffffffffffffffffffffffffffffffffff16145b80612b9c5750612b9b8185611c48565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612bc582611487565b73ffffffffffffffffffffffffffffffffffffffff16141515612be757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612d0a5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612d1d85856132b0565b60076000858152602001908152602001600020549250612d896001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506133de90919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612dd757fe5b9060005260206000200154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612e3157fe5b90600052602060002001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612e8d57fe5b9060005260206000200181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612eed919061362c565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612f3283836133f7565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020829080600181540180825580915050906001820390600052602060002001600090919290919091505550806007600084815260200190815260200160002081905550505050565b6000613009838361237f565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561304e57600080fd5b6130588282612f26565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000806130e48573ffffffffffffffffffffffffffffffffffffffff1661354f565b15156130f357600191506132a7565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156131b557808201518184015260208101905061319a565b50505050905090810190601f1680156131e25780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15801561320357600080fd5b505af1158015613217573d6000803e3d6000fd5b505050506040513d602081101561322d57600080fd5b8101908080519060200190929190505050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff166132d082611487565b73ffffffffffffffffffffffffffffffffffffffff161415156132f257600080fd5b6133456001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546133de90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156133ec57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561346457600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506135086001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461356290919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561357657fe5b8091505092915050565b8154818355818111156135a7578183600052602060002091820191016135a69190613658565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106135ed57805160ff191683800117855561361b565b8280016001018555821561361b579182015b8281111561361a5782518255916020019190600101906135ff565b5b5090506136289190613658565b5090565b815481835581811115613653578183600052602060002091820191016136529190613658565b5b505050565b61367a91905b8082111561367657600081600090555060010161365e565b5090565b905600a165627a7a72305820e49e76de03fe75e6dbc88c1071996635c9d9551da380c6e555138462683503950029",
  "sourceMap": "1362:6140:5:-;;;268:5:32;247:26;;;;;;;;;;;;;;;;;;;;1867:148:5;8:9:-1;5:2;;;30:1;27;20:12;5:2;1867:148:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:105:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;509:10:34;501:5;;:18;;;;;;;;;;;;;;;;;;1998:9:5;1974:8;;:34;;;;;;;;;;;;;;;;;;1867:148;1362:6140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "1362:6140:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4640:167:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;2110:176;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2110:176:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3854:173;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3854:173:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3854:173:5;;;;;;;;;;;;;;;;;1303:68:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1303:68:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1303:68:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3577:111:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4974:131:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4974:131:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6913:207;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6913:207:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2887:87:45;;;;;;;;;;;;;;;;;;;;;;;1659:63:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1659:63:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1659:63:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4366:172;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4366:172:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4366:172:5;;;;;;;;;;;;;;;;;5793:206;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5793:206:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2571:177:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4124:156:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4124:156:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;833:87:32;;;;;;6175:214:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6175:214:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2445:140:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3298:140:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:32;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2107:164:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1756:142:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1496:28:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1496:28:5;;;;;;;;;;;;;;;;;;;;;;;;;;;3589:178;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3589:178:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:85:32;;;;;;238:20:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:34;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1466:72:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1466:72:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2455:770:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2455:770:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3324:162;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3324:162:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;5281:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5281:153:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5496:125;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5496:125:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1728:53;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1728:53:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1728:53:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6565:234;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6565:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1727:133:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1727:133:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4478:142:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167:5;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4740:60:5;4780:6;4788:11;;;;;;;;;;;;;;;;;;4740:19;:39;;:60;;;;;:::i;:::-;4640:167;:::o;2110:176::-;2204:17;2259:10;2244:25;;:11;:25;;;;2237:32;;2110:176;;;:::o;3854:173::-;3934:17;3974:46;:24;:44;:46::i;:::-;3967:53;;3854:173;:::o;1303:68:45:-;1340:6;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:43:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;4974:131:5:-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;5070:28:5;5084:3;5089:8;5070:13;:28::i;:::-;4974:131;;:::o;6913:207::-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;7024:44:5;7057:10;7024:19;:32;;:44;;;;:::i;:::-;7016:53;;;;;;;;7079:34;7098:8;7108:4;7079:18;:34::i;:::-;6913:207;;:::o;2887:87:45:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;1659:63:5:-;;;;;;;;;;;;;;;;;;;;:::o;4366:172::-;4450:17;4490:41;:19;:39;:41::i;:::-;4483:48;;4366:172;:::o;5793:206::-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;5909:33:5;5928:8;5938:3;5909:18;:33::i;:::-;5952:40;5971:5;5978:3;5983:8;5952:18;:40::i;:::-;5793:206;;;:::o;2571:177:45:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;4124:156:5:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4223:50:5;4253:6;4261:11;;;;;;;;;;;;;;;;;;4223:19;:29;;:50;;;;;:::i;:::-;4124:156;:::o;833:87:32:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:32;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;6175:214:5:-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;6295:33:5;6314:8;6324:3;6295:18;:33::i;:::-;6338:44;6361:5;6368:3;6373:8;6338:22;:44::i;:::-;6175:214;;;:::o;2445:140:43:-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::45:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;247:26:32:-;;;;;;;;;;;;;:::o;2107:164:43:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1496:28:5:-;;;;;;;;;;;;;:::o;3589:178::-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3690:70:5;3735:6;3743:16;;;;;;;;;;;;;;;;;;3690:24;:44;;:70;;;;;:::i;:::-;3589:178;:::o;666:85:32:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:34:-;;;;;;;;;;;;;:::o;1466:72:45:-;1505:6;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;2455:770:5:-;2773:13;2871:17;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;2810:49:5;2848:10;2810:24;:37;;:49;;;;:::i;:::-;2802:58;;;;;;;;2891:8;;;;;;;;;;;:15;;;2920:8;2942:12;2968:7;2989:12;3015:22;3051:14;3079:24;3117:5;2891:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2891:241:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2891:241:5;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2891:241:5;;;;;;;;;;;;;;;;2871:261;;3143:42;3155:12;3174:9;3169:15;;;3143:11;:42::i;:::-;3208:9;3203:15;;;3196:22;;2455:770;;;;;;;;;;;:::o;3324:162::-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3419:60:5;3454:6;3462:16;;;;;;;;;;;;;;;;;;3419:24;:34;;:60;;;;;:::i;:::-;3324:162;:::o;5281:153::-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;5388:39:5;5412:3;5417:9;5388:23;:39::i;:::-;5281:153;;:::o;5496:125::-;5571:43;5588:10;5600:3;5605:8;5571:16;:43::i;:::-;5496:125;;:::o;1728:53::-;;;;;;;;;;;;;;;;;;;;:::o;6565:234::-;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;6698:33:5;6717:8;6727:3;6698:18;:33::i;:::-;6741:51;6764:5;6771:3;6776:8;6786:5;6741:22;:51::i;:::-;6565:234;;;;:::o;1727:133:45:-;1784:6;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:43:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;832:169:34:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2121:1168:14:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3239:43:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168;;;;;;:::o;3646:162::-;3748:9;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;2998:350:43:-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;3295:166:14:-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2085:130:45:-;2161:16;2168:8;2161:6;:16::i;:::-;2153:25;;;;;;;;2206:4;2184:9;:19;2194:8;2184:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;2085:130;;:::o;7277:223:5:-;7414:3;7368:49;;:8;;;;;;;;;;;:23;;;7400:8;7392:17;;7368:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7368:42:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7368:42:5;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7368:42:5;;;;;;;;;;;;;;;;:49;;;;7364:130;;;7433:8;;;;;;;;;;;:26;;;7468:8;7460:17;;7479:3;7433:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7433:50:5;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;7433:50:5;;;;7364:130;7277:223;;:::o;5042:315:43:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;1732:383:14:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;1990:5;1963:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1963:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2075:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383;;;:::o;5964:154:43:-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;5315:176:45:-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;5477:8;5462:24;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;5462:24:45;;;;;;;;;;;;;;;;;;;;;;5315:176;;:::o;3969:200:43:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:45:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;3868:8;3846:31;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;3846:31:45;;;;;;;;;;;;;;;;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;3467:173:14:-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;7857:164:43:-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10561:60:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;10561:60:43;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;10561:60:43;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;10561:60:43;;;;;;;;;;;;;;;;10545:76;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:33:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:43:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;451:150:31:-;508:4;520:12;569:4;557:17;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:33:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;1362:6140:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\n// Internal dependencies.\nimport \"./DebtRegistry.sol\";\nimport \"./ERC165.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\n\n// External dependencies.\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is ERC721Token, ERC165, Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    DebtRegistry public registry;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenURIPermissions;\n\n    string public constant CREATION_CONTEXT = \"debt-token-creation\";\n    string public constant URI_CONTEXT = \"debt-token-uri\";\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n        ERC721Token(\"DebtToken\", \"DDT\")\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        super._mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to set token URIs.\n     */\n    function addAuthorizedTokenURIAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.authorize(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to set token URIs.\n     */\n    function getAuthorizedTokenURIAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenURIPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to set token URIs.\n     */\n    function revokeTokenURIAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.revokeAuthorization(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * We override approval method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function approve(address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        super.approve(_to, _tokenId);\n    }\n\n    /**\n     * We override setApprovalForAll method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function setApprovalForAll(address _to, bool _approved)\n        public\n        whenNotPaused\n    {\n        super.setApprovalForAll(_to, _approved);\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId)\n        public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n\n    /**\n     * We override transferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.transferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId, _data);\n    }\n\n    /**\n     * Allows senders with special permissions to set the token URI for a given debt token.\n     */\n    function setTokenURI(uint256 _tokenId, string _uri)\n        public\n        whenNotPaused\n    {\n        require(tokenURIPermissions.isAuthorized(msg.sender));\n        super._setTokenURI(_tokenId, _uri);\n    }\n\n    /**\n     * _modifyBeneficiary mutates the debt registry. This function should be\n     * called every time a token is transferred or minted\n     */\n    function _modifyBeneficiary(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtToken.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtToken.sol",
    "exportedSymbols": {
      "DebtToken": [
        3891
      ]
    },
    "id": 3892,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3511,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:5"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 3512,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 3510,
        "src": "635:28:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/ERC165.sol",
        "file": "./ERC165.sol",
        "id": 3513,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 3902,
        "src": "664:22:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 3516,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 5641,
        "src": "687:82:5",
        "symbolAliases": [
          {
            "foreign": 3514,
            "local": null
          },
          {
            "foreign": 3515,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 3517,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 9876,
        "src": "797:60:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
        "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
        "id": 3518,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 11700,
        "src": "858:66:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 3519,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 10169,
        "src": "925:59:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3520,
              "name": "ERC721Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11699,
              "src": "1384:11:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Token_$11699",
                "typeString": "contract ERC721Token"
              }
            },
            "id": 3521,
            "nodeType": "InheritanceSpecifier",
            "src": "1384:11:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3522,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3901,
              "src": "1397:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$3901",
                "typeString": "contract ERC165"
              }
            },
            "id": 3523,
            "nodeType": "InheritanceSpecifier",
            "src": "1397:6:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3524,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1405:8:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 3525,
            "nodeType": "InheritanceSpecifier",
            "src": "1405:8:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3526,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "1415:16:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 3527,
            "nodeType": "InheritanceSpecifier",
            "src": "1415:16:5"
          }
        ],
        "contractDependencies": [
          3901,
          5436,
          9875,
          10029,
          10594,
          10614,
          10621,
          10728,
          11311,
          11699
        ],
        "contractKind": "contract",
        "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 3891,
        "linearizedBaseContracts": [
          3891,
          5436,
          9875,
          10029,
          3901,
          11699,
          11311,
          10621,
          10614,
          10594,
          10728
        ],
        "name": "DebtToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3530,
            "libraryName": {
              "contractScope": null,
              "id": 3528,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "1444:14:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1438:52:5",
            "typeName": {
              "contractScope": null,
              "id": 3529,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1463:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 3532,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1496:28:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 3531,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "1496:12:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                "typeString": "contract DebtRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3534,
            "name": "tokenCreationPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1531:60:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 3533,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1531:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 3536,
            "name": "tokenURIPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1597:55:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 3535,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1597:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3539,
            "name": "CREATION_CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1659:63:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3537,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1659:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "646562742d746f6b656e2d6372656174696f6e",
              "id": 3538,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1701:21:5",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_2d9a63cb422dbf25d87c5964331a54f8f0ef47fda8423314940cc4724b7c93a1",
                "typeString": "literal_string \"debt-token-creation\""
              },
              "value": "debt-token-creation"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 3542,
            "name": "URI_CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1728:53:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3540,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1728:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "646562742d746f6b656e2d757269",
              "id": 3541,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1765:16:5",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0d2873bacc3db71894b8d4e2c856fa4c9fb7274484262058e9cd6c3a8004a268",
                "typeString": "literal_string \"debt-token-uri\""
              },
              "value": "debt-token-uri"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 3557,
              "nodeType": "Block",
              "src": "1964:51:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3551,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3532,
                      "src": "1974:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3553,
                          "name": "_registry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3544,
                          "src": "1998:9:5",
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
                        "id": 3552,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "1985:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 3554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1985:23:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "1974:34:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 3556,
                  "nodeType": "ExpressionStatement",
                  "src": "1974:34:5"
                }
              ]
            },
            "documentation": "Constructor that sets the address of the debt registry.",
            "id": 3558,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "44656274546f6b656e",
                    "id": 3547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1940:11:5",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c10442bb66c5f01b129d08a0133cb2d11acab7c9cdd4bcb1a415cdceb37ea6cd",
                      "typeString": "literal_string \"DebtToken\""
                    },
                    "value": "DebtToken"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "444454",
                    "id": 3548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1953:5:5",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_f8a9044cf25759a03370eb916040fc6ce23c95f27e93503ef2157147bcb9e846",
                      "typeString": "literal_string \"DDT\""
                    },
                    "value": "DDT"
                  }
                ],
                "id": 3549,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3546,
                  "name": "ERC721Token",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11699,
                  "src": "1928:11:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Token_$11699_$",
                    "typeString": "type(contract ERC721Token)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1928:31:5"
              }
            ],
            "name": "DebtToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3544,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 3558,
                  "src": "1886:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3543,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1886:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1885:19:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1964:0:5"
            },
            "scope": 3891,
            "src": "1867:148:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3569,
              "nodeType": "Block",
              "src": "2227:59:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 3567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3565,
                      "name": "interfaceID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3560,
                      "src": "2244:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30783830616335386364",
                      "id": 3566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2259:10:5",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2158778573_by_1",
                        "typeString": "int_const 2158778573"
                      },
                      "value": "0x80ac58cd"
                    },
                    "src": "2244:25:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3564,
                  "id": 3568,
                  "nodeType": "Return",
                  "src": "2237:32:5"
                }
              ]
            },
            "documentation": "ERC165 interface.\nReturns true for ERC721, false otherwise",
            "id": 3570,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3560,
                  "name": "interfaceID",
                  "nodeType": "VariableDeclaration",
                  "scope": 3570,
                  "src": "2137:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 3559,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2137:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2136:20:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3563,
                  "name": "_isSupported",
                  "nodeType": "VariableDeclaration",
                  "scope": 3570,
                  "src": "2204:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3562,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2204:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2203:19:5"
            },
            "scope": 3891,
            "src": "2110:176:5",
            "stateMutability": "view",
            "superFunction": 3900,
            "visibility": "external"
          },
          {
            "body": {
              "id": 3628,
              "nodeType": "Block",
              "src": "2792:433:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3596,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2848:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3597,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2848:10:5",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 3594,
                            "name": "tokenCreationPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3534,
                            "src": "2810:24:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 3595,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "2810:37:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 3598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2810:49:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3593,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2802:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2802:58:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3600,
                  "nodeType": "ExpressionStatement",
                  "src": "2802:58:5"
                },
                {
                  "assignments": [
                    3602
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3602,
                      "name": "entryHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 3629,
                      "src": "2871:17:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 3601,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2871:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3614,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3605,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3572,
                        "src": "2920:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3606,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3574,
                        "src": "2942:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3607,
                        "name": "_debtor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3576,
                        "src": "2968:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3608,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3578,
                        "src": "2989:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3609,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3580,
                        "src": "3015:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3610,
                        "name": "_termsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3582,
                        "src": "3051:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3611,
                        "name": "_termsContractParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3584,
                        "src": "3079:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3612,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3586,
                        "src": "3117:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3603,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3532,
                        "src": "2891:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 3604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "insert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3211,
                      "src": "2891:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                      }
                    },
                    "id": 3613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2891:241:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2871:261:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3618,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3574,
                        "src": "3155:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3620,
                            "name": "entryHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3602,
                            "src": "3174:9:5",
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
                          "id": 3619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3169:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 3621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3169:15:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3615,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "3143:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11619,
                      "src": "3143:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3143:42:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3623,
                  "nodeType": "ExpressionStatement",
                  "src": "3143:42:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3625,
                        "name": "entryHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3602,
                        "src": "3208:9:5",
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
                      "id": 3624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3203:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 3626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3203:15:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3592,
                  "id": 3627,
                  "nodeType": "Return",
                  "src": "3196:22:5"
                }
              ]
            },
            "documentation": "Mints a unique debt token and inserts the associated issuance into\nthe debt registry, if the calling address is authorized to do so.",
            "id": 3629,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3589,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3588,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "2742:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2742:13:5"
              }
            ],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3572,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2480:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2480:7:5",
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
                  "id": 3574,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2506:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:7:5",
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
                  "id": 3576,
                  "name": "_debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2536:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2536:7:5",
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
                  "id": 3578,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2561:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3577,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:5",
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
                  "id": 3580,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2591:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3579,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2591:4:5",
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
                  "id": 3582,
                  "name": "_termsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2628:22:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3581,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2628:7:5",
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
                  "id": 3584,
                  "name": "_termsContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2660:32:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3583,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:7:5",
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
                  "id": 3586,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2702:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3585,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2702:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2470:248:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3591,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2773:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3590,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2773:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2772:15:5"
            },
            "scope": 3891,
            "src": "2455:770:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3643,
              "nodeType": "Block",
              "src": "3409:77:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3639,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3631,
                        "src": "3454:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3640,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3539,
                        "src": "3462:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3636,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3419:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3638,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "3419:34:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3419:60:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3642,
                  "nodeType": "ExpressionStatement",
                  "src": "3419:60:5"
                }
              ]
            },
            "documentation": "Adds an address to the list of agents authorized to mint debt tokens.",
            "id": 3644,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3634,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3633,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "3395:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3395:9:5"
              }
            ],
            "name": "addAuthorizedMintAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3631,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "3356:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3630,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3356:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3355:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3635,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3409:0:5"
            },
            "scope": 3891,
            "src": "3324:162:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3658,
              "nodeType": "Block",
              "src": "3680:87:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3654,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "3735:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3655,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3539,
                        "src": "3743:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3651,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3690:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3653,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "3690:44:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3690:70:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3657,
                  "nodeType": "ExpressionStatement",
                  "src": "3690:70:5"
                }
              ]
            },
            "documentation": "Removes an address from the list of agents authorized to mint debt tokens",
            "id": 3659,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3649,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3648,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "3666:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3666:9:5"
              }
            ],
            "name": "revokeMintAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3646,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "3627:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3626:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3680:0:5"
            },
            "scope": 3891,
            "src": "3589:178:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3669,
              "nodeType": "Block",
              "src": "3957:70:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3665,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3974:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3666,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "3974:44:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 3667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3974:46:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 3664,
                  "id": 3668,
                  "nodeType": "Return",
                  "src": "3967:53:5"
                }
              ]
            },
            "documentation": "Returns the list of agents authorized to mint debt tokens",
            "id": 3670,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedMintAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3886:2:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3663,
                  "name": "_agents",
                  "nodeType": "VariableDeclaration",
                  "scope": 3670,
                  "src": "3934:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3661,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3934:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3662,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3934:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3933:19:5"
            },
            "scope": 3891,
            "src": "3854:173:5",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3684,
              "nodeType": "Block",
              "src": "4213:67:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3680,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3672,
                        "src": "4253:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3681,
                        "name": "URI_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "4261:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3677,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4223:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3679,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "4223:29:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4223:50:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3683,
                  "nodeType": "ExpressionStatement",
                  "src": "4223:50:5"
                }
              ]
            },
            "documentation": "Adds an address to the list of agents authorized to set token URIs.",
            "id": 3685,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3675,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3674,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "4199:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4199:9:5"
              }
            ],
            "name": "addAuthorizedTokenURIAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3672,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3685,
                  "src": "4160:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4160:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4159:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3676,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4213:0:5"
            },
            "scope": 3891,
            "src": "4124:156:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3695,
              "nodeType": "Block",
              "src": "4473:65:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3691,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4490:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3692,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "4490:39:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 3693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4490:41:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 3690,
                  "id": 3694,
                  "nodeType": "Return",
                  "src": "4483:48:5"
                }
              ]
            },
            "documentation": "Returns the list of agents authorized to set token URIs.",
            "id": 3696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTokenURIAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4402:2:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3689,
                  "name": "_agents",
                  "nodeType": "VariableDeclaration",
                  "scope": 3696,
                  "src": "4450:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3687,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4450:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3688,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4450:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4449:19:5"
            },
            "scope": 3891,
            "src": "4366:172:5",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3710,
              "nodeType": "Block",
              "src": "4730:77:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3706,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3698,
                        "src": "4780:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3707,
                        "name": "URI_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "4788:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3703,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4740:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3705,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "4740:39:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4740:60:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3709,
                  "nodeType": "ExpressionStatement",
                  "src": "4740:60:5"
                }
              ]
            },
            "documentation": "Removes an address from the list of agents authorized to set token URIs.",
            "id": 3711,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3701,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3700,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "4716:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4716:9:5"
              }
            ],
            "name": "revokeTokenURIAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3698,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3711,
                  "src": "4677:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4677:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4676:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3702,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4730:0:5"
            },
            "scope": 3891,
            "src": "4640:167:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3727,
              "nodeType": "Block",
              "src": "5060:45:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3723,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3713,
                        "src": "5084:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3724,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3715,
                        "src": "5089:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3720,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5070:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10916,
                      "src": "5070:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5070:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3726,
                  "nodeType": "ExpressionStatement",
                  "src": "5070:28:5"
                }
              ]
            },
            "documentation": "We override approval method of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3728,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3718,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3717,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5042:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5042:13:5"
              }
            ],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3713,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3728,
                  "src": "4991:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3712,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4991:7:5",
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
                  "id": 3715,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3728,
                  "src": "5004:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3714,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5004:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4990:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5060:0:5"
            },
            "scope": 3891,
            "src": "4974:131:5",
            "stateMutability": "nonpayable",
            "superFunction": 10916,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3744,
              "nodeType": "Block",
              "src": "5378:56:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3740,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3730,
                        "src": "5412:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3741,
                        "name": "_approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3732,
                        "src": "5417:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3737,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5388:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3739,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setApprovalForAll",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10959,
                      "src": "5388:23:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,bool)"
                      }
                    },
                    "id": 3742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5388:39:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3743,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:39:5"
                }
              ]
            },
            "documentation": "We override setApprovalForAll method of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3745,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3735,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3734,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5360:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5360:13:5"
              }
            ],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3730,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3745,
                  "src": "5308:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5308:7:5",
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
                  "id": 3732,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3745,
                  "src": "5321:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3731,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5321:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5307:29:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3736,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5378:0:5"
            },
            "scope": 3891,
            "src": "5281:153:5",
            "stateMutability": "nonpayable",
            "superFunction": 10959,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3759,
              "nodeType": "Block",
              "src": "5561:60:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3753,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11714,
                          "src": "5588:3:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5588:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3755,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3747,
                        "src": "5600:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3756,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3749,
                        "src": "5605:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3752,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3810,
                        3838
                      ],
                      "referencedDeclaration": 3810,
                      "src": "5571:16:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5571:43:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3758,
                  "nodeType": "ExpressionStatement",
                  "src": "5571:43:5"
                }
              ]
            },
            "documentation": "Support deprecated ERC721 method",
            "id": 3760,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3747,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3760,
                  "src": "5514:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5514:7:5",
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
                  "id": 3749,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3760,
                  "src": "5527:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3748,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5527:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5513:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3751,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5561:0:5"
            },
            "scope": 3891,
            "src": "5496:125:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3784,
              "nodeType": "Block",
              "src": "5899:100:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3772,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3766,
                        "src": "5928:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3773,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3764,
                        "src": "5938:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3771,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "5909:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5909:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3775,
                  "nodeType": "ExpressionStatement",
                  "src": "5909:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3779,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3762,
                        "src": "5971:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3780,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3764,
                        "src": "5978:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3781,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3766,
                        "src": "5983:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3776,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5952:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3778,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11025,
                      "src": "5952:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5952:40:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3783,
                  "nodeType": "ExpressionStatement",
                  "src": "5952:40:5"
                }
              ]
            },
            "documentation": "We override transferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3785,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3769,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3768,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5881:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5881:13:5"
              }
            ],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3762,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5815:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5815:7:5",
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
                  "id": 3764,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5830:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5830:7:5",
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
                  "id": 3766,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5843:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3765,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5814:43:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3770,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5899:0:5"
            },
            "scope": 3891,
            "src": "5793:206:5",
            "stateMutability": "nonpayable",
            "superFunction": 11025,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3809,
              "nodeType": "Block",
              "src": "6285:104:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3797,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "6314:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3798,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "6324:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3796,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "6295:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6295:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3800,
                  "nodeType": "ExpressionStatement",
                  "src": "6295:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3804,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3787,
                        "src": "6361:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3805,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "6368:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3806,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "6373:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3801,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "6338:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11045,
                      "src": "6338:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6338:44:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3808,
                  "nodeType": "ExpressionStatement",
                  "src": "6338:44:5"
                }
              ]
            },
            "documentation": "We override safeTransferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3810,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3794,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3793,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6267:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6267:13:5"
              }
            ],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3787,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6201:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6201:7:5",
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
                  "id": 3789,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6216:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6216:7:5",
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
                  "id": 3791,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6229:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3790,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6229:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6200:43:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6285:0:5"
            },
            "scope": 3891,
            "src": "6175:214:5",
            "stateMutability": "nonpayable",
            "superFunction": 11045,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3837,
              "nodeType": "Block",
              "src": "6688:111:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3824,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3816,
                        "src": "6717:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3825,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3814,
                        "src": "6727:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3823,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "6698:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6698:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3827,
                  "nodeType": "ExpressionStatement",
                  "src": "6698:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3831,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3812,
                        "src": "6764:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3832,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3814,
                        "src": "6771:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3833,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3816,
                        "src": "6776:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3834,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "6786:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3828,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "6741:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3830,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11075,
                      "src": "6741:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6741:51:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3836,
                  "nodeType": "ExpressionStatement",
                  "src": "6741:51:5"
                }
              ]
            },
            "documentation": "We override safeTransferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3838,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3821,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3820,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6670:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6670:13:5"
              }
            ],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3812,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6591:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6591:7:5",
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
                  "id": 3814,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6606:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6606:7:5",
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
                  "id": 3816,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6619:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3815,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6619:4:5",
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
                  "id": 3818,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6634:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6634:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6590:56:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6688:0:5"
            },
            "scope": 3891,
            "src": "6565:234:5",
            "stateMutability": "nonpayable",
            "superFunction": 11075,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3862,
              "nodeType": "Block",
              "src": "7006:114:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3850,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "7057:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3851,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "7057:10:5",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 3848,
                            "name": "tokenURIPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3536,
                            "src": "7024:19:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 3849,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "7024:32:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 3852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7024:44:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3847,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "7016:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7016:53:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3854,
                  "nodeType": "ExpressionStatement",
                  "src": "7016:53:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3858,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3840,
                        "src": "7098:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3859,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3842,
                        "src": "7108:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3855,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "7079:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_setTokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11431,
                      "src": "7079:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 3860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7079:34:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3861,
                  "nodeType": "ExpressionStatement",
                  "src": "7079:34:5"
                }
              ]
            },
            "documentation": "Allows senders with special permissions to set the token URI for a given debt token.",
            "id": 3863,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3845,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3844,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6988:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6988:13:5"
              }
            ],
            "name": "setTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3840,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3863,
                  "src": "6934:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6934:7:5",
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
                  "id": 3842,
                  "name": "_uri",
                  "nodeType": "VariableDeclaration",
                  "scope": 3863,
                  "src": "6952:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3841,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6952:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6933:31:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7006:0:5"
            },
            "scope": 3891,
            "src": "6913:207:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3889,
              "nodeType": "Block",
              "src": "7354:146:5",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3873,
                              "name": "_tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3865,
                              "src": "7400:8:5",
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
                            "id": 3872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7392:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": "bytes32"
                          },
                          "id": 3874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7392:17:5",
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
                          "id": 3870,
                          "name": "registry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3532,
                          "src": "7368:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                            "typeString": "contract DebtRegistry"
                          }
                        },
                        "id": 3871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getBeneficiary",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3375,
                        "src": "7368:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) view external returns (address)"
                        }
                      },
                      "id": 3875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7368:42:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 3876,
                      "name": "_to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3867,
                      "src": "7414:3:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7368:49:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3888,
                  "nodeType": "IfStatement",
                  "src": "7364:130:5",
                  "trueBody": {
                    "id": 3887,
                    "nodeType": "Block",
                    "src": "7419:75:5",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3882,
                                  "name": "_tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3865,
                                  "src": "7468:8:5",
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
                                "id": 3881,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7460:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": "bytes32"
                              },
                              "id": 3883,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7460:17:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3884,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3867,
                              "src": "7479:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 3878,
                              "name": "registry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3532,
                              "src": "7433:8:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                "typeString": "contract DebtRegistry"
                              }
                            },
                            "id": 3880,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "modifyBeneficiary",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3249,
                            "src": "7433:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address) external"
                            }
                          },
                          "id": 3885,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7433:50:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3886,
                        "nodeType": "ExpressionStatement",
                        "src": "7433:50:5"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "_modifyBeneficiary mutates the debt registry. This function should be\ncalled every time a token is transferred or minted",
            "id": 3890,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_modifyBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3865,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3890,
                  "src": "7305:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3864,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:4:5",
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
                  "id": 3867,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3890,
                  "src": "7320:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7320:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7354:0:5"
            },
            "scope": 3891,
            "src": "7277:223:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3892,
        "src": "1362:6140:5"
      }
    ],
    "src": "584:6919:5"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtToken.sol",
    "exportedSymbols": {
      "DebtToken": [
        3891
      ]
    },
    "id": 3892,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3511,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:5"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 3512,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 3510,
        "src": "635:28:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/ERC165.sol",
        "file": "./ERC165.sol",
        "id": 3513,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 3902,
        "src": "664:22:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 3516,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 5641,
        "src": "687:82:5",
        "symbolAliases": [
          {
            "foreign": 3514,
            "local": null
          },
          {
            "foreign": 3515,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 3517,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 9876,
        "src": "797:60:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
        "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
        "id": 3518,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 11700,
        "src": "858:66:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 3519,
        "nodeType": "ImportDirective",
        "scope": 3892,
        "sourceUnit": 10169,
        "src": "925:59:5",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3520,
              "name": "ERC721Token",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 11699,
              "src": "1384:11:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721Token_$11699",
                "typeString": "contract ERC721Token"
              }
            },
            "id": 3521,
            "nodeType": "InheritanceSpecifier",
            "src": "1384:11:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3522,
              "name": "ERC165",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3901,
              "src": "1397:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC165_$3901",
                "typeString": "contract ERC165"
              }
            },
            "id": 3523,
            "nodeType": "InheritanceSpecifier",
            "src": "1397:6:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3524,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1405:8:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 3525,
            "nodeType": "InheritanceSpecifier",
            "src": "1405:8:5"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3526,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "1415:16:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 3527,
            "nodeType": "InheritanceSpecifier",
            "src": "1415:16:5"
          }
        ],
        "contractDependencies": [
          3901,
          5436,
          9875,
          10029,
          10594,
          10614,
          10621,
          10728,
          11311,
          11699
        ],
        "contractKind": "contract",
        "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 3891,
        "linearizedBaseContracts": [
          3891,
          5436,
          9875,
          10029,
          3901,
          11699,
          11311,
          10621,
          10614,
          10594,
          10728
        ],
        "name": "DebtToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 3530,
            "libraryName": {
              "contractScope": null,
              "id": 3528,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "1444:14:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1438:52:5",
            "typeName": {
              "contractScope": null,
              "id": 3529,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1463:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 3532,
            "name": "registry",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1496:28:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 3531,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "1496:12:5",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                "typeString": "contract DebtRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3534,
            "name": "tokenCreationPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1531:60:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 3533,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1531:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 3536,
            "name": "tokenURIPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1597:55:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 3535,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1597:26:5",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3539,
            "name": "CREATION_CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1659:63:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3537,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1659:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "646562742d746f6b656e2d6372656174696f6e",
              "id": 3538,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1701:21:5",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_2d9a63cb422dbf25d87c5964331a54f8f0ef47fda8423314940cc4724b7c93a1",
                "typeString": "literal_string \"debt-token-creation\""
              },
              "value": "debt-token-creation"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 3542,
            "name": "URI_CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 3891,
            "src": "1728:53:5",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3540,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1728:6:5",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "646562742d746f6b656e2d757269",
              "id": 3541,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1765:16:5",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_0d2873bacc3db71894b8d4e2c856fa4c9fb7274484262058e9cd6c3a8004a268",
                "typeString": "literal_string \"debt-token-uri\""
              },
              "value": "debt-token-uri"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 3557,
              "nodeType": "Block",
              "src": "1964:51:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 3555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 3551,
                      "name": "registry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3532,
                      "src": "1974:8:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 3553,
                          "name": "_registry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3544,
                          "src": "1998:9:5",
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
                        "id": 3552,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "1985:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 3554,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1985:23:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "1974:34:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 3556,
                  "nodeType": "ExpressionStatement",
                  "src": "1974:34:5"
                }
              ]
            },
            "documentation": "Constructor that sets the address of the debt registry.",
            "id": 3558,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "44656274546f6b656e",
                    "id": 3547,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1940:11:5",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_c10442bb66c5f01b129d08a0133cb2d11acab7c9cdd4bcb1a415cdceb37ea6cd",
                      "typeString": "literal_string \"DebtToken\""
                    },
                    "value": "DebtToken"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "444454",
                    "id": 3548,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1953:5:5",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_f8a9044cf25759a03370eb916040fc6ce23c95f27e93503ef2157147bcb9e846",
                      "typeString": "literal_string \"DDT\""
                    },
                    "value": "DDT"
                  }
                ],
                "id": 3549,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3546,
                  "name": "ERC721Token",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 11699,
                  "src": "1928:11:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721Token_$11699_$",
                    "typeString": "type(contract ERC721Token)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1928:31:5"
              }
            ],
            "name": "DebtToken",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3545,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3544,
                  "name": "_registry",
                  "nodeType": "VariableDeclaration",
                  "scope": 3558,
                  "src": "1886:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3543,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1886:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1885:19:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3550,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1964:0:5"
            },
            "scope": 3891,
            "src": "1867:148:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3569,
              "nodeType": "Block",
              "src": "2227:59:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    },
                    "id": 3567,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 3565,
                      "name": "interfaceID",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3560,
                      "src": "2244:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes4",
                        "typeString": "bytes4"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "30783830616335386364",
                      "id": 3566,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2259:10:5",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_2158778573_by_1",
                        "typeString": "int_const 2158778573"
                      },
                      "value": "0x80ac58cd"
                    },
                    "src": "2244:25:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 3564,
                  "id": 3568,
                  "nodeType": "Return",
                  "src": "2237:32:5"
                }
              ]
            },
            "documentation": "ERC165 interface.\nReturns true for ERC721, false otherwise",
            "id": 3570,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "supportsInterface",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3561,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3560,
                  "name": "interfaceID",
                  "nodeType": "VariableDeclaration",
                  "scope": 3570,
                  "src": "2137:18:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 3559,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "2137:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2136:20:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3564,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3563,
                  "name": "_isSupported",
                  "nodeType": "VariableDeclaration",
                  "scope": 3570,
                  "src": "2204:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3562,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2204:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2203:19:5"
            },
            "scope": 3891,
            "src": "2110:176:5",
            "stateMutability": "view",
            "superFunction": 3900,
            "visibility": "external"
          },
          {
            "body": {
              "id": 3628,
              "nodeType": "Block",
              "src": "2792:433:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3596,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2848:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3597,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2848:10:5",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 3594,
                            "name": "tokenCreationPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3534,
                            "src": "2810:24:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 3595,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "2810:37:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 3598,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2810:49:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3593,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2802:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3599,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2802:58:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3600,
                  "nodeType": "ExpressionStatement",
                  "src": "2802:58:5"
                },
                {
                  "assignments": [
                    3602
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 3602,
                      "name": "entryHash",
                      "nodeType": "VariableDeclaration",
                      "scope": 3629,
                      "src": "2871:17:5",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      },
                      "typeName": {
                        "id": 3601,
                        "name": "bytes32",
                        "nodeType": "ElementaryTypeName",
                        "src": "2871:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 3614,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3605,
                        "name": "_version",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3572,
                        "src": "2920:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3606,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3574,
                        "src": "2942:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3607,
                        "name": "_debtor",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3576,
                        "src": "2968:7:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3608,
                        "name": "_underwriter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3578,
                        "src": "2989:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3609,
                        "name": "_underwriterRiskRating",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3580,
                        "src": "3015:22:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3610,
                        "name": "_termsContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3582,
                        "src": "3051:14:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3611,
                        "name": "_termsContractParameters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3584,
                        "src": "3079:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3612,
                        "name": "_salt",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3586,
                        "src": "3117:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3603,
                        "name": "registry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3532,
                        "src": "2891:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 3604,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "insert",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3211,
                      "src": "2891:15:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_address_$_t_uint256_$_t_address_$_t_bytes32_$_t_uint256_$returns$_t_bytes32_$",
                        "typeString": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                      }
                    },
                    "id": 3613,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2891:241:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2871:261:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3618,
                        "name": "_beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3574,
                        "src": "3155:12:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 3620,
                            "name": "entryHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3602,
                            "src": "3174:9:5",
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
                          "id": 3619,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "3169:4:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_uint256_$",
                            "typeString": "type(uint256)"
                          },
                          "typeName": "uint"
                        },
                        "id": 3621,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3169:15:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3615,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "3143:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3617,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_mint",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11619,
                      "src": "3143:11:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3622,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3143:42:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3623,
                  "nodeType": "ExpressionStatement",
                  "src": "3143:42:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3625,
                        "name": "entryHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3602,
                        "src": "3208:9:5",
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
                      "id": 3624,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3203:4:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": "uint"
                    },
                    "id": 3626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3203:15:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 3592,
                  "id": 3627,
                  "nodeType": "Return",
                  "src": "3196:22:5"
                }
              ]
            },
            "documentation": "Mints a unique debt token and inserts the associated issuance into\nthe debt registry, if the calling address is authorized to do so.",
            "id": 3629,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3589,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3588,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "2742:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2742:13:5"
              }
            ],
            "name": "create",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3587,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3572,
                  "name": "_version",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2480:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3571,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2480:7:5",
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
                  "id": 3574,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2506:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3573,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2506:7:5",
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
                  "id": 3576,
                  "name": "_debtor",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2536:15:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3575,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2536:7:5",
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
                  "id": 3578,
                  "name": "_underwriter",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2561:20:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3577,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:5",
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
                  "id": 3580,
                  "name": "_underwriterRiskRating",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2591:27:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3579,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2591:4:5",
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
                  "id": 3582,
                  "name": "_termsContract",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2628:22:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3581,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2628:7:5",
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
                  "id": 3584,
                  "name": "_termsContractParameters",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2660:32:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3583,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:7:5",
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
                  "id": 3586,
                  "name": "_salt",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2702:10:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3585,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2702:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2470:248:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3592,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3591,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3629,
                  "src": "2773:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3590,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2773:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2772:15:5"
            },
            "scope": 3891,
            "src": "2455:770:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3643,
              "nodeType": "Block",
              "src": "3409:77:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3639,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3631,
                        "src": "3454:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3640,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3539,
                        "src": "3462:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3636,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3419:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3638,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "3419:34:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3641,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3419:60:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3642,
                  "nodeType": "ExpressionStatement",
                  "src": "3419:60:5"
                }
              ]
            },
            "documentation": "Adds an address to the list of agents authorized to mint debt tokens.",
            "id": 3644,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3634,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3633,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "3395:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3395:9:5"
              }
            ],
            "name": "addAuthorizedMintAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3632,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3631,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3644,
                  "src": "3356:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3630,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3356:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3355:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3635,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3409:0:5"
            },
            "scope": 3891,
            "src": "3324:162:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3658,
              "nodeType": "Block",
              "src": "3680:87:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3654,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3646,
                        "src": "3735:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3655,
                        "name": "CREATION_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3539,
                        "src": "3743:16:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3651,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3690:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3653,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "3690:44:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3656,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3690:70:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3657,
                  "nodeType": "ExpressionStatement",
                  "src": "3690:70:5"
                }
              ]
            },
            "documentation": "Removes an address from the list of agents authorized to mint debt tokens",
            "id": 3659,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3649,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3648,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "3666:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3666:9:5"
              }
            ],
            "name": "revokeMintAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3647,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3646,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3659,
                  "src": "3627:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3645,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3627:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3626:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3650,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3680:0:5"
            },
            "scope": 3891,
            "src": "3589:178:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3669,
              "nodeType": "Block",
              "src": "3957:70:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3665,
                        "name": "tokenCreationPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3534,
                        "src": "3974:24:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3666,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "3974:44:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 3667,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3974:46:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 3664,
                  "id": 3668,
                  "nodeType": "Return",
                  "src": "3967:53:5"
                }
              ]
            },
            "documentation": "Returns the list of agents authorized to mint debt tokens",
            "id": 3670,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedMintAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3660,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3886:2:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3664,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3663,
                  "name": "_agents",
                  "nodeType": "VariableDeclaration",
                  "scope": 3670,
                  "src": "3934:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3661,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "3934:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3662,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3934:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3933:19:5"
            },
            "scope": 3891,
            "src": "3854:173:5",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3684,
              "nodeType": "Block",
              "src": "4213:67:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3680,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3672,
                        "src": "4253:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3681,
                        "name": "URI_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "4261:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3677,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4223:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3679,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "4223:29:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3682,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4223:50:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3683,
                  "nodeType": "ExpressionStatement",
                  "src": "4223:50:5"
                }
              ]
            },
            "documentation": "Adds an address to the list of agents authorized to set token URIs.",
            "id": 3685,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3675,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3674,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "4199:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4199:9:5"
              }
            ],
            "name": "addAuthorizedTokenURIAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3673,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3672,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3685,
                  "src": "4160:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3671,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4160:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4159:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3676,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4213:0:5"
            },
            "scope": 3891,
            "src": "4124:156:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3695,
              "nodeType": "Block",
              "src": "4473:65:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3691,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4490:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3692,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "4490:39:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 3693,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4490:41:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 3690,
                  "id": 3694,
                  "nodeType": "Return",
                  "src": "4483:48:5"
                }
              ]
            },
            "documentation": "Returns the list of agents authorized to set token URIs.",
            "id": 3696,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTokenURIAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3686,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4402:2:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3690,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3689,
                  "name": "_agents",
                  "nodeType": "VariableDeclaration",
                  "scope": 3696,
                  "src": "4450:17:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 3687,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "4450:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 3688,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "4450:9:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4449:19:5"
            },
            "scope": 3891,
            "src": "4366:172:5",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3710,
              "nodeType": "Block",
              "src": "4730:77:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3706,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3698,
                        "src": "4780:6:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3707,
                        "name": "URI_CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3542,
                        "src": "4788:11:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3703,
                        "name": "tokenURIPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3536,
                        "src": "4740:19:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 3705,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "4740:39:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 3708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4740:60:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3709,
                  "nodeType": "ExpressionStatement",
                  "src": "4740:60:5"
                }
              ]
            },
            "documentation": "Removes an address from the list of agents authorized to set token URIs.",
            "id": 3711,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3701,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3700,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "4716:9:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4716:9:5"
              }
            ],
            "name": "revokeTokenURIAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3698,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 3711,
                  "src": "4677:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3697,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4677:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4676:16:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3702,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4730:0:5"
            },
            "scope": 3891,
            "src": "4640:167:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3727,
              "nodeType": "Block",
              "src": "5060:45:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3723,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3713,
                        "src": "5084:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3724,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3715,
                        "src": "5089:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3720,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5070:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3722,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "approve",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10916,
                      "src": "5070:13:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 3725,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5070:28:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3726,
                  "nodeType": "ExpressionStatement",
                  "src": "5070:28:5"
                }
              ]
            },
            "documentation": "We override approval method of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3728,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3718,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3717,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5042:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5042:13:5"
              }
            ],
            "name": "approve",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3713,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3728,
                  "src": "4991:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3712,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4991:7:5",
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
                  "id": 3715,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3728,
                  "src": "5004:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3714,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5004:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4990:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5060:0:5"
            },
            "scope": 3891,
            "src": "4974:131:5",
            "stateMutability": "nonpayable",
            "superFunction": 10916,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3744,
              "nodeType": "Block",
              "src": "5378:56:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3740,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3730,
                        "src": "5412:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3741,
                        "name": "_approved",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3732,
                        "src": "5417:9:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3737,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5388:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3739,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "setApprovalForAll",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10959,
                      "src": "5388:23:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,bool)"
                      }
                    },
                    "id": 3742,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5388:39:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3743,
                  "nodeType": "ExpressionStatement",
                  "src": "5388:39:5"
                }
              ]
            },
            "documentation": "We override setApprovalForAll method of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3745,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3735,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3734,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5360:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5360:13:5"
              }
            ],
            "name": "setApprovalForAll",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3733,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3730,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3745,
                  "src": "5308:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3729,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5308:7:5",
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
                  "id": 3732,
                  "name": "_approved",
                  "nodeType": "VariableDeclaration",
                  "scope": 3745,
                  "src": "5321:14:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 3731,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "5321:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5307:29:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3736,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5378:0:5"
            },
            "scope": 3891,
            "src": "5281:153:5",
            "stateMutability": "nonpayable",
            "superFunction": 10959,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3759,
              "nodeType": "Block",
              "src": "5561:60:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 3753,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11714,
                          "src": "5588:3:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 3754,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5588:10:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3755,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3747,
                        "src": "5600:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3756,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3749,
                        "src": "5605:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 3752,
                      "name": "safeTransferFrom",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        3810,
                        3838
                      ],
                      "referencedDeclaration": 3810,
                      "src": "5571:16:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3757,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5571:43:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3758,
                  "nodeType": "ExpressionStatement",
                  "src": "5571:43:5"
                }
              ]
            },
            "documentation": "Support deprecated ERC721 method",
            "id": 3760,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transfer",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3750,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3747,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3760,
                  "src": "5514:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3746,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5514:7:5",
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
                  "id": 3749,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3760,
                  "src": "5527:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3748,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5527:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5513:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3751,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5561:0:5"
            },
            "scope": 3891,
            "src": "5496:125:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3784,
              "nodeType": "Block",
              "src": "5899:100:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3772,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3766,
                        "src": "5928:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3773,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3764,
                        "src": "5938:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3771,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "5909:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5909:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3775,
                  "nodeType": "ExpressionStatement",
                  "src": "5909:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3779,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3762,
                        "src": "5971:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3780,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3764,
                        "src": "5978:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3781,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3766,
                        "src": "5983:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3776,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "5952:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3778,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11025,
                      "src": "5952:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3782,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5952:40:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3783,
                  "nodeType": "ExpressionStatement",
                  "src": "5952:40:5"
                }
              ]
            },
            "documentation": "We override transferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3785,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3769,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3768,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "5881:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "5881:13:5"
              }
            ],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3767,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3762,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5815:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3761,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5815:7:5",
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
                  "id": 3764,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5830:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3763,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "5830:7:5",
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
                  "id": 3766,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3785,
                  "src": "5843:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3765,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "5843:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5814:43:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3770,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5899:0:5"
            },
            "scope": 3891,
            "src": "5793:206:5",
            "stateMutability": "nonpayable",
            "superFunction": 11025,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3809,
              "nodeType": "Block",
              "src": "6285:104:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3797,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "6314:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3798,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "6324:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3796,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "6295:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6295:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3800,
                  "nodeType": "ExpressionStatement",
                  "src": "6295:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3804,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3787,
                        "src": "6361:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3805,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3789,
                        "src": "6368:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3806,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3791,
                        "src": "6373:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3801,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "6338:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3803,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11045,
                      "src": "6338:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 3807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6338:44:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3808,
                  "nodeType": "ExpressionStatement",
                  "src": "6338:44:5"
                }
              ]
            },
            "documentation": "We override safeTransferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3810,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3794,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3793,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6267:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6267:13:5"
              }
            ],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3792,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3787,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6201:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3786,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6201:7:5",
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
                  "id": 3789,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6216:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3788,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6216:7:5",
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
                  "id": 3791,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3810,
                  "src": "6229:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3790,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6229:4:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6200:43:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3795,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6285:0:5"
            },
            "scope": 3891,
            "src": "6175:214:5",
            "stateMutability": "nonpayable",
            "superFunction": 11045,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3837,
              "nodeType": "Block",
              "src": "6688:111:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3824,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3816,
                        "src": "6717:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3825,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3814,
                        "src": "6727:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 3823,
                      "name": "_modifyBeneficiary",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3890,
                      "src": "6698:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (uint256,address)"
                      }
                    },
                    "id": 3826,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6698:33:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3827,
                  "nodeType": "ExpressionStatement",
                  "src": "6698:33:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3831,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3812,
                        "src": "6764:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3832,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3814,
                        "src": "6771:3:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3833,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3816,
                        "src": "6776:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3834,
                        "name": "_data",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3818,
                        "src": "6786:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_bytes_memory_ptr",
                          "typeString": "bytes memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3828,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "6741:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3830,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "safeTransferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11075,
                      "src": "6741:22:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,address,uint256,bytes memory)"
                      }
                    },
                    "id": 3835,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "6741:51:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3836,
                  "nodeType": "ExpressionStatement",
                  "src": "6741:51:5"
                }
              ]
            },
            "documentation": "We override safeTransferFrom methods of the parent ERC721Token\ncontract to allow its functionality to be frozen in the case of an emergency",
            "id": 3838,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3821,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3820,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6670:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6670:13:5"
              }
            ],
            "name": "safeTransferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3819,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3812,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6591:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3811,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6591:7:5",
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
                  "id": 3814,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6606:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3813,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "6606:7:5",
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
                  "id": 3816,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6619:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3815,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "6619:4:5",
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
                  "id": 3818,
                  "name": "_data",
                  "nodeType": "VariableDeclaration",
                  "scope": 3838,
                  "src": "6634:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes"
                  },
                  "typeName": {
                    "id": 3817,
                    "name": "bytes",
                    "nodeType": "ElementaryTypeName",
                    "src": "6634:5:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes_storage_ptr",
                      "typeString": "bytes"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6590:56:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3822,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "6688:0:5"
            },
            "scope": 3891,
            "src": "6565:234:5",
            "stateMutability": "nonpayable",
            "superFunction": 11075,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3862,
              "nodeType": "Block",
              "src": "7006:114:5",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 3850,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "7057:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 3851,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "7057:10:5",
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
                          "expression": {
                            "argumentTypes": null,
                            "id": 3848,
                            "name": "tokenURIPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3536,
                            "src": "7024:19:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 3849,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "7024:32:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 3852,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "7024:44:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 3847,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "7016:7:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 3853,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7016:53:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3854,
                  "nodeType": "ExpressionStatement",
                  "src": "7016:53:5"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 3858,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3840,
                        "src": "7098:8:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 3859,
                        "name": "_uri",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3842,
                        "src": "7108:4:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 3855,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 11772,
                        "src": "7079:5:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_DebtToken_$3891",
                          "typeString": "contract super DebtToken"
                        }
                      },
                      "id": 3857,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_setTokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11431,
                      "src": "7079:18:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 3860,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "7079:34:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 3861,
                  "nodeType": "ExpressionStatement",
                  "src": "7079:34:5"
                }
              ]
            },
            "documentation": "Allows senders with special permissions to set the token URI for a given debt token.",
            "id": 3863,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 3845,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 3844,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "6988:13:5",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "6988:13:5"
              }
            ],
            "name": "setTokenURI",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3843,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3840,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3863,
                  "src": "6934:16:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3839,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "6934:7:5",
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
                  "id": 3842,
                  "name": "_uri",
                  "nodeType": "VariableDeclaration",
                  "scope": 3863,
                  "src": "6952:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 3841,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "6952:6:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "6933:31:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3846,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7006:0:5"
            },
            "scope": 3891,
            "src": "6913:207:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 3889,
              "nodeType": "Block",
              "src": "7354:146:5",
              "statements": [
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    },
                    "id": 3877,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 3873,
                              "name": "_tokenId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3865,
                              "src": "7400:8:5",
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
                            "id": 3872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "7392:7:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_bytes32_$",
                              "typeString": "type(bytes32)"
                            },
                            "typeName": "bytes32"
                          },
                          "id": 3874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7392:17:5",
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
                          "id": 3870,
                          "name": "registry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3532,
                          "src": "7368:8:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                            "typeString": "contract DebtRegistry"
                          }
                        },
                        "id": 3871,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "getBeneficiary",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3375,
                        "src": "7368:23:5",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                          "typeString": "function (bytes32) view external returns (address)"
                        }
                      },
                      "id": 3875,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "7368:42:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "!=",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 3876,
                      "name": "_to",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3867,
                      "src": "7414:3:5",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "7368:49:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 3888,
                  "nodeType": "IfStatement",
                  "src": "7364:130:5",
                  "trueBody": {
                    "id": 3887,
                    "nodeType": "Block",
                    "src": "7419:75:5",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 3882,
                                  "name": "_tokenId",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3865,
                                  "src": "7468:8:5",
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
                                "id": 3881,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "7460:7:5",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_bytes32_$",
                                  "typeString": "type(bytes32)"
                                },
                                "typeName": "bytes32"
                              },
                              "id": 3883,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "7460:17:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 3884,
                              "name": "_to",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3867,
                              "src": "7479:3:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 3878,
                              "name": "registry",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 3532,
                              "src": "7433:8:5",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                "typeString": "contract DebtRegistry"
                              }
                            },
                            "id": 3880,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "modifyBeneficiary",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 3249,
                            "src": "7433:26:5",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                              "typeString": "function (bytes32,address) external"
                            }
                          },
                          "id": 3885,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "7433:50:5",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 3886,
                        "nodeType": "ExpressionStatement",
                        "src": "7433:50:5"
                      }
                    ]
                  }
                }
              ]
            },
            "documentation": "_modifyBeneficiary mutates the debt registry. This function should be\ncalled every time a token is transferred or minted",
            "id": 3890,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_modifyBeneficiary",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3865,
                  "name": "_tokenId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3890,
                  "src": "7305:13:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3864,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "7305:4:5",
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
                  "id": 3867,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 3890,
                  "src": "7320:11:5",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "7320:7:5",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "7304:28:5"
            },
            "payable": false,
            "returnParameters": {
              "id": 3869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "7354:0:5"
            },
            "scope": 3891,
            "src": "7277:223:5",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 3892,
        "src": "1362:6140:5"
      }
    ],
    "src": "584:6919:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        },
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
      },
      "links": {},
      "address": "0xea812aab59845b3bffd86dd408101a082d90c567",
      "transactionHash": "0xe99308c6766b816344d203e4b9b174cc5a409eafd8340dc26246b8257018935a"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-10-31T05:02:15.000Z"
}
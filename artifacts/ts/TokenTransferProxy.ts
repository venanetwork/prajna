export const TokenTransferProxy = 
{
  "contractName": "TokenTransferProxy",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "CONTEXT",
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
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTransferAgent",
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
      "name": "revokeTransferAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedTransferAgents",
      "outputs": [
        {
          "name": "authorizedAgents",
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
          "name": "_token",
          "type": "address"
        },
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ffa8061006d6000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100ec5780632e667c4e146101915780633f4ba83a146102215780635c975abb146102385780638456cb59146102675780638da5cb5b1461027e57806394ae6e71146102d55780639c20030214610318578063f2fde38b14610384575b600080fd5b3480156100b557600080fd5b506100ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103c7565b005b3480156100f857600080fd5b50610177600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610470565b604051808215151515815260200191505060405180910390f35b34801561019d57600080fd5b506101a66105ad565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e65780820151818401526020810190506101cb565b50505050905090810190601f1680156102135780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022d57600080fd5b506102366105e6565b005b34801561024457600080fd5b5061024d6106a4565b604051808215151515815260200191505060405180910390f35b34801561027357600080fd5b5061027c6106b7565b005b34801561028a57600080fd5b50610293610777565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e157600080fd5b50610316600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079c565b005b34801561032457600080fd5b5061032d610845565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610370578082015181840152602081019050610355565b505050509050019250505060405180910390f35b34801561039057600080fd5b506103c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610856565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561042257600080fd5b61046d816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109ab9092919063ffffffff16565b50565b6000610486336001610b8a90919063ffffffff16565b151561049157600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b81019080805190602001909291905050509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064157600080fd5b600060149054906101000a900460ff16151561065c57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561071257600080fd5b600060149054906101000a900460ff1615151561072e57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107f757600080fd5b610842816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610be39092919063ffffffff16565b50565b60606108516001610ed6565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108b157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108ed57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6109b58383610f68565b15156109c057600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b4b578082015181840152602081019050610b30565b50505050905090810190601f168015610b785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610bf28686610b8a565b1515610bfd57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c5f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610cef57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610dd357fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610e1a9190610f7d565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e94578082015181840152602081019050610e79565b50505050905090810190601f168015610ec15780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b606081600201805480602002602001604051908101604052809291908181526020018280548015610f5c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f12575b50505050509050919050565b6000610f748383610b8a565b15905092915050565b815481835581811115610fa457818360005260206000209182019101610fa39190610fa9565b5b505050565b610fcb91905b80821115610fc7576000816000905550600101610faf565b5090565b905600a165627a7a723058204bd787155271c941e58c4b5612fcfb59ec51e5b16cff008037ba1266514cd8290029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630a8f7b52146100a957806315dacbea146100ec5780632e667c4e146101915780633f4ba83a146102215780635c975abb146102385780638456cb59146102675780638da5cb5b1461027e57806394ae6e71146102d55780639c20030214610318578063f2fde38b14610384575b600080fd5b3480156100b557600080fd5b506100ea600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103c7565b005b3480156100f857600080fd5b50610177600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610470565b604051808215151515815260200191505060405180910390f35b34801561019d57600080fd5b506101a66105ad565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101e65780820151818401526020810190506101cb565b50505050905090810190601f1680156102135780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022d57600080fd5b506102366105e6565b005b34801561024457600080fd5b5061024d6106a4565b604051808215151515815260200191505060405180910390f35b34801561027357600080fd5b5061027c6106b7565b005b34801561028a57600080fd5b50610293610777565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102e157600080fd5b50610316600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061079c565b005b34801561032457600080fd5b5061032d610845565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610370578082015181840152602081019050610355565b505050509050019250505060405180910390f35b34801561039057600080fd5b506103c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610856565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561042257600080fd5b61046d816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525060016109ab9092919063ffffffff16565b50565b6000610486336001610b8a90919063ffffffff16565b151561049157600080fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b15801561056857600080fd5b505af115801561057c573d6000803e3d6000fd5b505050506040513d602081101561059257600080fd5b81019080805190602001909291905050509050949350505050565b6040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f787900000000000000000000000081525081565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561064157600080fd5b600060149054906101000a900460ff16151561065c57600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561071257600080fd5b600060149054906101000a900460ff1615151561072e57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107f757600080fd5b610842816040805190810160405280601481526020017f746f6b656e2d7472616e736665722d70726f78790000000000000000000000008152506001610be39092919063ffffffff16565b50565b60606108516001610ed6565b905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108b157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156108ed57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6109b58383610f68565b15156109c057600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b4b578082015181840152602081019050610b30565b50505050905090810190601f168015610b785780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000806000610bf28686610b8a565b1515610bfd57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515610c5f57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515610cef57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515610dd357fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081610e1a9190610f7d565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015610e94578082015181840152602081019050610e79565b50505050905090810190601f168015610ec15780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b606081600201805480602002602001604051908101604052809291908181526020018280548015610f5c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610f12575b50505050509050919050565b6000610f748383610b8a565b15905092915050565b815481835581811115610fa457818360005260206000209182019101610fa39190610fa9565b5b505050565b610fcb91905b80821115610fc7576000816000905550600101610faf565b5090565b905600a165627a7a723058204bd787155271c941e58c4b5612fcfb59ec51e5b16cff008037ba1266514cd8290029",
  "sourceMap": "1330:1487:11:-;;;268:5:32;247:26;;;;;;;;;;;;;;;;;;;;509:10:34;501:5;;:18;;;;;;;;;;;;;;;;;;1330:1487:11;;;;;;",
  "deployedSourceMap": "1330:1487:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1678:157:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;2506:309;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2506:309:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1519:55;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1519:55:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1519:55:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;833:87:32;;;;;;247:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:32;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:85:32;;;;;;238:20:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:34;;;;;;;;;;;;;;;;;;;;;;;;;;;1943:173:11;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1943:173:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;2211:186;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2211:186:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2211:186:11;;;;;;;;;;;;;;;;;832:169:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;1678:157:11;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1777:51:11;1812:6;1820:7;;;;;;;;;;;;;;;;;;1777:24;:34;;:51;;;;;:::i;:::-;1678:157;:::o;2506:309::-;2656:13;2693:49;2731:10;2693:24;:37;;:49;;;;:::i;:::-;2685:58;;;;;;;;2767:6;2761:26;;;2788:5;2795:3;2800:7;2761:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2761:47:11;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2761:47:11;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2761:47:11;;;;;;;;;;;;;;;;2754:54;;2506:309;;;;;;:::o;1519:55::-;;;;;;;;;;;;;;;;;;;;:::o;833:87:32:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:32;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:34:-;;;;;;;;;;;;;:::o;1943:173:11:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;2048:61:11;2093:6;2101:7;;;;;;;;;;;;;;;;;;2048:24;:44;;:61;;;;;:::i;:::-;1943:173;:::o;2211:186::-;2295:26;2344:46;:24;:44;:46::i;:::-;2337:53;;2211:186;:::o;832:169:34:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;1732:383:14:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;1990:5;1963:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1963:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2075:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2121:1168::-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3239:43:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168;;;;;;:::o;3646:162::-;3748:9;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;1330:1487:11:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"./DebtRegistry.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The TokenTransferProxy is a proxy contract for transfering principal\n * and fee payments and repayments between agents and keepers in the Dharma\n * ecosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\n * protocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\n * creditors will not have to grant new transfer approvals to a new contract's address.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract TokenTransferProxy is Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions internal tokenTransferPermissions;\n\n    string public constant CONTEXT = \"token-transfer-proxy\";\n\n    /**\n     * Add address to list of agents authorized to initiate `transferFrom` calls\n     */\n    function addAuthorizedTransferAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.authorize(_agent, CONTEXT);\n    }\n\n    /**\n     * Remove address from list of agents authorized to initiate `transferFrom` calls\n     */\n    function revokeTransferAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenTransferPermissions.revokeAuthorization(_agent, CONTEXT);\n    }\n\n    /**\n     * Return list of agents authorized to initiate `transferFrom` calls\n     */\n    function getAuthorizedTransferAgents()\n        public\n        view\n        returns (address[] authorizedAgents)\n    {\n        return tokenTransferPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Transfer specified token amount from _from address to _to address on give token\n     */\n    function transferFrom(\n        address _token,\n        address _from,\n        address _to,\n        uint _amount\n    )\n        public\n        returns (bool _success)\n    {\n        require(tokenTransferPermissions.isAuthorized(msg.sender));\n\n        return ERC20(_token).transferFrom(_from, _to, _amount);\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
    "exportedSymbols": {
      "TokenTransferProxy": [
        4650
      ]
    },
    "id": 4651,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4559,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:11"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 4560,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 3510,
        "src": "609:28:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 4563,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 5641,
        "src": "638:82:11",
        "symbolAliases": [
          {
            "foreign": 4561,
            "local": null
          },
          {
            "foreign": 4562,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 4564,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 9876,
        "src": "721:60:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 4565,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 10169,
        "src": "782:59:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4566,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1361:8:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 4567,
            "nodeType": "InheritanceSpecifier",
            "src": "1361:8:11"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4568,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "1371:16:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 4569,
            "nodeType": "InheritanceSpecifier",
            "src": "1371:16:11"
          }
        ],
        "contractDependencies": [
          5436,
          9875,
          10029
        ],
        "contractKind": "contract",
        "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 4650,
        "linearizedBaseContracts": [
          4650,
          5436,
          9875,
          10029
        ],
        "name": "TokenTransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 4572,
            "libraryName": {
              "contractScope": null,
              "id": 4570,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "1400:14:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1394:52:11",
            "typeName": {
              "contractScope": null,
              "id": 4571,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1419:26:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 4574,
            "name": "tokenTransferPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 4650,
            "src": "1452:60:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 4573,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1452:26:11",
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
            "id": 4577,
            "name": "CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 4650,
            "src": "1519:55:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4575,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1519:6:11",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "746f6b656e2d7472616e736665722d70726f7879",
              "id": 4576,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1552:22:11",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e6e2cc95096937af380277769997559dc28dff28cfed6cb3fb96a155b60a5700",
                "typeString": "literal_string \"token-transfer-proxy\""
              },
              "value": "token-transfer-proxy"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 4591,
              "nodeType": "Block",
              "src": "1767:68:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4587,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4579,
                        "src": "1812:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4588,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4577,
                        "src": "1820:7:11",
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
                        "id": 4584,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "1777:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1777:34:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 4589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1777:51:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4590,
                  "nodeType": "ExpressionStatement",
                  "src": "1777:51:11"
                }
              ]
            },
            "documentation": "Add address to list of agents authorized to initiate `transferFrom` calls",
            "id": 4592,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4582,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4581,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "1753:9:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:9:11"
              }
            ],
            "name": "addAuthorizedTransferAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4579,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 4592,
                  "src": "1714:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:16:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4583,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1767:0:11"
            },
            "scope": 4650,
            "src": "1678:157:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4606,
              "nodeType": "Block",
              "src": "2038:78:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4602,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4594,
                        "src": "2093:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4603,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4577,
                        "src": "2101:7:11",
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
                        "id": 4599,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "2048:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4601,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "2048:44:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 4604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2048:61:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4605,
                  "nodeType": "ExpressionStatement",
                  "src": "2048:61:11"
                }
              ]
            },
            "documentation": "Remove address from list of agents authorized to initiate `transferFrom` calls",
            "id": 4607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4597,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4596,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "2024:9:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2024:9:11"
              }
            ],
            "name": "revokeTransferAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4594,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "1985:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1984:16:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2038:0:11"
            },
            "scope": 4650,
            "src": "1943:173:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4617,
              "nodeType": "Block",
              "src": "2327:70:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4613,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "2344:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4614,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2344:44:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 4615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2344:46:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 4612,
                  "id": 4616,
                  "nodeType": "Return",
                  "src": "2337:53:11"
                }
              ]
            },
            "documentation": "Return list of agents authorized to initiate `transferFrom` calls",
            "id": 4618,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTransferAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2247:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4611,
                  "name": "authorizedAgents",
                  "nodeType": "VariableDeclaration",
                  "scope": 4618,
                  "src": "2295:26:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4609,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2295:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 4610,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2295:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:28:11"
            },
            "scope": 4650,
            "src": "2211:186:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4648,
              "nodeType": "Block",
              "src": "2675:140:11",
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
                              "id": 4634,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2731:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4635,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2731:10:11",
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
                            "id": 4632,
                            "name": "tokenTransferPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4574,
                            "src": "2693:24:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 4633,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "2693:37:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 4636,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2693:49:11",
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
                      "id": 4631,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2685:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2685:58:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4638,
                  "nodeType": "ExpressionStatement",
                  "src": "2685:58:11"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4643,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "2788:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4644,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4624,
                        "src": "2795:3:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4645,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4626,
                        "src": "2800:7:11",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4640,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4620,
                            "src": "2767:6:11",
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
                          "id": 4639,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10168,
                          "src": "2761:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 4641,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2761:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$10168",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 4642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10150,
                      "src": "2761:26:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 4646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:47:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 4630,
                  "id": 4647,
                  "nodeType": "Return",
                  "src": "2754:54:11"
                }
              ]
            },
            "documentation": "Transfer specified token amount from _from address to _to address on give token",
            "id": 4649,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4620,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2537:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2537:7:11",
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
                  "id": 4622,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2561:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:11",
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
                  "id": 4624,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2584:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2584:7:11",
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
                  "id": 4626,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2605:12:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4625,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2527:96:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4629,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2656:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4628,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:15:11"
            },
            "scope": 4650,
            "src": "2506:309:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4651,
        "src": "1330:1487:11"
      }
    ],
    "src": "584:2234:11"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
    "exportedSymbols": {
      "TokenTransferProxy": [
        4650
      ]
    },
    "id": 4651,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 4559,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:11"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 4560,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 3510,
        "src": "609:28:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "./libraries/PermissionsLib.sol",
        "id": 4563,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 5641,
        "src": "638:82:11",
        "symbolAliases": [
          {
            "foreign": 4561,
            "local": null
          },
          {
            "foreign": 4562,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 4564,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 9876,
        "src": "721:60:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 4565,
        "nodeType": "ImportDirective",
        "scope": 4651,
        "sourceUnit": 10169,
        "src": "782:59:11",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4566,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1361:8:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 4567,
            "nodeType": "InheritanceSpecifier",
            "src": "1361:8:11"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4568,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "1371:16:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 4569,
            "nodeType": "InheritanceSpecifier",
            "src": "1371:16:11"
          }
        ],
        "contractDependencies": [
          5436,
          9875,
          10029
        ],
        "contractKind": "contract",
        "documentation": "The TokenTransferProxy is a proxy contract for transfering principal\nand fee payments and repayments between agents and keepers in the Dharma\necosystem.  It is decoupled from the DebtKernel in order to make upgrades to the\nprotocol contracts smoother -- if the DebtKernel or RepyamentRouter is upgraded to a new contract,\ncreditors will not have to grant new transfer approvals to a new contract's address.\n * Author: Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 4650,
        "linearizedBaseContracts": [
          4650,
          5436,
          9875,
          10029
        ],
        "name": "TokenTransferProxy",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 4572,
            "libraryName": {
              "contractScope": null,
              "id": 4570,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "1400:14:11",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "1394:52:11",
            "typeName": {
              "contractScope": null,
              "id": 4571,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1419:26:11",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 4574,
            "name": "tokenTransferPermissions",
            "nodeType": "VariableDeclaration",
            "scope": 4650,
            "src": "1452:60:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 4573,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "1452:26:11",
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
            "id": 4577,
            "name": "CONTEXT",
            "nodeType": "VariableDeclaration",
            "scope": 4650,
            "src": "1519:55:11",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 4575,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1519:6:11",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "746f6b656e2d7472616e736665722d70726f7879",
              "id": 4576,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1552:22:11",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_e6e2cc95096937af380277769997559dc28dff28cfed6cb3fb96a155b60a5700",
                "typeString": "literal_string \"token-transfer-proxy\""
              },
              "value": "token-transfer-proxy"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 4591,
              "nodeType": "Block",
              "src": "1767:68:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4587,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4579,
                        "src": "1812:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4588,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4577,
                        "src": "1820:7:11",
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
                        "id": 4584,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "1777:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4586,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1777:34:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 4589,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1777:51:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4590,
                  "nodeType": "ExpressionStatement",
                  "src": "1777:51:11"
                }
              ]
            },
            "documentation": "Add address to list of agents authorized to initiate `transferFrom` calls",
            "id": 4592,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4582,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4581,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "1753:9:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1753:9:11"
              }
            ],
            "name": "addAuthorizedTransferAgent",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4580,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4579,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 4592,
                  "src": "1714:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4578,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1713:16:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4583,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1767:0:11"
            },
            "scope": 4650,
            "src": "1678:157:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4606,
              "nodeType": "Block",
              "src": "2038:78:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4602,
                        "name": "_agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4594,
                        "src": "2093:6:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4603,
                        "name": "CONTEXT",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4577,
                        "src": "2101:7:11",
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
                        "id": 4599,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "2048:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4601,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "2048:44:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 4604,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2048:61:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4605,
                  "nodeType": "ExpressionStatement",
                  "src": "2048:61:11"
                }
              ]
            },
            "documentation": "Remove address from list of agents authorized to initiate `transferFrom` calls",
            "id": 4607,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4597,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4596,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10003,
                  "src": "2024:9:11",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2024:9:11"
              }
            ],
            "name": "revokeTransferAgentAuthorization",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4595,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4594,
                  "name": "_agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 4607,
                  "src": "1985:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4593,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1984:16:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2038:0:11"
            },
            "scope": 4650,
            "src": "1943:173:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4617,
              "nodeType": "Block",
              "src": "2327:70:11",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 4613,
                        "name": "tokenTransferPermissions",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4574,
                        "src": "2344:24:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 4614,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2344:44:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 4615,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2344:46:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 4612,
                  "id": 4616,
                  "nodeType": "Return",
                  "src": "2337:53:11"
                }
              ]
            },
            "documentation": "Return list of agents authorized to initiate `transferFrom` calls",
            "id": 4618,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedTransferAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4608,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2247:2:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4612,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4611,
                  "name": "authorizedAgents",
                  "nodeType": "VariableDeclaration",
                  "scope": 4618,
                  "src": "2295:26:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 4609,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2295:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 4610,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2295:9:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2294:28:11"
            },
            "scope": 4650,
            "src": "2211:186:11",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4648,
              "nodeType": "Block",
              "src": "2675:140:11",
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
                              "id": 4634,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2731:3:11",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4635,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2731:10:11",
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
                            "id": 4632,
                            "name": "tokenTransferPermissions",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4574,
                            "src": "2693:24:11",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                              "typeString": "struct PermissionsLib.Permissions storage ref"
                            }
                          },
                          "id": 4633,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isAuthorized",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 5611,
                          "src": "2693:37:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                            "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                          }
                        },
                        "id": 4636,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2693:49:11",
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
                      "id": 4631,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2685:7:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4637,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2685:58:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4638,
                  "nodeType": "ExpressionStatement",
                  "src": "2685:58:11"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4643,
                        "name": "_from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4622,
                        "src": "2788:5:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4644,
                        "name": "_to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4624,
                        "src": "2795:3:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4645,
                        "name": "_amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4626,
                        "src": "2800:7:11",
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
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4640,
                            "name": "_token",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4620,
                            "src": "2767:6:11",
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
                          "id": 4639,
                          "name": "ERC20",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10168,
                          "src": "2761:5:11",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                            "typeString": "type(contract ERC20)"
                          }
                        },
                        "id": 4641,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2761:13:11",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_ERC20_$10168",
                          "typeString": "contract ERC20"
                        }
                      },
                      "id": 4642,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transferFrom",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 10150,
                      "src": "2761:26:11",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                        "typeString": "function (address,address,uint256) external returns (bool)"
                      }
                    },
                    "id": 4646,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2761:47:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 4630,
                  "id": 4647,
                  "nodeType": "Return",
                  "src": "2754:54:11"
                }
              ]
            },
            "documentation": "Transfer specified token amount from _from address to _to address on give token",
            "id": 4649,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "transferFrom",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4627,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4620,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2537:14:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4619,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2537:7:11",
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
                  "id": 4622,
                  "name": "_from",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2561:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2561:7:11",
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
                  "id": 4624,
                  "name": "_to",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2584:11:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2584:7:11",
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
                  "id": 4626,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2605:12:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4625,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2605:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2527:96:11"
            },
            "payable": false,
            "returnParameters": {
              "id": 4630,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4629,
                  "name": "_success",
                  "nodeType": "VariableDeclaration",
                  "scope": 4649,
                  "src": "2656:13:11",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 4628,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "2656:4:11",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2655:15:11"
            },
            "scope": 4650,
            "src": "2506:309:11",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4651,
        "src": "1330:1487:11"
      }
    ],
    "src": "584:2234:11"
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
        }
      },
      "links": {},
      "address": "0xe1d0b77ad78e44da2a87efd2970f155e5bd48714",
      "transactionHash": "0x3ae75b860108809190035c8c7d61f6bfb73c406012a97c93dc52e6349a03a36c"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:44.807Z"
}
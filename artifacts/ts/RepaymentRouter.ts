export const RepaymentRouter = 
{
  "contractName": "RepaymentRouter",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "tokenTransferProxy",
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
      "name": "debtRegistry",
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
      "inputs": [
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_tokenTransferProxy",
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
          "name": "_agreementId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "_payer",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "LogRepayment",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_errorId",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "LogError",
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
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "repay",
      "outputs": [
        {
          "name": "_amountRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405260008060146101000a81548160ff02191690831515021790555034801561002a57600080fd5b506040516040806110ae8339810180604052810190808051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050610f848061012a6000396000f30060806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100ea5780633f4ba83a146101415780635c975abb146101585780638456cb59146101875780638da5cb5b1461019e578063f2fde38b146101f5578063ff26812514610238575b600080fd5b34801561009f57600080fd5b506100a86102a7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff6102cd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014d57600080fd5b506101566102f3565b005b34801561016457600080fd5b5061016d6103b1565b604051808215151515815260200191505060405180910390f35b34801561019357600080fd5b5061019c6103c4565b005b3480156101aa57600080fd5b506101b3610484565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020157600080fd5b50610236600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a9565b005b34801561024457600080fd5b50610291600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105fe565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561034e57600080fd5b600060149054906101000a900460ff16151561036957600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041f57600080fd5b600060149054906101000a900460ff1615151561043b57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561054057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff1615151561061e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561065a57600080fd5b60008511151561066957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639758af1e876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561070257600080fd5b505af1158015610716573d6000803e3d6000fd5b505050506040513d602081101561072c57600080fd5b8101908080519060200190929190505050151561078d5785600019166000600281111561075557fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b505050506040513d602081101561085357600080fd5b8101908080519060200190929190505050108061099a5750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561095d57600080fd5b505af1158015610971573d6000803e3d6000fd5b505050506040513d602081101561098757600080fd5b8101908080519060200190929190505050105b156109e9578560001916600160028111156109b157fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b505050506040513d6020811015610aac57600080fd5b81019080805190602001909291905050509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b505050506040513d6020811015610b8257600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b158015610cb057600080fd5b505af1158015610cc4573d6000803e3d6000fd5b505050506040513d6020811015610cda57600080fd5b81019080805190602001909291905050501515610d3a578560001916600280811115610d0257fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853384896040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b158015610e6757600080fd5b505af1158015610e7b573d6000803e3d6000fd5b505050506040513d6020811015610e9157600080fd5b81019080805190602001909291905050501515610ead57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820ce635ef8939b12809fc5d261241e86f28ce9bc80a73ee3c84b593b07935fa5690029",
  "deployedBytecode": "0x60806040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630eefdbad146100935780632f866f73146100ea5780633f4ba83a146101415780635c975abb146101585780638456cb59146101875780638da5cb5b1461019e578063f2fde38b146101f5578063ff26812514610238575b600080fd5b34801561009f57600080fd5b506100a86102a7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156100f657600080fd5b506100ff6102cd565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014d57600080fd5b506101566102f3565b005b34801561016457600080fd5b5061016d6103b1565b604051808215151515815260200191505060405180910390f35b34801561019357600080fd5b5061019c6103c4565b005b3480156101aa57600080fd5b506101b3610484565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020157600080fd5b50610236600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104a9565b005b34801561024457600080fd5b50610291600480360381019080803560001916906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105fe565b6040518082815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561034e57600080fd5b600060149054906101000a900460ff16151561036957600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600060149054906101000a900460ff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561041f57600080fd5b600060149054906101000a900460ff1615151561043b57600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561050457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561054057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008060008060149054906101000a900460ff1615151561061e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561065a57600080fd5b60008511151561066957600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639758af1e876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15801561070257600080fd5b505af1158015610716573d6000803e3d6000fd5b505050506040513d602081101561072c57600080fd5b8101908080519060200190929190505050151561078d5785600019166000600281111561075557fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b848473ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001915050602060405180830381600087803b15801561082957600080fd5b505af115801561083d573d6000803e3d6000fd5b505050506040513d602081101561085357600080fd5b8101908080519060200190929190505050108061099a5750848473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e33600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561095d57600080fd5b505af1158015610971573d6000803e3d6000fd5b505050506040513d602081101561098757600080fd5b8101908080519060200190929190505050105b156109e9578560001916600160028111156109b157fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610a8257600080fd5b505af1158015610a96573d6000803e3d6000fd5b505050506040513d6020811015610aac57600080fd5b81019080805190602001909291905050509150600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4876040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b158015610b5857600080fd5b505af1158015610b6c573d6000803e3d6000fd5b505050506040513d6020811015610b8257600080fd5b810190808051906020019092919050505090508173ffffffffffffffffffffffffffffffffffffffff16635f0280ba87338489896040518663ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018086600019166000191681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200195505050505050602060405180830381600087803b158015610cb057600080fd5b505af1158015610cc4573d6000803e3d6000fd5b505050506040513d6020811015610cda57600080fd5b81019080805190602001909291905050501515610d3a578560001916600280811115610d0257fe5b60ff167f36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e9060405160405180910390a360009250610f4f565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166315dacbea853384896040518563ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001945050505050602060405180830381600087803b158015610e6757600080fd5b505af1158015610e7b573d6000803e3d6000fd5b505050506040513d6020811015610e9157600080fd5b81019080805190602001909291905050501515610ead57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1687600019167f43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d08888604051808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a48492505b505093925050505600a165627a7a72305820ce635ef8939b12809fc5d261241e86f28ce9bc80a73ee3c84b593b07935fa5690029",
  "sourceMap": "1291:2734:8:-;;;268:5:32;247:26;;;;;;;;;;;;;;;;;;;;1936:214:8;8:9:-1;5:2;;;30:1;27;20:12;5:2;1936:214:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:34;501:5;;:18;;;;;;;;;;;;;;;;;;2059:13:8;2031:12;;:42;;;;;;;;;;;;;;;;;;2123:19;2083:18;;:60;;;;;;;;;;;;;;;;;;1936:214;;1291:2734;;;;;;",
  "deployedSourceMap": "1291:2734:8:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1372:44:8;;;;;;;;;;;;;;;;;;;;;;;;;;;1334:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1334:32:8;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:32;;8:9:-1;5:2;;;30:1;27;20:12;5:2;833:87:32;;;;;;247:26;;8:9:-1;5:2;;;30:1;27;20:12;5:2;247:26:32;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85;;8:9:-1;5:2;;;30:1;27;20:12;5:2;666:85:32;;;;;;238:20:34;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:34;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:1663:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2360:1663:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1372:44;;;;;;;;;;;;;:::o;1334:32::-;;;;;;;;;;;;;:::o;833:87:32:-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:32;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;247:26::-;;;;;;;;;;;;;:::o;666:85::-;653:5:34;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:34:-;;;;;;;;;;;;;:::o;832:169::-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2360:1663:8:-;2518:18;3229:21;3305:19;416:6:32;;;;;;;;;;;415:7;407:16;;;;;;;;2584:1:8;2560:26;;:12;:26;;;;2552:35;;;;;;;;2614:1;2605:6;:10;2597:19;;;;;;;;2668:12;;;;;;;;;;;:27;;;2696:11;2668:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2668:40:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2668:40:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2668:40:8;;;;;;;;;;;;;;;;2667:41;2663:157;;;2775:11;2724:63;;;2739:33;2733:40;;;;;;;;2724:63;;;;;;;;;;;;2808:1;2801:8;;;;2663:157;2969:6;2931:12;2925:29;;;2955:10;2925:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2925:41:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2925:41:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2925:41:8;;;;;;;;;;;;;;;;:50;:136;;;;3055:6;2997:12;2991:29;;;3021:10;3033:18;;;;;;;;;;;2991:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2991:61:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;2991:61:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2991:61:8;;;;;;;;;;;;;;;;:70;2925:136;2921:265;;;3141:11;3077:76;;;3092:46;3086:53;;;;;;;;3077:76;;;;;;;;;;;;3174:1;3167:8;;;;2921:265;3253:12;;;;;;;;;;;:29;;;3283:11;3253:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3253:42:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3253:42:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3253:42:8;;;;;;;;;;;;;;;;3229:66;;3327:12;;;;;;;;;;;:27;;;3355:11;3327:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3327:40:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3327:40:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3327:40:8;;;;;;;;;;;;;;;;3305:62;;3396:13;3382:46;;;3442:11;3467:10;3491:11;3516:6;3536:12;3382:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3382:176:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3382:176:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3382:176:8;;;;;;;;;;;;;;;;3381:177;3377:303;;;3635:11;3574:73;;;3589:43;3583:50;;;;;;;;3574:73;;;;;;;;;;;;3668:1;3661:8;;;;3377:303;3737:18;;;;;;;;;;;:31;;;3782:12;3808:10;3832:11;3857:6;3737:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3737:136:8;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3737:136:8;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3737:136:8;;;;;;;;;;;;;;;;3729:145;;;;;;;;3958:11;3920:72;;3946:10;3920:72;;3933:11;3920:72;;;;3971:6;3979:12;3920:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;4010:6;4003:13;;429:1:32;2360:1663:8;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"./DebtRegistry.sol\";\nimport \"./TermsContract.sol\";\nimport \"./TokenTransferProxy.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The RepaymentRouter routes allowers payers to make repayments on any\n * given debt agreement in any given token by routing the payments to\n * the debt agreement's beneficiary.  Additionally, the router acts\n * as a trusted oracle to the debt agreement's terms contract, informing\n * it of exactly what payments have been made in what quantity and in what token.\n *\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander\n */\ncontract RepaymentRouter is Pausable {\n    DebtRegistry public debtRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    enum Errors {\n        DEBT_AGREEMENT_NONEXISTENT,\n        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,\n        REPAYMENT_REJECTED_BY_TERMS_CONTRACT\n    }\n\n    event LogRepayment(\n        bytes32 indexed _agreementId,\n        address indexed _payer,\n        address indexed _beneficiary,\n        uint _amount,\n        address _token\n    );\n\n    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);\n\n    /**\n     * Constructor points the repayment router at the deployed registry contract.\n     */\n    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    /**\n     * Given an agreement id, routes a repayment\n     * of a given ERC20 token to the debt's current beneficiary, and reports the repayment\n     * to the debt's associated terms contract.\n     */\n    function repay(\n        bytes32 agreementId,\n        uint256 amount,\n        address tokenAddress\n    )\n        public\n        whenNotPaused\n        returns (uint _amountRepaid)\n    {\n        require(tokenAddress != address(0));\n        require(amount > 0);\n\n        // Ensure agreement exists.\n        if (!debtRegistry.doesEntryExist(agreementId)) {\n            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);\n            return 0;\n        }\n\n        // Check payer has sufficient balance and has granted router sufficient allowance.\n        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||\n            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {\n            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);\n            return 0;\n        }\n\n        // Notify terms contract\n        address termsContract = debtRegistry.getTermsContract(agreementId);\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n        if (!TermsContract(termsContract).registerRepayment(\n            agreementId,\n            msg.sender,\n            beneficiary,\n            amount,\n            tokenAddress\n        )) {\n            LogError(uint8(Errors.REPAYMENT_REJECTED_BY_TERMS_CONTRACT), agreementId);\n            return 0;\n        }\n\n        // Transfer amount to creditor\n        require(tokenTransferProxy.transferFrom(\n            tokenAddress,\n            msg.sender,\n            beneficiary,\n            amount\n        ));\n\n        // Log event for repayment\n        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);\n\n        return amount;\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/RepaymentRouter.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/RepaymentRouter.sol",
    "exportedSymbols": {
      "RepaymentRouter": [
        4151
      ]
    },
    "id": 4152,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3960,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:8"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 3961,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 3510,
        "src": "609:28:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TermsContract.sol",
        "file": "./TermsContract.sol",
        "id": 3962,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 4202,
        "src": "638:29:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
        "file": "./TokenTransferProxy.sol",
        "id": 3963,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 4651,
        "src": "668:34:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 3964,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 10169,
        "src": "703:59:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 3965,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 9876,
        "src": "763:60:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3966,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1319:8:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 3967,
            "nodeType": "InheritanceSpecifier",
            "src": "1319:8:8"
          }
        ],
        "contractDependencies": [
          9875,
          10029
        ],
        "contractKind": "contract",
        "documentation": "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 4151,
        "linearizedBaseContracts": [
          4151,
          9875,
          10029
        ],
        "name": "RepaymentRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3969,
            "name": "debtRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 4151,
            "src": "1334:32:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 3968,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "1334:12:8",
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
            "id": 3971,
            "name": "tokenTransferProxy",
            "nodeType": "VariableDeclaration",
            "scope": 4151,
            "src": "1372:44:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
              "typeString": "contract TokenTransferProxy"
            },
            "typeName": {
              "contractScope": null,
              "id": 3970,
              "name": "TokenTransferProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4650,
              "src": "1372:18:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                "typeString": "contract TokenTransferProxy"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "RepaymentRouter.Errors",
            "id": 3975,
            "members": [
              {
                "id": 3972,
                "name": "DEBT_AGREEMENT_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "1445:26:8"
              },
              {
                "id": 3973,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "1481:39:8"
              },
              {
                "id": 3974,
                "name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                "nodeType": "EnumValue",
                "src": "1530:36:8"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "1423:149:8"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3987,
            "name": "LogRepayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3977,
                  "indexed": true,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1606:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3976,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1606:7:8",
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
                  "id": 3979,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1644:22:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:7:8",
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
                  "id": 3981,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1676:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3980,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1676:7:8",
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
                  "id": 3983,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1714:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3982,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:4:8",
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
                  "id": 3985,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1736:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1596:160:8"
            },
            "src": "1578:179:8"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3993,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3989,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3993,
                  "src": "1778:22:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3988,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1778:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3991,
                  "indexed": true,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3993,
                  "src": "1802:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3990,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1802:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1777:54:8"
            },
            "src": "1763:69:8"
          },
          {
            "body": {
              "id": 4012,
              "nodeType": "Block",
              "src": "2021:129:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4000,
                      "name": "debtRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3969,
                      "src": "2031:12:8",
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
                          "id": 4002,
                          "name": "_debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3995,
                          "src": "2059:13:8",
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
                        "id": 4001,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "2046:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 4003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2046:27:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "2031:42:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 4005,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:42:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4006,
                      "name": "tokenTransferProxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3971,
                      "src": "2083:18:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4008,
                          "name": "_tokenTransferProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3997,
                          "src": "2123:19:8",
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
                        "id": 4007,
                        "name": "TokenTransferProxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4650,
                        "src": "2104:18:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                          "typeString": "type(contract TokenTransferProxy)"
                        }
                      },
                      "id": 4009,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2104:39:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "src": "2083:60:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                      "typeString": "contract TokenTransferProxy"
                    }
                  },
                  "id": 4011,
                  "nodeType": "ExpressionStatement",
                  "src": "2083:60:8"
                }
              ]
            },
            "documentation": "Constructor points the repayment router at the deployed registry contract.",
            "id": 4013,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "RepaymentRouter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3995,
                  "name": "_debtRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 4013,
                  "src": "1962:21:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3994,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:7:8",
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
                  "id": 3997,
                  "name": "_tokenTransferProxy",
                  "nodeType": "VariableDeclaration",
                  "scope": 4013,
                  "src": "1985:27:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1961:52:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 3999,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2021:0:8"
            },
            "scope": 4151,
            "src": "1936:214:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4149,
              "nodeType": "Block",
              "src": "2542:1481:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4027,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4019,
                          "src": "2560:12:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 4029,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2584:1:8",
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
                            "id": 4028,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2576:7:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2576:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2560:26:8",
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
                      "id": 4026,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2552:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2552:35:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4033,
                  "nodeType": "ExpressionStatement",
                  "src": "2552:35:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4037,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4035,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4017,
                          "src": "2605:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2614:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2605:10:8",
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
                      "id": 4034,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2597:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2597:19:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4039,
                  "nodeType": "ExpressionStatement",
                  "src": "2597:19:8"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 4044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2667:41:8",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4042,
                          "name": "agreementId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4015,
                          "src": "2696:11:8",
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
                          "id": 4040,
                          "name": "debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3969,
                          "src": "2668:12:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                            "typeString": "contract DebtRegistry"
                          }
                        },
                        "id": 4041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "doesEntryExist",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3121,
                        "src": "2668:27:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view external returns (bool)"
                        }
                      },
                      "id": 4043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2668:40:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4056,
                  "nodeType": "IfStatement",
                  "src": "2663:157:8",
                  "trueBody": {
                    "id": 4055,
                    "nodeType": "Block",
                    "src": "2710:110:8",
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
                                    "id": 4047,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "2739:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "DEBT_AGREEMENT_NONEXISTENT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2739:33:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4046,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2733:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4049,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2733:40:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4050,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "2775:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4045,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "2724:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2724:63:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4052,
                        "nodeType": "ExpressionStatement",
                        "src": "2724:63:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4053,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2808:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4054,
                        "nodeType": "Return",
                        "src": "2801:8:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 4076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4061,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2955:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2955:10:8",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4058,
                                "name": "tokenAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4019,
                                "src": "2931:12:8",
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
                              "id": 4057,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10168,
                              "src": "2925:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 4059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2925:19:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$10168",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 4060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10182,
                          "src": "2925:29:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 4063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2925:41:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 4064,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "2969:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2925:50:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4075,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4070,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "3021:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4071,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3021:10:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4072,
                            "name": "tokenTransferProxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3971,
                            "src": "3033:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
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
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4067,
                                "name": "tokenAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4019,
                                "src": "2997:12:8",
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
                              "id": 4066,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10168,
                              "src": "2991:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 4068,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2991:19:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$10168",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 4069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "allowance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10139,
                          "src": "2991:29:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address,address) view external returns (uint256)"
                          }
                        },
                        "id": 4073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2991:61:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 4074,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "3055:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2991:70:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2925:136:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4088,
                  "nodeType": "IfStatement",
                  "src": "2921:265:8",
                  "trueBody": {
                    "id": 4087,
                    "nodeType": "Block",
                    "src": "3063:123:8",
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
                                    "id": 4079,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "3092:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4080,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3092:46:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3086:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4081,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3086:53:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4082,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "3141:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4077,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "3077:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3077:76:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4084,
                        "nodeType": "ExpressionStatement",
                        "src": "3077:76:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4085,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3174:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4086,
                        "nodeType": "Return",
                        "src": "3167:8:8"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4090
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4090,
                      "name": "termsContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 4150,
                      "src": "3229:21:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4089,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3229:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4095,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4093,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3283:11:8",
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
                        "id": 4091,
                        "name": "debtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "3253:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 4092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getTermsContract",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3391,
                      "src": "3253:29:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3253:42:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3229:66:8"
                },
                {
                  "assignments": [
                    4097
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4097,
                      "name": "beneficiary",
                      "nodeType": "VariableDeclaration",
                      "scope": 4150,
                      "src": "3305:19:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4096,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3305:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4100,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3355:11:8",
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
                        "id": 4098,
                        "name": "debtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "3327:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 4099,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getBeneficiary",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3375,
                      "src": "3327:27:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3327:40:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3305:62:8"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 4114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3381:177:8",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4107,
                          "name": "agreementId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4015,
                          "src": "3442:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 4108,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11714,
                            "src": "3467:3:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 4109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3467:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4110,
                          "name": "beneficiary",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4097,
                          "src": "3491:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4111,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4017,
                          "src": "3516:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4112,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4019,
                          "src": "3536:12:8",
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
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 4104,
                              "name": "termsContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4090,
                              "src": "3396:13:8",
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
                            "id": 4103,
                            "name": "TermsContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4201,
                            "src": "3382:13:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_TermsContract_$4201_$",
                              "typeString": "type(contract TermsContract)"
                            }
                          },
                          "id": 4105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3382:28:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_TermsContract_$4201",
                            "typeString": "contract TermsContract"
                          }
                        },
                        "id": 4106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerRepayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4177,
                        "src": "3382:46:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 4113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3382:176:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4126,
                  "nodeType": "IfStatement",
                  "src": "3377:303:8",
                  "trueBody": {
                    "id": 4125,
                    "nodeType": "Block",
                    "src": "3560:120:8",
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
                                    "id": 4117,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "3589:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4118,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3589:43:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4116,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3583:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3583:50:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4120,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "3635:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4115,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "3574:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3574:73:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4122,
                        "nodeType": "ExpressionStatement",
                        "src": "3574:73:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3668:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4124,
                        "nodeType": "Return",
                        "src": "3661:8:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4130,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4019,
                            "src": "3782:12:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4131,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "3808:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4132,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3808:10:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4133,
                            "name": "beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4097,
                            "src": "3832:11:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4134,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4017,
                            "src": "3857:6:8",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4128,
                            "name": "tokenTransferProxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3971,
                            "src": "3737:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
                            }
                          },
                          "id": 4129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "3737:31:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 4135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3737:136:8",
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
                      "id": 4127,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "3729:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3729:145:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4137,
                  "nodeType": "ExpressionStatement",
                  "src": "3729:145:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4139,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3933:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4140,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11714,
                          "src": "3946:3:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3946:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4142,
                        "name": "beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4097,
                        "src": "3958:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4143,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "3971:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4144,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4019,
                        "src": "3979:12:8",
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
                        }
                      ],
                      "id": 4138,
                      "name": "LogRepayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3987,
                      "src": "3920:12:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 4145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3920:72:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4146,
                  "nodeType": "ExpressionStatement",
                  "src": "3920:72:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4147,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4017,
                    "src": "4010:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 4025,
                  "id": 4148,
                  "nodeType": "Return",
                  "src": "4003:13:8"
                }
              ]
            },
            "documentation": "Given an agreement id, routes a repayment\nof a given ERC20 token to the debt's current beneficiary, and reports the repayment\nto the debt's associated terms contract.",
            "id": 4150,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4022,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4021,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "2487:13:8",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2487:13:8"
              }
            ],
            "name": "repay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4015,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2384:19:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4014,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:8",
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
                  "id": 4017,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2413:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4016,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:8",
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
                  "id": 4019,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2437:20:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4018,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2374:89:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 4025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4024,
                  "name": "_amountRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2518:18:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4023,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2518:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2517:20:8"
            },
            "scope": 4151,
            "src": "2360:1663:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4152,
        "src": "1291:2734:8"
      }
    ],
    "src": "584:3442:8"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/RepaymentRouter.sol",
    "exportedSymbols": {
      "RepaymentRouter": [
        4151
      ]
    },
    "id": 4152,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3960,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:8"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 3961,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 3510,
        "src": "609:28:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TermsContract.sol",
        "file": "./TermsContract.sol",
        "id": 3962,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 4202,
        "src": "638:29:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
        "file": "./TokenTransferProxy.sol",
        "id": 3963,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 4651,
        "src": "668:34:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
        "id": 3964,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 10169,
        "src": "703:59:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
        "id": 3965,
        "nodeType": "ImportDirective",
        "scope": 4152,
        "sourceUnit": 9876,
        "src": "763:60:8",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 3966,
              "name": "Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 9875,
              "src": "1319:8:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Pausable_$9875",
                "typeString": "contract Pausable"
              }
            },
            "id": 3967,
            "nodeType": "InheritanceSpecifier",
            "src": "1319:8:8"
          }
        ],
        "contractDependencies": [
          9875,
          10029
        ],
        "contractKind": "contract",
        "documentation": "The RepaymentRouter routes allowers payers to make repayments on any\ngiven debt agreement in any given token by routing the payments to\nthe debt agreement's beneficiary.  Additionally, the router acts\nas a trusted oracle to the debt agreement's terms contract, informing\nit of exactly what payments have been made in what quantity and in what token.\n * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander",
        "fullyImplemented": true,
        "id": 4151,
        "linearizedBaseContracts": [
          4151,
          9875,
          10029
        ],
        "name": "RepaymentRouter",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 3969,
            "name": "debtRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 4151,
            "src": "1334:32:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 3968,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "1334:12:8",
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
            "id": 3971,
            "name": "tokenTransferProxy",
            "nodeType": "VariableDeclaration",
            "scope": 4151,
            "src": "1372:44:8",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
              "typeString": "contract TokenTransferProxy"
            },
            "typeName": {
              "contractScope": null,
              "id": 3970,
              "name": "TokenTransferProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4650,
              "src": "1372:18:8",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                "typeString": "contract TokenTransferProxy"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "RepaymentRouter.Errors",
            "id": 3975,
            "members": [
              {
                "id": 3972,
                "name": "DEBT_AGREEMENT_NONEXISTENT",
                "nodeType": "EnumValue",
                "src": "1445:26:8"
              },
              {
                "id": 3973,
                "name": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                "nodeType": "EnumValue",
                "src": "1481:39:8"
              },
              {
                "id": 3974,
                "name": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                "nodeType": "EnumValue",
                "src": "1530:36:8"
              }
            ],
            "name": "Errors",
            "nodeType": "EnumDefinition",
            "src": "1423:149:8"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3987,
            "name": "LogRepayment",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3986,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3977,
                  "indexed": true,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1606:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3976,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1606:7:8",
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
                  "id": 3979,
                  "indexed": true,
                  "name": "_payer",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1644:22:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3978,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1644:7:8",
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
                  "id": 3981,
                  "indexed": true,
                  "name": "_beneficiary",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1676:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3980,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1676:7:8",
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
                  "id": 3983,
                  "indexed": false,
                  "name": "_amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1714:12:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 3982,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1714:4:8",
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
                  "id": 3985,
                  "indexed": false,
                  "name": "_token",
                  "nodeType": "VariableDeclaration",
                  "scope": 3987,
                  "src": "1736:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3984,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1596:160:8"
            },
            "src": "1578:179:8"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 3993,
            "name": "LogError",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 3992,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3989,
                  "indexed": true,
                  "name": "_errorId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3993,
                  "src": "1778:22:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 3988,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1778:5:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 3991,
                  "indexed": true,
                  "name": "_agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 3993,
                  "src": "1802:28:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 3990,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1802:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1777:54:8"
            },
            "src": "1763:69:8"
          },
          {
            "body": {
              "id": 4012,
              "nodeType": "Block",
              "src": "2021:129:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4004,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4000,
                      "name": "debtRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3969,
                      "src": "2031:12:8",
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
                          "id": 4002,
                          "name": "_debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3995,
                          "src": "2059:13:8",
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
                        "id": 4001,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "2046:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 4003,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2046:27:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "2031:42:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 4005,
                  "nodeType": "ExpressionStatement",
                  "src": "2031:42:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 4006,
                      "name": "tokenTransferProxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3971,
                      "src": "2083:18:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4008,
                          "name": "_tokenTransferProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3997,
                          "src": "2123:19:8",
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
                        "id": 4007,
                        "name": "TokenTransferProxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4650,
                        "src": "2104:18:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                          "typeString": "type(contract TokenTransferProxy)"
                        }
                      },
                      "id": 4009,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2104:39:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "src": "2083:60:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                      "typeString": "contract TokenTransferProxy"
                    }
                  },
                  "id": 4011,
                  "nodeType": "ExpressionStatement",
                  "src": "2083:60:8"
                }
              ]
            },
            "documentation": "Constructor points the repayment router at the deployed registry contract.",
            "id": 4013,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "RepaymentRouter",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 3998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 3995,
                  "name": "_debtRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 4013,
                  "src": "1962:21:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3994,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1962:7:8",
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
                  "id": 3997,
                  "name": "_tokenTransferProxy",
                  "nodeType": "VariableDeclaration",
                  "scope": 4013,
                  "src": "1985:27:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 3996,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1985:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1961:52:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 3999,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2021:0:8"
            },
            "scope": 4151,
            "src": "1936:214:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 4149,
              "nodeType": "Block",
              "src": "2542:1481:8",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 4031,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4027,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4019,
                          "src": "2560:12:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 4029,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "2584:1:8",
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
                            "id": 4028,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "2576:7:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 4030,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2576:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "2560:26:8",
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
                      "id": 4026,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2552:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4032,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2552:35:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4033,
                  "nodeType": "ExpressionStatement",
                  "src": "2552:35:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 4037,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 4035,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4017,
                          "src": "2605:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4036,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2614:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "src": "2605:10:8",
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
                      "id": 4034,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "2597:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4038,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2597:19:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4039,
                  "nodeType": "ExpressionStatement",
                  "src": "2597:19:8"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 4044,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "2667:41:8",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4042,
                          "name": "agreementId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4015,
                          "src": "2696:11:8",
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
                          "id": 4040,
                          "name": "debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 3969,
                          "src": "2668:12:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                            "typeString": "contract DebtRegistry"
                          }
                        },
                        "id": 4041,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "doesEntryExist",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 3121,
                        "src": "2668:27:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_bool_$",
                          "typeString": "function (bytes32) view external returns (bool)"
                        }
                      },
                      "id": 4043,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2668:40:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4056,
                  "nodeType": "IfStatement",
                  "src": "2663:157:8",
                  "trueBody": {
                    "id": 4055,
                    "nodeType": "Block",
                    "src": "2710:110:8",
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
                                    "id": 4047,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "2739:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4048,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "DEBT_AGREEMENT_NONEXISTENT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "2739:33:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4046,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2733:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4049,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2733:40:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4050,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "2775:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4045,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "2724:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4051,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "2724:63:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4052,
                        "nodeType": "ExpressionStatement",
                        "src": "2724:63:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4053,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2808:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4054,
                        "nodeType": "Return",
                        "src": "2801:8:8"
                      }
                    ]
                  }
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 4076,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4065,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4061,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "2955:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4062,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2955:10:8",
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
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4058,
                                "name": "tokenAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4019,
                                "src": "2931:12:8",
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
                              "id": 4057,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10168,
                              "src": "2925:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 4059,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2925:19:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$10168",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 4060,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "balanceOf",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10182,
                          "src": "2925:29:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address) view external returns (uint256)"
                          }
                        },
                        "id": 4063,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2925:41:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 4064,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "2969:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2925:50:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 4075,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4070,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "3021:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4071,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3021:10:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4072,
                            "name": "tokenTransferProxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3971,
                            "src": "3033:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
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
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 4067,
                                "name": "tokenAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 4019,
                                "src": "2997:12:8",
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
                              "id": 4066,
                              "name": "ERC20",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 10168,
                              "src": "2991:5:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_ERC20_$10168_$",
                                "typeString": "type(contract ERC20)"
                              }
                            },
                            "id": 4068,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2991:19:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_ERC20_$10168",
                              "typeString": "contract ERC20"
                            }
                          },
                          "id": 4069,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "allowance",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 10139,
                          "src": "2991:29:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$_t_address_$returns$_t_uint256_$",
                            "typeString": "function (address,address) view external returns (uint256)"
                          }
                        },
                        "id": 4073,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2991:61:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "<",
                      "rightExpression": {
                        "argumentTypes": null,
                        "id": 4074,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "3055:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "src": "2991:70:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "2925:136:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4088,
                  "nodeType": "IfStatement",
                  "src": "2921:265:8",
                  "trueBody": {
                    "id": 4087,
                    "nodeType": "Block",
                    "src": "3063:123:8",
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
                                    "id": 4079,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "3092:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4080,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3092:46:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4078,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3086:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4081,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3086:53:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4082,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "3141:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4077,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "3077:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4083,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3077:76:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4084,
                        "nodeType": "ExpressionStatement",
                        "src": "3077:76:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4085,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3174:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4086,
                        "nodeType": "Return",
                        "src": "3167:8:8"
                      }
                    ]
                  }
                },
                {
                  "assignments": [
                    4090
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4090,
                      "name": "termsContract",
                      "nodeType": "VariableDeclaration",
                      "scope": 4150,
                      "src": "3229:21:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4089,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3229:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4095,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4093,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3283:11:8",
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
                        "id": 4091,
                        "name": "debtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "3253:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 4092,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getTermsContract",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3391,
                      "src": "3253:29:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4094,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3253:42:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3229:66:8"
                },
                {
                  "assignments": [
                    4097
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 4097,
                      "name": "beneficiary",
                      "nodeType": "VariableDeclaration",
                      "scope": 4150,
                      "src": "3305:19:8",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 4096,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "3305:7:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 4102,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4100,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3355:11:8",
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
                        "id": 4098,
                        "name": "debtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3969,
                        "src": "3327:12:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                          "typeString": "contract DebtRegistry"
                        }
                      },
                      "id": 4099,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getBeneficiary",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3375,
                      "src": "3327:27:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_bytes32_$returns$_t_address_$",
                        "typeString": "function (bytes32) view external returns (address)"
                      }
                    },
                    "id": 4101,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3327:40:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3305:62:8"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "id": 4114,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "!",
                    "prefix": true,
                    "src": "3381:177:8",
                    "subExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 4107,
                          "name": "agreementId",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4015,
                          "src": "3442:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 4108,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 11714,
                            "src": "3467:3:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 4109,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3467:10:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4110,
                          "name": "beneficiary",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4097,
                          "src": "3491:11:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4111,
                          "name": "amount",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4017,
                          "src": "3516:6:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "id": 4112,
                          "name": "tokenAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 4019,
                          "src": "3536:12:8",
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
                          }
                        ],
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 4104,
                              "name": "termsContract",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4090,
                              "src": "3396:13:8",
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
                            "id": 4103,
                            "name": "TermsContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4201,
                            "src": "3382:13:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_contract$_TermsContract_$4201_$",
                              "typeString": "type(contract TermsContract)"
                            }
                          },
                          "id": 4105,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3382:28:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_TermsContract_$4201",
                            "typeString": "contract TermsContract"
                          }
                        },
                        "id": 4106,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "registerRepayment",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 4177,
                        "src": "3382:46:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_external_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$_t_bool_$",
                          "typeString": "function (bytes32,address,address,uint256,address) external returns (bool)"
                        }
                      },
                      "id": 4113,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3382:176:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": null,
                  "id": 4126,
                  "nodeType": "IfStatement",
                  "src": "3377:303:8",
                  "trueBody": {
                    "id": 4125,
                    "nodeType": "Block",
                    "src": "3560:120:8",
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
                                    "id": 4117,
                                    "name": "Errors",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3975,
                                    "src": "3589:6:8",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_Errors_$3975_$",
                                      "typeString": "type(enum RepaymentRouter.Errors)"
                                    }
                                  },
                                  "id": 4118,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "REPAYMENT_REJECTED_BY_TERMS_CONTRACT",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3589:43:8",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_enum$_Errors_$3975",
                                    "typeString": "enum RepaymentRouter.Errors"
                                  }
                                ],
                                "id": 4116,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "3583:5:8",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_uint8_$",
                                  "typeString": "type(uint8)"
                                },
                                "typeName": "uint8"
                              },
                              "id": 4119,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "3583:50:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 4120,
                              "name": "agreementId",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 4015,
                              "src": "3635:11:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              {
                                "typeIdentifier": "t_bytes32",
                                "typeString": "bytes32"
                              }
                            ],
                            "id": 4115,
                            "name": "LogError",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3993,
                            "src": "3574:8:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_event_nonpayable$_t_uint8_$_t_bytes32_$returns$__$",
                              "typeString": "function (uint8,bytes32)"
                            }
                          },
                          "id": 4121,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3574:73:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 4122,
                        "nodeType": "ExpressionStatement",
                        "src": "3574:73:8"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 4123,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3668:1:8",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        },
                        "functionReturnParameters": 4025,
                        "id": 4124,
                        "nodeType": "Return",
                        "src": "3661:8:8"
                      }
                    ]
                  }
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 4130,
                            "name": "tokenAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4019,
                            "src": "3782:12:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 4131,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 11714,
                              "src": "3808:3:8",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 4132,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "3808:10:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4133,
                            "name": "beneficiary",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4097,
                            "src": "3832:11:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 4134,
                            "name": "amount",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 4017,
                            "src": "3857:6:8",
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
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 4128,
                            "name": "tokenTransferProxy",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 3971,
                            "src": "3737:18:8",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                              "typeString": "contract TokenTransferProxy"
                            }
                          },
                          "id": 4129,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "transferFrom",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 4649,
                          "src": "3737:31:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_nonpayable$_t_address_$_t_address_$_t_address_$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (address,address,address,uint256) external returns (bool)"
                          }
                        },
                        "id": 4135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3737:136:8",
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
                      "id": 4127,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11717,
                        11718
                      ],
                      "referencedDeclaration": 11717,
                      "src": "3729:7:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 4136,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3729:145:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4137,
                  "nodeType": "ExpressionStatement",
                  "src": "3729:145:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 4139,
                        "name": "agreementId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4015,
                        "src": "3933:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 4140,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 11714,
                          "src": "3946:3:8",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 4141,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3946:10:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4142,
                        "name": "beneficiary",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4097,
                        "src": "3958:11:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4143,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4017,
                        "src": "3971:6:8",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 4144,
                        "name": "tokenAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4019,
                        "src": "3979:12:8",
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
                        }
                      ],
                      "id": 4138,
                      "name": "LogRepayment",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 3987,
                      "src": "3920:12:8",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_address_$_t_address_$_t_uint256_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address,address,uint256,address)"
                      }
                    },
                    "id": 4145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3920:72:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 4146,
                  "nodeType": "ExpressionStatement",
                  "src": "3920:72:8"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 4147,
                    "name": "amount",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 4017,
                    "src": "4010:6:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 4025,
                  "id": 4148,
                  "nodeType": "Return",
                  "src": "4003:13:8"
                }
              ]
            },
            "documentation": "Given an agreement id, routes a repayment\nof a given ERC20 token to the debt's current beneficiary, and reports the repayment\nto the debt's associated terms contract.",
            "id": 4150,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 4022,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 4021,
                  "name": "whenNotPaused",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 9836,
                  "src": "2487:13:8",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2487:13:8"
              }
            ],
            "name": "repay",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 4020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4015,
                  "name": "agreementId",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2384:19:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 4014,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2384:7:8",
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
                  "id": 4017,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2413:14:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4016,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2413:7:8",
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
                  "id": 4019,
                  "name": "tokenAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2437:20:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 4018,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2437:7:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2374:89:8"
            },
            "payable": false,
            "returnParameters": {
              "id": 4025,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 4024,
                  "name": "_amountRepaid",
                  "nodeType": "VariableDeclaration",
                  "scope": 4150,
                  "src": "2518:18:8",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 4023,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2518:4:8",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2517:20:8"
            },
            "scope": 4151,
            "src": "2360:1663:8",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 4152,
        "src": "1291:2734:8"
      }
    ],
    "src": "584:3442:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {
        "0x43ea5a2b552489bf9de7c3d6ded86e3b82423e034255d06db4b388f806db50d0": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "_payer",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_beneficiary",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "_token",
              "type": "address"
            }
          ],
          "name": "LogRepayment",
          "type": "event"
        },
        "0x36d86c59e00bd73dc19ba3adfe068e4b64ac7e92be35546adeddf1b956a87e90": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_errorId",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "_agreementId",
              "type": "bytes32"
            }
          ],
          "name": "LogError",
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
      "address": "0x3d0a6eaaa1f56a4850c81e31132679463ec2bad3",
      "transactionHash": "0xad255a4715ab7b91190643367c991aab69d0611abbe45ed44c548f62f0e8f625"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-08T08:11:43.769Z"
}
export const DummyContract = 
{
  "contractName": "DummyContract",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "SECOND_SET",
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
      "name": "FIRST_SET",
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
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "authorizeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInFirstSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInSecondSet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInFirstSet",
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "isAuthorizedInSecondSet",
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
      "name": "getFirstSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSecondSetAuthorizedAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50610cb8806100206000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633dd6020f146100a95780633fe1b53314610139578063589e9a751461017c5780637a381130146101e85780638eb509a114610243578063a224cfac14610286578063b38b5e58146102f2578063bcd3486614610335578063c305630214610378578063ffe17121146103d3575b600080fd5b3480156100b557600080fd5b506100be610463565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fe5780820151818401526020810190506100e3565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014557600080fd5b5061017a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061049c565b005b34801561018857600080fd5b506101916104ea565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101d45780820151818401526020810190506101b9565b505050509050019250505060405180910390f35b3480156101f457600080fd5b50610229600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104fb565b604051808215151515815260200191505060405180910390f35b34801561024f57600080fd5b50610284600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610518565b005b34801561029257600080fd5b5061029b610566565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102de5780820151818401526020810190506102c3565b505050509050019250505060405180910390f35b3480156102fe57600080fd5b50610333600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610577565b005b34801561034157600080fd5b50610376600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105c5565b005b34801561038457600080fd5b506103b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610613565b604051808215151515815260200191505060405180910390f35b3480156103df57600080fd5b506103e8610630565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042857808201518184015260208101905061040d565b50505050905090810190601f1680156104555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525081565b6104e7816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525060006106699092919063ffffffff16565b50565b60606104f6600361095c565b905090565b60006105118260036109ee90919063ffffffff16565b9050919050565b610563816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525060036106699092919063ffffffff16565b50565b6060610572600061095c565b905090565b6105c2816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d736574000000000000008152506003610a479092919063ffffffff16565b50565b610610816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d73657400000000000000008152506000610a479092919063ffffffff16565b50565b60006106298260006109ee90919063ffffffff16565b9050919050565b6040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525081565b600080600061067886866109ee565b151561068357600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001866002018054905003915085600201828154811015156106e557fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905580866002018481548110151561077557fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561085957fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600186600201818180549050039150816108a09190610c3b565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b8381101561091a5780820151818401526020810190506108ff565b50505050905090810190601f1680156109475780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b6060816002018054806020026020016040519081016040528092919081815260200182805480156109e257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610998575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a518383610c26565b1515610a5c57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610be7578082015181840152602081019050610bcc565b50505050905090810190601f168015610c145780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000610c3283836109ee565b15905092915050565b815481835581811115610c6257818360005260206000209182019101610c619190610c67565b5b505050565b610c8991905b80821115610c85576000816000905550600101610c6d565b5090565b905600a165627a7a723058200ad909cab37f6ddb82b739d1c6d0ef74e13f2e0447e654d1938e68b16722806a0029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633dd6020f146100a95780633fe1b53314610139578063589e9a751461017c5780637a381130146101e85780638eb509a114610243578063a224cfac14610286578063b38b5e58146102f2578063bcd3486614610335578063c305630214610378578063ffe17121146103d3575b600080fd5b3480156100b557600080fd5b506100be610463565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100fe5780820151818401526020810190506100e3565b50505050905090810190601f16801561012b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561014557600080fd5b5061017a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061049c565b005b34801561018857600080fd5b506101916104ea565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156101d45780820151818401526020810190506101b9565b505050509050019250505060405180910390f35b3480156101f457600080fd5b50610229600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104fb565b604051808215151515815260200191505060405180910390f35b34801561024f57600080fd5b50610284600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610518565b005b34801561029257600080fd5b5061029b610566565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102de5780820151818401526020810190506102c3565b505050509050019250505060405180910390f35b3480156102fe57600080fd5b50610333600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610577565b005b34801561034157600080fd5b50610376600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105c5565b005b34801561038457600080fd5b506103b9600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610613565b604051808215151515815260200191505060405180910390f35b3480156103df57600080fd5b506103e8610630565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042857808201518184015260208101905061040d565b50505050905090810190601f1680156104555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525081565b6104e7816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525060006106699092919063ffffffff16565b50565b60606104f6600361095c565b905090565b60006105118260036109ee90919063ffffffff16565b9050919050565b610563816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d7365740000000000000081525060036106699092919063ffffffff16565b50565b6060610572600061095c565b905090565b6105c2816040805190810160405280601981526020017f64756d6d792d636f6e74726163742d7365636f6e642d736574000000000000008152506003610a479092919063ffffffff16565b50565b610610816040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d73657400000000000000008152506000610a479092919063ffffffff16565b50565b60006106298260006109ee90919063ffffffff16565b9050919050565b6040805190810160405280601881526020017f64756d6d792d636f6e74726163742d66697273742d736574000000000000000081525081565b600080600061067886866109ee565b151561068357600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205492506001866002018054905003915085600201828154811015156106e557fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905580866002018481548110151561077557fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009055856002018281548110151561085957fe5b9060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055600186600201818180549050039150816108a09190610c3b565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b8381101561091a5780820151818401526020810190506108ff565b50505050905090810190601f1680156109475780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b6060816002018054806020026020016040519081016040528092919081815260200182805480156109e257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610998575b50505050509050919050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610a518383610c26565b1515610a5c57600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018290806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b83811015610be7578082015181840152602081019050610bcc565b50505050905090810190601f168015610c145780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b6000610c3283836109ee565b15905092915050565b815481835581811115610c6257818360005260206000209182019101610c619190610c67565b5b505050565b610c8991905b80821115610c85576000816000905550600101610c6d565b5090565b905600a165627a7a723058200ad909cab37f6ddb82b739d1c6d0ef74e13f2e0447e654d1938e68b16722806a0029",
  "sourceMap": "653:1438:15:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;653:1438:15;;;;;;;",
  "deployedSourceMap": "653:1438:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63;;8:9:-1;5:2;;;30:1;27;20:12;5:2;947:63:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;947:63:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1260:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1260:121:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;1952:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1952:137:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1952:137:15;;;;;;;;;;;;;;;;;1663:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1663:142:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1387:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1387:124:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;1811:135;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1811:135:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1811:135:15;;;;;;;;;;;;;;;;;1137:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1137:117:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;1017:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1017:114:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;1517:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1517:140:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;880:61;;8:9:-1;5:2;;;30:1;27;20:12;5:2;880:61:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;880:61:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63;;;;;;;;;;;;;;;;;;;;:::o;1260:121::-;1318:56;1357:5;1364:9;;;;;;;;;;;;;;;;;;1318:18;:38;;:56;;;;;:::i;:::-;1260:121;:::o;1952:137::-;2013:9;2041:41;:19;:39;:41::i;:::-;2034:48;;1952:137;:::o;1663:142::-;1736:4;1759:39;1792:5;1759:19;:32;;:39;;;;:::i;:::-;1752:46;;1663:142;;;:::o;1387:124::-;1446:58;1486:5;1493:10;;;;;;;;;;;;;;;;;;1446:19;:39;;:58;;;;;:::i;:::-;1387:124;:::o;1811:135::-;1871:9;1899:40;:18;:38;:40::i;:::-;1892:47;;1811:135;:::o;1137:117::-;1199:48;1229:5;1236:10;;;;;;;;;;;;;;;;;;1199:19;:29;;:48;;;;;:::i;:::-;1137:117;:::o;1017:114::-;1078:46;1107:5;1114:9;;;;;;;;;;;;;;;;;;1078:18;:28;;:46;;;;;:::i;:::-;1017:114;:::o;1517:140::-;1589:4;1612:38;1644:5;1612:18;:31;;:38;;;;:::i;:::-;1605:45;;1517:140;;;:::o;880:61::-;;;;;;;;;;;;;;;;;;;;:::o;2121:1168:14:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3239:43:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168;;;;;;:::o;3646:162::-;3748:9;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;1732:383::-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;1990:5;1963:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1963:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2075:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;653:1438:15:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"../libraries/PermissionsLib.sol\";\n\n\ncontract DummyContract is PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions private firstPermissionSet;\n    PermissionsLib.Permissions private secondPermissionSet;\n\n    string public constant FIRST_SET = \"dummy-contract-first-set\";\n    string public constant SECOND_SET = \"dummy-contract-second-set\";\n\n    function authorizeInFirstSet(address agent) public {\n        firstPermissionSet.authorize(agent, FIRST_SET);\n    }\n\n    function authorizeInSecondSet(address agent) public {\n        secondPermissionSet.authorize(agent, SECOND_SET);\n    }\n\n    function revokeInFirstSet(address agent) public {\n        firstPermissionSet.revokeAuthorization(agent, FIRST_SET);\n    }\n\n    function revokeInSecondSet(address agent) public {\n        secondPermissionSet.revokeAuthorization(agent, SECOND_SET);\n    }\n\n    function isAuthorizedInFirstSet(address agent) public constant returns (bool) {\n        return firstPermissionSet.isAuthorized(agent);\n    }\n\n    function isAuthorizedInSecondSet(address agent) public constant returns (bool) {\n        return secondPermissionSet.isAuthorized(agent);\n    }\n\n    function getFirstSetAuthorizedAgents() public view returns (address[]) {\n        return firstPermissionSet.getAuthorizedAgents();\n    }\n\n    function getSecondSetAuthorizedAgents() public view returns (address[]) {\n        return secondPermissionSet.getAuthorizedAgents();\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
    "exportedSymbols": {
      "DummyContract": [
        5759
      ]
    },
    "id": 5760,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5642,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:15"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "../libraries/PermissionsLib.sol",
        "id": 5643,
        "nodeType": "ImportDirective",
        "scope": 5760,
        "sourceUnit": 5641,
        "src": "609:41:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5644,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "679:16:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5645,
            "nodeType": "InheritanceSpecifier",
            "src": "679:16:15"
          }
        ],
        "contractDependencies": [
          5436
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5759,
        "linearizedBaseContracts": [
          5759,
          5436
        ],
        "name": "DummyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5648,
            "libraryName": {
              "contractScope": null,
              "id": 5646,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "708:14:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "702:52:15",
            "typeName": {
              "contractScope": null,
              "id": 5647,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "727:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 5650,
            "name": "firstPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "760:53:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5649,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "760:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 5652,
            "name": "secondPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "819:54:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5651,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "819:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 5655,
            "name": "FIRST_SET",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "880:61:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5653,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "880:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d66697273742d736574",
              "id": 5654,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "915:26:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_09455d00fa7875afb786e720f309064b471bf4c2eb7f5538704a221855cc174d",
                "typeString": "literal_string \"dummy-contract-first-set\""
              },
              "value": "dummy-contract-first-set"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 5658,
            "name": "SECOND_SET",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "947:63:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5656,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "947:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d7365636f6e642d736574",
              "id": 5657,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "983:27:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_154d5e9b7431040cb58348f998365fe27ae8274fd75a3d719c884999921f2d00",
                "typeString": "literal_string \"dummy-contract-second-set\""
              },
              "value": "dummy-contract-second-set"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 5670,
              "nodeType": "Block",
              "src": "1068:63:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5666,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5660,
                        "src": "1107:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5667,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5655,
                        "src": "1114:9:15",
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
                        "id": 5663,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1078:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5665,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1078:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:46:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5669,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:46:15"
                }
              ]
            },
            "documentation": null,
            "id": 5671,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5660,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5671,
                  "src": "1046:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1045:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1068:0:15"
            },
            "scope": 5759,
            "src": "1017:114:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5683,
              "nodeType": "Block",
              "src": "1189:65:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5679,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5673,
                        "src": "1229:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5680,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5658,
                        "src": "1236:10:15",
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
                        "id": 5676,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1199:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5678,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1199:29:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:48:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5682,
                  "nodeType": "ExpressionStatement",
                  "src": "1199:48:15"
                }
              ]
            },
            "documentation": null,
            "id": 5684,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5673,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "1167:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5672,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5675,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1189:0:15"
            },
            "scope": 5759,
            "src": "1137:117:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5696,
              "nodeType": "Block",
              "src": "1308:73:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5692,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5686,
                        "src": "1357:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5693,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5655,
                        "src": "1364:9:15",
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
                        "id": 5689,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1318:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5691,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1318:38:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:56:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5695,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:56:15"
                }
              ]
            },
            "documentation": null,
            "id": 5697,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5686,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5697,
                  "src": "1286:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:0:15"
            },
            "scope": 5759,
            "src": "1260:121:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5709,
              "nodeType": "Block",
              "src": "1436:75:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5705,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5699,
                        "src": "1486:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5706,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5658,
                        "src": "1493:10:15",
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
                        "id": 5702,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1446:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5704,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1446:39:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1446:58:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5708,
                  "nodeType": "ExpressionStatement",
                  "src": "1446:58:15"
                }
              ]
            },
            "documentation": null,
            "id": 5710,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5699,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5710,
                  "src": "1414:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5698,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1436:0:15"
            },
            "scope": 5759,
            "src": "1387:124:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5722,
              "nodeType": "Block",
              "src": "1595:62:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5719,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5712,
                        "src": "1644:5:15",
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
                        "id": 5717,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1612:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5718,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1612:31:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1612:38:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5716,
                  "id": 5721,
                  "nodeType": "Return",
                  "src": "1605:45:15"
                }
              ]
            },
            "documentation": null,
            "id": 5723,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5712,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5723,
                  "src": "1549:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5723,
                  "src": "1589:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5714,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1589:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:6:15"
            },
            "scope": 5759,
            "src": "1517:140:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5735,
              "nodeType": "Block",
              "src": "1742:63:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5732,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5725,
                        "src": "1792:5:15",
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
                        "id": 5730,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1759:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5731,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1759:32:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:39:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5729,
                  "id": 5734,
                  "nodeType": "Return",
                  "src": "1752:46:15"
                }
              ]
            },
            "documentation": null,
            "id": 5736,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5725,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5736,
                  "src": "1696:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5728,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5736,
                  "src": "1736:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5727,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1735:6:15"
            },
            "scope": 5759,
            "src": "1663:142:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5746,
              "nodeType": "Block",
              "src": "1882:64:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5742,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1899:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "1899:38:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1899:40:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5741,
                  "id": 5745,
                  "nodeType": "Return",
                  "src": "1892:47:15"
                }
              ]
            },
            "documentation": null,
            "id": 5747,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1847:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5747,
                  "src": "1871:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5738,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1871:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5739,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1871:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1870:11:15"
            },
            "scope": 5759,
            "src": "1811:135:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5757,
              "nodeType": "Block",
              "src": "2024:65:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5753,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "2041:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5754,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2041:39:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:41:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5752,
                  "id": 5756,
                  "nodeType": "Return",
                  "src": "2034:48:15"
                }
              ]
            },
            "documentation": null,
            "id": 5758,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSecondSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5758,
                  "src": "2013:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5749,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2013:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5750,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2013:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2012:11:15"
            },
            "scope": 5759,
            "src": "1952:137:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5760,
        "src": "653:1438:15"
      }
    ],
    "src": "584:1508:15"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
    "exportedSymbols": {
      "DummyContract": [
        5759
      ]
    },
    "id": 5760,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5642,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:15"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "../libraries/PermissionsLib.sol",
        "id": 5643,
        "nodeType": "ImportDirective",
        "scope": 5760,
        "sourceUnit": 5641,
        "src": "609:41:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5644,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "679:16:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5645,
            "nodeType": "InheritanceSpecifier",
            "src": "679:16:15"
          }
        ],
        "contractDependencies": [
          5436
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 5759,
        "linearizedBaseContracts": [
          5759,
          5436
        ],
        "name": "DummyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5648,
            "libraryName": {
              "contractScope": null,
              "id": 5646,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "708:14:15",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "702:52:15",
            "typeName": {
              "contractScope": null,
              "id": 5647,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "727:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 5650,
            "name": "firstPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "760:53:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5649,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "760:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 5652,
            "name": "secondPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "819:54:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5651,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "819:26:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": true,
            "id": 5655,
            "name": "FIRST_SET",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "880:61:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5653,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "880:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d66697273742d736574",
              "id": 5654,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "915:26:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_09455d00fa7875afb786e720f309064b471bf4c2eb7f5538704a221855cc174d",
                "typeString": "literal_string \"dummy-contract-first-set\""
              },
              "value": "dummy-contract-first-set"
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "id": 5658,
            "name": "SECOND_SET",
            "nodeType": "VariableDeclaration",
            "scope": 5759,
            "src": "947:63:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5656,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "947:6:15",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d7365636f6e642d736574",
              "id": 5657,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "983:27:15",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_154d5e9b7431040cb58348f998365fe27ae8274fd75a3d719c884999921f2d00",
                "typeString": "literal_string \"dummy-contract-second-set\""
              },
              "value": "dummy-contract-second-set"
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 5670,
              "nodeType": "Block",
              "src": "1068:63:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5666,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5660,
                        "src": "1107:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5667,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5655,
                        "src": "1114:9:15",
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
                        "id": 5663,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1078:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5665,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1078:28:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5668,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:46:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5669,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:46:15"
                }
              ]
            },
            "documentation": null,
            "id": 5671,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5661,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5660,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5671,
                  "src": "1046:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1045:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5662,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1068:0:15"
            },
            "scope": 5759,
            "src": "1017:114:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5683,
              "nodeType": "Block",
              "src": "1189:65:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5679,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5673,
                        "src": "1229:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5680,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5658,
                        "src": "1236:10:15",
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
                        "id": 5676,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1199:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5678,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1199:29:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5681,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:48:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5682,
                  "nodeType": "ExpressionStatement",
                  "src": "1199:48:15"
                }
              ]
            },
            "documentation": null,
            "id": 5684,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5674,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5673,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5684,
                  "src": "1167:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5672,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5675,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1189:0:15"
            },
            "scope": 5759,
            "src": "1137:117:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5696,
              "nodeType": "Block",
              "src": "1308:73:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5692,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5686,
                        "src": "1357:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5693,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5655,
                        "src": "1364:9:15",
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
                        "id": 5689,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1318:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5691,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1318:38:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5694,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:56:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5695,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:56:15"
                }
              ]
            },
            "documentation": null,
            "id": 5697,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5687,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5686,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5697,
                  "src": "1286:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5685,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5688,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:0:15"
            },
            "scope": 5759,
            "src": "1260:121:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5709,
              "nodeType": "Block",
              "src": "1436:75:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5705,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5699,
                        "src": "1486:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5706,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5658,
                        "src": "1493:10:15",
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
                        "id": 5702,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1446:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5704,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1446:39:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1446:58:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5708,
                  "nodeType": "ExpressionStatement",
                  "src": "1446:58:15"
                }
              ]
            },
            "documentation": null,
            "id": 5710,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5699,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5710,
                  "src": "1414:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5698,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1436:0:15"
            },
            "scope": 5759,
            "src": "1387:124:15",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5722,
              "nodeType": "Block",
              "src": "1595:62:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5719,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5712,
                        "src": "1644:5:15",
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
                        "id": 5717,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1612:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5718,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1612:31:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5720,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1612:38:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5716,
                  "id": 5721,
                  "nodeType": "Return",
                  "src": "1605:45:15"
                }
              ]
            },
            "documentation": null,
            "id": 5723,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5713,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5712,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5723,
                  "src": "1549:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5711,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5716,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5715,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5723,
                  "src": "1589:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5714,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1589:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:6:15"
            },
            "scope": 5759,
            "src": "1517:140:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5735,
              "nodeType": "Block",
              "src": "1742:63:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5732,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5725,
                        "src": "1792:5:15",
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
                        "id": 5730,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "1759:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5731,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1759:32:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5733,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:39:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5729,
                  "id": 5734,
                  "nodeType": "Return",
                  "src": "1752:46:15"
                }
              ]
            },
            "documentation": null,
            "id": 5736,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5726,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5725,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5736,
                  "src": "1696:13:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5724,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:15:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5728,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5736,
                  "src": "1736:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5727,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1735:6:15"
            },
            "scope": 5759,
            "src": "1663:142:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5746,
              "nodeType": "Block",
              "src": "1882:64:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5742,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5650,
                        "src": "1899:18:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5743,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "1899:38:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5744,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1899:40:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5741,
                  "id": 5745,
                  "nodeType": "Return",
                  "src": "1892:47:15"
                }
              ]
            },
            "documentation": null,
            "id": 5747,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1847:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5747,
                  "src": "1871:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5738,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1871:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5739,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1871:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1870:11:15"
            },
            "scope": 5759,
            "src": "1811:135:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5757,
              "nodeType": "Block",
              "src": "2024:65:15",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5753,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5652,
                        "src": "2041:19:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5754,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2041:39:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5755,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:41:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5752,
                  "id": 5756,
                  "nodeType": "Return",
                  "src": "2034:48:15"
                }
              ]
            },
            "documentation": null,
            "id": 5758,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSecondSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5748,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:2:15"
            },
            "payable": false,
            "returnParameters": {
              "id": 5752,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5751,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5758,
                  "src": "2013:9:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5749,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2013:7:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5750,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2013:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2012:11:15"
            },
            "scope": 5759,
            "src": "1952:137:15",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 5760,
        "src": "653:1438:15"
      }
    ],
    "src": "584:1508:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {},
      "links": {},
      "address": "0xaeaa7d6bde4afa7bf2d5bae6bfc103d09b81c695",
      "transactionHash": "0x137010c91723cddf4a8d00201c2c818bb8605a5d92ac5d14866e8194945239bf"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-12T07:00:58.357Z"
}
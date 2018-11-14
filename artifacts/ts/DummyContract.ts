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
  "sourceMap": "653:1438:16:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;653:1438:16;;;;;;;",
  "deployedSourceMap": "653:1438:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63;;8:9:-1;5:2;;;30:1;27;20:12;5:2;947:63:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;947:63:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1260:121;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1260:121:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;1952:137;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1952:137:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1952:137:16;;;;;;;;;;;;;;;;;1663:142;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1663:142:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1387:124;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1387:124:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;1811:135;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1811:135:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1811:135:16;;;;;;;;;;;;;;;;;1137:117;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1137:117:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;1017:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1017:114:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;1517:140;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1517:140:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;880:61;;8:9:-1;5:2;;;30:1;27;20:12;5:2;880:61:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;880:61:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;947:63;;;;;;;;;;;;;;;;;;;;:::o;1260:121::-;1318:56;1357:5;1364:9;;;;;;;;;;;;;;;;;;1318:18;:38;;:56;;;;;:::i;:::-;1260:121;:::o;1952:137::-;2013:9;2041:41;:19;:39;:41::i;:::-;2034:48;;1952:137;:::o;1663:142::-;1736:4;1759:39;1792:5;1759:19;:32;;:39;;;;:::i;:::-;1752:46;;1663:142;;;:::o;1387:124::-;1446:58;1486:5;1493:10;;;;;;;;;;;;;;;;;;1446:19;:39;;:58;;;;;:::i;:::-;1387:124;:::o;1811:135::-;1871:9;1899:40;:18;:38;:40::i;:::-;1892:47;;1811:135;:::o;1137:117::-;1199:48;1229:5;1236:10;;;;;;;;;;;;;;;;;;1199:19;:29;;:48;;;;;:::i;:::-;1137:117;:::o;1017:114::-;1078:46;1107:5;1114:9;;;;;;;;;;;;;;;;;;1078:18;:28;;:46;;;;;:::i;:::-;1017:114;:::o;1517:140::-;1589:4;1612:38;1644:5;1612:18;:31;;:38;;;;:::i;:::-;1605:45;;1517:140;;;:::o;880:61::-;;;;;;;;;;;;;;;;;;;;:::o;2121:1168:14:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3239:43:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168;;;;;;:::o;3646:162::-;3748:9;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;3295:166::-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;1732:383::-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;1990:5;1963:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1963:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2075:33:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383;;;:::o;3467:173::-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;653:1438:16:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.24;\n\nimport \"../libraries/PermissionsLib.sol\";\n\n\ncontract DummyContract is PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    PermissionsLib.Permissions private firstPermissionSet;\n    PermissionsLib.Permissions private secondPermissionSet;\n\n    string public constant FIRST_SET = \"dummy-contract-first-set\";\n    string public constant SECOND_SET = \"dummy-contract-second-set\";\n\n    function authorizeInFirstSet(address agent) public {\n        firstPermissionSet.authorize(agent, FIRST_SET);\n    }\n\n    function authorizeInSecondSet(address agent) public {\n        secondPermissionSet.authorize(agent, SECOND_SET);\n    }\n\n    function revokeInFirstSet(address agent) public {\n        firstPermissionSet.revokeAuthorization(agent, FIRST_SET);\n    }\n\n    function revokeInSecondSet(address agent) public {\n        secondPermissionSet.revokeAuthorization(agent, SECOND_SET);\n    }\n\n    function isAuthorizedInFirstSet(address agent) public constant returns (bool) {\n        return firstPermissionSet.isAuthorized(agent);\n    }\n\n    function isAuthorizedInSecondSet(address agent) public constant returns (bool) {\n        return secondPermissionSet.isAuthorized(agent);\n    }\n\n    function getFirstSetAuthorizedAgents() public view returns (address[]) {\n        return firstPermissionSet.getAuthorizedAgents();\n    }\n\n    function getSecondSetAuthorizedAgents() public view returns (address[]) {\n        return secondPermissionSet.getAuthorizedAgents();\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
    "exportedSymbols": {
      "DummyContract": [
        6003
      ]
    },
    "id": 6004,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5886,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:16"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "../libraries/PermissionsLib.sol",
        "id": 5887,
        "nodeType": "ImportDirective",
        "scope": 6004,
        "sourceUnit": 5641,
        "src": "609:41:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5888,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "679:16:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5889,
            "nodeType": "InheritanceSpecifier",
            "src": "679:16:16"
          }
        ],
        "contractDependencies": [
          5436
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6003,
        "linearizedBaseContracts": [
          6003,
          5436
        ],
        "name": "DummyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5892,
            "libraryName": {
              "contractScope": null,
              "id": 5890,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "708:14:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "702:52:16",
            "typeName": {
              "contractScope": null,
              "id": 5891,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "727:26:16",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 5894,
            "name": "firstPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "760:53:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5893,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "760:26:16",
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
            "id": 5896,
            "name": "secondPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "819:54:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5895,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "819:26:16",
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
            "id": 5899,
            "name": "FIRST_SET",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "880:61:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5897,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "880:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d66697273742d736574",
              "id": 5898,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "915:26:16",
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
            "id": 5902,
            "name": "SECOND_SET",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "947:63:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5900,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "947:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d7365636f6e642d736574",
              "id": 5901,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "983:27:16",
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
              "id": 5914,
              "nodeType": "Block",
              "src": "1068:63:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5910,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5904,
                        "src": "1107:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5911,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5899,
                        "src": "1114:9:16",
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
                        "id": 5907,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1078:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5909,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1078:28:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:46:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5913,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:46:16"
                }
              ]
            },
            "documentation": null,
            "id": 5915,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5904,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5915,
                  "src": "1046:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1045:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1068:0:16"
            },
            "scope": 6003,
            "src": "1017:114:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5927,
              "nodeType": "Block",
              "src": "1189:65:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5923,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5917,
                        "src": "1229:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5924,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "1236:10:16",
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
                        "id": 5920,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1199:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5922,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1199:29:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:48:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5926,
                  "nodeType": "ExpressionStatement",
                  "src": "1199:48:16"
                }
              ]
            },
            "documentation": null,
            "id": 5928,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5917,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "1167:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1189:0:16"
            },
            "scope": 6003,
            "src": "1137:117:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5940,
              "nodeType": "Block",
              "src": "1308:73:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5936,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5930,
                        "src": "1357:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5937,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5899,
                        "src": "1364:9:16",
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
                        "id": 5933,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1318:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5935,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1318:38:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:56:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5939,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:56:16"
                }
              ]
            },
            "documentation": null,
            "id": 5941,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5930,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5941,
                  "src": "1286:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:0:16"
            },
            "scope": 6003,
            "src": "1260:121:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5953,
              "nodeType": "Block",
              "src": "1436:75:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5949,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5943,
                        "src": "1486:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5950,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "1493:10:16",
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
                        "id": 5946,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1446:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5948,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1446:39:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1446:58:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5952,
                  "nodeType": "ExpressionStatement",
                  "src": "1446:58:16"
                }
              ]
            },
            "documentation": null,
            "id": 5954,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5943,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5954,
                  "src": "1414:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5942,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1436:0:16"
            },
            "scope": 6003,
            "src": "1387:124:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5966,
              "nodeType": "Block",
              "src": "1595:62:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5963,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5956,
                        "src": "1644:5:16",
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
                        "id": 5961,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1612:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5962,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1612:31:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1612:38:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5960,
                  "id": 5965,
                  "nodeType": "Return",
                  "src": "1605:45:16"
                }
              ]
            },
            "documentation": null,
            "id": 5967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5956,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5967,
                  "src": "1549:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5959,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5967,
                  "src": "1589:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1589:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:6:16"
            },
            "scope": 6003,
            "src": "1517:140:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5979,
              "nodeType": "Block",
              "src": "1742:63:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5976,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5969,
                        "src": "1792:5:16",
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
                        "id": 5974,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1759:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5975,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1759:32:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:39:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5973,
                  "id": 5978,
                  "nodeType": "Return",
                  "src": "1752:46:16"
                }
              ]
            },
            "documentation": null,
            "id": 5980,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5969,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5980,
                  "src": "1696:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5972,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5980,
                  "src": "1736:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5971,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1735:6:16"
            },
            "scope": 6003,
            "src": "1663:142:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5990,
              "nodeType": "Block",
              "src": "1882:64:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5986,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1899:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5987,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "1899:38:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1899:40:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5985,
                  "id": 5989,
                  "nodeType": "Return",
                  "src": "1892:47:16"
                }
              ]
            },
            "documentation": null,
            "id": 5991,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1847:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5991,
                  "src": "1871:9:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5982,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1871:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5983,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1871:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1870:11:16"
            },
            "scope": 6003,
            "src": "1811:135:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6001,
              "nodeType": "Block",
              "src": "2024:65:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5997,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "2041:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5998,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2041:39:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:41:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5996,
                  "id": 6000,
                  "nodeType": "Return",
                  "src": "2034:48:16"
                }
              ]
            },
            "documentation": null,
            "id": 6002,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSecondSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5992,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5995,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6002,
                  "src": "2013:9:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5993,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2013:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5994,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2013:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2012:11:16"
            },
            "scope": 6003,
            "src": "1952:137:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6004,
        "src": "653:1438:16"
      }
    ],
    "src": "584:1508:16"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/test/DummyContract.sol",
    "exportedSymbols": {
      "DummyContract": [
        6003
      ]
    },
    "id": 6004,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5886,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "584:23:16"
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/libraries/PermissionsLib.sol",
        "file": "../libraries/PermissionsLib.sol",
        "id": 5887,
        "nodeType": "ImportDirective",
        "scope": 6004,
        "sourceUnit": 5641,
        "src": "609:41:16",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 5888,
              "name": "PermissionEvents",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5436,
              "src": "679:16:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionEvents_$5436",
                "typeString": "contract PermissionEvents"
              }
            },
            "id": 5889,
            "nodeType": "InheritanceSpecifier",
            "src": "679:16:16"
          }
        ],
        "contractDependencies": [
          5436
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 6003,
        "linearizedBaseContracts": [
          6003,
          5436
        ],
        "name": "DummyContract",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 5892,
            "libraryName": {
              "contractScope": null,
              "id": 5890,
              "name": "PermissionsLib",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5640,
              "src": "708:14:16",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_PermissionsLib_$5640",
                "typeString": "library PermissionsLib"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "702:52:16",
            "typeName": {
              "contractScope": null,
              "id": 5891,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "727:26:16",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Permissions_$5460_storage_ptr",
                "typeString": "struct PermissionsLib.Permissions"
              }
            }
          },
          {
            "constant": false,
            "id": 5894,
            "name": "firstPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "760:53:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5893,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "760:26:16",
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
            "id": 5896,
            "name": "secondPermissionSet",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "819:54:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Permissions_$5460_storage",
              "typeString": "struct PermissionsLib.Permissions"
            },
            "typeName": {
              "contractScope": null,
              "id": 5895,
              "name": "PermissionsLib.Permissions",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5460,
              "src": "819:26:16",
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
            "id": 5899,
            "name": "FIRST_SET",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "880:61:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5897,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "880:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d66697273742d736574",
              "id": 5898,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "915:26:16",
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
            "id": 5902,
            "name": "SECOND_SET",
            "nodeType": "VariableDeclaration",
            "scope": 6003,
            "src": "947:63:16",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 5900,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "947:6:16",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "64756d6d792d636f6e74726163742d7365636f6e642d736574",
              "id": 5901,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "983:27:16",
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
              "id": 5914,
              "nodeType": "Block",
              "src": "1068:63:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5910,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5904,
                        "src": "1107:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5911,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5899,
                        "src": "1114:9:16",
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
                        "id": 5907,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1078:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5909,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1078:28:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5912,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:46:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5913,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:46:16"
                }
              ]
            },
            "documentation": null,
            "id": 5915,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5904,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5915,
                  "src": "1046:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1045:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1068:0:16"
            },
            "scope": 6003,
            "src": "1017:114:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5927,
              "nodeType": "Block",
              "src": "1189:65:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5923,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5917,
                        "src": "1229:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5924,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "1236:10:16",
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
                        "id": 5920,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1199:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5922,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "authorize",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5510,
                      "src": "1199:29:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5925,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1199:48:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5926,
                  "nodeType": "ExpressionStatement",
                  "src": "1199:48:16"
                }
              ]
            },
            "documentation": null,
            "id": 5928,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "authorizeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5918,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5917,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5928,
                  "src": "1167:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5916,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1167:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1166:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5919,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1189:0:16"
            },
            "scope": 6003,
            "src": "1137:117:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5940,
              "nodeType": "Block",
              "src": "1308:73:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5936,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5930,
                        "src": "1357:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5937,
                        "name": "FIRST_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5899,
                        "src": "1364:9:16",
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
                        "id": 5933,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1318:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5935,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1318:38:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5938,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1318:56:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5939,
                  "nodeType": "ExpressionStatement",
                  "src": "1318:56:16"
                }
              ]
            },
            "documentation": null,
            "id": 5941,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5931,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5930,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5941,
                  "src": "1286:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5929,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1286:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1285:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5932,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1308:0:16"
            },
            "scope": 6003,
            "src": "1260:121:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5953,
              "nodeType": "Block",
              "src": "1436:75:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5949,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5943,
                        "src": "1486:5:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5950,
                        "name": "SECOND_SET",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5902,
                        "src": "1493:10:16",
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
                        "id": 5946,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1446:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5948,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "revokeAuthorization",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5596,
                      "src": "1446:39:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$_t_string_memory_ptr_$returns$__$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                      }
                    },
                    "id": 5951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1446:58:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5952,
                  "nodeType": "ExpressionStatement",
                  "src": "1446:58:16"
                }
              ]
            },
            "documentation": null,
            "id": 5954,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "revokeInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5944,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5943,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5954,
                  "src": "1414:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5942,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1414:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1413:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5945,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1436:0:16"
            },
            "scope": 6003,
            "src": "1387:124:16",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5966,
              "nodeType": "Block",
              "src": "1595:62:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5963,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5956,
                        "src": "1644:5:16",
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
                        "id": 5961,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1612:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5962,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1612:31:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5964,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1612:38:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5960,
                  "id": 5965,
                  "nodeType": "Return",
                  "src": "1605:45:16"
                }
              ]
            },
            "documentation": null,
            "id": 5967,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInFirstSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5957,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5956,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5967,
                  "src": "1549:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5955,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1549:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1548:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5960,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5959,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5967,
                  "src": "1589:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5958,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1589:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1588:6:16"
            },
            "scope": 6003,
            "src": "1517:140:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5979,
              "nodeType": "Block",
              "src": "1742:63:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5976,
                        "name": "agent",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5969,
                        "src": "1792:5:16",
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
                        "id": 5974,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "1759:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5975,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "isAuthorized",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5611,
                      "src": "1759:32:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$_t_address_$returns$_t_bool_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                      }
                    },
                    "id": 5977,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1759:39:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 5973,
                  "id": 5978,
                  "nodeType": "Return",
                  "src": "1752:46:16"
                }
              ]
            },
            "documentation": null,
            "id": 5980,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "isAuthorizedInSecondSet",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5970,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5969,
                  "name": "agent",
                  "nodeType": "VariableDeclaration",
                  "scope": 5980,
                  "src": "1696:13:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5968,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1696:7:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1695:15:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5973,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5972,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5980,
                  "src": "1736:4:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 5971,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1736:4:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1735:6:16"
            },
            "scope": 6003,
            "src": "1663:142:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5990,
              "nodeType": "Block",
              "src": "1882:64:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5986,
                        "name": "firstPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5894,
                        "src": "1899:18:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5987,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "1899:38:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5988,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1899:40:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5985,
                  "id": 5989,
                  "nodeType": "Return",
                  "src": "1892:47:16"
                }
              ]
            },
            "documentation": null,
            "id": 5991,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getFirstSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5981,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1847:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5985,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5984,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 5991,
                  "src": "1871:9:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5982,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "1871:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5983,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "1871:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1870:11:16"
            },
            "scope": 6003,
            "src": "1811:135:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 6001,
              "nodeType": "Block",
              "src": "2024:65:16",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 5997,
                        "name": "secondPermissionSet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5896,
                        "src": "2041:19:16",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Permissions_$5460_storage",
                          "typeString": "struct PermissionsLib.Permissions storage ref"
                        }
                      },
                      "id": 5998,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "getAuthorizedAgents",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5639,
                      "src": "2041:39:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Permissions_$5460_storage_ptr_$returns$_t_array$_t_address_$dyn_memory_ptr_$bound_to$_t_struct$_Permissions_$5460_storage_ptr_$",
                        "typeString": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                      }
                    },
                    "id": 5999,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2041:41:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                      "typeString": "address[] memory"
                    }
                  },
                  "functionReturnParameters": 5996,
                  "id": 6000,
                  "nodeType": "Return",
                  "src": "2034:48:16"
                }
              ]
            },
            "documentation": null,
            "id": 6002,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSecondSetAuthorizedAgents",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5992,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1989:2:16"
            },
            "payable": false,
            "returnParameters": {
              "id": 5996,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5995,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 6002,
                  "src": "2013:9:16",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 5993,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "2013:7:16",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 5994,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "2013:9:16",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2012:11:16"
            },
            "scope": 6003,
            "src": "1952:137:16",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 6004,
        "src": "653:1438:16"
      }
    ],
    "src": "584:1508:16"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {},
      "links": {},
      "address": "0x7e4d23d0e094c09b93a802bf000a651c88e6318c",
      "transactionHash": "0x137010c91723cddf4a8d00201c2c818bb8605a5d92ac5d14866e8194945239bf"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-14T08:05:16.276Z"
}
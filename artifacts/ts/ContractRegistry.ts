export const ContractRegistry = 
{
  "contractName": "ContractRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "debtKernel",
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
      "constant": true,
      "inputs": [],
      "name": "repaymentRouter",
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
      "name": "collateralizer",
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
      "name": "tokenRegistry",
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
      "constant": true,
      "inputs": [],
      "name": "debtToken",
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
      "inputs": [
        {
          "name": "_collateralizer",
          "type": "address"
        },
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_debtToken",
          "type": "address"
        },
        {
          "name": "_repaymentRouter",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
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
          "name": "contractType",
          "type": "uint8"
        },
        {
          "indexed": true,
          "name": "oldAddress",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "ContractAddressUpdated",
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
          "name": "contractType",
          "type": "uint8"
        },
        {
          "name": "newAddress",
          "type": "address"
        }
      ],
      "name": "updateAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060405160e080610e8983398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555086600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555085600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555084600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050505050610bfd8061028c6000396000f3006080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100a95780630eefdbad146101005780632f866f73146101575780636fa9d056146101ae578063869f0511146102055780638da5cb5b1461025c5780639d23c4c7146102b3578063e2aa46bb1461030a578063f2fde38b1461035a578063f8d898981461039d575b600080fd5b3480156100b557600080fd5b506100be6103f4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010c57600080fd5b5061011561041a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016357600080fd5b5061016c610440565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ba57600080fd5b506101c3610466565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021157600080fd5b5061021a61048c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026857600080fd5b506102716104b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102bf57600080fd5b506102c86104d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031657600080fd5b50610358600480360381019080803560ff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104fd565b005b34801561036657600080fd5b5061039b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109db565b005b3480156103a957600080fd5b506103b2610b30565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561055a57600080fd5b6000600681111561056757fe5b83600681111561057357fe5b14156105ee57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506105a88282610b56565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610970565b600160068111156105fb57fe5b83600681111561060757fe5b141561068257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061063c8282610b56565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096f565b6002600681111561068f57fe5b83600681111561069b57fe5b141561071657600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106d08282610b56565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096e565b6003600681111561072357fe5b83600681111561072f57fe5b14156107aa57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107648282610b56565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096d565b600460068111156107b757fe5b8360068111156107c357fe5b141561083e57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107f88282610b56565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096c565b6005600681111561084b57fe5b83600681111561085757fe5b14156108d257600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061088c8282610b56565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096b565b6006808111156108de57fe5b8360068111156108ea57fe5b141561096557600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061091f8282610b56565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096a565b600080fd5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168460068111156109aa57fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a3657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a7257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b9257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610bcd57600080fd5b50505600a165627a7a7230582076f2cd6cb16392ee47adc186df88bcd6a30ce1327fd315c3e240dd8fe809d4a00029",
  "deployedBytecode": "0x6080604052600436106100a4576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063079dd4b7146100a95780630eefdbad146101005780632f866f73146101575780636fa9d056146101ae578063869f0511146102055780638da5cb5b1461025c5780639d23c4c7146102b3578063e2aa46bb1461030a578063f2fde38b1461035a578063f8d898981461039d575b600080fd5b3480156100b557600080fd5b506100be6103f4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561010c57600080fd5b5061011561041a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561016357600080fd5b5061016c610440565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101ba57600080fd5b506101c3610466565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561021157600080fd5b5061021a61048c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561026857600080fd5b506102716104b2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102bf57600080fd5b506102c86104d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561031657600080fd5b50610358600480360381019080803560ff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506104fd565b005b34801561036657600080fd5b5061039b600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109db565b005b3480156103a957600080fd5b506103b2610b30565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561055a57600080fd5b6000600681111561056757fe5b83600681111561057357fe5b14156105ee57600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506105a88282610b56565b81600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610970565b600160068111156105fb57fe5b83600681111561060757fe5b141561068257600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061063c8282610b56565b81600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096f565b6002600681111561068f57fe5b83600681111561069b57fe5b141561071657600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506106d08282610b56565b81600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096e565b6003600681111561072357fe5b83600681111561072f57fe5b14156107aa57600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107648282610b56565b81600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096d565b600460068111156107b757fe5b8360068111156107c357fe5b141561083e57600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506107f88282610b56565b81600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096c565b6005600681111561084b57fe5b83600681111561085757fe5b14156108d257600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061088c8282610b56565b81600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096b565b6006808111156108de57fe5b8360068111156108ea57fe5b141561096557600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905061091f8282610b56565b81600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061096a565b600080fd5b5b5b5b5b5b5b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff168460068111156109aa57fe5b7fea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e78860405160405180910390a4505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a3657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610a7257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610b9257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515610bcd57600080fd5b50505600a165627a7a7230582076f2cd6cb16392ee47adc186df88bcd6a30ce1327fd315c3e240dd8fe809d4a00029",
  "sourceMap": "298:3506:1:-;;;971:667;8:9:-1;5:2;;;30:1;27;20:12;5:2;971:667:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;509:10:35;501:5;;:18;;;;;;;;;;;;;;;;;;1288:15:1;1256:14;;:48;;;;;;;;;;;;;;;;;;1338:11;1314:10;;:36;;;;;;;;;;;;;;;;;;1388:13;1360:12;;:42;;;;;;;;;;;;;;;;;;1434:10;1412:9;;:33;;;;;;;;;;;;;;;;;;1489:16;1455:15;;:51;;;;;;;;;;;;;;;;;;1546:14;1516:13;;:45;;;;;;;;;;;;;;;;;;1611:19;1571:18;;:60;;;;;;;;;;;;;;;;;;971:667;;;;;;;298:3506;;;;;;",
  "deployedSourceMap": "298:3506:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;731:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;731:28:1;;;;;;;;;;;;;;;;;;;;;;;;;;;920:44;;8:9:-1;5:2;;;30:1;27;20:12;5:2;920:44:1;;;;;;;;;;;;;;;;;;;;;;;;;;;765:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;765:33:1;;;;;;;;;;;;;;;;;;;;;;;;;;;836:38;;8:9:-1;5:2;;;30:1;27;20:12;5:2;836:38:1;;;;;;;;;;;;;;;;;;;;;;;;;;;689:36;;8:9:-1;5:2;;;30:1;27;20:12;5:2;689:36:1;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:35;;;;;;;;;;;;;;;;;;;;;;;;;;;880:34:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;880:34:1;;;;;;;;;;;;;;;;;;;;;;;;;;;1644:1853;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1644:1853:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:35;;8:9:-1;5:2;;;30:1;27;20:12;5:2;832:169:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;804:26:1;;8:9:-1;5:2;;;30:1;27;20:12;5:2;804:26:1;;;;;;;;;;;;;;;;;;;;;;;;;;;731:28;;;;;;;;;;;;;:::o;920:44::-;;;;;;;;;;;;;:::o;765:33::-;;;;;;;;;;;;;:::o;836:38::-;;;;;;;;;;;;;:::o;689:36::-;;;;;;;;;;;;;:::o;238:20:35:-;;;;;;;;;;;;;:::o;880:34:1:-;;;;;;;;;;;;;:::o;1644:1853::-;1783:18;653:5:35;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1832:27:1;1816:43;;;;;;;;:12;:43;;;;;;;;;1812:1608;;;1896:14;;;;;;;;;;;1875:36;;1925:42;1944:10;1956;1925:18;:42::i;:::-;2013:10;1981:14;;:43;;;;;;;;;;;;;;;;;;1812:1608;;;2061:23;2045:39;;;;;;;;:12;:39;;;;;;;;;2041:1379;;;2121:10;;;;;;;;;;;2100:32;;2146:42;2165:10;2177;2146:18;:42::i;:::-;2226:10;2202;;:35;;;;;;;;;;;;;;;;;;2041:1379;;;2274:25;2258:41;;;;;;;;:12;:41;;;;;;;;;2254:1166;;;2336:12;;;;;;;;;;;2315:34;;2363:42;2382:10;2394;2363:18;:42::i;:::-;2447:10;2419:12;;:39;;;;;;;;;;;;;;;;;;2254:1166;;;2495:22;2479:38;;;;;;;;:12;:38;;;;;;;;;2475:945;;;2554:9;;;;;;;;;;;2533:31;;2578:42;2597:10;2609;2578:18;:42::i;:::-;2656:10;2634:9;;:33;;;;;;;;;;;;;;;;;;2475:945;;;2704:28;2688:44;;;;;;;;:12;:44;;;;;;;;;2684:736;;;2769:15;;;;;;;;;;;2748:37;;2799:42;2818:10;2830;2799:18;:42::i;:::-;2889:10;2855:15;;:45;;;;;;;;;;;;;;;;;;2684:736;;;2937:26;2921:42;;;;;;;;:12;:42;;;;;;;;;2917:503;;;3000:13;;;;;;;;;;;2979:35;;3028:42;3047:10;3059;3028:18;:42::i;:::-;3114:10;3084:13;;:41;;;;;;;;;;;;;;;;;;2917:503;;;3162:31;3146:47;;;;;;;;:12;:47;;;;;;;;;3142:278;;;3230:18;;;;;;;;;;;3209:40;;3263:42;3282:10;3294;3263:18;:42::i;:::-;3359:10;3319:18;;:51;;;;;;;;;;;;;;;;;;3142:278;;;3401:8;;;3142:278;2917:503;2684:736;2475:945;2254:1166;2041:1379;1812:1608;3479:10;3430:60;;3467:10;3430:60;;3453:12;3430:60;;;;;;;;;;;;;;;;;;1644:1853;;;:::o;832:169:35:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;804:26:1:-;;;;;;;;;;;;;:::o;3503:299::-;3667:1;3645:24;;:10;:24;;;;3637:33;;;;;;;;3741:10;3727:24;;:10;:24;;;;3719:33;;;;;;;;3503:299;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\nimport \"./Collateralizer.sol\";\nimport \"./DebtKernel.sol\";\nimport \"./DebtRegistry.sol\";\nimport \"./DebtToken.sol\";\nimport \"./RepaymentRouter.sol\";\nimport \"./TokenRegistry.sol\";\nimport \"./TokenTransferProxy.sol\";\n\n\ncontract ContractRegistry is Ownable {\n\n    event ContractAddressUpdated(\n        ContractType indexed contractType,\n        address indexed oldAddress,\n        address indexed newAddress\n    );\n\n    enum ContractType {\n        Collateralizer,\n        DebtKernel,\n        DebtRegistry,\n        DebtToken,\n        RepaymentRouter,\n        TokenRegistry,\n        TokenTransferProxy\n    }\n\n    Collateralizer public collateralizer;\n    DebtKernel public debtKernel;\n    DebtRegistry public  debtRegistry;\n    DebtToken public debtToken;\n    RepaymentRouter public repaymentRouter;\n    TokenRegistry public tokenRegistry;\n    TokenTransferProxy public tokenTransferProxy;\n\n    function ContractRegistry(\n        address _collateralizer,\n        address _debtKernel,\n        address _debtRegistry,\n        address _debtToken,\n        address _repaymentRouter,\n        address _tokenRegistry,\n        address _tokenTransferProxy\n    )\n        public\n    {\n        collateralizer = Collateralizer(_collateralizer);\n        debtKernel = DebtKernel(_debtKernel);\n        debtRegistry = DebtRegistry(_debtRegistry);\n        debtToken = DebtToken(_debtToken);\n        repaymentRouter = RepaymentRouter(_repaymentRouter);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);\n    }\n\n    function updateAddress(\n        ContractType contractType,\n        address newAddress\n    )\n        public\n        onlyOwner\n    {\n        address oldAddress;\n\n        if (contractType == ContractType.Collateralizer) {\n            oldAddress = address(collateralizer);\n            validateNewAddress(newAddress, oldAddress);\n            collateralizer = Collateralizer(newAddress);\n        } else if (contractType == ContractType.DebtKernel) {\n            oldAddress = address(debtKernel);\n            validateNewAddress(newAddress, oldAddress);\n            debtKernel = DebtKernel(newAddress);\n        } else if (contractType == ContractType.DebtRegistry) {\n            oldAddress = address(debtRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            debtRegistry = DebtRegistry(newAddress);\n        } else if (contractType == ContractType.DebtToken) {\n            oldAddress = address(debtToken);\n            validateNewAddress(newAddress, oldAddress);\n            debtToken = DebtToken(newAddress);\n        } else if (contractType == ContractType.RepaymentRouter) {\n            oldAddress = address(repaymentRouter);\n            validateNewAddress(newAddress, oldAddress);\n            repaymentRouter = RepaymentRouter(newAddress);\n        } else if (contractType == ContractType.TokenRegistry) {\n            oldAddress = address(tokenRegistry);\n            validateNewAddress(newAddress, oldAddress);\n            tokenRegistry = TokenRegistry(newAddress);\n        } else if (contractType == ContractType.TokenTransferProxy) {\n            oldAddress = address(tokenTransferProxy);\n            validateNewAddress(newAddress, oldAddress);\n            tokenTransferProxy = TokenTransferProxy(newAddress);\n        } else {\n            revert();\n        }\n\n        ContractAddressUpdated(contractType, oldAddress, newAddress);\n    }\n\n    function validateNewAddress(\n        address newAddress,\n        address oldAddress\n    )\n        internal\n        pure\n    {\n        require(newAddress != address(0)); // new address cannot be null address.\n        require(newAddress != oldAddress); // new address cannot be existing address.\n    }\n}\n",
  "sourcePath": "/Users/lixianji/coding/chainboard/contract/contracts/ContractRegistry.sol",
  "ast": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        923
      ]
    },
    "id": 924,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 616,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 617,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 10274,
        "src": "25:59:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/Collateralizer.sol",
        "file": "./Collateralizer.sol",
        "id": 618,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 615,
        "src": "86:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtKernel.sol",
        "file": "./DebtKernel.sol",
        "id": 619,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 2982,
        "src": "117:26:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 620,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 3510,
        "src": "144:28:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtToken.sol",
        "file": "./DebtToken.sol",
        "id": 621,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 3892,
        "src": "173:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/RepaymentRouter.sol",
        "file": "./RepaymentRouter.sol",
        "id": 622,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4152,
        "src": "199:31:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenRegistry.sol",
        "file": "./TokenRegistry.sol",
        "id": 623,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4558,
        "src": "231:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
        "file": "./TokenTransferProxy.sol",
        "id": 624,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4651,
        "src": "261:34:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 625,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10273,
              "src": "327:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$10273",
                "typeString": "contract Ownable"
              }
            },
            "id": 626,
            "nodeType": "InheritanceSpecifier",
            "src": "327:7:1"
          }
        ],
        "contractDependencies": [
          10273
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 923,
        "linearizedBaseContracts": [
          923,
          10273
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 634,
            "name": "ContractAddressUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "indexed": true,
                  "name": "contractType",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "380:33:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_ContractType_$642",
                    "typeString": "enum ContractRegistry.ContractType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 627,
                    "name": "ContractType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 642,
                    "src": "380:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 630,
                  "indexed": true,
                  "name": "oldAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "423:26:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:1",
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
                  "id": 632,
                  "indexed": true,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "459:26:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:121:1"
            },
            "src": "342:150:1"
          },
          {
            "canonicalName": "ContractRegistry.ContractType",
            "id": 642,
            "members": [
              {
                "id": 635,
                "name": "Collateralizer",
                "nodeType": "EnumValue",
                "src": "526:14:1"
              },
              {
                "id": 636,
                "name": "DebtKernel",
                "nodeType": "EnumValue",
                "src": "550:10:1"
              },
              {
                "id": 637,
                "name": "DebtRegistry",
                "nodeType": "EnumValue",
                "src": "570:12:1"
              },
              {
                "id": 638,
                "name": "DebtToken",
                "nodeType": "EnumValue",
                "src": "592:9:1"
              },
              {
                "id": 639,
                "name": "RepaymentRouter",
                "nodeType": "EnumValue",
                "src": "611:15:1"
              },
              {
                "id": 640,
                "name": "TokenRegistry",
                "nodeType": "EnumValue",
                "src": "636:13:1"
              },
              {
                "id": 641,
                "name": "TokenTransferProxy",
                "nodeType": "EnumValue",
                "src": "659:18:1"
              }
            ],
            "name": "ContractType",
            "nodeType": "EnumDefinition",
            "src": "498:185:1"
          },
          {
            "constant": false,
            "id": 644,
            "name": "collateralizer",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "689:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Collateralizer_$614",
              "typeString": "contract Collateralizer"
            },
            "typeName": {
              "contractScope": null,
              "id": 643,
              "name": "Collateralizer",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 614,
              "src": "689:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Collateralizer_$614",
                "typeString": "contract Collateralizer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 646,
            "name": "debtKernel",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "731:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtKernel_$2981",
              "typeString": "contract DebtKernel"
            },
            "typeName": {
              "contractScope": null,
              "id": 645,
              "name": "DebtKernel",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2981,
              "src": "731:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                "typeString": "contract DebtKernel"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 648,
            "name": "debtRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "765:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 647,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "765:12:1",
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
            "id": 650,
            "name": "debtToken",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "804:26:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtToken_$3891",
              "typeString": "contract DebtToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 649,
              "name": "DebtToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3891,
              "src": "804:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtToken_$3891",
                "typeString": "contract DebtToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 652,
            "name": "repaymentRouter",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "836:38:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
              "typeString": "contract RepaymentRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 651,
              "name": "RepaymentRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4151,
              "src": "836:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                "typeString": "contract RepaymentRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 654,
            "name": "tokenRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "880:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenRegistry_$4557",
              "typeString": "contract TokenRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 653,
              "name": "TokenRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4557,
              "src": "880:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                "typeString": "contract TokenRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 656,
            "name": "tokenTransferProxy",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "920:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
              "typeString": "contract TokenTransferProxy"
            },
            "typeName": {
              "contractScope": null,
              "id": 655,
              "name": "TokenTransferProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4650,
              "src": "920:18:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                "typeString": "contract TokenTransferProxy"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 715,
              "nodeType": "Block",
              "src": "1246:392:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 673,
                      "name": "collateralizer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 644,
                      "src": "1256:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Collateralizer_$614",
                        "typeString": "contract Collateralizer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 675,
                          "name": "_collateralizer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 658,
                          "src": "1288:15:1",
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
                        "id": 674,
                        "name": "Collateralizer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 614,
                        "src": "1273:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Collateralizer_$614_$",
                          "typeString": "type(contract Collateralizer)"
                        }
                      },
                      "id": 676,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1273:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Collateralizer_$614",
                        "typeString": "contract Collateralizer"
                      }
                    },
                    "src": "1256:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Collateralizer_$614",
                      "typeString": "contract Collateralizer"
                    }
                  },
                  "id": 678,
                  "nodeType": "ExpressionStatement",
                  "src": "1256:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 683,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 679,
                      "name": "debtKernel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 646,
                      "src": "1314:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtKernel_$2981",
                        "typeString": "contract DebtKernel"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 681,
                          "name": "_debtKernel",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 660,
                          "src": "1338:11:1",
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
                        "id": 680,
                        "name": "DebtKernel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2981,
                        "src": "1327:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtKernel_$2981_$",
                          "typeString": "type(contract DebtKernel)"
                        }
                      },
                      "id": 682,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1327:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtKernel_$2981",
                        "typeString": "contract DebtKernel"
                      }
                    },
                    "src": "1314:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtKernel_$2981",
                      "typeString": "contract DebtKernel"
                    }
                  },
                  "id": 684,
                  "nodeType": "ExpressionStatement",
                  "src": "1314:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 685,
                      "name": "debtRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 648,
                      "src": "1360:12:1",
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
                          "id": 687,
                          "name": "_debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 662,
                          "src": "1388:13:1",
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
                        "id": 686,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "1375:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1375:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "1360:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 690,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:42:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 691,
                      "name": "debtToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 650,
                      "src": "1412:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                        "typeString": "contract DebtToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 693,
                          "name": "_debtToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 664,
                          "src": "1434:10:1",
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
                        "id": 692,
                        "name": "DebtToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3891,
                        "src": "1424:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtToken_$3891_$",
                          "typeString": "type(contract DebtToken)"
                        }
                      },
                      "id": 694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1424:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                        "typeString": "contract DebtToken"
                      }
                    },
                    "src": "1412:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtToken_$3891",
                      "typeString": "contract DebtToken"
                    }
                  },
                  "id": 696,
                  "nodeType": "ExpressionStatement",
                  "src": "1412:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 697,
                      "name": "repaymentRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 652,
                      "src": "1455:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                        "typeString": "contract RepaymentRouter"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 699,
                          "name": "_repaymentRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 666,
                          "src": "1489:16:1",
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
                        "id": 698,
                        "name": "RepaymentRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4151,
                        "src": "1473:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_RepaymentRouter_$4151_$",
                          "typeString": "type(contract RepaymentRouter)"
                        }
                      },
                      "id": 700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1473:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                        "typeString": "contract RepaymentRouter"
                      }
                    },
                    "src": "1455:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                      "typeString": "contract RepaymentRouter"
                    }
                  },
                  "id": 702,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 703,
                      "name": "tokenRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 654,
                      "src": "1516:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 705,
                          "name": "_tokenRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 668,
                          "src": "1546:14:1",
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
                        "id": 704,
                        "name": "TokenRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4557,
                        "src": "1532:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$4557_$",
                          "typeString": "type(contract TokenRegistry)"
                        }
                      },
                      "id": 706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1532:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "src": "1516:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                      "typeString": "contract TokenRegistry"
                    }
                  },
                  "id": 708,
                  "nodeType": "ExpressionStatement",
                  "src": "1516:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 709,
                      "name": "tokenTransferProxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 656,
                      "src": "1571:18:1",
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
                          "id": 711,
                          "name": "_tokenTransferProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 670,
                          "src": "1611:19:1",
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
                        "id": 710,
                        "name": "TokenTransferProxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4650,
                        "src": "1592:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                          "typeString": "type(contract TokenTransferProxy)"
                        }
                      },
                      "id": 712,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1592:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "src": "1571:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                      "typeString": "contract TokenTransferProxy"
                    }
                  },
                  "id": 714,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:60:1"
                }
              ]
            },
            "documentation": null,
            "id": 716,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ContractRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 658,
                  "name": "_collateralizer",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1006:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:1",
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
                  "id": 660,
                  "name": "_debtKernel",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1039:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1039:7:1",
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
                  "id": 662,
                  "name": "_debtRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1068:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1068:7:1",
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
                  "id": 664,
                  "name": "_debtToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1099:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1099:7:1",
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
                  "id": 666,
                  "name": "_repaymentRouter",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1127:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1127:7:1",
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
                  "id": 668,
                  "name": "_tokenRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1161:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1161:7:1",
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
                  "id": 670,
                  "name": "_tokenTransferProxy",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1193:27:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1193:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "996:230:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1246:0:1"
            },
            "scope": 923,
            "src": "971:667:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 899,
              "nodeType": "Block",
              "src": "1773:1724:1",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 726,
                      "name": "oldAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 900,
                      "src": "1783:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 725,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1783:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 727,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1783:18:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    },
                    "id": 731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 728,
                      "name": "contractType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 718,
                      "src": "1816:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 729,
                        "name": "ContractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 642,
                        "src": "1832:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                          "typeString": "type(enum ContractRegistry.ContractType)"
                        }
                      },
                      "id": 730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "Collateralizer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1832:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      }
                    },
                    "src": "1816:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      },
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 750,
                        "name": "contractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 718,
                        "src": "2045:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 751,
                          "name": "ContractType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 642,
                          "src": "2061:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                            "typeString": "type(enum ContractRegistry.ContractType)"
                          }
                        },
                        "id": 752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "DebtKernel",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2061:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      "src": "2045:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        },
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 772,
                          "name": "contractType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 718,
                          "src": "2258:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 773,
                            "name": "ContractType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 642,
                            "src": "2274:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                              "typeString": "type(enum ContractRegistry.ContractType)"
                            }
                          },
                          "id": 774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "DebtRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2274:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          }
                        },
                        "src": "2258:41:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          },
                          "id": 797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 794,
                            "name": "contractType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 718,
                            "src": "2479:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 795,
                              "name": "ContractType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 642,
                              "src": "2495:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                "typeString": "type(enum ContractRegistry.ContractType)"
                              }
                            },
                            "id": 796,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "DebtToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2495:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            }
                          },
                          "src": "2479:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            },
                            "id": 819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 816,
                              "name": "contractType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 718,
                              "src": "2688:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 817,
                                "name": "ContractType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 642,
                                "src": "2704:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                  "typeString": "type(enum ContractRegistry.ContractType)"
                                }
                              },
                              "id": 818,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "RepaymentRouter",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2704:28:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              }
                            },
                            "src": "2688:44:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              },
                              "id": 841,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 838,
                                "name": "contractType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 718,
                                "src": "2921:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 839,
                                  "name": "ContractType",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 642,
                                  "src": "2937:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                    "typeString": "type(enum ContractRegistry.ContractType)"
                                  }
                                },
                                "id": 840,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "TokenRegistry",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2937:26:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                }
                              },
                              "src": "2921:42:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                },
                                "id": 863,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 860,
                                  "name": "contractType",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 718,
                                  "src": "3146:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                    "typeString": "enum ContractRegistry.ContractType"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 861,
                                    "name": "ContractType",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 642,
                                    "src": "3162:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                      "typeString": "type(enum ContractRegistry.ContractType)"
                                    }
                                  },
                                  "id": 862,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "TokenTransferProxy",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3162:31:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                    "typeString": "enum ContractRegistry.ContractType"
                                  }
                                },
                                "src": "3146:47:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": {
                                "id": 885,
                                "nodeType": "Block",
                                "src": "3387:33:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [],
                                      "expression": {
                                        "argumentTypes": [],
                                        "id": 882,
                                        "name": "revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                          11963,
                                          11964
                                        ],
                                        "referencedDeclaration": 11963,
                                        "src": "3401:6:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                          "typeString": "function () pure"
                                        }
                                      },
                                      "id": 883,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3401:8:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 884,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3401:8:1"
                                  }
                                ]
                              },
                              "id": 886,
                              "nodeType": "IfStatement",
                              "src": "3142:278:1",
                              "trueBody": {
                                "id": 881,
                                "nodeType": "Block",
                                "src": "3195:186:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 868,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 864,
                                        "name": "oldAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 726,
                                        "src": "3209:10:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 866,
                                            "name": "tokenTransferProxy",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 656,
                                            "src": "3230:18:1",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                              "typeString": "contract TokenTransferProxy"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                              "typeString": "contract TokenTransferProxy"
                                            }
                                          ],
                                          "id": 865,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "3222:7:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                          },
                                          "typeName": "address"
                                        },
                                        "id": 867,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3222:27:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "3209:40:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "id": 869,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3209:40:1"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 871,
                                          "name": "newAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 720,
                                          "src": "3282:10:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "argumentTypes": null,
                                          "id": 872,
                                          "name": "oldAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 726,
                                          "src": "3294:10:1",
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
                                          },
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "id": 870,
                                        "name": "validateNewAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 922,
                                        "src": "3263:18:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                          "typeString": "function (address,address) pure"
                                        }
                                      },
                                      "id": 873,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3263:42:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 874,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3263:42:1"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 879,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 875,
                                        "name": "tokenTransferProxy",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 656,
                                        "src": "3319:18:1",
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
                                            "id": 877,
                                            "name": "newAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 720,
                                            "src": "3359:10:1",
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
                                          "id": 876,
                                          "name": "TokenTransferProxy",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4650,
                                          "src": "3340:18:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                                            "typeString": "type(contract TokenTransferProxy)"
                                          }
                                        },
                                        "id": 878,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3340:30:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                          "typeString": "contract TokenTransferProxy"
                                        }
                                      },
                                      "src": "3319:51:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                        "typeString": "contract TokenTransferProxy"
                                      }
                                    },
                                    "id": 880,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3319:51:1"
                                  }
                                ]
                              }
                            },
                            "id": 887,
                            "nodeType": "IfStatement",
                            "src": "2917:503:1",
                            "trueBody": {
                              "id": 859,
                              "nodeType": "Block",
                              "src": "2965:171:1",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 846,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "argumentTypes": null,
                                      "id": 842,
                                      "name": "oldAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 726,
                                      "src": "2979:10:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 844,
                                          "name": "tokenRegistry",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 654,
                                          "src": "3000:13:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                            "typeString": "contract TokenRegistry"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                            "typeString": "contract TokenRegistry"
                                          }
                                        ],
                                        "id": 843,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2992:7:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 845,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2992:22:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "src": "2979:35:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 847,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2979:35:1"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 849,
                                        "name": "newAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 720,
                                        "src": "3047:10:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "id": 850,
                                        "name": "oldAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 726,
                                        "src": "3059:10:1",
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
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "id": 848,
                                      "name": "validateNewAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 922,
                                      "src": "3028:18:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                        "typeString": "function (address,address) pure"
                                      }
                                    },
                                    "id": 851,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3028:42:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 852,
                                  "nodeType": "ExpressionStatement",
                                  "src": "3028:42:1"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 857,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "argumentTypes": null,
                                      "id": 853,
                                      "name": "tokenRegistry",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 654,
                                      "src": "3084:13:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                        "typeString": "contract TokenRegistry"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 855,
                                          "name": "newAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 720,
                                          "src": "3114:10:1",
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
                                        "id": 854,
                                        "name": "TokenRegistry",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4557,
                                        "src": "3100:13:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$4557_$",
                                          "typeString": "type(contract TokenRegistry)"
                                        }
                                      },
                                      "id": 856,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3100:25:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                        "typeString": "contract TokenRegistry"
                                      }
                                    },
                                    "src": "3084:41:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                      "typeString": "contract TokenRegistry"
                                    }
                                  },
                                  "id": 858,
                                  "nodeType": "ExpressionStatement",
                                  "src": "3084:41:1"
                                }
                              ]
                            }
                          },
                          "id": 888,
                          "nodeType": "IfStatement",
                          "src": "2684:736:1",
                          "trueBody": {
                            "id": 837,
                            "nodeType": "Block",
                            "src": "2734:177:1",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 824,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 820,
                                    "name": "oldAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 726,
                                    "src": "2748:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 822,
                                        "name": "repaymentRouter",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 652,
                                        "src": "2769:15:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                          "typeString": "contract RepaymentRouter"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                          "typeString": "contract RepaymentRouter"
                                        }
                                      ],
                                      "id": 821,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2761:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": "address"
                                    },
                                    "id": 823,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2761:24:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "2748:37:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 825,
                                "nodeType": "ExpressionStatement",
                                "src": "2748:37:1"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 827,
                                      "name": "newAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 720,
                                      "src": "2818:10:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 828,
                                      "name": "oldAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 726,
                                      "src": "2830:10:1",
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
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 826,
                                    "name": "validateNewAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 922,
                                    "src": "2799:18:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                      "typeString": "function (address,address) pure"
                                    }
                                  },
                                  "id": 829,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2799:42:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 830,
                                "nodeType": "ExpressionStatement",
                                "src": "2799:42:1"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 835,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 831,
                                    "name": "repaymentRouter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 652,
                                    "src": "2855:15:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                      "typeString": "contract RepaymentRouter"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 833,
                                        "name": "newAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 720,
                                        "src": "2889:10:1",
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
                                      "id": 832,
                                      "name": "RepaymentRouter",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4151,
                                      "src": "2873:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_RepaymentRouter_$4151_$",
                                        "typeString": "type(contract RepaymentRouter)"
                                      }
                                    },
                                    "id": 834,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2873:27:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                      "typeString": "contract RepaymentRouter"
                                    }
                                  },
                                  "src": "2855:45:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                    "typeString": "contract RepaymentRouter"
                                  }
                                },
                                "id": 836,
                                "nodeType": "ExpressionStatement",
                                "src": "2855:45:1"
                              }
                            ]
                          }
                        },
                        "id": 889,
                        "nodeType": "IfStatement",
                        "src": "2475:945:1",
                        "trueBody": {
                          "id": 815,
                          "nodeType": "Block",
                          "src": "2519:159:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 802,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 798,
                                  "name": "oldAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 726,
                                  "src": "2533:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 800,
                                      "name": "debtToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 650,
                                      "src": "2554:9:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                                        "typeString": "contract DebtToken"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                                        "typeString": "contract DebtToken"
                                      }
                                    ],
                                    "id": 799,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2546:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": "address"
                                  },
                                  "id": 801,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2546:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "2533:31:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 803,
                              "nodeType": "ExpressionStatement",
                              "src": "2533:31:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 805,
                                    "name": "newAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 720,
                                    "src": "2597:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 806,
                                    "name": "oldAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 726,
                                    "src": "2609:10:1",
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
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 804,
                                  "name": "validateNewAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 922,
                                  "src": "2578:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                    "typeString": "function (address,address) pure"
                                  }
                                },
                                "id": 807,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2578:42:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 808,
                              "nodeType": "ExpressionStatement",
                              "src": "2578:42:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 813,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 809,
                                  "name": "debtToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 650,
                                  "src": "2634:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtToken_$3891",
                                    "typeString": "contract DebtToken"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 811,
                                      "name": "newAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 720,
                                      "src": "2656:10:1",
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
                                    "id": 810,
                                    "name": "DebtToken",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3891,
                                    "src": "2646:9:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_DebtToken_$3891_$",
                                      "typeString": "type(contract DebtToken)"
                                    }
                                  },
                                  "id": 812,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2646:21:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtToken_$3891",
                                    "typeString": "contract DebtToken"
                                  }
                                },
                                "src": "2634:33:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DebtToken_$3891",
                                  "typeString": "contract DebtToken"
                                }
                              },
                              "id": 814,
                              "nodeType": "ExpressionStatement",
                              "src": "2634:33:1"
                            }
                          ]
                        }
                      },
                      "id": 890,
                      "nodeType": "IfStatement",
                      "src": "2254:1166:1",
                      "trueBody": {
                        "id": 793,
                        "nodeType": "Block",
                        "src": "2301:168:1",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 780,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "id": 776,
                                "name": "oldAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 726,
                                "src": "2315:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 778,
                                    "name": "debtRegistry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 648,
                                    "src": "2336:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                      "typeString": "contract DebtRegistry"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                      "typeString": "contract DebtRegistry"
                                    }
                                  ],
                                  "id": 777,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2328:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 779,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2328:21:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "2315:34:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 781,
                            "nodeType": "ExpressionStatement",
                            "src": "2315:34:1"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 783,
                                  "name": "newAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 720,
                                  "src": "2382:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 784,
                                  "name": "oldAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 726,
                                  "src": "2394:10:1",
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
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 782,
                                "name": "validateNewAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 922,
                                "src": "2363:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                  "typeString": "function (address,address) pure"
                                }
                              },
                              "id": 785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2363:42:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 786,
                            "nodeType": "ExpressionStatement",
                            "src": "2363:42:1"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 791,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "id": 787,
                                "name": "debtRegistry",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 648,
                                "src": "2419:12:1",
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
                                    "id": 789,
                                    "name": "newAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 720,
                                    "src": "2447:10:1",
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
                                  "id": 788,
                                  "name": "DebtRegistry",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3509,
                                  "src": "2434:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                                    "typeString": "type(contract DebtRegistry)"
                                  }
                                },
                                "id": 790,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2434:24:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                  "typeString": "contract DebtRegistry"
                                }
                              },
                              "src": "2419:39:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                "typeString": "contract DebtRegistry"
                              }
                            },
                            "id": 792,
                            "nodeType": "ExpressionStatement",
                            "src": "2419:39:1"
                          }
                        ]
                      }
                    },
                    "id": 891,
                    "nodeType": "IfStatement",
                    "src": "2041:1379:1",
                    "trueBody": {
                      "id": 771,
                      "nodeType": "Block",
                      "src": "2086:162:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 754,
                              "name": "oldAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 726,
                              "src": "2100:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 756,
                                  "name": "debtKernel",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 646,
                                  "src": "2121:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                    "typeString": "contract DebtKernel"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                    "typeString": "contract DebtKernel"
                                  }
                                ],
                                "id": 755,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2113:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 757,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2113:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2100:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 759,
                          "nodeType": "ExpressionStatement",
                          "src": "2100:32:1"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 761,
                                "name": "newAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 720,
                                "src": "2165:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 762,
                                "name": "oldAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 726,
                                "src": "2177:10:1",
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
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 760,
                              "name": "validateNewAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 922,
                              "src": "2146:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                "typeString": "function (address,address) pure"
                              }
                            },
                            "id": 763,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2146:42:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 764,
                          "nodeType": "ExpressionStatement",
                          "src": "2146:42:1"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 765,
                              "name": "debtKernel",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 646,
                              "src": "2202:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                "typeString": "contract DebtKernel"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 767,
                                  "name": "newAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 720,
                                  "src": "2226:10:1",
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
                                "id": 766,
                                "name": "DebtKernel",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2981,
                                "src": "2215:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_DebtKernel_$2981_$",
                                  "typeString": "type(contract DebtKernel)"
                                }
                              },
                              "id": 768,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2215:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                "typeString": "contract DebtKernel"
                              }
                            },
                            "src": "2202:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DebtKernel_$2981",
                              "typeString": "contract DebtKernel"
                            }
                          },
                          "id": 770,
                          "nodeType": "ExpressionStatement",
                          "src": "2202:35:1"
                        }
                      ]
                    }
                  },
                  "id": 892,
                  "nodeType": "IfStatement",
                  "src": "1812:1608:1",
                  "trueBody": {
                    "id": 749,
                    "nodeType": "Block",
                    "src": "1861:174:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 736,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 732,
                            "name": "oldAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 726,
                            "src": "1875:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 734,
                                "name": "collateralizer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 644,
                                "src": "1896:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Collateralizer_$614",
                                  "typeString": "contract Collateralizer"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Collateralizer_$614",
                                  "typeString": "contract Collateralizer"
                                }
                              ],
                              "id": 733,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1888:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 735,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1888:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1875:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 737,
                        "nodeType": "ExpressionStatement",
                        "src": "1875:36:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 739,
                              "name": "newAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 720,
                              "src": "1944:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 740,
                              "name": "oldAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 726,
                              "src": "1956:10:1",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 738,
                            "name": "validateNewAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "1925:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address) pure"
                            }
                          },
                          "id": 741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1925:42:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 742,
                        "nodeType": "ExpressionStatement",
                        "src": "1925:42:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 747,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "collateralizer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 644,
                            "src": "1981:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Collateralizer_$614",
                              "typeString": "contract Collateralizer"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 745,
                                "name": "newAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 720,
                                "src": "2013:10:1",
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
                              "id": 744,
                              "name": "Collateralizer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 614,
                              "src": "1998:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Collateralizer_$614_$",
                                "typeString": "type(contract Collateralizer)"
                              }
                            },
                            "id": 746,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1998:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Collateralizer_$614",
                              "typeString": "contract Collateralizer"
                            }
                          },
                          "src": "1981:43:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Collateralizer_$614",
                            "typeString": "contract Collateralizer"
                          }
                        },
                        "id": 748,
                        "nodeType": "ExpressionStatement",
                        "src": "1981:43:1"
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
                        "id": 894,
                        "name": "contractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 718,
                        "src": "3453:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 895,
                        "name": "oldAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "3467:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 896,
                        "name": "newAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 720,
                        "src": "3479:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 893,
                      "name": "ContractAddressUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 634,
                      "src": "3430:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_enum$_ContractType_$642_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (enum ContractRegistry.ContractType,address,address)"
                      }
                    },
                    "id": 897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3430:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 898,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:60:1"
                }
              ]
            },
            "documentation": null,
            "id": 900,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 723,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 722,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "1759:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1759:9:1"
              }
            ],
            "name": "updateAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "contractType",
                  "nodeType": "VariableDeclaration",
                  "scope": 900,
                  "src": "1676:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_ContractType_$642",
                    "typeString": "enum ContractRegistry.ContractType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 717,
                    "name": "ContractType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 642,
                    "src": "1676:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 720,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 900,
                  "src": "1711:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1711:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1666:69:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1773:0:1"
            },
            "scope": 923,
            "src": "1644:1853:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 921,
              "nodeType": "Block",
              "src": "3627:175:1",
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
                        "id": 912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 908,
                          "name": "newAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 902,
                          "src": "3645:10:1",
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
                              "id": 910,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3667:1:1",
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
                            "id": 909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3659:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 911,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3659:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3645:24:1",
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
                      "id": 907,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "3637:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3637:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 914,
                  "nodeType": "ExpressionStatement",
                  "src": "3637:33:1"
                },
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
                        "id": 918,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 916,
                          "name": "newAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 902,
                          "src": "3727:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 917,
                          "name": "oldAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 904,
                          "src": "3741:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3727:24:1",
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
                      "id": 915,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "3719:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 919,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3719:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 920,
                  "nodeType": "ExpressionStatement",
                  "src": "3719:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 922,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "validateNewAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 902,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 922,
                  "src": "3540:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3540:7:1",
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
                  "id": 904,
                  "name": "oldAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 922,
                  "src": "3568:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3568:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3530:62:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3627:0:1"
            },
            "scope": 923,
            "src": "3503:299:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 924,
        "src": "298:3506:1"
      }
    ],
    "src": "0:3805:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/ContractRegistry.sol",
    "exportedSymbols": {
      "ContractRegistry": [
        923
      ]
    },
    "id": 924,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 616,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 617,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 10274,
        "src": "25:59:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/Collateralizer.sol",
        "file": "./Collateralizer.sol",
        "id": 618,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 615,
        "src": "86:30:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtKernel.sol",
        "file": "./DebtKernel.sol",
        "id": 619,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 2982,
        "src": "117:26:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtRegistry.sol",
        "file": "./DebtRegistry.sol",
        "id": 620,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 3510,
        "src": "144:28:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/DebtToken.sol",
        "file": "./DebtToken.sol",
        "id": 621,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 3892,
        "src": "173:25:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/RepaymentRouter.sol",
        "file": "./RepaymentRouter.sol",
        "id": 622,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4152,
        "src": "199:31:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenRegistry.sol",
        "file": "./TokenRegistry.sol",
        "id": 623,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4558,
        "src": "231:29:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/lixianji/coding/chainboard/contract/contracts/TokenTransferProxy.sol",
        "file": "./TokenTransferProxy.sol",
        "id": 624,
        "nodeType": "ImportDirective",
        "scope": 924,
        "sourceUnit": 4651,
        "src": "261:34:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 625,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 10273,
              "src": "327:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$10273",
                "typeString": "contract Ownable"
              }
            },
            "id": 626,
            "nodeType": "InheritanceSpecifier",
            "src": "327:7:1"
          }
        ],
        "contractDependencies": [
          10273
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 923,
        "linearizedBaseContracts": [
          923,
          10273
        ],
        "name": "ContractRegistry",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "anonymous": false,
            "documentation": null,
            "id": 634,
            "name": "ContractAddressUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "indexed": true,
                  "name": "contractType",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "380:33:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_ContractType_$642",
                    "typeString": "enum ContractRegistry.ContractType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 627,
                    "name": "ContractType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 642,
                    "src": "380:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 630,
                  "indexed": true,
                  "name": "oldAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "423:26:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 629,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "423:7:1",
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
                  "id": 632,
                  "indexed": true,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 634,
                  "src": "459:26:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "459:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "370:121:1"
            },
            "src": "342:150:1"
          },
          {
            "canonicalName": "ContractRegistry.ContractType",
            "id": 642,
            "members": [
              {
                "id": 635,
                "name": "Collateralizer",
                "nodeType": "EnumValue",
                "src": "526:14:1"
              },
              {
                "id": 636,
                "name": "DebtKernel",
                "nodeType": "EnumValue",
                "src": "550:10:1"
              },
              {
                "id": 637,
                "name": "DebtRegistry",
                "nodeType": "EnumValue",
                "src": "570:12:1"
              },
              {
                "id": 638,
                "name": "DebtToken",
                "nodeType": "EnumValue",
                "src": "592:9:1"
              },
              {
                "id": 639,
                "name": "RepaymentRouter",
                "nodeType": "EnumValue",
                "src": "611:15:1"
              },
              {
                "id": 640,
                "name": "TokenRegistry",
                "nodeType": "EnumValue",
                "src": "636:13:1"
              },
              {
                "id": 641,
                "name": "TokenTransferProxy",
                "nodeType": "EnumValue",
                "src": "659:18:1"
              }
            ],
            "name": "ContractType",
            "nodeType": "EnumDefinition",
            "src": "498:185:1"
          },
          {
            "constant": false,
            "id": 644,
            "name": "collateralizer",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "689:36:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_Collateralizer_$614",
              "typeString": "contract Collateralizer"
            },
            "typeName": {
              "contractScope": null,
              "id": 643,
              "name": "Collateralizer",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 614,
              "src": "689:14:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Collateralizer_$614",
                "typeString": "contract Collateralizer"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 646,
            "name": "debtKernel",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "731:28:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtKernel_$2981",
              "typeString": "contract DebtKernel"
            },
            "typeName": {
              "contractScope": null,
              "id": 645,
              "name": "DebtKernel",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 2981,
              "src": "731:10:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                "typeString": "contract DebtKernel"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 648,
            "name": "debtRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "765:33:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtRegistry_$3509",
              "typeString": "contract DebtRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 647,
              "name": "DebtRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3509,
              "src": "765:12:1",
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
            "id": 650,
            "name": "debtToken",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "804:26:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_DebtToken_$3891",
              "typeString": "contract DebtToken"
            },
            "typeName": {
              "contractScope": null,
              "id": 649,
              "name": "DebtToken",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 3891,
              "src": "804:9:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_DebtToken_$3891",
                "typeString": "contract DebtToken"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 652,
            "name": "repaymentRouter",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "836:38:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
              "typeString": "contract RepaymentRouter"
            },
            "typeName": {
              "contractScope": null,
              "id": 651,
              "name": "RepaymentRouter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4151,
              "src": "836:15:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                "typeString": "contract RepaymentRouter"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 654,
            "name": "tokenRegistry",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "880:34:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenRegistry_$4557",
              "typeString": "contract TokenRegistry"
            },
            "typeName": {
              "contractScope": null,
              "id": 653,
              "name": "TokenRegistry",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4557,
              "src": "880:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                "typeString": "contract TokenRegistry"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 656,
            "name": "tokenTransferProxy",
            "nodeType": "VariableDeclaration",
            "scope": 923,
            "src": "920:44:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
              "typeString": "contract TokenTransferProxy"
            },
            "typeName": {
              "contractScope": null,
              "id": 655,
              "name": "TokenTransferProxy",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4650,
              "src": "920:18:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                "typeString": "contract TokenTransferProxy"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 715,
              "nodeType": "Block",
              "src": "1246:392:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 673,
                      "name": "collateralizer",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 644,
                      "src": "1256:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Collateralizer_$614",
                        "typeString": "contract Collateralizer"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 675,
                          "name": "_collateralizer",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 658,
                          "src": "1288:15:1",
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
                        "id": 674,
                        "name": "Collateralizer",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 614,
                        "src": "1273:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_Collateralizer_$614_$",
                          "typeString": "type(contract Collateralizer)"
                        }
                      },
                      "id": 676,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1273:31:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_Collateralizer_$614",
                        "typeString": "contract Collateralizer"
                      }
                    },
                    "src": "1256:48:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_Collateralizer_$614",
                      "typeString": "contract Collateralizer"
                    }
                  },
                  "id": 678,
                  "nodeType": "ExpressionStatement",
                  "src": "1256:48:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 683,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 679,
                      "name": "debtKernel",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 646,
                      "src": "1314:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtKernel_$2981",
                        "typeString": "contract DebtKernel"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 681,
                          "name": "_debtKernel",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 660,
                          "src": "1338:11:1",
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
                        "id": 680,
                        "name": "DebtKernel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2981,
                        "src": "1327:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtKernel_$2981_$",
                          "typeString": "type(contract DebtKernel)"
                        }
                      },
                      "id": 682,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1327:23:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtKernel_$2981",
                        "typeString": "contract DebtKernel"
                      }
                    },
                    "src": "1314:36:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtKernel_$2981",
                      "typeString": "contract DebtKernel"
                    }
                  },
                  "id": 684,
                  "nodeType": "ExpressionStatement",
                  "src": "1314:36:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 689,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 685,
                      "name": "debtRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 648,
                      "src": "1360:12:1",
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
                          "id": 687,
                          "name": "_debtRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 662,
                          "src": "1388:13:1",
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
                        "id": 686,
                        "name": "DebtRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3509,
                        "src": "1375:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                          "typeString": "type(contract DebtRegistry)"
                        }
                      },
                      "id": 688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1375:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                        "typeString": "contract DebtRegistry"
                      }
                    },
                    "src": "1360:42:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                      "typeString": "contract DebtRegistry"
                    }
                  },
                  "id": 690,
                  "nodeType": "ExpressionStatement",
                  "src": "1360:42:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 695,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 691,
                      "name": "debtToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 650,
                      "src": "1412:9:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                        "typeString": "contract DebtToken"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 693,
                          "name": "_debtToken",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 664,
                          "src": "1434:10:1",
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
                        "id": 692,
                        "name": "DebtToken",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 3891,
                        "src": "1424:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_DebtToken_$3891_$",
                          "typeString": "type(contract DebtToken)"
                        }
                      },
                      "id": 694,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1424:21:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                        "typeString": "contract DebtToken"
                      }
                    },
                    "src": "1412:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_DebtToken_$3891",
                      "typeString": "contract DebtToken"
                    }
                  },
                  "id": 696,
                  "nodeType": "ExpressionStatement",
                  "src": "1412:33:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 697,
                      "name": "repaymentRouter",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 652,
                      "src": "1455:15:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                        "typeString": "contract RepaymentRouter"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 699,
                          "name": "_repaymentRouter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 666,
                          "src": "1489:16:1",
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
                        "id": 698,
                        "name": "RepaymentRouter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4151,
                        "src": "1473:15:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_RepaymentRouter_$4151_$",
                          "typeString": "type(contract RepaymentRouter)"
                        }
                      },
                      "id": 700,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1473:33:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                        "typeString": "contract RepaymentRouter"
                      }
                    },
                    "src": "1455:51:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                      "typeString": "contract RepaymentRouter"
                    }
                  },
                  "id": 702,
                  "nodeType": "ExpressionStatement",
                  "src": "1455:51:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 707,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 703,
                      "name": "tokenRegistry",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 654,
                      "src": "1516:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 705,
                          "name": "_tokenRegistry",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 668,
                          "src": "1546:14:1",
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
                        "id": 704,
                        "name": "TokenRegistry",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4557,
                        "src": "1532:13:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$4557_$",
                          "typeString": "type(contract TokenRegistry)"
                        }
                      },
                      "id": 706,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1532:29:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                        "typeString": "contract TokenRegistry"
                      }
                    },
                    "src": "1516:45:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                      "typeString": "contract TokenRegistry"
                    }
                  },
                  "id": 708,
                  "nodeType": "ExpressionStatement",
                  "src": "1516:45:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 713,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 709,
                      "name": "tokenTransferProxy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 656,
                      "src": "1571:18:1",
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
                          "id": 711,
                          "name": "_tokenTransferProxy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 670,
                          "src": "1611:19:1",
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
                        "id": 710,
                        "name": "TokenTransferProxy",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4650,
                        "src": "1592:18:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                          "typeString": "type(contract TokenTransferProxy)"
                        }
                      },
                      "id": 712,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "1592:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                        "typeString": "contract TokenTransferProxy"
                      }
                    },
                    "src": "1571:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                      "typeString": "contract TokenTransferProxy"
                    }
                  },
                  "id": 714,
                  "nodeType": "ExpressionStatement",
                  "src": "1571:60:1"
                }
              ]
            },
            "documentation": null,
            "id": 716,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "ContractRegistry",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 671,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 658,
                  "name": "_collateralizer",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1006:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 657,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1006:7:1",
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
                  "id": 660,
                  "name": "_debtKernel",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1039:19:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 659,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1039:7:1",
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
                  "id": 662,
                  "name": "_debtRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1068:21:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1068:7:1",
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
                  "id": 664,
                  "name": "_debtToken",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1099:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 663,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1099:7:1",
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
                  "id": 666,
                  "name": "_repaymentRouter",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1127:24:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1127:7:1",
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
                  "id": 668,
                  "name": "_tokenRegistry",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1161:22:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1161:7:1",
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
                  "id": 670,
                  "name": "_tokenTransferProxy",
                  "nodeType": "VariableDeclaration",
                  "scope": 716,
                  "src": "1193:27:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 669,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1193:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "996:230:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 672,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1246:0:1"
            },
            "scope": 923,
            "src": "971:667:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 899,
              "nodeType": "Block",
              "src": "1773:1724:1",
              "statements": [
                {
                  "assignments": [],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 726,
                      "name": "oldAddress",
                      "nodeType": "VariableDeclaration",
                      "scope": 900,
                      "src": "1783:18:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      },
                      "typeName": {
                        "id": 725,
                        "name": "address",
                        "nodeType": "ElementaryTypeName",
                        "src": "1783:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 727,
                  "initialValue": null,
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1783:18:1"
                },
                {
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    },
                    "id": 731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 728,
                      "name": "contractType",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 718,
                      "src": "1816:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 729,
                        "name": "ContractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 642,
                        "src": "1832:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                          "typeString": "type(enum ContractRegistry.ContractType)"
                        }
                      },
                      "id": 730,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "memberName": "Collateralizer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1832:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      }
                    },
                    "src": "1816:43:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "falseBody": {
                    "condition": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_enum$_ContractType_$642",
                        "typeString": "enum ContractRegistry.ContractType"
                      },
                      "id": 753,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 750,
                        "name": "contractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 718,
                        "src": "2045:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "==",
                      "rightExpression": {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 751,
                          "name": "ContractType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 642,
                          "src": "2061:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                            "typeString": "type(enum ContractRegistry.ContractType)"
                          }
                        },
                        "id": 752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "memberName": "DebtKernel",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "2061:23:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      "src": "2045:39:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "falseBody": {
                      "condition": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        },
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 772,
                          "name": "contractType",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 718,
                          "src": "2258:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 773,
                            "name": "ContractType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 642,
                            "src": "2274:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                              "typeString": "type(enum ContractRegistry.ContractType)"
                            }
                          },
                          "id": 774,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "memberName": "DebtRegistry",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2274:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          }
                        },
                        "src": "2258:41:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "falseBody": {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_ContractType_$642",
                            "typeString": "enum ContractRegistry.ContractType"
                          },
                          "id": 797,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 794,
                            "name": "contractType",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 718,
                            "src": "2479:12:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 795,
                              "name": "ContractType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 642,
                              "src": "2495:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                "typeString": "type(enum ContractRegistry.ContractType)"
                              }
                            },
                            "id": 796,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "memberName": "DebtToken",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2495:22:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            }
                          },
                          "src": "2479:38:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": {
                          "condition": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_enum$_ContractType_$642",
                              "typeString": "enum ContractRegistry.ContractType"
                            },
                            "id": 819,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 816,
                              "name": "contractType",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 718,
                              "src": "2688:12:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 817,
                                "name": "ContractType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 642,
                                "src": "2704:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                  "typeString": "type(enum ContractRegistry.ContractType)"
                                }
                              },
                              "id": 818,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "RepaymentRouter",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2704:28:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              }
                            },
                            "src": "2688:44:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "falseBody": {
                            "condition": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_ContractType_$642",
                                "typeString": "enum ContractRegistry.ContractType"
                              },
                              "id": 841,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 838,
                                "name": "contractType",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 718,
                                "src": "2921:12:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "==",
                              "rightExpression": {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 839,
                                  "name": "ContractType",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 642,
                                  "src": "2937:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                    "typeString": "type(enum ContractRegistry.ContractType)"
                                  }
                                },
                                "id": 840,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "memberName": "TokenRegistry",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2937:26:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                }
                              },
                              "src": "2921:42:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "falseBody": {
                              "condition": {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_enum$_ContractType_$642",
                                  "typeString": "enum ContractRegistry.ContractType"
                                },
                                "id": 863,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 860,
                                  "name": "contractType",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 718,
                                  "src": "3146:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                    "typeString": "enum ContractRegistry.ContractType"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "==",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 861,
                                    "name": "ContractType",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 642,
                                    "src": "3162:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_enum$_ContractType_$642_$",
                                      "typeString": "type(enum ContractRegistry.ContractType)"
                                    }
                                  },
                                  "id": 862,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "memberName": "TokenTransferProxy",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "3162:31:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_enum$_ContractType_$642",
                                    "typeString": "enum ContractRegistry.ContractType"
                                  }
                                },
                                "src": "3146:47:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              },
                              "falseBody": {
                                "id": 885,
                                "nodeType": "Block",
                                "src": "3387:33:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [],
                                      "expression": {
                                        "argumentTypes": [],
                                        "id": 882,
                                        "name": "revert",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [
                                          11963,
                                          11964
                                        ],
                                        "referencedDeclaration": 11963,
                                        "src": "3401:6:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                                          "typeString": "function () pure"
                                        }
                                      },
                                      "id": 883,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3401:8:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 884,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3401:8:1"
                                  }
                                ]
                              },
                              "id": 886,
                              "nodeType": "IfStatement",
                              "src": "3142:278:1",
                              "trueBody": {
                                "id": 881,
                                "nodeType": "Block",
                                "src": "3195:186:1",
                                "statements": [
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 868,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 864,
                                        "name": "oldAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 726,
                                        "src": "3209:10:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "nodeType": "Assignment",
                                      "operator": "=",
                                      "rightHandSide": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 866,
                                            "name": "tokenTransferProxy",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 656,
                                            "src": "3230:18:1",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                              "typeString": "contract TokenTransferProxy"
                                            }
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                              "typeString": "contract TokenTransferProxy"
                                            }
                                          ],
                                          "id": 865,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "nodeType": "ElementaryTypeNameExpression",
                                          "src": "3222:7:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_address_$",
                                            "typeString": "type(address)"
                                          },
                                          "typeName": "address"
                                        },
                                        "id": 867,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3222:27:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      "src": "3209:40:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "id": 869,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3209:40:1"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 871,
                                          "name": "newAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 720,
                                          "src": "3282:10:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        },
                                        {
                                          "argumentTypes": null,
                                          "id": 872,
                                          "name": "oldAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 726,
                                          "src": "3294:10:1",
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
                                          },
                                          {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                          }
                                        ],
                                        "id": 870,
                                        "name": "validateNewAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 922,
                                        "src": "3263:18:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                          "typeString": "function (address,address) pure"
                                        }
                                      },
                                      "id": 873,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "functionCall",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3263:42:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_tuple$__$",
                                        "typeString": "tuple()"
                                      }
                                    },
                                    "id": 874,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3263:42:1"
                                  },
                                  {
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 879,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftHandSide": {
                                        "argumentTypes": null,
                                        "id": 875,
                                        "name": "tokenTransferProxy",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 656,
                                        "src": "3319:18:1",
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
                                            "id": 877,
                                            "name": "newAddress",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 720,
                                            "src": "3359:10:1",
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
                                          "id": 876,
                                          "name": "TokenTransferProxy",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 4650,
                                          "src": "3340:18:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_type$_t_contract$_TokenTransferProxy_$4650_$",
                                            "typeString": "type(contract TokenTransferProxy)"
                                          }
                                        },
                                        "id": 878,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "typeConversion",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3340:30:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                          "typeString": "contract TokenTransferProxy"
                                        }
                                      },
                                      "src": "3319:51:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenTransferProxy_$4650",
                                        "typeString": "contract TokenTransferProxy"
                                      }
                                    },
                                    "id": 880,
                                    "nodeType": "ExpressionStatement",
                                    "src": "3319:51:1"
                                  }
                                ]
                              }
                            },
                            "id": 887,
                            "nodeType": "IfStatement",
                            "src": "2917:503:1",
                            "trueBody": {
                              "id": 859,
                              "nodeType": "Block",
                              "src": "2965:171:1",
                              "statements": [
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 846,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "argumentTypes": null,
                                      "id": 842,
                                      "name": "oldAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 726,
                                      "src": "2979:10:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 844,
                                          "name": "tokenRegistry",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 654,
                                          "src": "3000:13:1",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                            "typeString": "contract TokenRegistry"
                                          }
                                        }
                                      ],
                                      "expression": {
                                        "argumentTypes": [
                                          {
                                            "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                            "typeString": "contract TokenRegistry"
                                          }
                                        ],
                                        "id": 843,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "lValueRequested": false,
                                        "nodeType": "ElementaryTypeNameExpression",
                                        "src": "2992:7:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_address_$",
                                          "typeString": "type(address)"
                                        },
                                        "typeName": "address"
                                      },
                                      "id": 845,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "2992:22:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    "src": "2979:35:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "id": 847,
                                  "nodeType": "ExpressionStatement",
                                  "src": "2979:35:1"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 849,
                                        "name": "newAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 720,
                                        "src": "3047:10:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      },
                                      {
                                        "argumentTypes": null,
                                        "id": 850,
                                        "name": "oldAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 726,
                                        "src": "3059:10:1",
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
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "id": 848,
                                      "name": "validateNewAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 922,
                                      "src": "3028:18:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                        "typeString": "function (address,address) pure"
                                      }
                                    },
                                    "id": 851,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "functionCall",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "3028:42:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_tuple$__$",
                                      "typeString": "tuple()"
                                    }
                                  },
                                  "id": 852,
                                  "nodeType": "ExpressionStatement",
                                  "src": "3028:42:1"
                                },
                                {
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 857,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftHandSide": {
                                      "argumentTypes": null,
                                      "id": 853,
                                      "name": "tokenRegistry",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 654,
                                      "src": "3084:13:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                        "typeString": "contract TokenRegistry"
                                      }
                                    },
                                    "nodeType": "Assignment",
                                    "operator": "=",
                                    "rightHandSide": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        {
                                          "argumentTypes": null,
                                          "id": 855,
                                          "name": "newAddress",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 720,
                                          "src": "3114:10:1",
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
                                        "id": 854,
                                        "name": "TokenRegistry",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 4557,
                                        "src": "3100:13:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_type$_t_contract$_TokenRegistry_$4557_$",
                                          "typeString": "type(contract TokenRegistry)"
                                        }
                                      },
                                      "id": 856,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "kind": "typeConversion",
                                      "lValueRequested": false,
                                      "names": [],
                                      "nodeType": "FunctionCall",
                                      "src": "3100:25:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                        "typeString": "contract TokenRegistry"
                                      }
                                    },
                                    "src": "3084:41:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_TokenRegistry_$4557",
                                      "typeString": "contract TokenRegistry"
                                    }
                                  },
                                  "id": 858,
                                  "nodeType": "ExpressionStatement",
                                  "src": "3084:41:1"
                                }
                              ]
                            }
                          },
                          "id": 888,
                          "nodeType": "IfStatement",
                          "src": "2684:736:1",
                          "trueBody": {
                            "id": 837,
                            "nodeType": "Block",
                            "src": "2734:177:1",
                            "statements": [
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 824,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 820,
                                    "name": "oldAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 726,
                                    "src": "2748:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 822,
                                        "name": "repaymentRouter",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 652,
                                        "src": "2769:15:1",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                          "typeString": "contract RepaymentRouter"
                                        }
                                      }
                                    ],
                                    "expression": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                          "typeString": "contract RepaymentRouter"
                                        }
                                      ],
                                      "id": 821,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "nodeType": "ElementaryTypeNameExpression",
                                      "src": "2761:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_address_$",
                                        "typeString": "type(address)"
                                      },
                                      "typeName": "address"
                                    },
                                    "id": 823,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2761:24:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  "src": "2748:37:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "id": 825,
                                "nodeType": "ExpressionStatement",
                                "src": "2748:37:1"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 827,
                                      "name": "newAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 720,
                                      "src": "2818:10:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    },
                                    {
                                      "argumentTypes": null,
                                      "id": 828,
                                      "name": "oldAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 726,
                                      "src": "2830:10:1",
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
                                      },
                                      {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                      }
                                    ],
                                    "id": 826,
                                    "name": "validateNewAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 922,
                                    "src": "2799:18:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                      "typeString": "function (address,address) pure"
                                    }
                                  },
                                  "id": 829,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "functionCall",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2799:42:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_tuple$__$",
                                    "typeString": "tuple()"
                                  }
                                },
                                "id": 830,
                                "nodeType": "ExpressionStatement",
                                "src": "2799:42:1"
                              },
                              {
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 835,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftHandSide": {
                                    "argumentTypes": null,
                                    "id": 831,
                                    "name": "repaymentRouter",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 652,
                                    "src": "2855:15:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                      "typeString": "contract RepaymentRouter"
                                    }
                                  },
                                  "nodeType": "Assignment",
                                  "operator": "=",
                                  "rightHandSide": {
                                    "argumentTypes": null,
                                    "arguments": [
                                      {
                                        "argumentTypes": null,
                                        "id": 833,
                                        "name": "newAddress",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 720,
                                        "src": "2889:10:1",
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
                                      "id": 832,
                                      "name": "RepaymentRouter",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 4151,
                                      "src": "2873:15:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_type$_t_contract$_RepaymentRouter_$4151_$",
                                        "typeString": "type(contract RepaymentRouter)"
                                      }
                                    },
                                    "id": 834,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "kind": "typeConversion",
                                    "lValueRequested": false,
                                    "names": [],
                                    "nodeType": "FunctionCall",
                                    "src": "2873:27:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                      "typeString": "contract RepaymentRouter"
                                    }
                                  },
                                  "src": "2855:45:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_RepaymentRouter_$4151",
                                    "typeString": "contract RepaymentRouter"
                                  }
                                },
                                "id": 836,
                                "nodeType": "ExpressionStatement",
                                "src": "2855:45:1"
                              }
                            ]
                          }
                        },
                        "id": 889,
                        "nodeType": "IfStatement",
                        "src": "2475:945:1",
                        "trueBody": {
                          "id": 815,
                          "nodeType": "Block",
                          "src": "2519:159:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 802,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 798,
                                  "name": "oldAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 726,
                                  "src": "2533:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 800,
                                      "name": "debtToken",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 650,
                                      "src": "2554:9:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                                        "typeString": "contract DebtToken"
                                      }
                                    }
                                  ],
                                  "expression": {
                                    "argumentTypes": [
                                      {
                                        "typeIdentifier": "t_contract$_DebtToken_$3891",
                                        "typeString": "contract DebtToken"
                                      }
                                    ],
                                    "id": 799,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": true,
                                    "lValueRequested": false,
                                    "nodeType": "ElementaryTypeNameExpression",
                                    "src": "2546:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_address_$",
                                      "typeString": "type(address)"
                                    },
                                    "typeName": "address"
                                  },
                                  "id": 801,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2546:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "2533:31:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 803,
                              "nodeType": "ExpressionStatement",
                              "src": "2533:31:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 805,
                                    "name": "newAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 720,
                                    "src": "2597:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "id": 806,
                                    "name": "oldAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 726,
                                    "src": "2609:10:1",
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
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 804,
                                  "name": "validateNewAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 922,
                                  "src": "2578:18:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                    "typeString": "function (address,address) pure"
                                  }
                                },
                                "id": 807,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2578:42:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 808,
                              "nodeType": "ExpressionStatement",
                              "src": "2578:42:1"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 813,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "id": 809,
                                  "name": "debtToken",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 650,
                                  "src": "2634:9:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtToken_$3891",
                                    "typeString": "contract DebtToken"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    {
                                      "argumentTypes": null,
                                      "id": 811,
                                      "name": "newAddress",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 720,
                                      "src": "2656:10:1",
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
                                    "id": 810,
                                    "name": "DebtToken",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 3891,
                                    "src": "2646:9:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_type$_t_contract$_DebtToken_$3891_$",
                                      "typeString": "type(contract DebtToken)"
                                    }
                                  },
                                  "id": 812,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "kind": "typeConversion",
                                  "lValueRequested": false,
                                  "names": [],
                                  "nodeType": "FunctionCall",
                                  "src": "2646:21:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtToken_$3891",
                                    "typeString": "contract DebtToken"
                                  }
                                },
                                "src": "2634:33:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DebtToken_$3891",
                                  "typeString": "contract DebtToken"
                                }
                              },
                              "id": 814,
                              "nodeType": "ExpressionStatement",
                              "src": "2634:33:1"
                            }
                          ]
                        }
                      },
                      "id": 890,
                      "nodeType": "IfStatement",
                      "src": "2254:1166:1",
                      "trueBody": {
                        "id": 793,
                        "nodeType": "Block",
                        "src": "2301:168:1",
                        "statements": [
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 780,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "id": 776,
                                "name": "oldAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 726,
                                "src": "2315:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "nodeType": "Assignment",
                              "operator": "=",
                              "rightHandSide": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 778,
                                    "name": "debtRegistry",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 648,
                                    "src": "2336:12:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                      "typeString": "contract DebtRegistry"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                      "typeString": "contract DebtRegistry"
                                    }
                                  ],
                                  "id": 777,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "nodeType": "ElementaryTypeNameExpression",
                                  "src": "2328:7:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_address_$",
                                    "typeString": "type(address)"
                                  },
                                  "typeName": "address"
                                },
                                "id": 779,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2328:21:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "src": "2315:34:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "id": 781,
                            "nodeType": "ExpressionStatement",
                            "src": "2315:34:1"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 783,
                                  "name": "newAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 720,
                                  "src": "2382:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                {
                                  "argumentTypes": null,
                                  "id": 784,
                                  "name": "oldAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 726,
                                  "src": "2394:10:1",
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
                                  },
                                  {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                ],
                                "id": 782,
                                "name": "validateNewAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 922,
                                "src": "2363:18:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                  "typeString": "function (address,address) pure"
                                }
                              },
                              "id": 785,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "functionCall",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2363:42:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_tuple$__$",
                                "typeString": "tuple()"
                              }
                            },
                            "id": 786,
                            "nodeType": "ExpressionStatement",
                            "src": "2363:42:1"
                          },
                          {
                            "expression": {
                              "argumentTypes": null,
                              "id": 791,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftHandSide": {
                                "argumentTypes": null,
                                "id": 787,
                                "name": "debtRegistry",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 648,
                                "src": "2419:12:1",
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
                                    "id": 789,
                                    "name": "newAddress",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 720,
                                    "src": "2447:10:1",
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
                                  "id": 788,
                                  "name": "DebtRegistry",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 3509,
                                  "src": "2434:12:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_type$_t_contract$_DebtRegistry_$3509_$",
                                    "typeString": "type(contract DebtRegistry)"
                                  }
                                },
                                "id": 790,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "typeConversion",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2434:24:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                  "typeString": "contract DebtRegistry"
                                }
                              },
                              "src": "2419:39:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtRegistry_$3509",
                                "typeString": "contract DebtRegistry"
                              }
                            },
                            "id": 792,
                            "nodeType": "ExpressionStatement",
                            "src": "2419:39:1"
                          }
                        ]
                      }
                    },
                    "id": 891,
                    "nodeType": "IfStatement",
                    "src": "2041:1379:1",
                    "trueBody": {
                      "id": 771,
                      "nodeType": "Block",
                      "src": "2086:162:1",
                      "statements": [
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 758,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 754,
                              "name": "oldAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 726,
                              "src": "2100:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 756,
                                  "name": "debtKernel",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 646,
                                  "src": "2121:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                    "typeString": "contract DebtKernel"
                                  }
                                }
                              ],
                              "expression": {
                                "argumentTypes": [
                                  {
                                    "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                    "typeString": "contract DebtKernel"
                                  }
                                ],
                                "id": 755,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "lValueRequested": false,
                                "nodeType": "ElementaryTypeNameExpression",
                                "src": "2113:7:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_address_$",
                                  "typeString": "type(address)"
                                },
                                "typeName": "address"
                              },
                              "id": 757,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2113:19:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            "src": "2100:32:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 759,
                          "nodeType": "ExpressionStatement",
                          "src": "2100:32:1"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 761,
                                "name": "newAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 720,
                                "src": "2165:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 762,
                                "name": "oldAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 726,
                                "src": "2177:10:1",
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
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "id": 760,
                              "name": "validateNewAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 922,
                              "src": "2146:18:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                                "typeString": "function (address,address) pure"
                              }
                            },
                            "id": 763,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2146:42:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_tuple$__$",
                              "typeString": "tuple()"
                            }
                          },
                          "id": 764,
                          "nodeType": "ExpressionStatement",
                          "src": "2146:42:1"
                        },
                        {
                          "expression": {
                            "argumentTypes": null,
                            "id": 769,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftHandSide": {
                              "argumentTypes": null,
                              "id": 765,
                              "name": "debtKernel",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 646,
                              "src": "2202:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                "typeString": "contract DebtKernel"
                              }
                            },
                            "nodeType": "Assignment",
                            "operator": "=",
                            "rightHandSide": {
                              "argumentTypes": null,
                              "arguments": [
                                {
                                  "argumentTypes": null,
                                  "id": 767,
                                  "name": "newAddress",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 720,
                                  "src": "2226:10:1",
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
                                "id": 766,
                                "name": "DebtKernel",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 2981,
                                "src": "2215:10:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_type$_t_contract$_DebtKernel_$2981_$",
                                  "typeString": "type(contract DebtKernel)"
                                }
                              },
                              "id": 768,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "kind": "typeConversion",
                              "lValueRequested": false,
                              "names": [],
                              "nodeType": "FunctionCall",
                              "src": "2215:22:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_DebtKernel_$2981",
                                "typeString": "contract DebtKernel"
                              }
                            },
                            "src": "2202:35:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_DebtKernel_$2981",
                              "typeString": "contract DebtKernel"
                            }
                          },
                          "id": 770,
                          "nodeType": "ExpressionStatement",
                          "src": "2202:35:1"
                        }
                      ]
                    }
                  },
                  "id": 892,
                  "nodeType": "IfStatement",
                  "src": "1812:1608:1",
                  "trueBody": {
                    "id": 749,
                    "nodeType": "Block",
                    "src": "1861:174:1",
                    "statements": [
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 736,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 732,
                            "name": "oldAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 726,
                            "src": "1875:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 734,
                                "name": "collateralizer",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 644,
                                "src": "1896:14:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_contract$_Collateralizer_$614",
                                  "typeString": "contract Collateralizer"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Collateralizer_$614",
                                  "typeString": "contract Collateralizer"
                                }
                              ],
                              "id": 733,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "nodeType": "ElementaryTypeNameExpression",
                              "src": "1888:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_address_$",
                                "typeString": "type(address)"
                              },
                              "typeName": "address"
                            },
                            "id": 735,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1888:23:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "1875:36:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 737,
                        "nodeType": "ExpressionStatement",
                        "src": "1875:36:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 739,
                              "name": "newAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 720,
                              "src": "1944:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 740,
                              "name": "oldAddress",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 726,
                              "src": "1956:10:1",
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
                              },
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            ],
                            "id": 738,
                            "name": "validateNewAddress",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 922,
                            "src": "1925:18:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_internal_pure$_t_address_$_t_address_$returns$__$",
                              "typeString": "function (address,address) pure"
                            }
                          },
                          "id": 741,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1925:42:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 742,
                        "nodeType": "ExpressionStatement",
                        "src": "1925:42:1"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 747,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "collateralizer",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 644,
                            "src": "1981:14:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Collateralizer_$614",
                              "typeString": "contract Collateralizer"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 745,
                                "name": "newAddress",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 720,
                                "src": "2013:10:1",
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
                              "id": 744,
                              "name": "Collateralizer",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 614,
                              "src": "1998:14:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_contract$_Collateralizer_$614_$",
                                "typeString": "type(contract Collateralizer)"
                              }
                            },
                            "id": 746,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "typeConversion",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1998:26:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_Collateralizer_$614",
                              "typeString": "contract Collateralizer"
                            }
                          },
                          "src": "1981:43:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_contract$_Collateralizer_$614",
                            "typeString": "contract Collateralizer"
                          }
                        },
                        "id": 748,
                        "nodeType": "ExpressionStatement",
                        "src": "1981:43:1"
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
                        "id": 894,
                        "name": "contractType",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 718,
                        "src": "3453:12:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 895,
                        "name": "oldAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "3467:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 896,
                        "name": "newAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 720,
                        "src": "3479:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_enum$_ContractType_$642",
                          "typeString": "enum ContractRegistry.ContractType"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 893,
                      "name": "ContractAddressUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 634,
                      "src": "3430:22:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_enum$_ContractType_$642_$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (enum ContractRegistry.ContractType,address,address)"
                      }
                    },
                    "id": 897,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3430:60:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 898,
                  "nodeType": "ExpressionStatement",
                  "src": "3430:60:1"
                }
              ]
            },
            "documentation": null,
            "id": 900,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 723,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 722,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 10247,
                  "src": "1759:9:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1759:9:1"
              }
            ],
            "name": "updateAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 718,
                  "name": "contractType",
                  "nodeType": "VariableDeclaration",
                  "scope": 900,
                  "src": "1676:25:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_enum$_ContractType_$642",
                    "typeString": "enum ContractRegistry.ContractType"
                  },
                  "typeName": {
                    "contractScope": null,
                    "id": 717,
                    "name": "ContractType",
                    "nodeType": "UserDefinedTypeName",
                    "referencedDeclaration": 642,
                    "src": "1676:12:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_enum$_ContractType_$642",
                      "typeString": "enum ContractRegistry.ContractType"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 720,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 900,
                  "src": "1711:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 719,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1711:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1666:69:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 724,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1773:0:1"
            },
            "scope": 923,
            "src": "1644:1853:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 921,
              "nodeType": "Block",
              "src": "3627:175:1",
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
                        "id": 912,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 908,
                          "name": "newAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 902,
                          "src": "3645:10:1",
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
                              "id": 910,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "3667:1:1",
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
                            "id": 909,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "3659:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 911,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3659:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3645:24:1",
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
                      "id": 907,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "3637:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 913,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3637:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 914,
                  "nodeType": "ExpressionStatement",
                  "src": "3637:33:1"
                },
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
                        "id": 918,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 916,
                          "name": "newAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 902,
                          "src": "3727:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 917,
                          "name": "oldAddress",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 904,
                          "src": "3741:10:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "3727:24:1",
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
                      "id": 915,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        11961,
                        11962
                      ],
                      "referencedDeclaration": 11961,
                      "src": "3719:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 919,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3719:33:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 920,
                  "nodeType": "ExpressionStatement",
                  "src": "3719:33:1"
                }
              ]
            },
            "documentation": null,
            "id": 922,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "validateNewAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 902,
                  "name": "newAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 922,
                  "src": "3540:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 901,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3540:7:1",
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
                  "id": 904,
                  "name": "oldAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 922,
                  "src": "3568:18:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 903,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3568:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3530:62:1"
            },
            "payable": false,
            "returnParameters": {
              "id": 906,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3627:0:1"
            },
            "scope": 923,
            "src": "3503:299:1",
            "stateMutability": "pure",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 924,
        "src": "298:3506:1"
      }
    ],
    "src": "0:3805:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "70": {
      "events": {
        "0xea5852cbfaa20064a0ffec7659e5b7178c40ecc51d8788b6981bfa062bc6e788": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "contractType",
              "type": "uint8"
            },
            {
              "indexed": true,
              "name": "oldAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newAddress",
              "type": "address"
            }
          ],
          "name": "ContractAddressUpdated",
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
      "address": "0x4a75f3eafd52444abc8db352ee3cc3d64afaa68f",
      "transactionHash": "0xc51c53b5336326deb1b5d98ef0f11b28238e102d07fbfc1c38ea8574eb54d5b2"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-11-13T09:13:59.796Z"
}
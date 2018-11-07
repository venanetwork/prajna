var SolidityCoder = require("web3/lib/solidity/coder.js");

// You might want to put the following in a loop to handle all logs in this receipt.
var log = receipt.logs[0];
var event = null;

for (var i = 0; i < abi.length; i++) {
    var item = abi[i];
    if (item.type != "event") continue;
    var signature = item.name + "(" + item.inputs.map(function(input) {return input.type;}).join(",") + ")";
    var hash = web3.sha3(signature);
    if (hash == log.topics[0]) {
        event = item;
        break;
    }
}

if (event != null) {
    var inputs = event.inputs.map(function(input) {return input.type;});
    var data = SolidityCoder.decodeParams(inputs, log.data.replace("0x", ""));
    // Do something with the data. Depends on the log and what you're using the data for.
}

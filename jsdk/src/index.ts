import { Prajna } from "./prajna";

module.exports = Prajna;

const p = new Prajna("http://localhost:8545")

// p.contracts.loadDebtKernelAsync().then(x => {
//     console.log(x)
//     console.log('-------------------------------11')
// });
//
// p.contracts.loadDharmaContractsAsync().then(x => {
//     console.log(x)
//     console.log('-----------------------')
// });

p.contracts.loadCreditorProxyAsync().then(x => {
    console.log(x)
});

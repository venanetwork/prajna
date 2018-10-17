import { Prajna } from "./prajna";

module.exports = Prajna;

const p = new Prajna("http://localhost:8545")
p.contracts.loadDebtKernelAsync().then(x => {
    console.log(x)
});

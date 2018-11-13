//deployer用来缓存stage发布任务的主要操作接口
//deployer是部署器，移植文件会使用deployer来缓存部署任务，可以按序排列发布任务
//artifacts.require("")匹配合约名字
const CONSTANTS = require("./migration_constants");


module.exports = function(deployer,network,account){
	const WETH9 = artifacts.require('WETH9');

    deployer.deploy(WETH9);
}
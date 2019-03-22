const MerxNetToken = artifacts.require("./MerxNetToken.sol");

module.exports = function(deployer) {
const _name = 'MerxNetToken';
const _symbol = 'MERX';
const _decimals = 18;


  deployer.deploy(MerxNetToken, _name, _symbol, _decimals );
};



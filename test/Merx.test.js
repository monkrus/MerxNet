//web3 libraries allow you to interact with ethereum node
const BigNumber = web3.BigNumber;
//import contract
const MerxNetToken = artifacts.require('MerxNetToken');
// "should" is part of the chai language to construct assertions

require('chai')
.use(require('chai-bignumber')(BigNumber))
.should();



//.should();
// use Mocha testing framework and Chai assertion library to write tests
contract('MerxNetToken', accounts => {
	const _name = 'MerxNetToken';
	const _symbol = 'MERX';
	const _decimals = 18;

// "async", waits for the token to execute (await keyword)
// "this", assigns it

	beforeEach(async function() {
		this.token = await MerxNetToken.new(_name, _symbol, _decimals);

	});

describe('token attributes', function() {

it (`has the correct name`, async function()  {
const name = await this.token.name();
name.should.equal(_name);
});	

it (`has the correct symbol`, async function()  {
const symbol = await this.token.symbol();
symbol.should.equal(_symbol);
});

it (`has the correct decimals`,async function()  {
const decimals = await this.token.decimals();
// bignumber library helps to avoid AssertionError 
decimals.should.be.bignumber.equal(_decimals);

});
})
})

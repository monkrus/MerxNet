//import contract
const MerxNetToken = artifacts.require('MerxNetToken');
// "should" is part of the chai language to construct assertions
require('chai').should();
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

it (`has the correct symbol`, function()  {

});

it (`has the correct decimals`, function()  {

});
})
})

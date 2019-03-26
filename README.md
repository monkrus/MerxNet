### [MerxNet](https://merxnet.com/)
Custom implementation of basic ERC20 token using OpenZeppelin library

### Prerequisites
1. Check if Node.js and truffle are installed by typing in your terminal: `node -v` and then `truffle version`

2. Initialize truffle `truffle init`

3. Create package.json file `npm init`

4. Install OpenZeppelin library `npm install openzeppelin-solidity`

### Steps

1. Create `MerxToken.sol` file in the contracts folder.

2. Import from OpenZeppelin libraries using `import` keyword. Please note the importing format is using forward slashes. 
If `import` is highligted red in your editor, add following to your user settings(e.g. in VSC):
```
"solidity.packageDefaultDependenciesContractsDirectory": "",
"solidity.packageDefaultDependenciesDirectory": "node_modules", 
```

3. Create a constructor to pass in arguments into DetailedERC20.Update a `truffle-config.js` file with `solc....`

4. Run `truffle compile`.
Please check the required version of the Solidity compiler (**for all .sol files including imported libraries**) by running `truffle version`.  If needed, run `npm uninstall -g truffle`and the `npm install -g truffle` 

5. Create 2_deploy_token.js in migrations folder. 

6. Run the blockchain emulator. Install `npm install ganache-cli` and run it `ganache-cli`.

7. Modify truffle-config.js (truffle.js for Mac).

8. Run `truffle migrate --reset` to migrate the contract.

9. Run `truffle console`. 
Test the blockchain by typing:
`truffle(development)>MerxNetToken.deployed().then((instance) =>{merx = instance})` and then `merx`

10. To test, type `merx.name()`, `merx.decimals()`

### Tests

1. Write `Merx.test.js` in the test folder. See file for detailed steps.

2. Double check the correctness of the await test,
run `truffle test` (Expected result : 3 passing).

3. Install chai `npm install chai`,`npm i chai-as-promised` and 
`npm i chai-bignumber`

4.Run `npm install`



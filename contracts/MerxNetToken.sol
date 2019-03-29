pragma solidity ^0.5.0;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol"

contract MerxNetToken  is ERC20 , ERC20Detailed, ERC20Mintable  {
    

 constructor (string memory _name,
             string memory _symbol,
             uint8 _decimals) 
ERC20Detailed( _name , _symbol, _decimals)
     public
     {

     }
   

    }

/*ERC20 REQUIRED functions and events
- totalSupply (could be fixed or variable supply)

-balanceOf (token balance of the given address)

-transfer(Given the adress ans amount, transfers  TOKENS to address B from address A)

-transferFrom() (Given a sender, recipient, and amount transfers tokens from one acount to another.Used in combination with approve. )

--The function transferFrom in token contracts refers to the transfer of tokens that you do not own, but rather have been approved to spend. 
--It is used together with the approve function, when an address establishes a certain allowance of tokens for another address to spend for them. 
--Hence, when using transferFrom you establish what address the tokens that you are spending are coming from, whereas transfer is just for your own tokens.

-approve (athorizes an address to execute transfer up to that amount)

-allowance (returns the remaining amount that the speneder is approved to withdraw)

-Transfer (event triggered upon a succesful transfer)

-Approval (event logged upon a succesful call to approve)

ERC20 OPTIONAL functions
-name (MerxNet)
-symbol(MERX)
-decimals(18)

*/


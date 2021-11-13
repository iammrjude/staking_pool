// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RewardToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Reward", "RWD") {
        _mint(msg.sender, initialSupply);
    }
    
    function mint(address _to, uint256 _amount) public{
        _mint(_to,_amount);
    }
}
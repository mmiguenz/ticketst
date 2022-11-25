// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EventToken is ERC20 {
    // wei
    constructor(uint256 initialSupply) ERC20("EventToken", "EVT") {
        _mint(msg.sender, initialSupply);
    }
}
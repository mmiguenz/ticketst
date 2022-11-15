// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract TicketsT {
    address payable public owner;    
    uint256 totalTickets;
    uint256 currentPrice;
    uint256 soldTickets;

    constructor(uint256 _ticketInitialPrice) payable {
        owner = payable(msg.sender);
        currentPrice = _ticketInitialPrice;        
    }

    function getTicketPrice() public view returns(uint256) {
        return currentPrice;
    }
}

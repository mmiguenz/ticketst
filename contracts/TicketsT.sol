// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


import "./TicketItem.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract TicketsT {
    address payable public owner;    
    uint256 totalTickets;
    uint256 currentPrice;
    uint256 public soldTickets;
    mapping(address => uint256) public attendees;
    string[] ticketsTokenUri;
    event ticketEvent(uint256 recieved, uint256 ticketId);
    TicketItem ticketContract;    

    constructor(uint256 _ticketInitialPrice, uint256 _totalTickets, address _ticketContract, string[] memory _ticketsTokenUri) {
        owner = payable(msg.sender);
        currentPrice = _ticketInitialPrice;  
        totalTickets = _totalTickets;
        ticketContract = TicketItem(_ticketContract);
        ticketsTokenUri = _ticketsTokenUri;              
    }

    function getTicketPrice() public view returns(uint256) {
        return currentPrice;
    }

    function buyTicket() public payable {        
       require(msg.value >= currentPrice, "lower than current price");
       require(ticketsAvailable() > 0, "sold out");
                         
       soldTickets = soldTickets + 1;
       ticketContract.mintTicket(msg.sender, soldTickets, ticketsTokenUri[soldTickets - 1]);
       attendees[msg.sender] = soldTickets;       
       emit ticketEvent(msg.value, soldTickets);       
    }

     function ticketsAvailable() public view returns(uint256) {        
       return totalTickets - soldTickets;
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "./TicketItem.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TicketsT is Ownable {
    uint256 totalTickets;
    uint256 currentPrice;
    uint256 public soldTickets;
    mapping(address => uint256) public attendees;
    string[] ticketsTokenUri;
    event ticketEvent(uint256 recieved, uint256 ticketId);
    event priceChanged(uint256 newPrice);
    TicketItem ticketContract;
    IERC20 eventTokenContract;

    constructor(
        uint256 _ticketInitialPrice,
        uint256 _totalTickets,
        address _ticketContract,
        string[] memory _ticketsTokenUri,
        IERC20 _eventToken
    ) {
        currentPrice = _ticketInitialPrice;
        totalTickets = _totalTickets;
        ticketContract = TicketItem(_ticketContract);
        ticketsTokenUri = _ticketsTokenUri;
        eventTokenContract = IERC20(_eventToken);
    }

    function getTicketPrice() public view returns (uint256) {
        return currentPrice;
    }

    function buyTicket() public payable {
        require(msg.value >= currentPrice, "lower than current price");
        require(ticketsAvailable() > 0, "sold out");

        soldTickets = soldTickets + 1;        
        
        if (msg.value > currentPrice ) {
           eventTokenContract.transfer(msg.sender, 10);
        }


        ticketContract.mintTicket(
            msg.sender,
            soldTickets,
            ticketsTokenUri[soldTickets - 1]
        );
        attendees[msg.sender] = soldTickets;
        currentPrice = currentPrice + currentPrice ;
        emit ticketEvent(msg.value, soldTickets);
    }

    function ticketsAvailable() public view returns (uint256) {
        return totalTickets - soldTickets;
    }
}

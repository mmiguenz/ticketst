import { ethers } from "hardhat";
import { EventToken, TicketItem, TicketsT } from "../typechain-types";
import {default as cidMap} from "../metadata/metadata-cid.json";

async function main() {
 const ticketItem = await  deployTicketItem()
 const eventToken = await deployEventToken()
 console.log(`TicketItem Deployed at: ${ticketItem.address}`)
 const ticketT =  await deployTicketT(ticketItem, eventToken)
 console.log(`TicketT Deployed at: ${ticketT.address}`)

 await ticketItem.transferOwnership(ticketT.address)
 console.log(`ownership of ${ticketItem.address} was transfered to : ${ticketT.address}`)

 await eventToken.transfer(ticketItem.address, await eventToken.totalSupply())
 console.log(`total supply of  ${eventToken.address} was transfered to : ${ticketT.address}`)

}

const deployTicketItem = async () => {
  const TicketItem = await ethers.getContractFactory("TicketItem",);
  const ticketItem = await TicketItem.deploy("Qatar-01", "Q01");  
  await ticketItem.deployed();
  ticketItem.setBaseURI("https://ipfs.io/ipfs/")
  return ticketItem;

} 

const deployEventToken = async () => {
  const EventToken = await ethers.getContractFactory("EventToken");
  const eventToken = await EventToken.deploy(ethers.utils.parseEther("1000000"));  
  await eventToken.deployed();  
  return eventToken;
} 

const deployTicketT = async (ticketItem: TicketItem, eventToken: EventToken) => {
  const TicketsT = await ethers.getContractFactory("TicketsT");
  const initial_price = ethers.utils.parseEther("10")
  const totalTickets = 5;
  const cidList = [...Array(totalTickets).keys()].map(ticketId => cidMap[`ticket-${ticketId + 1}`])    
  const ticketsT = await TicketsT.deploy(initial_price, totalTickets, ticketItem.address, cidList, eventToken.address,{});
  await ticketsT.deployed();
  return ticketsT;
} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

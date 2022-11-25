import { ethers } from "hardhat";
import { TicketItem } from "../typechain-types";
import {default as cidMap} from "../metadata/metadata-cid.json";

async function main() {
 const ticketItem = await  deployTicketItem()
 console.log(`TicketItem Deployed at: ${ticketItem.address}`)
 const ticketT =  await deployTicketT(ticketItem)
 console.log(`TicketT Deployed at: ${ticketT.address}`)

 await ticketItem.transferOwnership(ticketT.address)
 console.log(`ownership of ${ticketItem.address} was transfered to : ${ticketT.address}`)


}

const deployTicketItem = async () => {
  // make signners from private key
  const TicketItem = await ethers.getContractFactory("TicketItem",);
  const ticketItem = await TicketItem.deploy("Qatar-01", "Q01");  
  await ticketItem.deployed();
  ticketItem.setBaseURI("https://ipfs.io/ipfs/")
  return ticketItem;

} 

const deployTicketT = async (ticketItem: TicketItem) => {
  const TicketsT = await ethers.getContractFactory("TicketsT");
  const initial_price = ethers.utils.parseEther("10")
  const totalTickets = 5;
  const cidList = [...Array(totalTickets).keys()].map(ticketId => cidMap[`ticket-${ticketId + 1}`])    
  const ticketsT = await TicketsT.deploy(initial_price, totalTickets, ticketItem.address, cidList, {});
  await ticketsT.deployed();
  return ticketsT;
} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

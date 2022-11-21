import { ethers } from "hardhat";
import { TicketItem } from "../typechain-types";

async function main() {
 const ticketItem = await  deployTicketItem()
 console.log(`TicketItem Deployed at: ${ticketItem.address}`)
 const ticketT =  await deployTicketT(ticketItem)
 console.log(`TicketT Deployed at: ${ticketT.address}`)
}

const deployTicketItem = async () => {
  // make signners from private key
  const TicketItem = await ethers.getContractFactory("TicketItem",);
  const ticketItem = await TicketItem.deploy("Qatar-01", "Q01");
  await ticketItem.deployed();
  return ticketItem;

} 

const deployTicketT = async (ticketItem: TicketItem) => {
  const TicketT = await ethers.getContractFactory("TicketsT");
  const initial_price = ethers.utils.parseEther("10")
  const totalTickets = 10;
  const ticketT = await TicketT.deploy(initial_price, totalTickets, ticketItem.address)
  await ticketT.deployed();
  return ticketT;

} 

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

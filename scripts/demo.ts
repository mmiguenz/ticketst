import { ethers } from "hardhat";
import ticketsTAbi from "../artifacts/contracts/TicketsT.sol/TicketsT.json";
import ticketsItemAbi from "../artifacts/contracts/TicketItem.sol/TicketItem.json";
import eventTokenAbi from "../artifacts/contracts/EventToken.sol/EventToken.json";
async function main() {
    const ticketTAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"
    const tickeItemAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"
    const eventTokenAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

    const contractInstance = await ethers.getContractAt(ticketsTAbi.abi, ticketTAddress);
    const nftIntance = await ethers.getContractAt(ticketsItemAbi.abi, tickeItemAddress);
    const eventTokenInstance = await ethers.getContractAt(eventTokenAbi.abi, eventTokenAddress);
    
    const [signer1] = await ethers.getSigners();

    const ticketPrice = await contractInstance.getTicketPrice()
    let soldtickets = await contractInstance.soldTickets();

    
    console.log(`current ticket price: ${ethers.utils.formatEther(ticketPrice)}`);
    console.log(`sold tickets: ${soldtickets}`);
  
    await contractInstance.connect(signer1).buyTicket({value: ticketPrice});
    soldtickets = await contractInstance.soldTickets();
    const ticketId = await contractInstance.attendees(signer1.address); 
    const ticketMetadata = await nftIntance.tokenURI(ticketId);
    
    console.log(`ticket Id purchased: ${ticketId}`)
    console.log(`sold tickets: ${soldtickets}`);
    console.log(`ticket metadata: ${ticketMetadata}`);

    console.log(`tokens recieved: ${await eventTokenInstance.balanceOf(signer1.address)}`);
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
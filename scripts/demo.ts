import { ethers } from "hardhat";
import { TicketsT } from "../typechain-types";
import ticketsTAbi from "../artifacts/contracts/TicketsT.sol/TicketsT.json";
import ticketsItemAbi from "../artifacts/contracts/TicketItem.sol/TicketItem.json";
async function main() {
    const ticketTAddress = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0"
    const tickeItemAddress = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788"
    const contractInstance = await ethers.getContractAt(ticketsTAbi.abi, ticketTAddress);
    const nftIntance = await ethers.getContractAt(ticketsItemAbi.abi, tickeItemAddress);
    const privateKeyCustomer = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

    const [signer1] = await ethers.getSigners();

    const ticketPrice = await contractInstance.getTicketPrice()
    let soldtickets = await contractInstance.soldTickets();
    console.log(`current ticket price: ${ethers.utils.formatEther(ticketPrice)}`);
    console.log(`sold tickets: ${soldtickets}`);

    const wallet = new ethers.Wallet(privateKeyCustomer);
    console.log(await signer1.getBalance())
    await contractInstance.connect(signer1).buyTicket({value: ticketPrice});
    soldtickets = await contractInstance.soldTickets();
    const ticketId = await contractInstance.attendees(signer1.address); 
    const ticketMetadata = await nftIntance.tokenURI(ticketId);
    console.log(`ticket Id purchased: ${ticketId}`)
    console.log(`sold tickets: ${soldtickets}`);
    console.log(`ticket metadata: ${ticketMetadata}`);




}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  
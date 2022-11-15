import { expect } from "chai";
import { ethers } from "hardhat";

describe("TikcketsT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {    

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const TicketsT = await ethers.getContractFactory("TicketsT");
    const ticketPrice = ethers.BigNumber.from("1000000000000000000")  
    const ticketsT = await TicketsT.deploy(ticketPrice, {});

    return { ticketsT, owner, ticketPrice };
  }

  describe("Deployment", function () {
    it("Should Deploy Contract", async function () {      

      const { ticketsT } = await deployFixture();

      expect(ticketsT.address).not.null;
    });

    it("Should set the right owner", async function () {
      const { ticketsT, owner  } = await deployFixture();

      expect(await ticketsT.owner()).to.equal(owner.address);
    });    
  });

  describe("GetTicketPrice", function () {
    it("Should Deploy Contract", async function () {      

      const { ticketsT, ticketPrice } = await deployFixture();     
      expect(await ticketsT.getTicketPrice()).to.equals(ticketPrice);
    });   
  });
});

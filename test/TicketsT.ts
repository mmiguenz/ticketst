import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber, ContractTransaction } from "ethers";
import { ethers } from "hardhat";
import { TicketItem, TicketsT } from "../typechain-types";

describe("TikcketsT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, customer, customer2, customer3] = await ethers.getSigners();

    const TicketsT = await ethers.getContractFactory("TicketsT");
    const TicketItem = await ethers.getContractFactory("TicketItem");
    const ticketPrice = ethers.utils.parseEther("10")
    const totalTickets = 2

    const ticketItem = await TicketItem.deploy("Tickets", "TKT")
    const ticketsT = await TicketsT.deploy(ticketPrice, totalTickets, ticketItem.address, {});
    await ticketItem.transferOwnership(ticketsT.address)
    return { ticketsT, owner, ticketPrice, customer, totalTickets, customer2, customer3 };
  }

  describe("Deployment", function () {
    it("Should Deploy Contract", async function () {

      const { ticketsT } = await deployFixture();

      expect(ticketsT.address).not.null;
    });

    it("Should set the right owner", async function () {
      const { ticketsT, owner } = await deployFixture();

      expect(await ticketsT.owner()).to.equal(owner.address);
    });
  });

  describe("GetTicketPrice", function () {
    it("Should get current price", async function () {

      const { ticketsT, ticketPrice } = await deployFixture();
      const price = await ticketsT.getTicketPrice()
      expect(price).to.equals(ticketPrice);
    });
  });

  describe("BuyTickets", function () {
    const whenBuyTickets = async (ticketsT: TicketsT, customer: SignerWithAddress, price: BigNumber) => await ticketsT.connect(customer).buyTicket({ value: price })
      const shouldBeRevertedWith = async (tx: Promise<ContractTransaction>, message: string) => await expect(tx).to.be.revertedWith(message)
      const givenASoldOutEvent = async (ticketsT: TicketsT, customer2: SignerWithAddress, customer3: SignerWithAddress, price: BigNumber) => {
        await ticketsT.connect(customer2).buyTicket({ value: price })
        await ticketsT.connect(customer3).buyTicket({ value: price })
      }

      const shouldBuyTicket = async (ticketsT: TicketsT, tx: Promise<ContractTransaction>, totalTickets: number, customer: SignerWithAddress) => {        
        await expect(tx).to.emit(ticketsT, "ticketEvent");
        expect(await ticketsT.soldTickets()).to.be.equals(1)
        expect(await ticketsT.ticketsAvailable()).to.be.equals(totalTickets - 1)
        expect(await ticketsT.attendees(customer.address)).not.to.be.empty
      }

    it("Should validate ticket price", async function () {

      const { ticketsT, customer } = await deployFixture();

      const insuficentPrice = ethers.utils.parseEther("1")
    
      const tx = whenBuyTickets(ticketsT, customer, insuficentPrice)

      await shouldBeRevertedWith(tx, "lower than current price")
    });

    it("Should validate tickets available", async function () {

      const { ticketsT, customer, ticketPrice, customer2, customer3 } = await deployFixture();

      await givenASoldOutEvent(ticketsT, customer2, customer3, ticketPrice)

      const tx = whenBuyTickets(ticketsT, customer, ticketPrice)

      await shouldBeRevertedWith(tx, "sold out")
    });

    it("Should buy ticket", async function () {

      const { ticketsT, ticketPrice, customer, totalTickets } = await deployFixture();
      const tx = whenBuyTickets(ticketsT, customer, ticketPrice)     

      await shouldBuyTicket(ticketsT, tx, totalTickets, customer)
    });
  });
});

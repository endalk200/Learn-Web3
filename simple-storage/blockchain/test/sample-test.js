const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SimpleStorage", function () {
    it("Should store people with favorite number and color", async function () {
        const SimpleStorageFactory = await ethers.getContractFactory(
            "SimpleStorage"
        );
        const SimpleStorageContract = await SimpleStorageFactory.deploy();

        // Deploy the smart contract
        await SimpleStorageContract.deployed();

        // Add person with favorite number
        const setPersonTransaction = await SimpleStorageContract.addPerson(
            "John",
            "Violet",
            15
        );

        // wait until the transaction is mined
        await setPersonTransaction.wait();

        expect(await SimpleStorageContract.getFavoriteNum("John")).to.equal(15);
        expect(await SimpleStorageContract.getPerson("John")).to.contain("John");
    });
});

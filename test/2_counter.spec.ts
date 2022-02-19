import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, ContractFactory } from "ethers";

describe("Counter contract test", () => {
    it("should get 0 counter value", async () => {
        const CounterFactory: ContractFactory = await ethers.getContractFactory("Counter");
        const CounterContract: Contract = await CounterFactory.deploy();

        // Call the hello function from the contract
        expect(await CounterContract.getCount()).to.equal(0);
    });

    it("should increment counter", async () => {
        const CounterFactory: ContractFactory = await ethers.getContractFactory("Counter");
        const CounterContract: Contract = await CounterFactory.deploy();

        await CounterContract.increment();

        // Call the hello function from the contract
        expect(await CounterContract.getCount()).to.equal(1);
    });

    it("should increment counter by specified value", async () => {
        const CounterFactory: ContractFactory = await ethers.getContractFactory("Counter");
        const CounterContract: Contract = await CounterFactory.deploy();

        await CounterContract.incrementBy(2);

        // Call the hello function from the contract
        expect(await CounterContract.getCount()).to.equal(2);
    });
});

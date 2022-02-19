import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";
import { Contract, ContractFactory } from "ethers";

describe("HelloWorld contract test", () => {
    it("should get 'Hello, World' when calling hello() function", async () => {
        const HW: ContractFactory = await ethers.getContractFactory("HelloWorld");
        const hello: Contract = await HW.deploy();

        // Call the hello function from the contract
        expect(await hello.hello()).to.equal("Hello, World");
    });
});

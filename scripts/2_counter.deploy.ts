import "@nomiclabs/hardhat-ethers";
import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

const deploy = async (): Promise<Contract> => {
    const Counter: ContractFactory = await ethers.getContractFactory("Counter");
    const CounterContract: Contract = await Counter.deploy();
    await CounterContract.deployed();

    return CounterContract;
}

deploy().then(
    async (CounterContract: Contract) => {
        await CounterContract.increment();
        console.log("Counter:", await CounterContract.getCount());
    }
).catch(
    (error) => {
        console.error(error)
    }
);
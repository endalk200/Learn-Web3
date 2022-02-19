import "@nomiclabs/hardhat-ethers";
import { Contract, ContractFactory } from "ethers";
import { ethers } from "hardhat";

const deploy = async (): Promise<Contract> => {
    const HelloWorld: ContractFactory = await ethers.getContractFactory("HelloWorld");
    const hello: Contract = await HelloWorld.deploy();
    await hello.deployed();

    return hello;
}

const sayHello = async (hello) => {
    console.log("Say Hello:", await hello.hello());
}

deploy().then(
    async (hello: Contract) => {
        console.log("Call hello():", await hello.hello());
    }
).catch(
    (error) => {
        console.error(error)
    }
);
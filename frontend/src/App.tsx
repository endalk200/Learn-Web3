import React, { Fragment } from 'react';

import { Contract } from "ethers";
import { getContract } from './utils';

const App = (): JSX.Element => {

    const getCount = async () => {
        const contract: Promise<Contract> = getContract("0x5fbdb2315678afecb367f032d93f642f64180aa3");


        contract.then(async contract => {
            console.log(contract)

            const count = await contract.getCount();

            return count;
        });
    }

    getCount()

    return (
        <Fragment>
            <h4>Ethereum Blockchain Counter Dapp</h4>
            <h5>Count </h5>
            <button onClick={async () => {
                const contract: Promise<Contract> = getContract("0x5fbdb2315678afecb367f032d93f642f64180aa3");

                contract.then(async contract => {
                    await contract.incrementBy(1);

                    const count = await contract.getCount();

                    console.log(count);
                    console.log(contract)
                });
            }}>Increment</button>
        </Fragment>
    );
}

export default App;

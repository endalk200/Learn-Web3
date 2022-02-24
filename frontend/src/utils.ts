import { Contract, ethers } from "ethers";

const hasSigners = async (): Promise<boolean> => {
    //@ts-ignore
    const metamask = window.ethereum;
    const signers = await (metamask.request({ method: 'eth_accounts' }) as Promise<string[]>);
    return signers.length > 0;
}

const requestAccess = async (): Promise<boolean> => {
    //@ts-ignore
    const result = (await window.ethereum.request({ method: 'eth_requestAccounts' })) as string[];
    return result && result.length > 0;
}

export const getContract = async (address: string): Promise<Contract> => {
    if (!(await hasSigners()) && !(await requestAccess())) {
        console.log("You are in trouble, no one wants to play");
    }

    // @ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(
        // @ts-ignore
        address,
        [
            "function getCount() public view returns (uint256)",
            "function incrementBy(uint32 amount) public"
        ], // abi
        provider
    );

    return contract;
}
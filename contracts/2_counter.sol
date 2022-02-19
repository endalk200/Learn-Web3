// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Counter {
    uint32 public counter;

    function increment() public {
        counter++;
    }

    function incrementBy(uint32 amount) public {
        counter += amount;
    }

    function getCount() public view returns (uint32) {
        return counter;
    }
}

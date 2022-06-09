// I'm a comment!
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// pragma solidity ^0.8.0;
// pragma solidity >=0.8.0 <0.9.0;

contract SimpleStorage {
    /** This variable will be permanently stored on the blockchain and is public */
    address ownerAddress;

    struct People {
        uint256 favoriteNumber;
        string favoriteColor;
        string name;
    }

    // uint256[] public anArray;
    People[] public people;

    /** This will create a mapping between a string and uint256 type */
    mapping(string => uint256) public nameToFavoriteNumber;

    /** This will create a mapping between a string and People type */
    mapping(string => People) public nameToPeople;

    constructor() {
        ownerAddress = msg.sender;
    }

    function getOwner() public view returns (address) {
        return ownerAddress;
    }

    function addPerson(
        string memory _name,
        string memory _favoriteColor,
        uint256 _favoriteNumber
    ) public {
        // Method 1. Of creating a struct
        // People newPerson = People(_favoriteNumber, _favoriteColor, _name));

        // Method 2. Of creating a struct
        People memory newPerson = People({
            favoriteNumber: _favoriteNumber,
            favoriteColor: _favoriteColor,
            name: _name
        });

        people.push(newPerson);

        // Create a mapping of name to favorite number
        nameToFavoriteNumber[_name] = _favoriteNumber;

        // Create a mapping of name to people
        nameToPeople[_name] = newPerson;
    }

    function getFavoriteNum(string memory _name) public view returns (uint256) {
        return nameToFavoriteNumber[_name];
    }

    function getPerson(string memory _name)
        public
        view
        returns (People memory)
    {
        return nameToPeople[_name];
    }
}

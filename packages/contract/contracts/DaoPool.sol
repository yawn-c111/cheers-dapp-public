// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./interfaces/IDaoPool.sol";

contract DaoPool is IDaoPool {
    address owner;

    modifier onlyOwner() {
        require(owner == msg.sender);
        _;
    }

    constructor(
        address _daoAddress,
        string memory _daoName,
        string memory _daoProfile,
        string memory _daoIcon
    ) {
      
    }

    
}

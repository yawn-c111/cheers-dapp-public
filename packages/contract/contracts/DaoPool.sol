// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./interfaces/IDaoPool.sol";

contract DaoPool is IDaoPool {
    constructor(
        address _daoAddress,
        string memory _daoName,
        string memory _daoProfile,
        string memory _daoIcon
    ) {
        address daoAddress = _daoAddress;
    }
}

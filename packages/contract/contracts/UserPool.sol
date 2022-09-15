// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "./interfaces/IUserPool.sol";

contract UserPool is IUserPool {
    constructor(
        address _userAddress,
        string memory _userName,
        string memory _userProfile,
        string memory _userIcon
    ) {
        address userAddress = _userAddress;
    }
}

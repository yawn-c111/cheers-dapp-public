// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IProjectPool.sol';

contract ProjectPool is IProjectPool {
  address owner;
  address belongDaoAddress;
  string public projectName;
  string public projectContents;
  string public projectReword;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(
    address _ownerAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) {
    owner = _ownerAddress;
    belongDaoAddress = _belongDaoAddress;
    projectName = _projectName;
    projectContents = _projectContents;
    projectReword = _projectReword;
  }
}

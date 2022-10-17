// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface IDaosData {
  function addDaos(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) external;

  function getAllDaoList() external view returns (SharedStruct.Dao[] memory);
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IPoolListData {
  // walletに紐づいたPoolAddress
  function getMyPoolAddress(address _ownerAddress) external view returns (address);

  // walletに紐づいたPoolAddress
  function addMyPoolAddress(address _ownerAddress, address _poolAddress) external;
}

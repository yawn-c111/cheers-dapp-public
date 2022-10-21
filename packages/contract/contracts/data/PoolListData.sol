// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract PoolListData {
  mapping(address => address) public poolList;

  // walletアドレスに紐づいたpoolアドレスの取得
  function getMyPoolAddress(address _ownerAddress) public view returns (address) {
    return poolList[_ownerAddress];
  }

  function addMyPoolAddress(address _ownerAddress, address _poolAddress) public {
    poolList[_ownerAddress] = _poolAddress;
  }
}

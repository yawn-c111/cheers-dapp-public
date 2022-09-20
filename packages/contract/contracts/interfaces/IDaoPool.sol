// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IDaoPool {
  function addCheerProject(address projectPoolAddress) external returns (bool);

  function removeCheerProject(address projectPoolAddress) external returns (bool);
}

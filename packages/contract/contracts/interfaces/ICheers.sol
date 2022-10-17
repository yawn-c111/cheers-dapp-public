// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface ICheers {
  // walletに紐づいたdaoPoolAddress
  function getMyPoolAddress(address _ownerAddress) external view returns (address);
}

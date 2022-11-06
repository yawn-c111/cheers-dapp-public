// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IPoolListData.sol';
import '../interfaces/IUsersData.sol';
import '../UserPool.sol';

contract UserPoolFactory {
  // POOl
  address POOLLISTDATA_CONTRACT_ADDRESS = 0x6AEe0B9c3a1e91556Dc1c0d9F9D72788212F6C3A;
  // = poolListDataコントラクトアドレス 先にPoolListDataコントラクトをdeploy
  IPoolListData public poolListData;

  // USER
  address USERS_DATA_CONTRACT_ADDRESS = 0xB0B8D5346A93D73513AFAf165bD882f58055c81B; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdeploy
  IUsersData public usersData;

  constructor() {
    poolListData = IPoolListData(POOLLISTDATA_CONTRACT_ADDRESS);
    usersData = IUsersData(USERS_DATA_CONTRACT_ADDRESS);
  }

  // Userプール作成
  function newUserPoolFactory(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external returns (address) {
    require(address(poolListData.getMyPoolAddress(_userAddress)) == address(0), 'already created!');

    UserPool userPool = new UserPool(_userAddress, _userName, _userProfile, _userIcon, address(this));
    usersData.addUsers(_userAddress, _userName, _userProfile, _userIcon);
    poolListData.addMyPoolAddress(_userAddress, address(userPool));

    return poolListData.getMyPoolAddress(_userAddress);
  }

  function setPoolListData(address poolListDataAddress) public {
    POOLLISTDATA_CONTRACT_ADDRESS = poolListDataAddress;
    poolListData = IPoolListData(poolListDataAddress);
  }

  function setUsersData(address usersDataAddress) public {
    USERS_DATA_CONTRACT_ADDRESS = usersDataAddress;
    usersData = IUsersData(usersDataAddress);
  }
}

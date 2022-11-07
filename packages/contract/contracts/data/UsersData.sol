// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IUsersData.sol';
import '../shared/SharedStruct.sol';

// USERデータ保存のためのコントラクト
contract UsersData is IUsersData {
  // Userのデータ
  SharedStruct.User[] public users;

  constructor() {}

  // USER追加
  function addUsers(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) external {
    users.push(SharedStruct.User(_userAddress, _userName, _userProfile, _userIcon, block.timestamp));
  }

  // USER追加
  function removeUser(address _userAddress) external {
    uint256 usersLength = users.length;
    for (uint256 i = 0; i < usersLength; ++i) {
      if (users[i].userAddress == _userAddress) {
        delete users[i];
      }
    }
  }

  // 全User取得
  function getAllUserList() public view returns (SharedStruct.User[] memory) {
    return users;
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/ICheers.sol';
import './DaoPool.sol';
import './UserPool.sol';
import './shared/SharedStruct.sol';

contract Cheers is ICheers {
  // DAO
  SharedStruct.Dao[] daos;
  mapping(address => address) daoList;

  // USER
  SharedStruct.User[] users;
  mapping(address => address) userList;

  constructor() {}

  // DAOプール作成
  function newDaoPoolFactory(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) public returns (address) {
    require(address(daoList[_daoAddress]) == address(0), 'already created!');
    DaoPool daoPool = new DaoPool(_daoAddress, _daoName, _daoProfile, _daoIcon);
    addDaos(_daoAddress, _daoName, _daoProfile, _daoIcon);
    daoList[_daoAddress] = address(daoPool);

    return daoList[_daoAddress];
  }

  // DAO追加
  function addDaos(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) private {
    daos.push(SharedStruct.Dao(_daoAddress, _daoName, _daoProfile, _daoIcon));
  }

  // 全DAO取得
  function getAllDaoList() public view returns (SharedStruct.Dao[] memory) {
    return daos;
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) public returns (address) {
    require(address(userList[msg.sender]) == address(0), 'alredy created!');

    UserPool userPool = new UserPool(msg.sender, _userName, _userProfile, _userIcon);
    addUsers(msg.sender, _userName, _userProfile, _userIcon);
    userList[msg.sender] = address(userPool);

    return userList[msg.sender];
  }

  // User追加
  function addUsers(
    address _userAddress,
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) private {
    users.push(SharedStruct.User(_userAddress, _userName, _userProfile, _userIcon));
  }

  // 全User取得
  function getAllUserList() public view returns (SharedStruct.User[] memory) {
    return users;
  }
}

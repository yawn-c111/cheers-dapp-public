// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/ICheers.sol';
import './interfaces/IDaosData.sol';
import './interfaces/IUsersData.sol';
import './DaoPool.sol';
import './UserPool.sol';
import './shared/SharedStruct.sol';

contract Cheers is ICheers {
  // DAO
  address DAOSDATA_CONTRACT_ADDRESS; // = daosDataコントラクトアドレス 先にDaoDataコントラクトをdeploy
  IDaosData public daosData;

  // USER
  address USERSDATA_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdepoloy
  IUsersData public usersData;

  // walletアドレスに紐づいたpoolアドレス
  mapping(address => address) poolList;

  constructor() {
    daosData = IDaosData(DAOSDATA_CONTRACT_ADDRESS);
    usersData = IUsersData(USERSDATA_CONTRACT_ADDRESS);
  }

  // DAOプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) public returns (address) {
    require(address(poolList[msg.sender]) == address(0), 'already created!');
    DaoPool daoPool = new DaoPool(msg.sender, _daoName, _daoProfile, _daoIcon, address(this));
    daosData.addDaos(msg.sender, _daoName, _daoProfile, _daoIcon);
    poolList[msg.sender] = address(daoPool);

    return poolList[msg.sender];
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) public returns (address) {
    require(address(poolList[msg.sender]) == address(0), 'alredy created!');

    UserPool userPool = new UserPool(msg.sender, _userName, _userProfile, _userIcon, address(this));
    usersData.addUsers(msg.sender, _userName, _userProfile, _userIcon);
    poolList[msg.sender] = address(userPool);

    return poolList[msg.sender];
  }

  // walletアドレスに紐づいたpoolアドレスの取得
  function getMyPoolAddress(address _ownerAddress) public view returns (address) {
    return poolList[_ownerAddress];
  }
}

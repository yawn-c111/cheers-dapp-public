// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/ICheers.sol';
import './interfaces/IDaoPoolFactory.sol';
import './interfaces/IUserPoolFactory.sol';

contract Cheers is ICheers {
  // DAOPOOLFACTORY
  address DAOPOOLFACTORY_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdepoloy
  IDaoPoolFactory public daoPoolFactory;
  // USERPOOLFACTORY
  address USERPOOLFACTORY_CONTRACT_ADDRESS; // = usersDataコントラクトアドレス 先にUserDataコントラクトをdepoloy
  IUserPoolFactory public userPoolFactory;

  constructor() {
    daoPoolFactory = IDaoPoolFactory(DAOPOOLFACTORY_CONTRACT_ADDRESS);
    userPoolFactory = IUserPoolFactory(USERPOOLFACTORY_CONTRACT_ADDRESS);
  }

  // DAOプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) public {
    daoPoolFactory.newDaoPoolFactory(_daoName, _daoProfile, _daoIcon);
  }

  // Userプール作成
  function newUserPoolFactory(
    string memory _userName,
    string memory _userProfile,
    string memory _userIcon
  ) public {
    userPoolFactory.newUserPoolFactory(_userName, _userProfile, _userIcon);
  }
}

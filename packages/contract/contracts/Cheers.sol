// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/ICheers.sol';
import './DaoPool.sol';
import './UserPool.sol';
import './shared/SharedStruct.sol';

contract Cheers is ICheers {
  // DAO
  SharedStruct.Dao[] daos;

  // USER
  SharedStruct.User[] users;

  // POOL
  mapping(address => address) poolList;

  // PROJECT
  // SharedStruct.Project[] projects;
  mapping(address => SharedStruct.Project[]) public eachProjectsList;

  constructor() {}

  // DAOプール作成
  function newDaoPoolFactory(
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) public returns (address) {
    require(address(poolList[msg.sender]) == address(0), 'already created!');
    DaoPool daoPool = new DaoPool(_daoName, _daoProfile, _daoIcon, address(this));
    addDaos(msg.sender, _daoName, _daoProfile, _daoIcon);
    poolList[msg.sender] = address(daoPool);

    return poolList[msg.sender];
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

  function getMyPoolAddress(address _ownerAddress) public view returns (address) {
    return poolList[_ownerAddress];
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
    require(address(poolList[msg.sender]) == address(0), 'alredy created!');

    UserPool userPool = new UserPool(msg.sender, _userName, _userProfile, _userIcon);
    addUsers(msg.sender, _userName, _userProfile, _userIcon);
    poolList[msg.sender] = address(userPool);

    return poolList[msg.sender];
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

  // Project追加...DaoPool or UserPoolから叩く
  function addProjects(
    address _projectOwnerAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) external {
    // projects.push(
    //   SharedStruct.Project(_belongDaoAddress, _projectName, _projectContents, _projectReword)
    // );
    eachProjectsList[_projectOwnerAddress].push(
      SharedStruct.Project(_belongDaoAddress, _projectName, _projectContents, _projectReword)
    );
  }

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAddress) public view returns (SharedStruct.Project[] memory) {
    return eachProjectsList[_projectOwnerAddress];
  }
}

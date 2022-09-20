// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IDaoPool.sol';
import './interfaces/ICheers.sol';
import './interfaces/IERC20.sol';
import './ProjectPool.sol';

contract DaoPool is IDaoPool {
  IERC20 public cher;
  ICheers public cheers;
  address owner;
  address public daoAddress;
  string public daoName;
  string public daoProfile;
  string public daoIcon;
  // Alchemy testnet goerli deploy
  address CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;

  // DAO's PROJECT
  SharedStruct.Project[] challengeProjects;
  // cheerProjectリスト
  address[] cheerProjectlist;
  // cheerしているかないか
  mapping(address => bool) isCheer;
  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(
    address _daoAddress,
    string memory _daoName,
    string memory _daoProfile,
    string memory _daoIcon
  ) {
    // poolのowner設定
    owner = _daoAddress;
    // CHERコントラクト接続
    cher = IERC20(CHER_CONTRACT_ADDRESS);
    daoAddress = _daoAddress;
    daoName = _daoName;
    daoProfile = _daoProfile;
    daoIcon = _daoIcon;
  }

  // DAO情報取得関連↓
  // DAOPoolアドレス取得
  function getDaoPoolAddress() public view returns (address) {
    return address(this);
  }

  // DAOwalletアドレス取得
  function getDaoAddress() public view returns (address) {
    return daoAddress;
  }

  // DAO名取得
  function getDaoName() public view returns (string memory) {
    return daoName;
  }

  // DAOプロフィール取得
  function getDaoProfile() public view returns (string memory) {
    return daoProfile;
  }

  // DAOアイコン取得
  function getDaoIcon() public view returns (string memory) {
    return daoIcon;
  }

  // DAOウォレットからDAOプールにCHERチャージ
  function chargeCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(daoAddress) >= _cherAmount, 'not insufficient');
    cher.approve(daoAddress, _cherAmount);
    cher.transferFrom(daoAddress, address(this), _cherAmount);
  }

  // DAOプールからDAOウォレットにCHER引出し
  function withdrowCher(uint256 _cherAmount) public onlyOwner {
    require(cher.balanceOf(address(this)) >= _cherAmount, 'not insufficient');
    cher.approve(address(this), _cherAmount);
    cher.transfer(daoAddress, _cherAmount);
  }

  // Projectプール作成
  function newProjectFactory(
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) public returns (address) {
    ProjectPool projectPool = new ProjectPool(
      address(this),
      address(this),
      _projectName,
      _projectContents,
      _projectReword
    );
    addChaellnegeProjects(address(this), address(this), _projectName, _projectContents, _projectReword);
    return address(projectPool);
  }

  function addChaellnegeProjects(
    address _projectOwnerAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) private {
    challengeProjects.push(
      SharedStruct.Project(_projectOwnerAddress, _belongDaoAddress, _projectName, _projectContents, _projectReword)
    );
  }

  // このDAOのChallenge全プロジェクトを取得
  function getAllChallengeProjects() public view returns (SharedStruct.Project[] memory) {
    return challengeProjects;
  }

  // このDAOがCheerしているプロジェクトを追加 ProjectPoolから叩く
  function addCheerProject(address _cheerProjectPoolAddress) public returns (bool) {
    require(!isCheer[_cheerProjectPoolAddress], 'alredy cheer');
    for (uint256 i = 0; i < cheerProjectlist.length; i++) {
      if (cheerProjectlist[i] == _cheerProjectPoolAddress) {
        isCheer[_cheerProjectPoolAddress] = true;
      } else {
        cheerProjectlist.push(_cheerProjectPoolAddress);
        isCheer[_cheerProjectPoolAddress] = true;
      }
    }
    return isCheer[_cheerProjectPoolAddress];
  }

  // Cheerしているプロジェクトを脱退 ProjectPoolから叩く
  function removeCheerProject(address _cheerProjectPoolAddress) public returns (bool) {
    require(isCheer[_cheerProjectPoolAddress], 'alredy not cheer');
    isCheer[_cheerProjectPoolAddress] = false;
    return isCheer[_cheerProjectPoolAddress];
  }
}

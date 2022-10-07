// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import './interfaces/IProjectPool.sol';
import './interfaces/IERC20.sol';
import './interfaces/ICheers.sol';
import './shared/SharedStruct.sol';

contract ProjectPool is IProjectPool {
  IERC20 public cher;
  ICheers public cheersDapp;
  address owner;
  address belongDaoAddress;
  string public projectName;
  string public projectContents;
  string public projectReword;
  address cheersDappAddress;
  // Alchemy testnet goerli deploy
  address CHER_CONTRACT_ADDRESS = 0x38D4172DDE4E50a8CdD8b39ABc572443d18ad72d;

  SharedStruct.Cheer[] cheers;
  uint256 totalCher;

  modifier onlyOwner() {
    require(owner == msg.sender);
    _;
  }

  constructor(
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword,
    address _cheersDappAddress
  ) {
    //CHERコントラクト接続
    cher = IERC20(CHER_CONTRACT_ADDRESS);
    // cheersDappコントラクト接続
    cheersDapp = ICheers(cheersDappAddress);
    owner = msg.sender;
    belongDaoAddress = _belongDaoAddress;
    projectName = _projectName;
    projectContents = _projectContents;
    projectReword = _projectReword;
    cheersDappAddress = _cheersDappAddress;
  }

  // このProjectをCheerする
  function mintCheer(uint256 _cher, string memory _cheerMessage) public {
    require(cher.balanceOf(cheersDapp.getMyPoolAddress(msg.sender)) > _cher, 'Not enough');
    cheer(_cher, _cheerMessage);
  }

  // cheerの処理
  function cheer(uint256 _cher, string memory _cheerMessage) private {
    cher.transferFrom(cheersDapp.getMyPoolAddress(msg.sender), address(this), _cher);
    cheers.push(SharedStruct.Cheer(cheersDapp.getMyPoolAddress(msg.sender), block.timestamp, _cheerMessage, _cher));
    distributeCher(_cher);
  }

  function distributeCher(uint256 _cher) private {
    // 分配の計算式・・・ムズ
    // このProjectに投じられた分配前の合計
    // totalCher += _cher;
    // uint256 cheerDistribute = (_cher * 70) / 100;
    // uint256 challengerDistribute = (_cher * 25) / 100;
    // uint256 daoDistribute = (_cher * 5) / 100;
  }

  // Cheersのデータ参照
  function getAllCheers() public view returns (SharedStruct.Cheer[] memory) {
    return cheers;
  }

  // このプロジェクトのcher総量
  function getTotalCher() public view returns (uint256) {
    return cher.balanceOf(address(this));
  }
}

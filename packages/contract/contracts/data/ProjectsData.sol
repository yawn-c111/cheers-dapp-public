// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../interfaces/IProjectsData.sol';
import '../shared/SharedStruct.sol';

// Projectデータ保存のためのコントラクト
contract ProjectsData is IProjectsData {
  // pool
  mapping(address => SharedStruct.Cheer[]) public eachProjectCheerList;
  mapping(address => SharedStruct.Project[]) public eachProjectsList;
  SharedStruct.Project[] public allProjectsList;

  // Project追加...DaoPool or UserPoolから叩く
  function addProjects(
    address _projectOwnerAddress,
    address _projectPoolAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) external {
    uint256 _creationTime = block.timestamp;

    eachProjectsList[_projectOwnerAddress].push(
      SharedStruct.Project(
        _projectOwnerAddress,
        _projectPoolAddress,
        _belongDaoAddress,
        _projectName,
        _projectContents,
        _projectReword,
        _creationTime
      )
    );

    allProjectsList.push(
      SharedStruct.Project(
        _projectOwnerAddress,
        _projectPoolAddress,
        _belongDaoAddress,
        _projectName,
        _projectContents,
        _projectReword,
        _creationTime
      )
    );
  }

  // 各プロジェクトのcheerの追加
  function addEachProjectCheerList(
    address _projectPoolAddress,
    address _cheerPoolAddres,
    uint256 _creationTime,
    string memory _message,
    uint256 _cher
  ) external {
    eachProjectCheerList[_projectPoolAddress].push(
      SharedStruct.Cheer(_cheerPoolAddres, _creationTime, _message, _cher)
    );
  }

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAddress) public view returns (SharedStruct.Project[] memory) {
    return eachProjectsList[_projectOwnerAddress];
  }

  // 全てのProject取得
  function getAllProjectList() public view returns (SharedStruct.Project[] memory) {
    return allProjectsList;
  }

  // ProjectごとのCheer取得
  function getEachProjectCheerList(address _projectPoolAddress) public view returns(SharedStruct.Cheer[] memory) {
    return eachProjectCheerList[_projectPoolAddress];
  }
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface ICheers {
  // 全DAO取得
  function getAllDaoList() external view returns (SharedStruct.Dao[] memory);

  // walletに紐づいたdaoPoolAddress
  function getMyPoolAddress(address _ownerAddress) external view returns (address);

  // 全USER取得
  function getAllUserList() external view returns (SharedStruct.User[] memory);

  // PROJECT追加
  function addProjects(
    address _projectOwnerAddress,
    address _belongDaoAddress,
    string memory _projectName,
    string memory _projectContents,
    string memory _projectReword
  ) external;

  // アドレスごとのProject取得
  function getEachProjectList(address _projectOwnerAdress) external view returns (SharedStruct.Project[] memory);
}

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import '../shared/SharedStruct.sol';

interface ICheers {
  // 全DAO取得
  function getAllDaoList() external view returns (SharedStruct.Dao[] memory);

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

  // 全PROJECT追加
  function getAllProjectList() external view returns (SharedStruct.Project[] memory);
}

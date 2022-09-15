// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../shared/SharedStruct.sol";

interface ICheers {
    // 全DAO取得
    function getAllDaoList() external view returns (SharedStruct.Dao[] memory);

    // 全USER取得
    function getAllUserList()
        external
        view
        returns (SharedStruct.User[] memory);
}

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;

library SharedStruct {
  struct Dao {
    address daoAddres;
    string daoName;
    string daoProfile;
    string daoIcon;
  }

  struct User {
    address userAddress;
    string userName;
    string userProfile;
    string daoIcon;
  }

  struct Project {
    // address projectOwnerAddress;
    address belongDaoAddress;
    string projectName;
    string projectContents;
    string projectReword;
  }

  struct Cheer {
    address cheerPoolAddress;
    uint256 timestamp;
    string message;
    uint256 cher;
  }
}

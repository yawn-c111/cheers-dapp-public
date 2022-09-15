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
}

import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Cheers, DaoPoolFactory, UserPoolFactory } from '../types'

describe('Cheers', function () {

  let cheers: Cheers;
  let daoPoolFactory: DaoPoolFactory;
  let userPoolFactory: UserPoolFactory;

  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
    daoPoolFactory = await daoPoolFactoryFactory.deploy();
    await daoPoolFactory.deployed();

    const UserPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
    userPoolFactory = await UserPoolFactoryFactory.deploy();
    await userPoolFactory.deployed();

    let setDaoPoolFactory = await cheers.setDaoPoolFactory(daoPoolFactory.address);
    await setDaoPoolFactory.wait();

    let setUserPoolFactory = await cheers.setUserPoolFactory(userPoolFactory.address);
    await setUserPoolFactory.wait();

    return { cheers, deployer, user1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { cheers, deployer, user1 } = await loadFixture(fixture);
    });
  });

  // describe('newDaoPoolFactory test', function () {
  //   it('Should newDaoPoolFactory', async () => {
  //     const { cheers, deployer, user1 } = await loadFixture(fixture);
  //     let newDaoPoolFactory = await cheers.newDaoPoolFactory("DAO1_Name", "DAO1_Profile", "DAO1_Icon");
  //     await newDaoPoolFactory.wait();
  //   });
  // });
});

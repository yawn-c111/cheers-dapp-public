import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Cheers, DaoPoolFactory, UserPoolFactory, PoolListData, DaosData } from '../types'

describe('Cheers', function () {

  let cheers: Cheers;
  let daoPoolFactory: DaoPoolFactory;
  let userPoolFactory: UserPoolFactory;
  let poolListData: PoolListData;
  let daosData: DaosData;

  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    
    const daoPoolFactoryFactory = await ethers.getContractFactory('DaoPoolFactory');
    daoPoolFactory = await daoPoolFactoryFactory.deploy();
    await daoPoolFactory.deployed();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    const daosDataFactory = await ethers.getContractFactory('DaosData');
    daosData = await daosDataFactory.deploy();
    await daosData.deployed();


    const UserPoolFactoryFactory = await ethers.getContractFactory('UserPoolFactory');
    userPoolFactory = await UserPoolFactoryFactory.deploy();
    await userPoolFactory.deployed();


    await (await cheers.setDaoPoolFactory(daoPoolFactory.address)).wait();
    await(await daoPoolFactory.setPoolListData(poolListData.address)).wait();
    await(await daoPoolFactory.setDaosData(daosData.address)).wait();

    await (await cheers.setUserPoolFactory(userPoolFactory.address)).wait();

    return { cheers, deployer, user1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { cheers, deployer, user1 } = await loadFixture(fixture);
    });
  });

  describe('newDaoPoolFactory test', function () {
    it("Should create a new dao's pool", async () => {
      const { cheers, user1 } = await loadFixture(fixture);
      let newDaoPoolFactory = await cheers.connect(user1).newDaoPoolFactory("DAO1_Name", "DAO1_Profile", "DAO1_Icon");
      await newDaoPoolFactory.wait();
    });
  });
});

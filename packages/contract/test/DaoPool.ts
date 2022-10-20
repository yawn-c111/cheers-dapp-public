import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPool, Cheers } from '../types'

describe('DaoPool', function () {

  let daoPool: DaoPool;
  let cheers: Cheers;

  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const daoPoolFactory = await ethers.getContractFactory('DaoPool');
    daoPool = await daoPoolFactory.deploy(user1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
    await daoPool.deployed();

    return { daoPool, cheers, deployer, user1 };
  }

  describe('Run test', function () {
    it('Should run', async () => {
    });
  }); 

  describe('Deploy test', function () {
    it('Should deploy', async () => {
        const [deployer, user1] = await ethers.getSigners();
    
        const cheersFactory = await ethers.getContractFactory('Cheers');
        cheers = await cheersFactory.deploy();
        await cheers.deployed();
    
        const daoPoolFactory = await ethers.getContractFactory('DaoPool');
        daoPool = await daoPoolFactory.deploy(user1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
        await daoPool.deployed();
    });

    it('Should load fixture', async () => {
      const { daoPool, cheers, deployer, user1 } = await loadFixture(fixture);
    });
  });
});

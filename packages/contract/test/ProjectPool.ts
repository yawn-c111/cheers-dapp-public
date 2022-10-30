import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { ProjectPool, PoolListData, CHERToken } from '../types'

describe('ProjectPool', function () {

  let projectPool: ProjectPool;
  let poolListData: PoolListData;
//   let cheers: Cheers;
  let CHER: CHERToken;

  async function fixture() {
    const [deployer, CHERDeployer, user1, dao1] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(100);
    await CHER.deployed();

    const transfer = await CHER.transfer(user1.address, 50);
    await transfer.wait();

    const poolListDataFactory = await ethers.getContractFactory('PoolListData');
    poolListData = await poolListDataFactory.deploy();
    await poolListData.deployed();

    // const cheersFactory = await ethers.getContractFactory('Cheers');
    // cheers = await cheersFactory.deploy();
    // await cheers.deployed();

    const projectPoolFactory = await ethers.getContractFactory('ProjectPool');
    projectPool = await projectPoolFactory.deploy(user1.address, dao1.address, "Project_Name", "Project_Contents", "Project_Reword");
    await projectPool.deployed();

    const setCHER = await projectPool.setCHER(CHER.address);
    await setCHER.wait();

    const setPoolListData = await projectPool.setPoolListData(poolListData.address);
    await setPoolListData.wait();

    return { CHER, projectPool, poolListData, deployer, user1, dao1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { CHER, projectPool, deployer, user1, dao1 } = await loadFixture(fixture);
    });
  });

  describe('cher address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { projectPool } = await loadFixture(fixture);

      const cherAddress = await projectPool.cher();
      expect(cherAddress).to.equal(CHER.address);
    });
  });

  describe('poolListData address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { projectPool } = await loadFixture(fixture);

      const poolListDataAddress = await projectPool.poolListData();
      expect(poolListDataAddress).to.equal(poolListData.address);
    });
  });
});

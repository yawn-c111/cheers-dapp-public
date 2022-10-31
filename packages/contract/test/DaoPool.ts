import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';
import { DaoPool, Cheers, ProjectsData, CHERToken } from '../types'

describe('DaoPool', function () {

  let daoPool: DaoPool;
  let cheers: Cheers;
  let projectsData: ProjectsData;
  let CHER: CHERToken;

  async function fixture() {
    const [deployer, CHERDeployer, dao1] = await ethers.getSigners();

    const CHERFactory = await ethers.getContractFactory('CHERToken');
    CHER = await CHERFactory.connect(CHERDeployer).deploy(100);
    await CHER.deployed();

    const transfer = await CHER.transfer(dao1.address, 50);
    await transfer.wait();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    cheers = await cheersFactory.deploy();
    await cheers.deployed();

    const projectsDataFactory = await ethers.getContractFactory('ProjectsData');
    projectsData = await projectsDataFactory.deploy();
    await projectsData.deployed();

    const daoPoolFactory = await ethers.getContractFactory('DaoPool');
    daoPool = await daoPoolFactory.deploy(dao1.address, "DAO1_Name", "DAO1_Profile", "DAO1_Icon", cheers.address);
    await daoPool.deployed();

    const setCHER = await daoPool.setCHER(CHER.address);
    await setCHER.wait();

    const setProjectsData = await daoPool.setProjectsData(projectsData.address);
    await setProjectsData.wait();

    return { CHER, daoPool, cheers, deployer, dao1 };
  }

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const { CHER, daoPool, cheers, deployer, dao1 } = await loadFixture(fixture);
    });
  });

  describe('getDaoPoolAddress test', function () {
    it("Should get dao's pool address", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoPoolAddress = await daoPool.getDaoPoolAddress();
      expect(getDaoPoolAddress).to.equal(daoPool.address);
    });
  });

  describe('getDaoAddress test', function () {
    it("Should get dao's address", async () => {
      const { CHER, daoPool, dao1 } = await loadFixture(fixture);

      const getDaoAddress = await daoPool.getDaoAddress();
      expect(getDaoAddress).to.equal(dao1.address);
    });
  });

  describe('getDaoName test', function () {
    it("Should get dao's name", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoName = await daoPool.getDaoName();
      expect(getDaoName).to.equal("DAO1_Name");
    });
  });

  describe('getDaoProfile test', function () {
    it("Should get dao's profile", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoProfile = await daoPool.getDaoProfile();
      expect(getDaoProfile).to.equal("DAO1_Profile");
    });
  });

  describe('getDaoIcon test', function () {
    it("Should get dao's icon", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getDaoIcon = await daoPool.getDaoIcon();
      expect(getDaoIcon).to.equal("DAO1_Icon");
    });
  });

  describe('balance of Dao1 test', function () {
    it("Should charge CHER to dao's pool", async () => {
      const { CHER, dao1 } = await loadFixture(fixture);

      const ownerOf = await CHER.balanceOf(dao1.address);
      expect(ownerOf).to.equal(50);
    });
  });

  describe('cher address test', function () {
    it("Should cher address be CHER's address", async () => {
      const { daoPool } = await loadFixture(fixture);

      const cherAddress = await daoPool.cher();
      expect(cherAddress).to.equal(CHER.address);
    });
  });

  describe('getAllChallengeProjects test', function () {
    it("Should get all projects supported by DaoPool", async () => {
      const { daoPool } = await loadFixture(fixture);

      const getAllChallengeProjects = await daoPool.getAllChallengeProjects();
      expect(getAllChallengeProjects).to.deep.equal([]);
    });
  });
});

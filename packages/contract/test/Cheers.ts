import { loadFixture } from '@nomicfoundation/hardhat-network-helpers';
import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('Cheers', function () {
  async function fixture() {
    const [deployer, user1] = await ethers.getSigners();

    const cheersFactory = await ethers.getContractFactory('Cheers');
    const cheers = await cheersFactory.deploy();

    return { cheers, deployer, user1 };
  }

  describe('Run test', function () {
    it('Should run', async () => {
    });
  });

  describe('Deploy test', function () {
    it('Should deploy', async () => {
      const [deployer, user1] = await ethers.getSigners();
  
      const cheersFactory = await ethers.getContractFactory('Cheers');
      const cheers = await cheersFactory.deploy();
    });

    it('Should load fixture', async () => {
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

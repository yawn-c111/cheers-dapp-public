import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import CheerListDataContractABI from '@/libs/hardhat/artifacts/contracts/data/CheerListData.sol/CheerListData.json';
import type { CheerListData as CheerListDataTypes } from '@/libs/hardhat/types';
import { CheerType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_ADDRESS = '';
const CONTRACT_ABI = CheerListDataContractABI.abi;

type Props = {
  _cheerPoolAddress?: string;
};

type ReturnCheerListDataContract = {};

export const useCheerListDataContract = ({ _cheerPoolAddress }: Props): ReturnCheerListDataContract => {
  const [myPoolCheerDataList, setMyPoolCheerDataList] = useState<CheerType[]>([]);
  const [myProjectDataList, setMyProjectDataList] = useState<CheerType[]>([]);
  const ethereum = getEthereumSafety();

  const cheerListDataContract: CheerListDataTypes | null = useMemo(() => {
    if (!ethereum) return null;
    // @ts-ignore: ethereum as ethers.providers.ExternalProvider
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer) as CheerListDataTypes;
  }, [ethereum]);

  const handleGetMyPoolCheerDataList = useCallback(async () => {
    try {
      if (!cheerListDataContract) return;
      if (!_cheerPoolAddress) return;
      const getMyPoolCheerDataList = await cheerListDataContract.getMyPoolCheerDataList(_cheerPoolAddress);
      const myPoolCheerDataListOrganize = getMyPoolCheerDataList.map((cheerData) => {
        return {
          projectAddress: cheerData.projectAddress,
          cheerPoolAddress: cheerData.cheerPoolAddress,
          timestamp: new Date(cheerData.creationTime.toNumber() * 1000),
          message: cheerData.message,
          cher: cheerData.cher.toString(),
        };
      });
      setMyPoolCheerDataList(myPoolCheerDataListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [_cheerPoolAddress, cheerListDataContract]);
  
  const handleGetMyPoolCheerDataList = useCallback(async () => {
    try {
      if (!cheerListDataContract) return;
      if (!_cheerPoolAddress) return;
      const getMyPoolCheerDataList = await cheerListDataContract.getMyPoolCheerDataList(_cheerPoolAddress);
      const myPoolCheerDataListOrganize = getMyPoolCheerDataList.map((cheerData) => {
        return {
          projectAddress: cheerData.projectAddress,
          cheerPoolAddress: cheerData.cheerPoolAddress,
          timestamp: new Date(cheerData.creationTime.toNumber() * 1000),
          message: cheerData.message,
          cher: cheerData.cher.toString(),
        };
      });
      setMyPoolCheerDataList(myPoolCheerDataListOrganize);
    } catch (error) {
      console.error(error);
    }
  }, [_cheerPoolAddress, cheerListDataContract]);

  return {};
};

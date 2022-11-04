import { useCallback, useEffect, useMemo, useState } from 'react';

import { ethers } from 'ethers';

import CheerListDataContractABI from '@/libs/hardhat/artifacts/contracts/data/CheerListData.sol/CheerListData.json';
import type { CheerListData as CheerListDataTypes } from '@/libs/hardhat/types';
import { CheerType } from '@/types/struct';
import { getEthereumSafety } from '@/utils';

const CONTRACT_Address = '';
const CONTRACT_ABI = CheerListDataContractABI.abi;

type Props ={}

type ReturnCheerListDataContract = {}

export const useCheerListDataContract = ({}:Props):ReturnCheerListDataContract => {
  const [myPoolCheerDataList, setMyPoolCheerDataList] = useState<CheerType[]>([])
  const [myProjectDataList, setMyProjectDataList] = useState<CheerType[]>([])

  const ethereum = getEthereumSafety();

  return {

  }
}

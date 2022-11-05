import React, { useCallback, useEffect, useState } from 'react';

import { BuyCher, SellCher, SendCher, Withdraw } from '@/components/pages/myProfile';
import { ChallengeProjects, CheerProjects } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { usePoolListDataContract } from '@/hooks/contracts/data';
import { useCherContract } from '@/hooks/contracts/useCherContract';

type Props = {
  ownerAddress: string;
};

const MyProfileCard = ({ ownerAddress }: Props) => {
  const [poolAddressType, setPoolAddressType] = useState<{ type: string; name: string; poolAddress: string }>({
    type: '',
    name: '',
    poolAddress: '',
  });

  const userOwnerAddress = ownerAddress;
  const { userPoolAddress, userName } = useUserPoolContract({ userOwnerAddress });
  const daoOwnerAddress = ownerAddress;
  const { daoPoolAddress, daoName } = useDaoPoolContract({ daoOwnerAddress });
  const { myPoolAddress } = usePoolListDataContract({ ownerAddress });
  const projectOwnerAddress = myPoolAddress;
  const address = myPoolAddress;
  const { cherBalance } = useCherContract({ address });

  const setPoolType = useCallback(() => {
    if (userPoolAddress !== '') {
      setPoolAddressType({ type: 'User', name: userName, poolAddress: userPoolAddress });
    } else if (daoPoolAddress !== '') {
      setPoolAddressType({ type: 'Dao', name: daoName, poolAddress: daoPoolAddress });
    } else {
      setPoolAddressType({ type: '', name: '', poolAddress: '' });
    }
  }, [daoName, daoPoolAddress, userName, userPoolAddress]);

  useEffect(() => {
    setPoolType();
  }, [setPoolType]);

  return (
    <>
      <div className="m-12">
        <div className="flex flex-wrap">
          <div>
            <div>Type: {poolAddressType.type}</div>
            <div>Name: {poolAddressType.name}</div>
            <div>Wallet Address: {ownerAddress}</div>
            <div>Pool Address: {poolAddressType.poolAddress}</div>
            <div>Total CHER: {cherBalance}</div>
            <div className="my-8">
              <BuyCher />
            </div>
            <div className="my-8">
              <SendCher ownerAddress={ownerAddress} />
            </div>
            <div className="my-8">
              <Withdraw ownerAddress={ownerAddress} />
            </div>
            <div className="my-8">
              <SellCher />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="col-span-1">
        <ChallengeProjects projectOwnerAddress={projectOwnerAddress} />
        <CheerProjects ownerAddress={ownerAddress} />
      </div>
    </>
  );
};

export default MyProfileCard;

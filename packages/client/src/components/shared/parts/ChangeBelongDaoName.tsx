import React from 'react';

import { useDaoPoolContract } from '@/hooks/contracts'

type Props = {
  belongDaoAddress:string;
}

const ChangeBelongDaoName = ({belongDaoAddress}:Props) => {
  const daoOwnerAddress = belongDaoAddress
  const {daoName} =useDaoPoolContract({daoOwnerAddress})

  return (
    <div className="flex justify-center items-center p-2 rounded-md bg-cherBlue mr-2">
      <div className="text-xs">{daoName}</div>
    </div>
  );
};

export default ChangeBelongDaoName;

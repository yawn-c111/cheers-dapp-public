import React, { useCallback } from 'react';

import { Button } from '@/components/shared/parts';
import { useCherFaucetContract } from '@/hooks/contracts'

const BuyCher = () => {
  const {handleFaucet} = useCherFaucetContract({})

  const onClickEvent = useCallback(async()=> {
    handleFaucet()
  },[handleFaucet])

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="mb-2">
        CHERに交換する <span className="text-sm text-cherGreen">Change TOKEN</span>
      </div>
      <Button buttonName="CHANGE TOKEN" onClickEvent={onClickEvent} />
    </div>
  );
};

export default BuyCher;

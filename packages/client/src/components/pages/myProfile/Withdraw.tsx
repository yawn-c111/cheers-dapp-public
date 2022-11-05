import React, { useCallback, useState } from 'react';

import { Button, InputNumber } from '@/components/shared/parts';
import { useDaoPoolContract, useUserPoolContract } from '@/hooks/contracts';
import { Form, FormErrors } from '@/types/form';

type Props = {
  ownerAddress: string;
};

const Withdraw = ({ ownerAddress }: Props) => {
  const userOwnerAddress = ownerAddress;
  const { userPoolAddress, handleUserWithdrawCher } = useUserPoolContract({ userOwnerAddress });
  const daoOwnerAddress = ownerAddress;
  const { daoPoolAddress, handleDaoWithdrawCher } = useDaoPoolContract({ daoOwnerAddress });

  const [errors, setErrors] = useState<FormErrors>();
  const [form, setForm] = useState<Form>({
    amount: 0,
  });

  const handleChangeAmount = (value: number) => {
    setErrors({});
    setForm({ amount: value });
  };

  const handleInvalidAmount = (_value: string) => {
    setErrors({ amount: '数値のみを入力してください' });
  };

  const onClickEvent = useCallback(async () => {
    if (userPoolAddress !== '') {
      handleUserWithdrawCher(form.amount);
    } else if (daoPoolAddress !== '') {
      handleDaoWithdrawCher(form.amount);
    }
  }, [daoPoolAddress, form.amount, handleDaoWithdrawCher, handleUserWithdrawCher, userPoolAddress]);

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="mb-2">
        CHERをPOOLから引き出す <span className="text-sm text-cherBlue">Withdraw Pool</span>
      </div>
      <div className="flex justify-center items-center">
        <InputNumber value={form.amount} onChange={handleChangeAmount} onInvalidNumber={handleInvalidAmount} />
        {errors?.amount ? (
          <p className="text-cherRed">{errors.amount}</p>
        ) : (
          <Button buttonName="CHARGE POOL!" onClickEvent={onClickEvent} />
        )}
      </div>
    </div>
  );
};

export default Withdraw;

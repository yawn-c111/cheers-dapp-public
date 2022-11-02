import React from 'react';

import DaoCard from '@/components/shared/card/DaoCard';
import { DaoType } from '@/types/struct';

type Props = {
  daosData: DaoType[];
};

const DaosInfo = ({ daosData }: Props) => {
  return (
    <div className="flex justify-start w-full pl-12">
      {daosData.map((daoData, i) => (
        <DaoCard key={i} daoData={daoData} />
      ))}
    </div>
  );
};

export default DaosInfo;

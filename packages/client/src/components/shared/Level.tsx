import React from 'react';

type Props = {
  ex: number;
};

const Level = ({ ex }: Props) => {
  const level = Math.floor(ex / 100);
  const remainingEx = ex % 100;

  return (
    <div className="flex flex-col justify-between w-8/12 ">
      <div className="text-xs">Lv.{level}</div>
      <div className="border border-white h-6 rounded-sm">
        <div className={`h-[22px] w-[${remainingEx}%] bg-cherRed`}></div>
      </div>
    </div>
  );
};

export default Level;

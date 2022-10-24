import Link from 'next/link'
import React from 'react';
import { Button, InputSerch } from '@/components/shared/parts';

const Header = () => {
  return (
    <div className="sticky top-0 h-20 bg-primary z-50">
      <div className="flex justify-between items-center px-12 h-full">
        <Link href='/'>
        <div className='px-4 py-2 bg-gradient-to-r from-cherGreen to-cherBlue cursor-pointer'>CHEERS</div>
        </Link>
        <div>
          <InputSerch />
        </div>
        <div>
          <Button buttonName="CONECT WALLET" fontSize="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from 'react';

import Link from 'next/link';

import { Button, InputSerch, LinkButton } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';

const Header = () => {
  const walletContext = useWalletContext();
  return (
    <div className="sticky top-0 h-20 bg-primary z-50">
      <div className="flex justify-between items-center px-12 h-full">
        <Link href="/">
          <div className="px-4 py-2 bg-gradient-to-r from-cherGreen to-cherBlue cursor-pointer">CHEERS</div>
        </Link>
        <div>
          <InputSerch />
        </div>
        <div>
          {!walletContext?.currentAccount ? (
            <Button buttonName="CONECT WALLET" fontSize="text-sm" onClick={walletContext?.connectWallet} />
          ) : (
            <LinkButton buttonName="MY PROFILE!" fontSize="text-sm" url={walletContext?.currentAccount} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

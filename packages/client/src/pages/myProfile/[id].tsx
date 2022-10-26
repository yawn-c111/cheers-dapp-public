import React from 'react';

import { useRouter } from 'next/router';

import { BeforLogin } from '@/components/pages/home';
import { useWalletContext } from '@/context/state';

const MyProfile = () => {
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforLogin />
      ) : (
        <>
          {id != walletContext?.currentAccount ? (
            <>
              <BeforLogin />
            </>
          ) : (
            <>
              <div>{id}</div>;
            </>
          )}
        </>
      )}
    </>
  );
};

export default MyProfile;

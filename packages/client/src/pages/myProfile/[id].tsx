import React from 'react';

import { useRouter } from 'next/router';

import { BeforLogin } from '@/components/pages/home';
import { MyProfileCard } from '@/components/pages/myProfile';
import { useWalletContext } from '@/context/state';

const Profile = () => {
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
              <MyProfileCard id={id} />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Profile;

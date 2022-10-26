import { ChallengeProjects, CheerProjects, Profile } from '@/components/pages/profile';
import { PageTitle } from '@/components/shared/parts';
import React from 'react';
import { useWalletContext } from '@/context/state';
import { BeforLogin } from '@/components/pages/home';

const UserProfile = () => {
  const walletContext = useWalletContext();
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforLogin />
      ) : (
        <>
          <PageTitle title="USER PROFILE" />
          <Profile />
          <ChallengeProjects />
          <CheerProjects />
        </>
      )}
    </>
  );
};

export default UserProfile;

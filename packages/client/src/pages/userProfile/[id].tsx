import React from 'react';

import { useRouter } from 'next/router';

import { BeforeLogin } from '@/components/pages/home';
import { ChallengeProjects, CheerProjects } from '@/components/pages/myProfile';
import { UserProfileCard } from '@/components/pages/userProfile';
import { PageTitle } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';

const UserProfile = () => {
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforeLogin />
      ) : (
        <>
          <PageTitle title="USER PROFILE" />
          <UserProfileCard userOwnerAddress={id} />
          <ChallengeProjects projectOwnerAddress={id} />
          <CheerProjects ownerWalletAddress={id} />
        </>
      )}
    </>
  );
};

export default UserProfile;

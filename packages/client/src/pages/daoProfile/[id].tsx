import React from 'react';

import { useRouter } from 'next/router';

import { DaoProfileCard } from '@/components/pages/daoProfile';
import { BeforeLogin } from '@/components/pages/home';
import { ChallengeProjects, CheerProjects } from '@/components/pages/myProfile';
import { PageTitle } from '@/components/shared/parts';
import { useWalletContext } from '@/context/state';
import { usePoolListDataContract } from '@/hooks/contracts/data'

const Profile = () => {
  const walletContext = useWalletContext();
  const router = useRouter();
  const id = router.query.id?.toString() || '';
  const poolAddress = id;
  const {myPoolAddress} = usePoolListDataContract({poolAddress})
  return (
    <>
      {!walletContext?.currentAccount ? (
        <BeforeLogin />
      ) : (
        <>
          <PageTitle title="DAO PROFILE" />
          <DaoProfileCard daoOwnerAddress={id} />
          <ChallengeProjects projectOwnerAddress={myPoolAddress} />
          <CheerProjects ownerWalletAddress={id} />
        </>
      )}
    </>
  );
};

export default Profile;

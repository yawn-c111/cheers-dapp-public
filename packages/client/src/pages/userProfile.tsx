import { ChallengeProjects, CheerProjects, UserProfile } from '@/components/pages/profile';
import { PageTitle } from '@/components/shared/parts'
import React from 'react';

const userProfile = () => {
  return (
    <>
      <PageTitle title='USER PROFILE' />
      <UserProfile />
      <ChallengeProjects />
      <CheerProjects />
    </>
  );
};

export default userProfile;

import { ChallengeProjects, CheerProjects, UserProfile } from '@/components/pages/profile';
import React from 'react';

const userProfile = () => {
  return (
    <>
      <UserProfile />
      <ChallengeProjects />
      <CheerProjects />
    </>
  );
};

export default userProfile;

import React from 'react';
import { usersData } from '../../data';
import { UserCard } from '../pages';

const UsersInfo = () => {
  return (
    <div className="flex justify-start w-full pl-12">
      {usersData.map((userData, i) => (
        <UserCard key={i} userData={userData} />
      ))}
    </div>
  );
};

export default UsersInfo;

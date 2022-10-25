import { AfterLogin, BeforLogin } from '@/components/pages/home';
import type { NextPage } from 'next';
import { useWallet } from '@/hooks';
import { useEffect } from 'react';

const Home: NextPage = () => {
  const { currentAccount } = useWallet();
  useEffect

  return (
    <>
      {console.log(currentAccount)}
      {!currentAccount ? <BeforLogin /> : <AfterLogin />}
    </>
  );
};

export default Home;

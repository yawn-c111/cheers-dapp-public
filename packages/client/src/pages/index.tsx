import { AfterLogin } from '@/components/pages/home';
import { useWalletContext } from '@/context/state';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <AfterLogin />
    </>
  );
};

export default Home;

import { AfterLogin, BeforLogin } from '@/components/pages/home';
import { useWalletContext } from '@/context/state';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const walletContext = useWalletContext();
  return <>{!walletContext?.currentAccount ? <BeforLogin /> : <AfterLogin />}</>;
};

export default Home;

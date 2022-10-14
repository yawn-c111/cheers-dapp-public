import { DaosInfo, UserInfo } from '@/components/pages';
import type { NextPage } from 'next';



const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen">
      
      <DaosInfo />
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT CHEERS</div>
      <UserInfo />
      <div className="text-2xl ml-4 mt-12 mb-4 font-bold">HOT CHLLENGER</div>
      <UserInfo />
    </div>
  );
};

export default Home;

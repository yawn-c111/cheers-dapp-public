import React, { ReactNode } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="bg-primary">
      <Header />
      <div className="grid grid-cols-8">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-7">
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;

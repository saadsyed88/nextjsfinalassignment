'use client';

import Footer from './includes/Footer';
import MainHeader from './includes/MainHeader';
import SubMenu from './includes/SubMenu';
import TopMenu from './includes/TopMenu';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id='MainLayout' className=' min-w-[1050px] max-w-[90%] mx-auto'>
        <div>
          <TopMenu />
          <MainHeader />
          <SubMenu />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;

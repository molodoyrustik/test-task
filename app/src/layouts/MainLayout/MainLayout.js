import React from 'react';

import './MainLayout.scss';

import ShopHeader from '../../components/shop-header';

const MainLayout = (props) => {
  const { children } = props;
  return (
    <main role="main" className="container">
      <ShopHeader />
      {children}
    </main>
  );
};

export default MainLayout;

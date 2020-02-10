import React from 'react';

import MainLayout from '../../layouts/MainLayout';

import ProductList from '../../components/product-list';
import ShoppingCartTable from '../../components/shopping-cart-table';

const IndexPage = (props) => {
  return (
    <MainLayout>
      <ProductList />
      <ShoppingCartTable />
    </MainLayout>
  );
};

export default IndexPage;

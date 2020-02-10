import React from 'react';
import BookList from '../product-list';
import ShoppingCartTable from '../shopping-cart-table';

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;

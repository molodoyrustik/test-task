import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './shop-header.css';

const ShopHeader = ({ cartItems }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">Products</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {cartItems.length} items
        </div>
      </Link>
    </header>
  );
};

export default connect((state) => {
  return {
    cartItems: state.shoppingCart.cartItems,
  };
}, null)(ShopHeader);

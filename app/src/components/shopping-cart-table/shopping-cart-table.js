import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';

import './shopping-cart-table.css';
import ProductsActions from '../../actions';
import ProductsService from '../../services';

const ShoppingCartTable = (props) => {
  const { priceAmount: { RUB, USD, EUR }, actions, cartItems } = props;

  return (
    <div className="shopping-cart-table">
      <Button type="primary" size="large" onClick={actions.toCountProductsAmount(cartItems)}>To count</Button>
      <h2>Price amount RUB: {RUB}</h2>
      <h2>Price amount USD: {USD}</h2>
      <h2>Price amount EUR: {EUR}</h2>
    </div>
  );
};

const mapStateToProps = ({ shoppingCart: { priceAmount, cartItems } }) => {
  return { priceAmount, cartItems };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: new ProductsActions(new ProductsService(), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);

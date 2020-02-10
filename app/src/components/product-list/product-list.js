import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductsService from '../../services';
import ProductsActions from '../../actions';

import ProductListItem from '../product-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './product-list.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <ul className="book-list">
      {products.map((product) => {
        return (
          <li key={product.id} className="book-list__item">
            <ProductListItem book={product} onAddToCart={onAddToCart} />
          </li>
        );
      })}
    </ul>
  );
};

class ProductListContainer extends Component {
  componentDidMount() {
    this.props.actions.getProducts()();
  }

  render() {
    const {
      products, loading, error, actions,
    } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ProductList products={products} onAddToCart={actions.addProductToCart} />;
  }
}

const mapStateToProps = ({ productList: { products, loading, error } }) => {
  return { products, loading, error };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: new ProductsActions(new ProductsService(), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);

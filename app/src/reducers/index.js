import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import productListReducer from './productList';
import shoppingCartReducer from './shoppingCart';

export default (history) => combineReducers({
  router: connectRouter(history),
  productList: productListReducer,
  shoppingCart: shoppingCartReducer,
});

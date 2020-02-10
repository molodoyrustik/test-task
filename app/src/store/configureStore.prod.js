import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

import createRootReducer from '../reducers';

export default function (history) {
  const enhancer = compose(applyMiddleware(thunk, routerMiddleware(history)));
  const store = createStore(createRootReducer(history), enhancer);

  return store;
}

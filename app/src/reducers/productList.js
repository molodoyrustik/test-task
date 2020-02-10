import {
  GET_PRODUCTS, START, SUCCESS, FAIL,
} from '../constants';

const defaultState = {
  products: [],
  loading: true,
  error: null,
};

export default (productListState = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS + START:
      return {
        products: [],
        loading: true,
        error: null,
      };

    case GET_PRODUCTS + SUCCESS:
      return {
        products: payload.products.data,
        loading: false,
        error: null,
      };

    case GET_PRODUCTS + FAIL:
      return {
        products: [],
        loading: false,
        error: payload.error,
      };

    default:
      return productListState;
  }
};

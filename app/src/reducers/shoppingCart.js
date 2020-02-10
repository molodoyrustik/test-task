import {
  ADD_PRODUCT_TO_CARTS, TO_COUNT_PRODUCTS_AMOUNT, SUCCESS,
} from '../constants';

const defaultState = {
  cartItems: [],
  priceAmount: {
    RUB: '',
    EUR: '',
    USD: '',
  },
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CARTS + SUCCESS:
      return { ...state, cartItems: [...state.cartItems, payload.product] };

    case TO_COUNT_PRODUCTS_AMOUNT + SUCCESS:
      return { ...state, priceAmount: payload.data };

    default:
      return state;
  }
};

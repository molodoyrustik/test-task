import {
  GET_PRODUCTS, ADD_PRODUCT_TO_CARTS, TO_COUNT_PRODUCTS_AMOUNT, START, SUCCESS, FAIL,
} from '../constants';

/**
 * Экшны для работы с товарами.
 */
class ProductsActions {
  constructor(service, dispatch) {
    this.service = service;
    this.dispatch = dispatch;
  }

  /**
   * Получить все товары.
   */
  getProducts = () => {
    return () => {
      this.dispatch({
        type: GET_PRODUCTS + START,
        payload: {},
      });

      return this.service
        .getProducts()
        .then((response) => {
          return this.dispatch({
            type: GET_PRODUCTS + SUCCESS,
            payload: { products: response },
          });
        })
        .catch((error) => {
          this.dispatch({
            type: GET_PRODUCTS + FAIL,
            payload: { error },
          });
        });
    };
  };

  addProductToCart = (product) => {
    return () => {
      this.dispatch({
        type: ADD_PRODUCT_TO_CARTS + SUCCESS,
        payload: { product },
      });
    };
  };

  toCountProductsAmount = (products) => {
    return () => {
      this.dispatch({
        type: TO_COUNT_PRODUCTS_AMOUNT + START,
        payload: {},
      });

      return this.service
        .toCountProductsAmount(products)
        .then((response) => {
          return this.dispatch({
            type: TO_COUNT_PRODUCTS_AMOUNT + SUCCESS,
            payload: { data: response.data },
          });
        })
        .catch((error) => {
          this.dispatch({
            type: TO_COUNT_PRODUCTS_AMOUNT + FAIL,
            payload: { error },
          });
        });
    };
  }
}

export default ProductsActions;

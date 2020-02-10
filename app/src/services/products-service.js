import axios from 'axios';

export default class ProductsService {
  data = [
    {
      id: 1,
      name: 'Iphone 5s',
      price: 32,
      quantity: Math.ceil(Math.random() * 100 + 10),
      currency: 'RUB',
    },
    {
      id: 2,
      name: 'Iphone 6s',
      price: 122,
      quantity: Math.ceil(Math.random() * 100 + 10),
      currency: 'RUB',
    },
  ];

  getProducts() {
    return axios.get('http://localhost:3001/api/v1/products');
  }

  addProductToCart(product) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 700);
    });
  }

  toCountProductsAmount(products) {
    return axios.post('http://localhost:3001/api/v1/products/amount', products);
  }
}

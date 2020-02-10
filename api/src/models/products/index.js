export default (ctx) => {
  if (!ctx.log) throw '!log';

  class ProductsModel {
    constructor() {
      this.data = [
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
    }

    getProducts() {
      return this.data;
    }
  }

  return new ProductsModel();
}

import axios from 'axios';

const data = [
  {
    id: 1,
    name: 'Iphone 5s',
    price: 1,
    quantity: Math.ceil(Math.random() * 100 + 10),
    currency: 'USD',
  },
  {
    id: 3,
    name: 'Iphone 5s',
    price: 1,
    quantity: Math.ceil(Math.random() * 100 + 10),
    currency: 'EUR',
  },
  {
    id: 2,
    name: 'Iphone 6s',
    price: 1,
    quantity: Math.ceil(Math.random() * 100 + 10),
    currency: 'RUB',
  },
];

export default (ctx) => {
  const Products = ctx.models.Products;

  let controller = {};

  controller.getProducts = async function(req, res) {
    const user = Products.getProducts();

    return res.json(user);
  };

  controller.getProductsAmount = async function(req, res) {
    try {
      const answer = {
        RUB: 0,
        EUR: 0,
        USD: 0
      };

      const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
      const products = req.body;
      const valute = response.data.Valute;
      const EUR = valute.EUR.Value;
      const USD = valute.USD.Value;

      products.forEach((product) => {
        if (product.currency === 'RUB') {
          answer.RUB += parseInt(product.price);
          answer.USD += product.price / USD;
          answer.EUR += product.price / EUR;
        }
        if (product.currency === 'USD') {
          answer.RUB += product.price * USD;
          answer.USD += parseInt(product.price);
          answer.EUR += product.price * USD / EUR;
        }
        if (product.currency === 'EUR') {
          answer.RUB += product.price * EUR;
          answer.USD += product.price * EUR / USD;
          answer.EUR += parseInt(product.price);
        }
      });

      return res.json(answer);
    } catch(err) {
      return res.json(err);
    }
  };

  return controller
}

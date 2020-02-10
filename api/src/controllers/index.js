import Products from './products';

export default function () {
  return {
    Products: Products(...arguments),
  }
}

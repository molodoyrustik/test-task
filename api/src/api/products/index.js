import _ from 'lodash';

import { AsyncRouter } from 'express-async-router';

export default (ctx) => {
  if (!_.has(ctx, 'controllers.Products.getProducts')) throw '!controllers.Products.getProducts';

	const api = AsyncRouter();

  api.get('/', ctx.controllers.Products.getProducts);
  api.post('/amount', ctx.controllers.Products.getProductsAmount);

	return api;
}

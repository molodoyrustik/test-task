import { AsyncRouter } from 'express-async-router';
import expressJwt from 'express-jwt';
import getUser from './products';


export default (ctx) => {
	const api = AsyncRouter();

  api.all('/', () => ({ok: true, version: '1.0.0'}))

	api.use('/products', getUser(ctx));

	// api.use('/', (err, req, res, next) => {
  //   console.log(err);
	// 	return res.status(401).json([{ flag: false, message: 'Не авторизован' }])
	// })

	return api;
}

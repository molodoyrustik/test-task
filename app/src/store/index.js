import storeProd from './configureStore.prod';
import storeDev from './configureStore.dev';

let store = {};

if (PRODUCTION === 'production') {
  store = storeProd;
} else {
  store = storeDev;
}

export default store;

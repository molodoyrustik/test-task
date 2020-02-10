import React from 'react';
import ReactDOM from 'react-dom';

import Client from './client';
import history from './history';
import configureStore from './store';

const store = configureStore(history);

window.store = store;

ReactDOM.render(<Client store={store} history={history} />, document.getElementById('root'));

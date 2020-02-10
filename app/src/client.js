import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from './routes';

import './sass/main.scss';
import 'antd/dist/antd.css';

import ErrorBoundry from './components/error-boundry';

class Client extends Component {
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <ErrorBoundry>
          <BrowserRouter>
            <ConnectedRouter history={history}>{renderRoutes(routes)}</ConnectedRouter>
          </BrowserRouter>
        </ErrorBoundry>
      </Provider>
    );
  }
}

export default hot(module)(Client);

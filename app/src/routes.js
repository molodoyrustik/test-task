import React from 'react';

import IndexPage from './pages/index-page';
import NotfoundPage from './pages/notfound-page';

const Routes = [
  {
    path: '/',
    exact: true,
    component: IndexPage,
  },
  {
    path: '*',
    component: NotfoundPage,
  },
];

export default Routes;

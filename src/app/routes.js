import React from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import debug from 'debug';

import MainLayout from './Layouts/MainLayout';
import Homepage from './containers/Homepage/Homepage';
import NotFound from './containers/NotFound/NotFound';

debug('pivot:routes');

const siteTitle = 'Responsive Table';

export const routes = {
  homepage: {
    path: '/',
    label: 'Pivot Table',
    title: `${siteTitle}`,
    component: Homepage
  },
  notFound: {
    path: '*', // path * will return a 404
    title: `${siteTitle} - Page Not Found`,
    component: NotFound
  }
};

const indexRoute = (route) => Object.assign({}, route, { path: null });

export const LinkHelper = ({ to, ...props }) => {
  if (!routes[to]) throw new Error(`Route to '${to}' not found`);
  return (
    <Link to={ routes[to].path } { ...props }>
      { props.children || routes[to].label }
    </Link>
  );
};

export function makeRoutes() {
  return (
    <Route path="/" component={ MainLayout }>
      <IndexRoute { ...indexRoute(routes.homepage) } />
      <Route { ...routes.game } />
      <Route { ...routes.notFound } />
    </Route>
  );
}

import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import debug from 'debug';

import configureStore from '../../app/store/configureStore';
import { makeRoutes } from '../../app/routes';
import fetchComponentData from '../lib/fetchComponentData';

const setRouterContext = (req, res, next) => {
  const log = debug('pivot:set-router-context');

  const store = configureStore();
  const routes = makeRoutes(store);

  match({
    routes,
    location: req.url
  }, (error, redirect, renderProps) => {
    log('match', req.url);
    if (error) {
      throw error;
    } else if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
    } else {
      // path * will return a 404
      const isNotFound = renderProps.routes.find((route) => route.path === '*');
      const setContext = () => {
        const InitialComponent = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        );
        res.initialState = store.getState(); // eslint-disable-line
        res.status(isNotFound ? 404 : 200); // eslint-disable-line
        res.routerContext = res.renderPageToString(InitialComponent); // eslint-disable-line
        next();
      };

      fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
        .then(setContext)
        .catch((err) => res.render500(err));
    }
  });
};

export default setRouterContext;
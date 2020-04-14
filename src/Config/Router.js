import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from '../Components';
import { routes } from './routes';
import { PlayerPage } from '../Pages';
import baseUrl from './baseUrl';

const Router = () => {
  const RouterComponent = Object.getOwnPropertyNames(routes).map(
    (route, id) => {
      return (
        <Route
          key={id}
          path={routes[route].path}
          component={routes[route].component}
          exact
        />
      );
    }
  );

  return (
    <Switch>
      <Route path={baseUrl.PLAYER} component={PlayerPage} />
      <Layout>{RouterComponent}</Layout>
    </Switch>
  );
};

export default withRouter(Router);

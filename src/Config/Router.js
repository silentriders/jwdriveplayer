import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from '../Components';
import {
  HomePage
} from '../Pages';
import AuthenticationRoute from './AuthenticationRoute';

export const routes = {
  DEFAULT: { path: '/', component: { HomePage }},
  HOME: { path: '/home', component: { HomePage }}
};

const Router = () => {
  const RouterComponent = Object.getOwnPropertyNames(routes).map(
    (route, id) => {
      return (
        <AuthenticationRoute
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
      <Route id="home" path={'/'} component={HomePage} />
      <Layout>{RouterComponent}</Layout>
    </Switch>
  );
};

export default withRouter(Router);

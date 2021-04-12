import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Restaurants from '../cityPage/Restaurants';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <div>
      <Alert />
      <Switch>
        <Route exact path='/city/:cityName' component={Restaurants} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;

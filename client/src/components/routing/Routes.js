import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Restaurants from '../cityPage/Restaurants';
import NotFound from '../layout/NotFound';
// import Spinner from '../layout/Spinner';
//
// import Register from '../auth/Register';
// import Login from '../auth/Login';
// import Settings from '../settings/Settings';
// import Dashboard from '../dashboard/Dashboard';
// import FormulaCreate2 from '../formulas/formula-create/FormulaCreate2';
// import FormulaItem from '../formulas/formula-view/FormulaItem';
// import FormulaEdit2 from '../formulas/formula-edit/FormulaEdit2';
// import Testing from '../layout/Testing';
// import UserRoute from '../routing/UserRoute';
// import AdminRoute from '../routing/AdminRoute';

const Routes = () => {
  return (
    <div>
      <Alert />
      <Switch>
        <Route exact path='/city/:cityName' component={Restaurants} />
        {/* <Route exact path='/mama' component={Spinner} /> */}

        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;

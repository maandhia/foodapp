import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './history';

import Landing from './components/layout/Landing';
import Routes from './components/routing/Routes';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// importing css
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

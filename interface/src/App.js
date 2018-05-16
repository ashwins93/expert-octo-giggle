import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalesForm from './components/SalesForm/index';
import NavBar from './components/NavBar';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <h1 className="title">Hello World</h1>}
        />
        <Route exact path="/sales/new" component={SalesForm} />
      </Switch>
    </div>
  </Router>
);

export default App;

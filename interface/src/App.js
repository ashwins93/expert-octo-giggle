import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalesForm from './components/SalesForm/index';
import NavBar from './components/NavBar';
import OrdersView from './components/OrdersView';
import ProjectionForm from './components/ProjectionForm';
import ProjectionsView from './components/ProjectionsView';

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
        <Route exact path="/orders" component={OrdersView} />
        <Route exact path="/projections/new" component={ProjectionForm} />
        <Route exact path="/projections" component={ProjectionsView} />
      </Switch>
    </div>
  </Router>
);

export default App;

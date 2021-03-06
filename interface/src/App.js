import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SalesForm from './components/SalesForm/index';
import NavBar from './components/NavBar';
import OrdersView from './components/OrdersView';
import ProjectionForm from './components/ProjectionForm';
import ProjectionsView from './components/ProjectionsView';
import AnalysisView from './components/AnalysisView';
import Landing from './components/Landing';
import ProjectionDetailView from './components/ProjectionDetailView';
import OrderDetailView from './components/OrderDetailView';

const App = () => (
  <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/sales/new" component={SalesForm} />
        <Route exact path="/orders" component={OrdersView} />
        <Route exact path="/projections/new" component={ProjectionForm} />
        <Route exact path="/projections" component={ProjectionsView} />
        <Route exact path="/analysis/:id" component={AnalysisView} />
        <Route exact path="/projections/:id" component={ProjectionDetailView} />
        <Route exact path="/orders/:id" component={OrderDetailView} />
      </Switch>
    </div>
  </Router>
);

export default App;

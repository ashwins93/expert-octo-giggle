import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch, Link
} from 'react-router-dom';
import SalesForm from './components/SalesForm/index';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</ Link></li>
          <li>
            <Link to="/sales/new">New Order</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" render={() => <h1 className="title">Hello World</h1>} />
        <Route exact path="/sales/new" component={SalesForm} />
      </Switch>
    </div>
  </Router>
);

export default App;
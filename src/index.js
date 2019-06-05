import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import WrapCounterCountainer from './containers/WrapCounterCountainer'
import AboutContainer from './containers/AboutContainer'
import NotFoundContainer from './containers/NotFoundContainer'

const routing = (
    <Router>
      <div>
        <Tabs indicatorColor="primary" textColor="primary" value={0}>
            <Tab label="About us" to='/about' component={Link} value={0}/>
            <Tab label="Counters" to='/counters' component={Link} value={1}/>
        </Tabs>
        <Switch>
            <Route path="/counters" component={WrapCounterCountainer} />
            <Route path="/about" component={AboutContainer} />
            <Route component={NotFoundContainer} />
        </Switch>
      </div>
    </Router>
)

ReactDOM.render(
    routing,
    document.getElementById('root')
  );
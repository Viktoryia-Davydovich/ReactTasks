import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Redirect} from 'react-router';

import WrapCounterCountainer from '../../containers/WrapCounterCountainer'
import AboutContainer from '../../containers/AboutContainer'
import NotFoundContainer from '../../containers/NotFoundContainer'
import MenuContainer from '../../containers/MenuContainer'

const Routing = () => (
  <div>
    <Router>
    <Switch>
      <Route path="/404" component={NotFoundContainer} />
      <Route>
        <div>
        <MenuContainer/>
          <div>
              <Route exact path="/" />             
              <Route path="/counters" component={WrapCounterCountainer} />
              <Route path="/about" component={AboutContainer} />
              <Redirect from="*" to="/404" />
          </div>
        </div>
      </Route>              
    </Switch>
    </Router>
  </div>
)

export default Routing;
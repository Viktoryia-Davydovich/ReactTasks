import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Redirect} from 'react-router';

import WrapCounterCountainer from '../../containers/WrapCounterCountainer'
import AboutContainer from '../../containers/AboutContainer'
import NotFoundContainer from '../../containers/NotFoundContainer'
import MenuContainer from '../../containers/MenuContainer'
import LoginContainer from '../../containers/LoginContainer'

const Routing = () => {

  return(
    <div>
    <Router>
      <Switch>
        <Route path="/404" component={NotFoundContainer} />
        <Route>
          <div>
            <MenuContainer/>
            <Switch>
              <Route exact path='/' />            
              <Route path="/counters" component={WrapCounterCountainer} />
              <Route path="/about" component={AboutContainer} />
              <Route path="/login" component={LoginContainer} />
              <Redirect from="*" to="/404"/> 
            </Switch>
          </div>
        </Route>         
      </Switch>
    </Router>
  </div>
  )
}

export default Routing;
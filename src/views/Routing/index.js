import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import {Redirect} from 'react-router';

import WrapCounterCountainer from '../../containers/WrapCounterCountainer'
import AboutContainer from '../../containers/AboutContainer'
import NotFoundContainer from '../../containers/NotFoundContainer'
import MenuContainer from '../../containers/MenuContainer'
import LoginContainer from '../../containers/LoginContainer'

import LoginReduxContainer from '../../pages/LoginRedux/components/LoginReduxContainer'
import SuccessContainer from '../../pages/LoginRedux/LoginSuccess/container/SuccessContainer'
import LoginReduxFormContainer from '../../pages/LoginReduxForm/components/LoginReduxFormContainer';
import SuccessFormContainer from '../../pages/LoginReduxForm/LoginSuccess/container/SuccessContainer';

const Routing = () => {

  return(
    <Router>
      <Switch>
        <Route path="/404" component={NotFoundContainer} />
        <Route>
            <MenuContainer/>
            <Switch>
              <Route exact path='/' />            
              <Route path="/counters" component={WrapCounterCountainer} />
              <Route path="/about" component={AboutContainer} />
              <Route path="/login" component={LoginContainer} />
              <Route path="/login-redux" component={LoginReduxContainer} />
              <Route path="/login-redux/success" component={SuccessContainer}/>
              <Route path="/login-redux-form" component={LoginReduxFormContainer}/>
              <Route path="/login-redux-form/success" component={SuccessFormContainer} />
              <Route component={()=> (<Redirect from='*' to='/404'/>)}/> 
            </Switch>
        </Route>         
      </Switch>
    </Router>
  )
}

export default Routing;
import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";

import store from "./store/store";
import {About, WrapCounter, Login, LoginRedux, LoginReduxForm,
  LoginReduxSuccess, LoginReduxFormSuccess, NotFound} from './pages/index'
import MenuComponent from './components/index'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/404" component={NotFound} />
            <Route>
              <MenuComponent />
              <Switch>
                <Route exact path="/" />
                <Route path="/counters" component={WrapCounter} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route exact path="/login-redux" component={LoginRedux} />
                <Route path="/login-redux/success" component={LoginReduxSuccess} />
                <Route
                  exact
                  path="/login-redux-form"
                  component={LoginReduxForm}
                />
                <Route
                  path="/login-redux-form/success"
                  component={LoginReduxFormSuccess}
                />
                <Route component={() => <Redirect from="*" to="/404" />} />
              </Switch>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

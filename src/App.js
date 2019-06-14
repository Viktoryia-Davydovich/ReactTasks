import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";

import store from "./store/store";
import {
  About,
  WrapCounter,
  Login,
  LoginRedux,
  LoginReduxForm,
  LoginReduxSuccess,
  LoginReduxFormSuccess,
  NotFound
} from "./pages";
import MenuComponent from "./components";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MenuComponent />
          <Switch>
            <Route exact path="/" />
            <Route path="/counters" component={WrapCounter} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route exact path="/login-redux" component={LoginRedux} />
            <Route exact path="/login-redux-form" component={LoginReduxForm} />
            <Route path="/login-redux/success" component={LoginReduxSuccess} />
            <Route
              path="/login-redux-form/success"
              component={LoginReduxFormSuccess}
            />
            <Route path="/404" component={NotFound} />
            <Route component={() => <Redirect from="*" to="/404" />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;

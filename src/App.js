import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import setAuthToken from "./store/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/actions/authentication";
import store from "./store/store";
import {
  About,
  WrapCounter,
  Register,
  LoginReduxForm,
  NotFound
} from "./pages/";
import MenuComponent from "./components";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MenuComponent />
        <Switch>
          <Route exact path="/" />
          <Route path="/counters" component={WrapCounter} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginReduxForm} />
          <Route path="/404" component={NotFound} />
          <Route component={() => <Redirect from="*" to="/404" />} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

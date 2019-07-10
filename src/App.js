import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";

import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import {
  About,
  WrapCounter,
  Register,
  LoginReduxForm,
  Notes,
  NotFound
} from "./pages/";

function App(props) {
  const { isAuthenticated } = props.auth;

  const authRoutes = [
    <Route path="/counters" component={WrapCounter} />,
    <Route path="/about" component={About} />
  ];

  const guestRoutes = [
    <Route path="/register" component={Register} />,
    <Route path="/login" component={LoginReduxForm} />
  ];

  return (
    <Wrapper>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" />
          <Route path="/notes" component={Notes} />
          <Route path="/404" component={NotFound} />
          {isAuthenticated ? authRoutes : guestRoutes}
          <Route
            component={() => (
              <Redirect from="*" to={isAuthenticated ? "/notes" : "/login"} />
            )}
          />
        </Switch>
      </Router>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);

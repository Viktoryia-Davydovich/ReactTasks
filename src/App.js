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

  if (isAuthenticated) {
    return (
      <Wrapper>
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/" />
            <Route path="/counters" component={WrapCounter} />
            <Route path="/about" component={About} />
            <Route path="/notes" component={Notes} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginReduxForm} />
            <Route path="/404" component={NotFound} />
            <Route component={() => <Redirect from="*" to="/404" />} />
          </Switch>
        </Router>
      </Wrapper>
    );
  } else {
  }
  return (
    <Wrapper>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" />
          <Route path="/register" component={Register} />
          <Route path="/login" component={LoginReduxForm} />
          <Route path="/notes" component={Notes} />
          <Route path="/404" component={NotFound} />
          <Route component={() => <Redirect from="*" to="/login" />} />
        </Switch>
      </Router>
    </Wrapper>
  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);

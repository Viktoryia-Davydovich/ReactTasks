import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";

import Menu from "./components/Menu";
import Wrapper from "./components/Wrapper";
import {
  About,
  WrapCounter,
  Register,
  LoginReduxForm,
  NotFound
} from "./pages/";

function App() {
  return (
    <Wrapper>
      <Router>
        <Menu />
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
    </Wrapper>
  );
}

export default App;

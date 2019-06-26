import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";
import Button from "@material-ui/core/Button";

import { useTheme } from "./components/themeSwitch";
import store from "./store/store";
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
  const themeState = useTheme();
  return (
    <Provider store={store}>
      <Wrapper>
        <Router>
          <div>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => themeState.toggle()}
            >
              {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </Button>
          </div>
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
    </Provider>
  );
}

export default App;

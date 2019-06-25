import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import Button from "@material-ui/core/Button";

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
import styled from "@emotion/styled";
import { useTheme } from "./components/themeSwitch";

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

const Wrapper = styled("div")`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
  h1 {
    color: ${props => props.theme.body};
  }
`;

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
      </Wrapper>
    </Provider>
  );
}

export default App;

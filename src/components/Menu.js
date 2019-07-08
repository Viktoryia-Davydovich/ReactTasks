import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import { useTheme } from "./themeSwitch";
import { logoutUser } from "../store/actions/authentication";
import { setTab } from "../store/actions/types";

const Menu = props => {
  const handleChange = (event, tab) => {
    props.setTab({ tab: tab });
  };

  const onLogout = event => {
    event.preventDefault();
    props.logoutUser(props.history);
  };

  const { isAuthenticated } = props.auth;

  const authLinks = (
    <div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={props.tab}
        onChange={handleChange}
      >
        <Tab label="About us" to="/about" component={Link} />
        <Tab label="Counters" to="/counters" component={Link} />
        <Tab label="Notes" to="/notes" component={Link} />
        <Button variant="contained" color="secondary" onClick={onLogout}>
          Logout
        </Button>
      </Tabs>
    </div>
  );

  const guestLinks = (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      value={props.tab}
      onChange={handleChange}
    >
      <Tab label="Register" to="/register" component={Link} />
      <Tab label="Log in" to="/login" component={Link} />
      <Tab label="Notes" to="/notes" component={Link} />
    </Tabs>
  );

  const themeState = useTheme();

  return (
    <div style={{ padding: "15px" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => themeState.toggle()}
      >
        {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
      {isAuthenticated ? authLinks : guestLinks}
    </div>
  );
};

Menu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  tab: state.tab
});

const mapDispatchToProps = dispatch => ({
  logoutUser: data => dispatch(logoutUser(data)),
  setTab: data => dispatch(setTab(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Menu));

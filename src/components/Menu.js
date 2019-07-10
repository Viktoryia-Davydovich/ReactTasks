import React, { useCallback, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import { useTheme } from "./themeSwitch";
import { logoutUser } from "../store/actions/authentication";

const Menu = props => {
  const themeState = useTheme();
  const { isAuthenticated } = props.auth;
  const [tab, setTab] = useState("notes");

  useEffect(() => {
    setTab(window.location.pathname.split("/").pop());
  }, []);

  const handleChange = useCallback((event, tab) => {
    setTab(tab);
  }, []);

  const onLogout = useCallback(event => {
    event.preventDefault();
    props.logoutUser(props.history);
  }, []);

  const authLinks = [
    <Tab label="About us" to="/about" component={Link} value="about" />,
    <Tab label="Counters" to="/counters" component={Link} value="counters" />,
    <Button variant="contained" color="secondary" onClick={onLogout}>
      Logout
    </Button>
  ];

  const guestLinks = [
    <Tab label="Register" to="/register" component={Link} value="register" />,
    <Tab label="Log in" to="/login" component={Link} value="login" />
  ];

  return (
    <div style={{ padding: "15px", paddingRight: "45px" }}>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => themeState.toggle()}
      >
        {themeState.dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={tab}
        onChange={handleChange}
      >
        <Tab label="Notes" to="/notes" component={Link} value="notes" />
        {isAuthenticated ? authLinks : guestLinks}
      </Tabs>
    </div>
  );
};

Menu.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  logoutUser: data => dispatch(logoutUser(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Menu));

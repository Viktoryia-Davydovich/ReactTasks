import React, { Component, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import { logoutUser } from "../store/actions/authentication";

const MenuComponent = props => {
  const [value, setValue] = React.useState("");

  const onLogout = event => {
    event.preventDefault();
    props.logoutUser(props.history);
  };

  const handleChange = (event, value) => {
    setValue(value);
  };

  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={value}
        onChange={handleChange}
      >
        <Tab label="About us" to="/about" component={Link} />
        <Tab label="Counters" to="/counters" component={Link} />
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
      value={value}
      onChange={handleChange}
    >
      <Tab label="Register" to="/register" component={Link} />
      <Tab label="Log in" to="/login" component={Link} />
    </Tabs>
  );

  return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
};

MenuComponent.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(MenuComponent));

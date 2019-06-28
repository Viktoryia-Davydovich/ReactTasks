import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";

import { useTheme } from "./themeSwitch";
import { logoutUser } from "../store/actions/authentication";

const Menu = props => {
  /*
  const [tab, setTab] = useState(0);
*/
  const onLogout = event => {
    event.preventDefault();
    props.logoutUser(props.history);
  };
  /*
  const handleChange = (event, tab) => {
    setTab(tab);
  };
*/
  const { isAuthenticated, user } = props.auth;
  console.log(props.changeTab);
  debugger;
  const { actTab } = props.tab;
  const changeTab = props.changeTab;

  const authLinks = (
    <div>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={actTab}
        onChange={changeTab}
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
      value={actTab}
      onChange={changeTab}
    >
      <Tab label="Register" to="/register" component={Link} />
      <Tab label="Log in" to="/login" component={Link} />
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

export default connect(
  mapStateToProps,
  { logoutUser, changeTab }
)(withRouter(Menu));

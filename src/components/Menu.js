import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { logoutUser } from "../store/actions/authentication";

class MenuComponent extends Component {
  state = {
    value: false
  };

  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <div>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="About us" to="/about" component={Link} />
          <Tab label="Counters" to="/counters" component={Link} />
        </Tabs>
        <a style="float: right" onClick={this.onLogout.bind(this)}>
          Logout
        </a>
      </div>
    );
    const guestLinks = (
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Register" to="/register" component={Link} />
        <Tab label="Log in" to="/login" component={Link} />
      </Tabs>
    );
    return <div>{isAuthenticated ? authLinks : guestLinks}</div>;
  }
}

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

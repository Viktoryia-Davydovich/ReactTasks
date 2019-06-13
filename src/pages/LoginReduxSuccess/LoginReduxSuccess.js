import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

import { emailSelector, passwordSelector } from "../LoginRedux/LoginReduxSelectors";

class LoginReduxSuccess extends Component {
  render() {

    return (
      <div className={this.classes.root}>
      <h2 className={this.classes.title}>You have successfully logged in</h2>
      <p className={this.classes.text}>Email: {this.email}</p>
      <p className={this.classes.text}>Password: {this.password}</p>
      </div>
    )
  }
}

LoginReduxSuccess.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state)
});

export default connect(mapStateToProps)(withStyles(styles)(LoginReduxSuccess));

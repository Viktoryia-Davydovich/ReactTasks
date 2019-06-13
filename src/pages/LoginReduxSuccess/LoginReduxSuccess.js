import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

import { emailSelector, passwordSelector } from "../LoginRedux/LoginReduxSelectors";

const LoginReduxSuccess = ({classes}, props) => {

  const prop = {
    email: props.email,
    password: props.password
  };

    return (
      <div className={classes.root}>
      <h2 className={classes.title}>You have successfully logged in</h2>
      <p className={classes.text}>Email: {prop.email}</p>
      <p className={classes.text}>Password: {prop.password}</p>
      </div>
    )
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

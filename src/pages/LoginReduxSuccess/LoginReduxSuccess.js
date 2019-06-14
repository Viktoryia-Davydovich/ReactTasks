import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import styles from "./LoginReduxSuccessStyles";

import {
  emailSelector,
  passwordSelector
} from "../LoginRedux/store/LoginReduxSelectors";

class LoginReduxSuccess extends Component {
  render() {
    return (
      <div className={this.props.classes.root}>
        <h2 className={this.props.classes.title}>
          You have successfully logged in
        </h2>
        <p className={this.props.classes.text}>Email: {this.props.email}</p>
        <p className={this.props.classes.text}>
          Password: {this.props.password}
        </p>
      </div>
    );
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";

import {
  emailSelector,
  passwordSelector
} from "../LoginReduxForm/store/LoginReduxFormSelectors";
import styles from "./styles";

class LoginReduxFormSuccess extends Component {
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

LoginReduxFormSuccess.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state)
});

export default connect(mapStateToProps)(
  withStyles(styles)(LoginReduxFormSuccess)
);

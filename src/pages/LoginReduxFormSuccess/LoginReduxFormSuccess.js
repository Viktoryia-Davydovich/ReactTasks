import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Success from "./views/index";
import { emailSelector, passwordSelector } from "../LoginReduxForm/selectors/index";

class LoginReduxFormSuccess extends Component {
  render() {
    console.log("Success Form Container", this);
    const props = {
      email: this.props.email,
      password: this.props.password
    };

    return <Success {...props} />;
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

export default connect(mapStateToProps)(LoginReduxFormSuccess);

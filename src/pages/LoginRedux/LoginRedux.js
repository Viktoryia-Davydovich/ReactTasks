import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import LoginForm from "./LoginReduxView";
import { validation, errorMessages } from "../../constants/validation";
import {
  updateEmail,
  updatePassword,
  loginSuccess,
  checkEmailError,
  checkPasswordError
} from "./store/LoginReduxActions";
import {
  emailSelector,
  passwordSelector,
  emailErrorSelector,
  passwordErrorSelector
} from "./store/LoginReduxSelectors";

import { LoginReduxSuccess } from "../index";

class LoginRedux extends Component {
  validateField = (name, value) => {
    switch (name) {
      case "email":
        return validation.email.test(value) ? "" : errorMessages.email;
      case "password":
        return validation.password.test(value) ? "" : errorMessages.password;
      default:
        break;
    }

    return "";
  };

  handleSubmit = event => {
    event.preventDefault();

    const {
      email,
      password,
      checkEmailError,
      checkPasswordError,
      loginSuccess,
      history
    } = this.props;

    const errorPassword = this.validateField("password", password);
    const errorEmail = this.validateField("email", email);

    if (!errorPassword && !errorEmail) {
      loginSuccess();
      console.log(this.props.location);
      history.push("/login-redux/success");
    } else {
      checkEmailError({ emailError: errorEmail });
      checkPasswordError({ passwordError: errorPassword });
    }
  };

  onChangePassword = event => {
    this.props.updatePassword({ password: event.target.value });
  };

  onChangeEmail = event => {
    this.props.updateEmail({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <LoginForm
          email={this.props.email}
          password={this.props.password}
          emailError={this.props.emailError}
          passwordError={this.props.passwordError}
          onChangePassword={this.onChangePassword}
          onChangeEmail={this.onChangeEmail}
          handleSubmit={this.handleSubmit}
        />
        <Route path="/login-redux/success" component={LoginReduxSuccess} />
      </div>
    );
  }
}

LoginRedux.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  checkEmailError: PropTypes.func.isRequired,
  checkPasswordError: PropTypes.func.isRequired,
  loginSuccess: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
  passwordError: passwordErrorSelector(state),
  emailError: emailErrorSelector(state)
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  updateEmail: data => dispatch(updateEmail(data)),
  updatePassword: data => dispatch(updatePassword(data)),
  checkPasswordError: data => dispatch(checkPasswordError(data)),
  checkEmailError: data => dispatch(checkEmailError(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRedux);

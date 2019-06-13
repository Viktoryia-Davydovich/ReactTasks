import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginForm from "./LoginReduxView";
import { validation, errorMessages } from "../../constants/validation";
import {
  updatePassword,
  updateEmail,
  loginSuccess,
  setEmailError,
  setPasswordError
} from "./LoginReduxActions";
import {
  emailSelector,
  passwordSelector,
  emailErrorSelector,
  passwordErrorSelector
} from "./LoginReduxSelectors";

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

    const { loginSuccess, email, password, setEmailError, setPasswordError, history } = this.props;
    
    const errorPassword = this.validateField("password", password);
    const errorEmail = this.validateField("email", email);

    if (!errorPassword && !errorEmail) {
      loginSuccess();
      history.push("/login-redux/success");
    }
    else if (errorPassword){
      setPasswordError({passwordError: errorPassword})
    }
    else if (errorEmail){
      setEmailError({emailError: errorEmail})
    }
  };

  onChangeEmail = event => {
    this.props.updateEmail({ email: event.target.value });
  };

  onChangePassword = event => {
    this.props.updatePassword({ password: event.target.value });
  };

  render() {
    const props = {
      email: this.props.email,
      password: this.props.password,
      emailError: this.props.emailError,
      passwordError: this.props.passwordError,
      onChangePassword: this.onChangePassword,
      onChangeEmail: this.onChangeEmail,
      handleSubmit: this.handleSubmit
    };

    return <LoginForm {...props} />;
  }
}

LoginRedux.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  errorPassword: PropTypes.string.isRequired,
  errorEmail: PropTypes.string.isRequired,
  loginSuccess: PropTypes.func.isRequired,
  setEmailError: PropTypes.func.isRequired,
  setPasswordError: PropTypes.func.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
  errorPassword: passwordErrorSelector(state),
  errorEmail: emailErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: data => dispatch(loginSuccess(data)),
  setEmailError: data => dispatch(setEmailError(data)),
  setPasswordError: data => dispatch(setPasswordError(data)),
  updatePassword: data => dispatch(updatePassword(data)),
  updateEmail: data => dispatch(updateEmail(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRedux);

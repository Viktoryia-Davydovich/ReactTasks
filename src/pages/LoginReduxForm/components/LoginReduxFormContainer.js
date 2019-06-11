import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginForm from "../views/LoginForm/index";
import { validation, errorMessages } from "../../../views/Login/validation";
import { submitForm } from "../actions";
import { emailSelector, passwordSelector } from "../selectors";

class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: ""
    };
  }

  handleSubmit = values => {
    this.props.submitForm(values);
    this.props.history.push("/login-redux-form/success");
  };

  emailValidation = value => {
    return validation.email.test(value) ? "" : errorMessages.email;
  };

  passwordValidation = value => {
    return validation.password.test(value) ? "" : errorMessages.password;
  };

  emailOnChange = (event, value) => {
    this.setState({ email: value });
  };

  passwordOnChange = (event, value) => {
    this.setState({ password: value });
  };

  render() {
    const props = {
      email: this.state.email,
      password: this.state.password,
      onSubmit: this.handleSubmit,
      emailValidation: this.emailValidation,
      passwordValidation: this.passwordValidation,
      emailOnChange: this.emailOnChange,
      passwordOnChange: this.passwordOnChange
    };

    return <LoginForm {...props} />;
  }
}

LoginContainer.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: emailSelector(state),
  password: passwordSelector(state)
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

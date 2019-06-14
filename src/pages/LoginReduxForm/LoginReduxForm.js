import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginForm from "./LoginReduxFormView";
import { validation, errorMessages } from "../../constants/validation";
import { submitReduxForm } from "./LoginReduxFormActions";
import { emailSelector, passwordSelector } from "./LoginReduxFormSelectors";

class LoginReduxForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: ""
    };
  }

  handleSubmit = values => {
    this.props.submitReduxForm(values);
    this.props.history.push("/login-redux-form/success");
  };

  emailValidation = (value = "") => {
    return validation.email.test(value) ? "" : errorMessages.email;
  };

  passwordValidation = (value = "") => {
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

LoginReduxForm.propTypes = {
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  submitReduxForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  email: emailSelector(state),
  password: passwordSelector(state)
});

const mapDispatchToProps = dispatch => ({
  submitReduxForm: data => dispatch(submitReduxForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxForm);

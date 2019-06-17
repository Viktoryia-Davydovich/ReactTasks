import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import LoginForm from "./LoginReduxFormView";
import { validation, errorMessages } from "../../constants/validation";
import { submitReduxForm } from "./store/LoginReduxFormActions";
import {
  emailSelector,
  passwordSelector
} from "./store/LoginReduxFormSelectors";
import { LoginReduxFormSuccess } from "../index";

class LoginReduxForm extends Component {
  state = {
    password: "",
    email: ""
  };

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
    return (
      <div>
        <LoginForm
          email={this.state.email}
          password={this.state.password}
          onSubmit={this.handleSubmit}
          emailValidation={this.emailValidation}
          passwordValidation={this.passwordValidation}
          emailOnChange={this.emailOnChange}
          passwordOnChange={this.passwordOnChange}
        />
        <Route
          path="/login-redux-form/success"
          component={LoginReduxFormSuccess}
        />
      </div>
    );
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

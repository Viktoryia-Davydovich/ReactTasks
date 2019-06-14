import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import LoginForm from "./LoginReduxView";
import { validation, errorMessages } from "../../constants/validation";
import {
submitForm
} from "./LoginReduxActions";
import {
  emailSelector,
  passwordSelector,
  emailErrorSelector,
  passwordErrorSelector
} from "./LoginReduxSelectors";

class LoginRedux extends Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      passwordError: "",
      emailError: ""
    };
  }

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

  handleSubmit = (event, values) => {
    event.preventDefault();

    const { email, password, history } = this.props;
    
    const errorPassword = this.validateField("password", password);
    const errorEmail = this.validateField("email", email);

    if (!errorPassword && !errorEmail) {   
      history.push("/login-redux/success");
      this.props.submitForm(values);
      this.props.history.push("/login-redux-form/success");
    }
    else if (errorPassword){
      this.setState({passwordError: errorPassword})
    }
    else {
      this.setState({emailError: errorEmail})
    }
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const props = {
      email: this.state.email,
      password: this.state.password,
      emailError: this.state.emailError,
      passwordError: this.state.passwordError,
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
  passwordError: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  password: passwordSelector(state),
  email: emailSelector(state),
  passwordError: passwordErrorSelector(state),
  emailError: emailErrorSelector(state),
});

const mapDispatchToProps = dispatch => ({
  submitForm: data => dispatch(submitForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRedux);

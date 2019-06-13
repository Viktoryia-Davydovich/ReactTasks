import React, { Component } from "react";

import { validation, errorMessages } from "../../constants/validation";
import LoginForm from "./views/index";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      errorPassword: "",
      errorEmail: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateField = (name, value) => {
    return validation[name].test(value) ? "" : errorMessages[name];
  };

  handleSubmit = event => {
    event.preventDefault();

    const errorPassword = this.validateField("password", this.state.password);
    const errorEmail = this.validateField("email", this.state.email);

    if (!errorPassword && !errorEmail) {
      console.log(JSON.stringify(this.state));

      this.setState({
        password: "",
        email: "",
        errorPassword: "",
        errorEmail: ""
      });
    } else {
      this.setState({
        errorPassword,
        errorEmail
      });
    }
  };

  render() {
    const props = {
      email: this.state.email,
      password: this.state.password,
      errorEmail: this.state.errorEmail,
      errorPassword: this.state.errorPassword,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit
    };

    return <LoginForm {...props} />;
  }
}

export default Login;

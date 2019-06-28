import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authentication";
import LoginForm from "./LoginReduxFormView";

const LoginReduxForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsLogin, setErrorsLogin] = useState({});

  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: email,
      password: password
    };

    props.loginUser(user);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    } else if (props.errorsLogin) {
      setErrorsLogin(props.errorsLogin);
    }
  }, [props.auth.isAuthenticated, props.history, props.errorsLogin]);

  return (
    <LoginForm
      email={email}
      password={password}
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      errors={errorsLogin}
    />
  );
};

LoginReduxForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errorsLogin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errorsLogin: state.errorsLogin
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginReduxForm);

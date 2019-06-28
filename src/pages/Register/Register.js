import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

import { registerUser } from "../../store/actions/authentication";
import LoginForm from "./RegisterView";

const Register = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const doRegisterUser = props.registerUser;
  const hist = props.history;

  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      doRegisterUser({ email, password }, hist);
    },
    [email, password, doRegisterUser, hist]
  );

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/");
    } else if (props.errors) {
      setErrors(props.errors);
    }
  }, [props.auth.isAuthenticated, props.history, props.errors]);

  return (
    <LoginForm
      email={email}
      password={password}
      onSubmit={handleSubmit}
      onEmailChange={handleEmailChange}
      onPasswordChange={handlePasswordChange}
      errors={errors}
    />
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

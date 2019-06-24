import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authentication";
import LoginForm from "./LoginReduxFormView";

const LoginReduxForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

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
    } else {
      setErrors({ errors });
    }
  }, [props.auth.isAuthenticated, props.history, errors]);

  return (
    <div>
      <LoginForm
        email={email}
        password={password}
        onSubmit={handleSubmit}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        errors={errors}
      />
    </div>
  );
};

LoginReduxForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginReduxForm);

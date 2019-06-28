import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/authentication";
import LoginForm from "./LoginReduxFormView";
import { setTab } from "../../store/actions/types";

const LoginReduxForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsLogin, setErrorsLogin] = useState({});

  const doLoginUser = props.loginUser;
  const handleSubmit = useCallback(
    event => {
      event.preventDefault();
      doLoginUser({ email, password });
    },
    [email, password, doLoginUser]
  );

  const handleEmailChange = useCallback(event => {
    setEmail(event.target.value);
  }, []);

  const handlePasswordChange = useCallback(event => {
    setPassword(event.target.value);
  }, []);

  useEffect(() => {
    props.setTab({ tab: 1 });
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
  errorsLogin: state.errorsLogin,
  tab: state.tab
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUser(data)),
  setTab: data => dispatch(setTab(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginReduxForm);

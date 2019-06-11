import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";

import { withStyles } from "@material-ui/core/styles";

import style from "./styles";
import InputField from "../InputField";

const LoginForm = props => {
  const {
    email,
    password,
    emailOnChange,
    passwordOnChange,
    emailValidation,
    passwordValidation,
    onSubmit,
    classes,
    handleSubmit
  } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="xs" className={classes.alignmentStyle}>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Field
            component={InputField}
            name="email"
            type="email"
            label="Email Address"
            validate={emailValidation}
            onChange={emailOnChange}
          />
          <Field
            component={InputField}
            name="password"
            type="password"
            label="Password"
            validate={passwordValidation}
            onChange={passwordOnChange}
          />
          <Button
            className={classes.button}
            type="submit"
            variant="contained"
            color="default"
          >
            Log In
          </Button>
        </form>
        <pre>{JSON.stringify({ email, password })}</pre>
      </Container>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
  requiredValidation: PropTypes.func.isRequired,
  emailOnChange: PropTypes.func.isRequired,
  passwordOnChange: PropTypes.func.isRequired
};

const LoginFormWithStyle = withStyles(style)(LoginForm);

export default reduxForm({
  form: "login"
})(LoginFormWithStyle);

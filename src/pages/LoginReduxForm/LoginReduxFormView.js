import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";

import LoginStyles from "./styles";

const LoginForm = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  errors,
  classes
}) => {
  return (
    <Container maxWidth="xs" className={classes.alignmentStyle}>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <form onSubmit={onSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={onEmailChange}
        />
        {errors.email && <Typography color="error">{errors.email}</Typography>}
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
        />
        {errors.password && (
          <Typography color="error">{errors.password}</Typography>
        )}
        <Button type="submit" variant="contained" color="secondary">
          Log in
        </Button>
      </form>
    </Container>
  );
};
/*
LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};
*/
export default withStyles(LoginStyles)(LoginForm);

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
  onChange,
  onSubmit,
  errors,
  classes
}) => {
  return (
    <Container maxWidth="xs" className={classes.alignmentStyle}>
      <Typography component="h1" variant="h5">
        Register
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
          onChange={onChange}
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
          onChange={onChange}
        />
        {errors.password && (
          <Typography color="error">{errors.password}</Typography>
        )}
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
      <pre>{JSON.stringify({ email, password })}</pre>
    </Container>
  );
};

export default withStyles(LoginStyles)(LoginForm);

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';

const LoginForm = (props) => {
  const { 
    email, 
    password, 
    emailOnChange, 
    passwordOnChange, 
    emailValidation,
    passwordValidation,
    requiredValidation,
    onSubmit,
    classes,
    handleSubmit
  } = props;

  return (
    <Container maxWidth="xs" className={classes.alignmentStyle}>
    <Typography component="h1" variant="h5">
      Log in
    </Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        variant="outlined" margin="normal" required fullWidth 
        id="email" label="Email Address" name="email" 
        autoComplete="email" autoFocus  value={email}
        onChange={emailOnChange} validate={[requiredValidation, emailValidation]}/>
      <TextField
        variant="outlined" margin="normal" required fullWidth 
        name="password" label="Password" type="password" id="password" 
        autoComplete="current-password" value={password}
        onChange={passwordOnChange} validate={[requiredValidation, passwordValidation]}/>
      <Button type="submit" variant="contained" color="default" >
        Log In
      </Button>
    </form>
    <pre>{ JSON.stringify({email, password}) }</pre>
    </Container>
  )
}

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailValidation: PropTypes.func.isRequired,
  passwordValidation: PropTypes.func.isRequired,
  requiredValidation: PropTypes.func.isRequired,
  emailOnChange: PropTypes.func.isRequired,
  passwordOnChange: PropTypes.func.isRequired,
}

const LoginFormWithStyle = withStyles(style)(LoginForm);

export default reduxForm({
  form: 'login',
})(LoginFormWithStyle);

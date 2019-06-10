import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import LoginStyles from './styles'

const LoginRedux =  ({ email, password, errorEmail, errorPassword, onChangeEmail, onChangePassword, handleSubmit, classes }) => {   
      return (
        <Container maxWidth="xs" className={classes.alignmentStyle}>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                id="email" label="Email Address" name="email" 
                autoComplete="email" autoFocus  value={email}
                onChange={onChangeEmail}/>
                <Typography color="error">{errorEmail}</Typography>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                name="password" label="Password" type="password" id="password" 
                autoComplete="current-password" value={password}
                onChange={onChangePassword}/>
                <Typography color="error">{errorPassword}</Typography>
              <Button type="submit" variant="contained" color="secondary" >
                Log In
              </Button>
            </form>
            <pre>{ JSON.stringify({email, password}) }</pre>
        </Container>
      );
    }

    LoginRedux.propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        errorEmail: PropTypes.string.isRequired,
        errorPassword: PropTypes.string.isRequired,
        onChangeEmail: PropTypes.func.isRequired,
        onChangePassword: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
      }

export default withStyles(LoginStyles)(LoginRedux);
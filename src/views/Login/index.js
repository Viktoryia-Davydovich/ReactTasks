import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';

const Login =  ({ email, password, errorEmail, errorPassword, handleChange, handleSubmit }) => {   
      return (
        <Container maxWidth="xs">
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                id="email" label="Email Address" name="email" 
                autoComplete="email" autoFocus  value={email}
                onChange={handleChange}/>
                <span>{errorEmail}</span>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                name="password" label="Password" type="password" id="password" 
                autoComplete="current-password" value={password}
                onChange={handleChange}/>
                <span>{errorPassword}</span>
              <Button type="submit" variant="contained" color="primary" >
                Log In
              </Button>
            </form>
        </Container>
      );
    }

    Login.propTypes = {
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
        errorEmail: PropTypes.string.isRequired,
        errorPassword: PropTypes.string.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
      }

export default Login;
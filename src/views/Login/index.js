import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Login = () => {   
      return (
        <Container maxWidth="xs">
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <form noValidate>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                id="email" label="Email Address" name="email" 
                autoComplete="email" autoFocus/>
              <TextField
                variant="outlined" margin="normal" required fullWidth 
                name="password" label="Password" type="password" id="password" 
                autoComplete="current-password"/>
              <Button type="submit" variant="contained" color="primary" >
                Log In
              </Button>
            </form>
        </Container>
      );
    }
export default Login;
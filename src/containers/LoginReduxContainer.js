import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {validation, errorMessages} from '../views/Login/validation'
import LoginRedux from '../views/LoginRedux/index'
import { updatePassword, updateEmail, loginSuccess, loginError } from '../views/LoginRedux/actions';
import { emailSelector, passwordSelector, emailErrorSelector, passwordErrorSelector } from '../views/LoginRedux/selectors';


class LoginReduxContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            password: '',
            email: '',
            errorPassword: '',
            errorEmail: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit(this);
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    validateField = (name, value) => {
        return validation[name].test(value) ? '' : errorMessages[name];
    }

    handleSubmit(form, event){
        if (event){
            event.preventDefault();
        }


        const { loginSuccess, loginError, password, email, history } = this.props;

        const errorPassword = this.validateField('password', this.state.password);
        const errorEmail = this.validateField('email', this.state.email);

        if (!errorPassword && !errorEmail){
            loginSuccess();
            history.push('/study/login-redux/success');
        }

        else{
            loginError({ 
                errorPassword,
                errorEmail
            })
        }
    }

    render(){

        const props = {
            email: this.state.email,
            password: this.state.password,
            errorEmail: this.state.errorEmail,
            errorPassword: this.state.errorPassword,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
        }

        return (
            <LoginRedux {...props}/>
        )
    }
}

LoginReduxContainer.propTypes = {
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    errorPassword: PropTypes.string.isRequired,
    errorEmail: PropTypes.string.isRequired,
    loginSuccess: PropTypes.func.isRequired,
    loginError: PropTypes.func.isRequired,
    updatePassword: PropTypes.func.isRequired,
    updateEmail: PropTypes.func.isRequired,
  }
  
  const mapStateToProps = state => ({
    password: passwordSelector(state),
    email: emailSelector(state),
    errorPassword: passwordErrorSelector(state),
    errorEmail: emailErrorSelector(state),
  });
  
  const mapDispatchToProps = dispatch => ({
    loginSuccess: data => dispatch(loginSuccess(data)),
    loginError: data => dispatch(loginError(data)),
    updatePassword: data => dispatch(updatePassword(data)),
    updateEmail: data => dispatch(updateEmail(data)),
  });

export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer);
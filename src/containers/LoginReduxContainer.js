import React, { Component } from 'react';

import {validation, errorMessages} from '../views/Login/validation'
import LoginRedux from '../views/LoginRedux/index'

class LoginReduxContainer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            password: '',
            email: '',
            errorPassword: '',
            errorEmail: '',
        }
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    validateField = (name, value) => {
        return validation[name].test(value) ? '' : errorMessages[name];
    }

    handleSubmit(event){
        event.preventDefault();

        const errorPassword = this.validateField('password', this.state.password);
        const errorEmail = this.validateField('email', this.state.email);

        if (!errorPassword && !errorEmail){
            const { userInfo } = this.state;
            this.props.onLogin({ userInfo });

        }

        else{
            this.setState({ 
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

export default LoginReduxContainer;
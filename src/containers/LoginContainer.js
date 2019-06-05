import React, { Component } from 'react';
import Login from '../views/Login/index';

class LoginContainer extends Component{

    render(){
        console.log('render - LoginContainer');

        return (
            <Login/>
        )
    }

}

export default LoginContainer;
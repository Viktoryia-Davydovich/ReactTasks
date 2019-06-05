import React, { Component } from 'react';
import NotFound from '../views/NotFound/index';

class NotFoundContainer extends Component{

    render(){
        console.log('render - NotFoundContainer');

        return (
            <NotFound/>
        )
    }
}

export default NotFoundContainer;
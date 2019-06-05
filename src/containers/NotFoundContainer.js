import React, { Component } from 'react';
import NotFound from '../views/NotFound/index';

class NotFoundContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    render(){
        console.log('render - AboutContainer');

        return (
            <NotFound/>
        )
    }

}

export default NotFoundContainer;
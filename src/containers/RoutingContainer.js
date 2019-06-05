import React, { Component } from 'react';
import Routing from '../views/Routing/index';

class RoutingContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    render(){
        console.log('render - RoutingContainer');

        return (
            <Routing/>
        )
    }

}

export default RoutingContainer;
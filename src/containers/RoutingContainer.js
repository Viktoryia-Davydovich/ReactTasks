import React, { Component } from 'react';
import Routing from '../views/Routing/index';


class RoutingContainer extends Component{
    render(){
        console.log('render - RoutingContainer');

        return (
            <Routing/>
        )
    }

}

export default RoutingContainer;
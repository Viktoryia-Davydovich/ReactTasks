import React, { Component } from 'react';
import Menu from '../views/Menu/index';

class MenuContainer extends Component{

    render(){
        console.log('render - MenuContainer');

        return (
            <Menu onChange={this.handleChange}/>
        )
    }

}

export default MenuContainer;
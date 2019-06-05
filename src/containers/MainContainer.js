import React, { Component } from 'react';
import Main from '../views/Main/index'

class MainContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    render(){
        console.log('render - MainContainer');

        return (
            <Main/>
        )
    }

}

export default MainContainer;
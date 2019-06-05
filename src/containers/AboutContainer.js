import React, { Component } from 'react';
import About from '../views/About/index';

class AboutContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    render(){
        console.log('render - AboutContainer');

        return (
            <About/>
        )
    }

}

export default AboutContainer;
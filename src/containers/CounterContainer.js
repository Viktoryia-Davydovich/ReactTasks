import React, { Component } from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {count: 0};
    }

    increment(){
        this.setState(state => ({
            count: state.count++
        }))
    }

    decrement(){
        this.setState(state => ({
            count: state.count--
        }))
    }

    render(){
        return <Counter {...props}/>
    }
}
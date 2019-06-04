import React, { Component } from 'react';

import Counter from '../views/Counter';


class CounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    increment = () => {
        this.setState(state => ({
            count: this.state.count + 1
        }))
    }

    decrement = () => {
        this.setState(state => ({
            count: this.state.count - 1
        }))
    }

    reset = () => {
        this.setState(state => ({
            count:0
        }))
    }

    render(){

        const props = {
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
            count: this.state.count,
        }

        return (
            <Counter {...props}/>
        )
    }
}

export default CounterContainer;
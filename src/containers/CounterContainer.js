import React, { Component } from 'react';

class CounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {count: 0};
        
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
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

    reset(){
        this.setState(state => ({
            count:0
        }))
    }

    render(){
        const props = {
            increment: this.increment,
            decrement: this.decrement,
            reset: this.reset,
            counter: this.state.count,
        }

        return <CounterContainer {...props}/>
    }
}

export default CounterContainer;
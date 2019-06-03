import React, { Component } from 'react';

class Counter extends Component{
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
        return <Counter {...props}/>
    }
}

export default Counter;
import React, { Component } from 'react';

import Counter from '../views/Counter';


class CounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
    }

    isCountEven = () => (this.state.count %  2 === 0);

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


    componentDidMount() {
        console.log('component did mount');
    }

    shouldComponentUpdate() {
        console.log('should component update');
    }

    componentWillReceiveProps() {
        console.log('component will receive props');
    }

    componentDidUpdate() {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }
    
}

export default CounterContainer;
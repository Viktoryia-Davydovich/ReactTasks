import React, { Component } from 'react';

import WrapCounter from '../views/WrapCounter/index';


class WrapCounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            counters_count: 1,
            counters: [
                {
                    key: 1
                }
            ]
        }
    }

    add_counter = () => {

        this.setState({
            counters_count: this.state.counters_count + 1,
            counters: [{ key: this.state.counters_count + 1 }]
        });
    }

    delete_counter = () => {

        if (this.state.counters_count > 1){
            
        this.setState({
            counters_count: this.state.counters_count - 1,
            counters: [{ key: this.state.counters_count - 1 }]
        });
       
        }
    }

    reset_counters = () => 
    {

        this.setState({
            counters_count: 1,
            counters: [{ key: 1 }]
        });
    }

    render(){
        const props = {
            counters_count: this.state.counters_count,
            counters: this.state.counters,
            add_counter: this.add_counter,
            delete_counter: this.delete_counter,
            reset_counters: this.reset_counters,
        }

        return (
            <WrapCounter {...props}/>
        )
    }

    componentDidMount(){
        console.log("component did mount - WrapCounterContainer");
    }

    shouldComponentUpdate() {
        console.log("component should update - WrapCounterContainer");
    
        return true;
    }

    componentWillReceiveProps() {
        console.log("component will receive props - WrapCounterContainer");
    
        return true;
    }

    componentDidUpdate() {
        console.log("component did update - WrapCounterContainer");
    }

    componentWillUnmount(){
        console.log("component will unmount - WrapCounterContainer");
    }
}

export default WrapCounterContainer;
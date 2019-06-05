import React, { Component } from 'react';

import WrapCounter from '../views/WrapCounter/index';


class WrapCounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            counters_count: 1,
            counters: [
                {
                    key: 1,
                }
            ],
            label: ''
        }
    }

    add_counter = () => {
        const existingsCounters = this.state.counters.slice(0);

        this.setState({
            counters_count: this.state.counters_count + 1,
            counters: [...existingsCounters, { key: this.state.counters_count + 1 }],
            label: 'add'
        });
    }

    delete_counter = () => {

        const existingsCounters = this.state.counters.slice(0);

        if (this.state.counters_count > 1){
            
        this.setState({
            counters_count: this.state.counters_count - 1,
            counters: existingsCounters.slice(0, -1),
            label: 'delete'
        });
       
        }
    }

    reset_counters = () => 
    {
        const existingsCounters = this.state.counters.slice(0);

        this.setState({
            counters_count: 1,
            counters: existingsCounters.slice(0, 1),
            label: 'reset'
        });
    }

    render(){
        const props = {
            label: this.state.label,
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
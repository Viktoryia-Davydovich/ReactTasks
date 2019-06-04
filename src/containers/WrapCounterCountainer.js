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
        const newCounters = [...this.state.counters];

        this.setState({
            counters_count: this.state.counters_count + 1,
            counters: [...newCounters, { key: this.state.number + 1 }]
        })
    }



    delete_counter = () => {
        const newCounters = [...this.state.counters];

        if (newCounters.length > 1){
            
        this.setState({
            counters_count: this.state.counters_count - 1,
            counters: newCounters.slice(0, -1)
        })
        }
    }


    reset_counters = () => 
    {
        const newCounters = [...this.state.counters];

        this.setState({
            counters_count: 1,
            counters: newCounters.slice(0,1)
        })
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
        console.log("component did mount");
    }

    shouldComponentUpdate() {
        console.log('component should update');
    
        return true;
    }

    componentWillReceiveProps() {
        console.log('ccomponent will receive props');
    
        return true;
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }
}

export default WrapCounterContainer;
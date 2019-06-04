import React, { Component } from 'react';

import WrapCounter from '../views/WrapCounter/index';


class WrapCounterContainer extends Component{
    constructor(props){
        super(props);

        this.state = {
            counters_count: 1
        }
    }

    add_counter = () => (
        this.setState({
            counters_count: this.state.counters_count + 1
        })
    )

    delete_counter = () => (
        this.setState({
            counters_count: this.state.counters_count - 1
        })
    )

    reset_counters = () => (
        this.setState({
            counters_count: 1
        })
    )

    render(){
        const props = {
            counters_count: this.state.counters_count,
            add_counter: this.add_counter,
            delete_counter: this.delete_counter,
            reset_counters: this.reset_counters,
        }

        return (
            <WrapCounter {...props}/>
        )
    }
}

export default WrapCounterContainer;
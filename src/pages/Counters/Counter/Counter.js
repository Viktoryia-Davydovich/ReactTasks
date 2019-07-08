import React, { Component } from "react";

import CounterForm from "./view/index";

class Counter extends Component {
  state = {
    count: 0
  };

  isCountEven = () => this.state.count % 2 === 0;

  increment = () => {
    this.setState(() => ({
      count: this.state.count + 1
    }));
  };

  decrement = () => {
    this.setState(() => ({
      count: this.state.count - 1
    }));
  };

  reset = () => {
    this.setState(() => ({
      count: 0
    }));
  };

  render() {
    return (
      <CounterForm
        increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
        count={this.state.count}
      />
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.label === "add" && this.isCountEven()) {
      this.setState({ count: this.state.count + 1 });
    }

    if (nextProps.label === "delete" && !this.isCountEven()) {
      this.setState({ count: this.state.count - 1 });
    }

    if (nextProps.label === "reset") {
      this.setState({ count: 0 });
    }
  }
}

export default Counter;

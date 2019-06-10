import React, { Component } from "react";

import Counter from "../views/Counter";

class CounterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

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
    console.log("render - CounterContainer");

    const props = {
      increment: this.increment,
      decrement: this.decrement,
      reset: this.reset,
      count: this.state.count
    };

    return <Counter {...props} />;
  }

  componentDidMount() {
    console.log("component did mount - CounterContainer");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("should component update - CounterContainer");

    return this.state.count !== nextState.count;
  }

  componentWillReceiveProps(nextProps) {
    console.log("component will receive props - CounterContainer");

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

  componentDidUpdate() {
    console.log("component did update - CounterContainer");
  }

  componentWillUnmount() {
    console.log("component will unmount - CounterContainer");
  }
}

export default CounterContainer;

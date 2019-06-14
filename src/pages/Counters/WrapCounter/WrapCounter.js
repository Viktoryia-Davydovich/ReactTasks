import React, { Component } from "react";

import WrapCounterForm from "./view/index";

class WrapCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countersCount: 1,
      counters: [
        {
          key: 1
        }
      ],
      label: ""
    };
  }

  addCounter = () => {
    const existingsCounters = this.state.counters.slice(0);

    this.setState({
      countersCount: this.state.countersCount + 1,
      counters: [...existingsCounters, { key: this.state.countersCount + 1 }],
      label: "add"
    });
  };

  deleteCounter = () => {
    const existingsCounters = this.state.counters.slice(0);

    if (this.state.countersCount > 1) {
      this.setState({
        countersCount: this.state.countersCount - 1,
        counters: existingsCounters.slice(0, -1),
        label: "delete"
      });
    }
  };

  resetCounters = () => {
    const existingsCounters = this.state.counters.slice(0);

    this.setState({
      countersCount: 1,
      counters: existingsCounters.slice(0, 1),
      label: "reset"
    });
  };

  render() {
    console.log("render - WrapCounterContainer");

    return (
      <WrapCounterForm
        label={this.state.label}
        countersCount={this.state.countersCount}
        counters={this.state.counters}
        addCounter={this.addCounter}
        deleteCounter={this.deleteCounter}
        resetCounters={this.resetCounters}
      />
    );
  }

  componentDidMount() {
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

  componentWillUnmount() {
    console.log("component will unmount - WrapCounterContainer");
  }
}

export default WrapCounter;

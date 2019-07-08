import React, { Component } from "react";

import WrapCounterForm from "./view/index";

class WrapCounter extends Component {
  state = {
    countersCount: 1,
    counters: [
      {
        key: 1
      }
    ],
    label: ""
  };

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

  shouldComponentUpdate() {
    return true;
  }

  componentWillReceiveProps() {
    return true;
  }
}

export default WrapCounter;

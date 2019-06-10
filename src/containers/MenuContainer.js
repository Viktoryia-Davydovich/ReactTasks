import React, { Component } from "react";
import Menu from "../views/Menu/index";

class MenuContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: false
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    console.log("render - MenuContainer");
    const props = {
      handleChange: this.handleChange,
      value: this.state.value
    };

    return <Menu {...props} />;
  }
}

export default MenuContainer;

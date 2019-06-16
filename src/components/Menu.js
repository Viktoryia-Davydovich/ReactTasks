import React, { Component } from "react";
import { Link } from "react-router-dom";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

class MenuComponent extends Component {
  
  state = {
    value: false
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {

    return (
      <Tabs
      indicatorColor="primary"
      textColor="primary"
      value={this.state.value}
      onChange={this.handleChange}
    >
      <Tab label="About us" to="/about" component={Link} />
      <Tab label="Counters" to="/counters" component={Link} />
      <Tab label="Log in" to="/login" component={Link} />
      <Tab label="Log in with Redux" to="/login-redux" component={Link} />
      <Tab
        label="Log in with Redux Form"
        to="/login-redux-form"
        component={Link}
      />
    </Tabs>
    );
  }
}

export default MenuComponent;

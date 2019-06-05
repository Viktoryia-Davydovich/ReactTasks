import React from 'react';
import ReactDOM from 'react-dom';
import RoutingContainer from './containers/RoutingContainer'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

ReactDOM.render(
    <RoutingContainer></RoutingContainer>,
    document.getElementById('root')
  );
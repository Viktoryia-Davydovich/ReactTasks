import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import WrapCounterCountainer from './containers/WrapCounterCountainer'
import AboutContainer from './containers/AboutContainer'
import MainContainer from './containers/MainContainer'

const routing = (
    <Router>
      <div>
        <Route path="/" component={MainContainer} />
        <Route path="/counters" component={WrapCounterCountainer} />
        <Route path="/about" component={AboutContainer} />
      </div>
    </Router>
  )

ReactDOM.render(
    routing,
    document.getElementById('root')
  );
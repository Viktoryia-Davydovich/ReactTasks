import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


import WrapCounterCountainer from './containers/WrapCounterCountainer'
import AboutContainer from './containers/AboutContainer'


const routing = (
    <Router>
      <div>
        <Tabs indicatorColor="primary" textColor="primary" >
            <Tab label="About us" active to='/about' component={Link}/>
            <Tab label="Counters" active to='/counters' component={Link}/>
        </Tabs>
        <Route path="/counters" component={WrapCounterCountainer} />
        <Route path="/about" component={AboutContainer} />
      </div>
    </Router>
  )

ReactDOM.render(
    routing,
    document.getElementById('root')
  );
import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Menu = ({handleChange, value}) => {

return(
    <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange}>
        <Tab label="About us" to='/about' component={Link} />
        <Tab label="Counters" to='/counters' component={Link}/>
        <Tab label="Log in" to='/login' component={Link}/>
        <Tab label="Log in with Redux" to='/login-redux' component={Link}/>
        <Tab label="Log in with Redux Form" to='/login-redux-form' component={Link}/>
    </Tabs>
    );
}

export default Menu;
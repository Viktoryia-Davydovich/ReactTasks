import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Menu = ({handleChange, value}) => {

return(
    <Tabs indicatorColor="primary" textColor="primary">
        <Tab label="About us" to='/about' component={Link} />
        <Tab label="Counters" to='/counters' component={Link}/>
    </Tabs>
    );
}

export default Menu;
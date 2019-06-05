import React from 'react';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Menu = ({value}) => {

return(
    <Tabs indicatorColor="primary" textColor="primary" >
        <Tab label="About us" to='/about' component={Link} value={0}/>
        <Tab label="Counters" to='/counters' component={Link} value={1}/>
    </Tabs>
    );
}

export default Menu;
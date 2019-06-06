import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Menu = ({handleChange, value}) => {

return(
    <Tabs indicatorColor="primary" textColor="primary" value={value} onChange={handleChange} inkBarStyle={{background: 'blue'}}>
        <Tab label="About us" to='/about' component={Link} />
        <Tab label="Counters" to='/counters' component={Link}/>
        <Tab label="Log in" to='/login' component={Link}/>
    </Tabs>
    );
}

Menu.propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

export default Menu;
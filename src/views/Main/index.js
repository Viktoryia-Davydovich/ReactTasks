import React from 'react';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

const Main = () => (
    <Tabs indicatorColor="primary" textColor="primary" >
      <Tab label="About us" disabled />
      <Tab label="Counters" disabled />
    </Tabs>
);

export default Main;
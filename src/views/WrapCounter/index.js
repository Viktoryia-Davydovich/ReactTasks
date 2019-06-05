import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';
import React from 'react';

import wrapCounterBtnStyles from './styles'
import CounterContainer from '../../containers/CounterContainer'

const WrapCounter = ({label, counters_count, counters, add_counter, delete_counter, reset_counters}) => {
      
  const elem = counters.map(({ key }) => {
    return (
        <CounterContainer key={key} label={label}/>
    );
  });

    return(
        <div>
            <Button style={wrapCounterBtnStyles.btnStyle} onClick={add_counter}>
                new counter
            </Button>
            <Button style={wrapCounterBtnStyles.btnStyle} onClick={delete_counter}>
                delete last
            </Button>
            <Button style={wrapCounterBtnStyles.delBtnStyle} onClick={reset_counters}>
                reset all
            </Button>
        {Array.from(Array(1), () => (elem))}
    </div>
    );
}

WrapCounter.propTypes = {
    add_counter: PropTypes.func.isRequired,
    delete_counter: PropTypes.func.isRequired,
    reset_counters: PropTypes.func.isRequired,
}

export default WrapCounter;

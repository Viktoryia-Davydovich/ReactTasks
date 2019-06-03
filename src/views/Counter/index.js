import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TypoGraphy from '@material-ui/core/Typography';
import ButtonStyles from './styles';

const Counter = ({count, increment, decrement, reset}) => {
  return(
    <div>
    <div>
      <Button style={ButtonStyles.crementBtnStyle} onClick={increment}>
        increment
      </Button>
      <Button style={ButtonStyles.crementBtnStyle} onClick={decrement}>
        decrement
      </Button>
      <Button style={ButtonStyles.resetBtnStyle} onClick={reset}>
        reset
      </Button>
    </div>
    <div>
      <TypoGraphy style={ButtonStyles.typographyStyle}>
        {count}
      </TypoGraphy>
    </div>
  </div>
  )
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default Counter;

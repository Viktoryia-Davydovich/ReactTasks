import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TypoGraphy from '@material-ui/core/Typography';
import ButtonStyles from './styles'
import Counter from '../../containers/CounterContainer'

const Counter = ({counter, increment, decrement, reset}) => (
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
          {counter}
      </TypoGraphy>
    </div>
  </div>
)

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
}

export default (Counter);

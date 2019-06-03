import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

export default function CounterButtons() {
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" >
        increment
        </Button>
        <Button variant="contained" color="primary" >
            decrement
        </Button>
        <Button variant="contained" color="secondary" >
        reset
        </Button>
      </div>
      <div>
        <p>
          {}
        </p>
      </div>
    </div>
  );
}
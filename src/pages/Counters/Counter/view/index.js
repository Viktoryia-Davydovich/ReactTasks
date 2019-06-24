import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import TypoGraphy from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import ButtonStyles from "./styles";

const CounterForm = ({ count, increment, decrement, reset, classes }) => {
  return (
    <div>
      <div>
        <Button className={classes.incrementBtnStyle} onClick={increment}>
          increment
        </Button>
        <Button className={classes.incrementBtnStyle} onClick={decrement}>
          decrement
        </Button>
        <Button className={classes.resetBtnStyle} onClick={reset}>
          reset
        </Button>
      </div>
      <div>
        <TypoGraphy className={classes.typographyStyle}>{count}</TypoGraphy>
      </div>
    </div>
  );
};

CounterForm.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default withStyles(ButtonStyles)(CounterForm);

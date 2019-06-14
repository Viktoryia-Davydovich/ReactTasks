import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import wrapCounterBtnStyles from "./styles";
import Counter from "../../Counter/Counter";

const WrapCounterForm = ({
  label,
  countersCount,
  counters,
  addCounter,
  deleteCounter,
  resetCounters,
  classes
}) => {
  const elem = counters.map(({ key }) => {
    return <Counter key={key} label={label} />;
  });

  return (
    <div>
      <Button className={classes.btnStyle} onClick={addCounter}>
        new counter
      </Button>
      <Button className={classes.btnStyle} onClick={deleteCounter}>
        delete last
      </Button>
      <Button className={classes.delBtnStyle} onClick={resetCounters}>
        reset all
      </Button>
      {Array.from(Array(1), () => elem)}
    </div>
  );
};

WrapCounterForm.propTypes = {
  addCounter: PropTypes.func.isRequired,
  deleteCounter: PropTypes.func.isRequired,
  resetCounters: PropTypes.func.isRequired
};

export default withStyles(wrapCounterBtnStyles)(WrapCounterForm);

import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { withStyles } from "@material-ui/core/styles";

import wrapCounterBtnStyles from "./styles";
import Counter from "../../Counter/Counter";

const WrapCounterForm = ({
  label,
  counters_count,
  counters,
  add_counter,
  delete_counter,
  reset_counters,
  classes
}) => {
  const elem = counters.map(({ key }) => {
    return <Counter key={key} label={label} />;
  });

  return (
    <div>
      <Button className={classes.btnStyle} onClick={add_counter}>
        new counter
      </Button>
      <Button className={classes.btnStyle} onClick={delete_counter}>
        delete last
      </Button>
      <Button className={classes.delBtnStyle} onClick={reset_counters}>
        reset all
      </Button>
      {Array.from(Array(1), () => elem)}
    </div>
  );
};

WrapCounterForm.propTypes = {
  add_counter: PropTypes.func.isRequired,
  delete_counter: PropTypes.func.isRequired,
  reset_counters: PropTypes.func.isRequired
};

export default withStyles(wrapCounterBtnStyles)(WrapCounterForm);

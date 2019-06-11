import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/core/styles";

import style from "./styles";

const InputField = ({
  autoFocus,
  input,
  label,
  type,
  meta: { touched, error }
}) => {
  return (
    <div>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        autoFocus={autoFocus}
        label={label}
        type={type}
        {...input}
      />
      {touched && (error && <Typography color="error">{error}</Typography>)}
    </div>
  );
};

export default withStyles(style)(InputField);

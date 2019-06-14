import React from "react";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

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

export default InputField;

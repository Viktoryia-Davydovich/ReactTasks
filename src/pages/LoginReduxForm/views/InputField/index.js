import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import style from './styles';

const InputField = ({ classes, input, label, type, meta: { touched, error }}) => {
  return (
      <div>
        <TextField
        variant="outlined" margin="normal" required fullWidth autoFocus
        className={classes.field} {...input}/>
        <Typography color="error" className={classes.errorText}>{error}</Typography>
    </div>
  )
}

export default withStyles(style)(InputField);

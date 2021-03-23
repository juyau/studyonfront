import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function Input(props) {
  const classes = useStyles();
  const {
    name,
    value,
    label,
    variant = "standard",
    onChange,
    error = null,
    ...other
  } = props;

  return (
    <TextField
      name={name}
      value={value}
      label={label}
      variant={variant}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
      {...other}
    />
  );
}

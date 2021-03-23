import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";

export default function Select(props) {
  const {
    name,
    label,
    value,
    error = null,
    onChange,
    options,
    disabled,
    helpperText,
  } = props;

  return (
    <FormControl
      disabled={disabled}
      variant="standard"
      {...(error && { error: true })}
    >
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        {/* <MenuItem value="">Select</MenuItem> */}
        {options &&
          options.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.title}
            </MenuItem>
          ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
      {disabled && <FormHelperText>{helpperText}</FormHelperText>}
    </FormControl>
  );
}

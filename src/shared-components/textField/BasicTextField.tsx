import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { BasicInput } from "./style";
import Types from "./types";

const BasicTextField = (props: Types) => {
  const {
    className = "",
    size = "medium",
    label = "",
    placeholder = "",
    value = "",
    onChange,
    sx = {},
  } = props;

  return (
    <FormControl sx={sx} className={className} variant="standard">
      {label && (
        <InputLabel shrink htmlFor={`input-${value}`}>
          {label}
        </InputLabel>
      )}
      <BasicInput
        placeholder={placeholder}
        size={size}
        value={value}
        onChange={onChange}
        id={`input-${value}`}
      />
    </FormControl>
  );
};

export default BasicTextField;

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { BasicInput } from "./style";

const BasicTextField = (props) => {
  const { className="", label = "", fullWidth = true, placeholder="", value = "", onChange, sx = {} } = props;
  return (
    <FormControl fullWidth={fullWidth} sx={sx} className={className} variant="standard">
      {label && (
        <InputLabel shrink htmlFor={`input-${value}`}>
          {label}
        </InputLabel>
      )}
      <BasicInput
        placeholder={placeholder}
        size="small"
        value={value}
        onChange={onChange}
        id={`input-${value}`}
      />
    </FormControl>
  );
};

export default BasicTextField;

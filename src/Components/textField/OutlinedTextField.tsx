import {
  OutlinedInput,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";

import Types from "./types";

const OutlinedTextField = (props: Types) => {
  const {
    className = "",
    size = "small",
    label = "",
    placeholder = "",
    value = "",
    // focused = false,
    onChange,
    sx = {},
  } = props;

  return (
    <FormControl sx={sx} className={className} variant="standard">
      <InputLabel htmlFor="user-name-email">{label}</InputLabel>
      <OutlinedInput
        value={value}
        placeholder={placeholder}
        label={label && label}
        defaultValue="Small"
        size={size}
        onChange={onChange}
        startAdornment={<InputAdornment position="start"></InputAdornment>}
      />
    </FormControl>
  );
};

export default OutlinedTextField;

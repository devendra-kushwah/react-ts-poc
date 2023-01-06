import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

import Types from "./types";

const OutlinedTextField = (props: Types) => {
  const { className="", label = "", fullWidth = true, placeholder="", value = "", focused = true, onChange, sx = {} } = props;
  
  return (
    <FormControl fullWidth={fullWidth} sx={sx} className={className} variant="standard">
      {label && (
        <InputLabel shrink htmlFor={`input-${value}`}>
          {label}
        </InputLabel>
      )}
        <TextField
          value={value}
          placeholder={placeholder}
          label="Size"
          id="outlined-size-small"
          defaultValue="Small"
          size="small"
          onChange={onChange}
          focused={focused}
        />
    </FormControl>
  );
};

export default OutlinedTextField;

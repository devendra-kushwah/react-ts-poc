import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from '@mui/material/TextField';

type Props = {
  className?: string,
  label?: string,
  fullWidth?: any,
  placeholder?: string,
  value?: string | number,
  onChange?: any,
  sx?: {},
  focused: boolean,
}

const OutlinedTextField = (props: Props) => {
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

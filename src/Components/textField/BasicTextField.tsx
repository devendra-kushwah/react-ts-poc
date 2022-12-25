import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import { BasicInput } from "./style";

type Props = {
  className?: string,
  label?: string,
  fullWidth?: any,
  placeholder?: string,
  value?: string | number,
  onChange?: any,
  sx?: {}
}

const BasicTextField = (props: Props) => {
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

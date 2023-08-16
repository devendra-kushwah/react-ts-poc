import Checkbox from "@mui/material/Checkbox";
import Props from "./types";

function CheckBox(props: Props) {
  const { onChange, checked, sx = {} } = props;

  return (
    <Checkbox
      sx={sx}
      checked={checked}
      onChange={onChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
export default CheckBox;

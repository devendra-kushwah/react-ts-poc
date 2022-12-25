import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckBox(props) {
  // const [checked, setChecked] = useState(true);

  const {onChange,checked, sx={}} = props;

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };

  return (
    <Checkbox
      sx={sx}
      checked={checked}
      onChange={onChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
export default CheckBox;

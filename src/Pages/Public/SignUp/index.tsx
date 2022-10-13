import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


import Layout from "../../../Layout/Layout";

interface State {
  mobile?: number | null,
  email: string,
  password: string,
  showPassword: boolean,
}

const SignUp = () => {
  const [values, setValues] = useState<State>({
    mobile: null,
    email: '',
    password: '',
    showPassword: false,
  });

  const handleChange =
  (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Layout>
    <Box sx={{ display: 'flex', flexWrap: 'wrap' , justifyContent: 'center' }}>
    <form>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="user-name-email">Mobile / Email</InputLabel>
        <OutlinedInput
          id="user-name-email"
          value={values.mobile || values.email}
          onChange={handleChange('mobile')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Mobile / Email"
        />
      </FormControl>
      <FormControl fullWidth sx={{ m: 1 }}>
        <InputLabel htmlFor="user-password">Password</InputLabel>
        <OutlinedInput
          id="user-password"
          value={values.mobile || values.email}
          onChange={handleChange('mobile')}
          startAdornment={<InputAdornment position="start"></InputAdornment>}
          label="Password"
        />
      </FormControl>
      <br/>
      <br/>
      <Button color="secondary" size="large" variant="contained">Sign up</Button>
      <br/>
      <br/>
      <Divider  light />
      <br/>
      <Typography variant="caption" display="block">
         Already Have an account please <Button variant="text">
          <NavLink to="/login">
             Log in
          </NavLink>
        </Button>
      </Typography>
    </form>
  </Box>
  </Layout>
  )
}

export default SignUp;
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Box, FormControl, InputLabel, OutlinedInput, InputAdornment, Button, Divider, Typography } from '@mui/material';

import { style } from './style';
import Layout from "layout/Layout";
import Types from "./types";

const LongIn = () => {

  const [values, setValues] = useState<Types>({
    mobile: null,
    email: '',
    password: '',
    showPassword: false,
  });

  const [error, setError] = useState<boolean>(false);

  const handleChange =
    (prop: keyof Types) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Layout className='login-page' sx={{ padding: 0 }} enableHeader={false}>
      <Box sx={style.box}>
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
          <Button color="secondary" size="large" variant="contained">Loin in</Button>

          <Divider light />

          <Typography variant="caption" display="block">
            No account please <Button variant="text">
              <NavLink to="/signup">
                Sign up
              </NavLink>
            </Button>
          </Typography>
        </form>
      </Box>
    </Layout>
  )
}

export default LongIn;
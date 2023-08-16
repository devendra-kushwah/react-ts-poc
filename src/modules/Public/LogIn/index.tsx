import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Divider, Stack, Grid, Typography } from "@mui/material";

import { style, Wrapper } from "./style";
import Layout from "layout/Layout";
import Types from "./types";
import BasicTextField from "shared-components/textField/BasicTextField";
import { DefaultButton, Button } from "shared-components";

const LongIn = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<Types>({
    mobile: null,
    email: "",
    password: "",
    showPassword: false,
  });

  const [error, setError] = useState<boolean>(false);

  const handleChange =
    (prop: keyof Types) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <Layout className="login-page" sx={{ padding: 0 }}>
      <Wrapper>
        <Grid container>
          <Grid item xs={6}>
            <Stack direction="row" justifyContent="space-around">
              <Box>Logo</Box>
              <Box>
                <DefaultButton onClick={() => navigate("/signup")}>
                  Sign up
                </DefaultButton>
              </Box>
            </Stack>
            <Divider sx={{ mb: "20px" }} light />
            <Box sx={style.box}>
              <form>
                <BasicTextField
                  sx={style.input}
                  value={values.mobile || values.email}
                  onChange={handleChange("mobile")}
                  size="medium"
                  placeholder="Mobile / Email"
                />
                <BasicTextField
                  sx={style.input}
                  size="medium"
                  value={values.mobile || values.email}
                  onChange={handleChange("mobile")}
                  placeholder="Password"
                />
                <DefaultButton
                  sx={{ mb: "25px" }}
                  color="secondary"
                  size="large"
                  variant="contained"
                >
                  Loin in
                </DefaultButton>
              </form>
            </Box>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default LongIn;

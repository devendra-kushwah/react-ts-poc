import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DrawerMenu from "./DrawerMenu";
import Header from "./Header";
import { styled } from "@mui/material/styles";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface Props {
  children?: React.ReactNode;
  className?: string;
  sx?: {};
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;

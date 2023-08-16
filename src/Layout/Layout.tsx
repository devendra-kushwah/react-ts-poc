import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "./Header/Header";

type Props = {
  children?: ReactNode;
  className?: string;
  sx?: {};
  enableHeader?: boolean;
};

const Layout = (props: Props) => {
  const {
    children,
    className,
    sx = { paddingTop: "65px", flexGrow: 1, p: 3 },
  } = props;
  return (
    <>
      <Header />
      <Box component="main" sx={sx} className={className || "main-content"}>
        {children}
      </Box>
    </>
  );
};

export default Layout;

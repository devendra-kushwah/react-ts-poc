import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Header from "layout/header/Header";

type Props = {
  children?: ReactNode;
  className?: string;
  sx?: {};
  enableHeader?: boolean | true;
};

const Layout = (props: Props) => {
  const {
    children,
    className,
    sx = { paddingTop: "65px" },
    enableHeader,
  } = props;
  return (
    <>
      {enableHeader && <Header />}

      <Box component="main" sx={sx} className={className || "main-content"}>
        {children}
      </Box>
    </>
  );
};

export default Layout;

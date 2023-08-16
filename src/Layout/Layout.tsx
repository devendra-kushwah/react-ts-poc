import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import Header from "./Dashboard/Header";

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
      <Box component="main" sx={sx} className={className || "main-content"}>
        {children}
      </Box>
    </>
  );
};

export default Layout;

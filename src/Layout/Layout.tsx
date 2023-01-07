import React, { ReactNode } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "layout/header/Header";

type Props = {
  children?: ReactNode,
  className?: string
  sx?: any,
  enableHeader?: boolean | false
}

const Layout = (props: Props) => {
  const { children, className, sx = { paddingTop: "65px" }, enableHeader } = props;
  return (
    <>
      {enableHeader && <Header />}

      <Box component="main" sx={sx} className={className || "main-content"}>
        <Container>
          {children}
        </Container>
      </Box>
    </>
  )
}

export default Layout;
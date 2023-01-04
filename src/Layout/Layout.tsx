import React, { ReactNode } from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Header from "layout/header/Header";

type Props = {
   children?: ReactNode,
   className?: string
   sx?: any 
}

const Layout = (props: Props)=> {
  
  const { children, className, sx={paddingTop: "65px"} } = props;

     return (
      <>
      <Header />
      <Box component="main" sx={sx} className={className || "main-content"}>
        <Container>
          {children}
        </Container>
      </Box>
      </>
     )
}

export default Layout;
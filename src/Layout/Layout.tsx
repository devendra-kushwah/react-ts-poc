import React, { ReactNode } from "react";
import Container from '@mui/material/Container';
import Header from "./Header/Header";

type  Props = {
   children?: ReactNode
}

const Layout = ({ children }: Props)=> {
     return (
      <>
      <Header />
      <main>
        <Container>
          {children}
        </Container>
      </main>
      </>
     )
}

export default Layout;
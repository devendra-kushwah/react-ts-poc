import React, { ReactNode } from "react";
import Container from '@mui/material/Container';
import Header from "./Header/Header";

type Props = {
   children?: ReactNode,
   className?: string
}

const Layout = ({ children, className }: Props)=> {
     return (
      <>
      <Header />
      <main className={className || "main-content"}>
        <Container>
          {children}
        </Container>
      </main>
      </>
     )
}

export default Layout;
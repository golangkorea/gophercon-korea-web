import { Navbar } from "@/components/nav";
import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.main({
  width: "100vw",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Page = styled.main({
  width: "100vw",
  minHeight: "100vh",
  color: "white",
  padding: "16px",
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Wrapper>
      <Navbar />
      <Page>{children}</Page>
    </Wrapper>
  );
};

export default Layout;

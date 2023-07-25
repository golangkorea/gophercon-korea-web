import Navbar from "@/components/nav";
import styled from "@emotion/styled";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  main?: boolean;
}

interface LayoutInnerStyledProps {
  main?: boolean;
}

const LayoutContainer = styled.div({
  display: "flex",
  position: "relative",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const LayoutInner = styled.div<LayoutInnerStyledProps>(({ main }: LayoutInnerStyledProps) => ({
  width: "100vw",
  height: main ? "100vh" : "calc(100vh - 60px)",
  marginTop: main ? 0 : 60,
  overflowY: "auto",
}));

const Layout: React.FC<LayoutProps> = ({ children, main }) => {
  return (
    <LayoutContainer>
      <Navbar />
      <LayoutInner main={main}>{children}</LayoutInner>
    </LayoutContainer>
  );
};

export default Layout;

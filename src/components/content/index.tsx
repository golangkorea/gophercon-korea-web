import styled from "@emotion/styled";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const ContentContainer = styled.main({
  padding: "100px 0 40px 0",
  width: 1440,
  height: "100%",
  margin: "0 auto",
  "@media (max-width: 1440px)": {
    width: "100%",
    minWidth: "auto",
    paddingLeft: 40,
    paddingRight: 40,
  },
});

const Content: React.FC<LayoutProps> = ({ children }) => {
  return <ContentContainer>{children}</ContentContainer>;
};

export default Content;

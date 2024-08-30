"use client";

import styled from "@emotion/styled";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer = styled.main({
  position: "relative",
  width: 1200,
  minHeight: "100vh",
  padding: "140px 0 80px 0",
  margin: "0 auto",
  boxSizing: "border-box",
});

const Content: React.FC<ContentProps> = ({ children, className }) => (
  <ContentContainer className={className ?? ""}>{children}</ContentContainer>
);
export default Content;

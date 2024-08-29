"use client";

import styled from "@emotion/styled";
import React from "react";

interface ContentProps {
  children: React.ReactNode;
  className?: string;
}

const ContentContainer = styled.main({
  display: "flex",
  position: "relative",
  minHeight: "100vh",
  justifyContent: "stretch",
  alignItems: "stretch",
  padding: 0,
  boxSizing: "border-box",
});

const Content: React.FC<ContentProps> = ({ children, className }) => (
  <ContentContainer className={className ?? ""}>{children}</ContentContainer>
);
export default Content;

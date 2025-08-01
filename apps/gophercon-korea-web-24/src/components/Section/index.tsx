"use client";

import styled from "@emotion/styled";
import React from "react";

interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const SectionContainer = styled.section({
  padding: "140px 0 80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

const Section: React.FC<SectionProps> = ({ className, style, children }) => (
  <SectionContainer className={className} style={style}>
    {children}
  </SectionContainer>
);

export default Section;

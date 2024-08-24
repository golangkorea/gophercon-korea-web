import styled from "@emotion/styled";
import React from "react";

interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const SectionContainer = styled.section({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Section: React.FC<SectionProps> = ({ className, style, children }) => (
  <SectionContainer className={className} style={style}>
    {children}
  </SectionContainer>
);

export default Section;

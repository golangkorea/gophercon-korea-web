"use client";

import styled from "@emotion/styled";
import React from "react";

import { GlobalStyle, StyledComponentsRegistry } from "gophercon-common";

const LayoutContainer = styled.div({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <LayoutContainer>{children}</LayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

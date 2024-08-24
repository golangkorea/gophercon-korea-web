"use client";

import styled from "@emotion/styled";
import React from "react";

import { GlobalStyle } from "gophercon-common";

const LayoutContainer = styled.div({});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        {/* <EmotionStyleRegistry> */}
        <GlobalStyle />
        <LayoutContainer>{children}</LayoutContainer>
        {/* </EmotionStyleRegistry> */}
      </body>
    </html>
  );
}

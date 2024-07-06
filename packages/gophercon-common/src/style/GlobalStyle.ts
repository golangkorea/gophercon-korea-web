"use client";

import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { CommonStyle } from "./CommonStyle";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${CommonStyle}
`;

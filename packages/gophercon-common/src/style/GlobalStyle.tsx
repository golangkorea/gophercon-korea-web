"use client";

import { Global } from "@emotion/react";
import React from "react";

import emotionReset from "emotion-reset";
import CommonStyle from "./CommonStyle";

const GlobalStyle: React.FC = () => (
  <>
    <Global styles={emotionReset} />
    <Global styles={CommonStyle} />
  </>
);

export { GlobalStyle };

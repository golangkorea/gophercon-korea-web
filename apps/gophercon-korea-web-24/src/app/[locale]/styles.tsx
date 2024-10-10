"use client";

import { Global, Interpolation, Theme } from "@emotion/react";
import React from "react";

const styles: Interpolation<Theme> = {
  html: {
    fontSize: 16,
  },
  body: {
    minWidth: 320,
    overflow: "visible",
  },
  "@media (max-width: 768px)": {
    html: {
      fontSize: 12,
    },
  },
  "@media (max-width: 1200px)": {
    html: {
      fontSize: 14,
    },
  },
};

const GopherCon24Styles: React.FC = () => <Global styles={styles} />;

export default GopherCon24Styles;

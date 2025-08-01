"use client";

import { LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
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

interface GopherCon24StylesProps {
  locale: LocaleType;
}

const GopherCon24Styles: React.FC<GopherCon24StylesProps> = ({ locale }) => (
  <Global
    styles={{
      ...styles,
      "html, body, *": {
        fontFamily: locale === "en" ? "Plus Jakarta Sans" : "Pretendard",
      },
    }}
  />
);

export default GopherCon24Styles;

import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import type { AppProps } from "next/app";
import globalCss from "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          ${globalCss}
        `}
      />
      <Component {...pageProps} />
    </>
  );
}

import { Global, css } from "@emotion/react";
import emotionReset from "emotion-reset";
import type { AppProps } from "next/app";
import globalCss from "../styles/globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={plusJakartaSans.className}>
        <Global
          styles={css`
            ${emotionReset}
            ${globalCss}
          `}
        />
        <Component {...pageProps} />
      </main>
    </>
  );
}

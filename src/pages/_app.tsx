import "@/styles/globals.css";
import { css, Global } from "@emotion/react";
import emotionReset from "emotion-reset";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={plusJakartaSans.className}>
        <Global
          styles={css`
            ${emotionReset}
          `}
        />
        <Component {...pageProps} />
      </main>
    </>
  );
}

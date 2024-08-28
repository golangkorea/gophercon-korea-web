import React from "react";

import { getDictionary, LocaleType } from "./dictionaries/dictionaries";
import localFont from "@next/font/local";
import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import Header from "@/components/Header";
import ContextProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import ogImage from "../../assets/opengraph_facebook.png";
import favicon from "../../assets/favicon.ico";
import defaultMetadata from "../metadata";

export interface LangProps {
  lang: LocaleType;
}

export async function generateStaticParams(): Promise<Array<LangProps>> {
  return [{ lang: "ko" }, { lang: "en" }];
}

const pretendard = localFont({
  src: [
    {
      path: "../../assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../assets/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
});

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: LangProps }) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang} className={pretendard.className}>
      <body>
        <ContextProvider props={dict}>
          <EmotionStyleRegistry>
            <GlobalStyle />
            <Header />
            {children}
          </EmotionStyleRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}

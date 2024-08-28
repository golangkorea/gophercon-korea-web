import React from "react";

import { getDictionary, LocaleType } from "./dictionaries/dictionaries";

import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import Header from "@/components/Header";
import ContextProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import defaultMetadata from "../metadata";
import { pretendard } from "../fonts";

export interface LangProps {
  lang: LocaleType;
}

export async function generateStaticParams(): Promise<Array<LangProps>> {
  return [{ lang: "ko" }, { lang: "en" }];
}

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

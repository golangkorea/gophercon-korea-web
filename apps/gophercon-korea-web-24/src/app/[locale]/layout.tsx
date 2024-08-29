import React from "react";

import { getDictionary, LocaleType } from "./dictionaries/dictionaries";

import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import Header from "@/components/Header";
import ContextProvider from "@/components/ThemeProvider";
import { Metadata } from "next";
import defaultMetadata from "../metadata";
import { pretendard } from "../fonts";

export interface LocaleProps {
  locale: LocaleType;
}

export async function generateStaticParams(): Promise<Array<LocaleProps>> {
  return [{ locale: "ko" }, { locale: "en" }];
}

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: LocaleProps;
}) {
  const dict = await getDictionary(locale);
  return (
    <html lang={locale} className={pretendard.className}>
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

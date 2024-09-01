import React from "react";

import { getDictionary, LocaleType } from "@/app/[locale]/dictionaries/dictionaries";

import { pretendard } from "@/app/fonts";
import defaultMetadata from "@/app/metadata";
import ContextProvider from "@/components/ThemeProvider";
import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import { Metadata } from "next";

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
            {children}
          </EmotionStyleRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}

import { ReactNode } from "react";
import { getDictionary, LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { jakartaSans, pretendard } from "@/app/fonts";
import defaultMetadata from "@/app/metadata";
import ContextProvider from "@/components/ThemeProvider";
import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import { Metadata } from "next";

import enJson from "./dictionaries/en.json";
import { headers } from "next/headers";

// enJson과 koJson의 property는 같다고 상정
export type LocaleData = Readonly<typeof enJson>;

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
  children: ReactNode;
  params: LocaleProps;
}) {
  const header = headers();
  const isDeviceMobile = header.get("device-type") === "true";
  const dict = (await getDictionary(locale)) as LocaleData;
  return (
    <html lang={locale} className={`${jakartaSans.className} ${pretendard.className}`}>
      <body style={{ minWidth: "320px" }}>
        <ContextProvider props={{ dict, locale, isDeviceMobile }}>
          <EmotionStyleRegistry>
            <GlobalStyle />
            {children}
          </EmotionStyleRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}

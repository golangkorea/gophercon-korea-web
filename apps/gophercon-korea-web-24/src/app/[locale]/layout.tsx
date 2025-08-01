<<<<<<< Updated upstream
=======
import { getDictionary, LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import GopherCon24Styles from "@/app/[locale]/styles";
>>>>>>> Stashed changes
import { jakartaSans, pretendard } from "@/app/fonts";
import defaultMetadata from "@/app/metadata";
import { getDictionary, LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import GopherCon24Styles from "@/app/[locale]/styles";
import ContextProvider from "@/components/ThemeProvider";
import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import { Metadata } from "next";
import { ReactNode } from "react";

import { headers } from "next/headers";
import enJson from "./dictionaries/en.json";

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
      <body>
        <ContextProvider props={{ dict, locale, isDeviceMobile }}>
          <EmotionStyleRegistry>
            <GlobalStyle />
            <GopherCon24Styles locale={locale} />
            {children}
          </EmotionStyleRegistry>
        </ContextProvider>
      </body>
    </html>
  );
}

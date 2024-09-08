import { ReactNode } from "react";
import { getDictionary, LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { jakartaSans, pretendard } from "@/app/fonts";
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
  children: ReactNode;
  params: LocaleProps;
}) {
  const dict = await getDictionary(locale);
  return (
    <html lang={locale}>
      <body className={`${jakartaSans.variable} ${pretendard.variable}`}>
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

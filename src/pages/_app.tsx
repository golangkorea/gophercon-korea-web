import TypesafeI18n from "@/i18n/i18n-react";
import { Locales, Translation } from "@/i18n/i18n-types";
import { loadedLocales } from "@/i18n/i18n-util";
import { loadFormatters } from "@/i18n/i18n-util.sync";
import "@/styles/globals.css";
import GlobalStyle from "@/styles/GlobalStyle";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../assets/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  if (!pageProps.i18n) {
    // Something wrong...!
    return <Component {...pageProps} />;
  }

  const locale: Locales = pageProps.i18n.locale;
  const dictionary: Translation = pageProps.i18n.dictionary;

  loadedLocales[locale] = dictionary as Translation;
  loadFormatters(locale);

  return (
    <TypesafeI18n locale={locale}>
      <GlobalStyle />
      <main className={pretendard.className}>
        <Component {...pageProps} />
      </main>
    </TypesafeI18n>
  );
}

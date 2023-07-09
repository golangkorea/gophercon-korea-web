import TypesafeI18n from "@/i18n/i18n-react";
import { Locales, Translation } from "@/i18n/i18n-types";
import { loadedLocales } from "@/i18n/i18n-util";
import { loadFormatters } from "@/i18n/i18n-util.sync";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

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
      <main className={plusJakartaSans.className}>
        <Component {...pageProps} />
      </main>
    </TypesafeI18n>
  );
}

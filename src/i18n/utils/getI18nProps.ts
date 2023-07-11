import { GetStaticProps } from "next";
import { Locales } from "../i18n-types";
import { loadedLocales } from "../i18n-util";
import { loadLocaleAsync } from "../i18n-util.async";

export const getI18nProps: GetStaticProps = async (context) => {
  const locale = context.locale as Locales;
  await loadLocaleAsync(locale);

  return {
    props: {
      i18n: {
        locale: locale,
        dictionary: loadedLocales[locale],
      },
    },
  };
};

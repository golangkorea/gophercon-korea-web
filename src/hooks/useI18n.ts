import { useI18nContext } from "@/i18n/i18n-react";
import { Locales } from "@/i18n/i18n-types";
import { loadLocaleAsync } from "@/i18n/i18n-util.async";
import { useRouter } from "next/router";

export function useI18n() {
  const { locale, setLocale, LL } = useI18nContext();
  const router = useRouter();

  return {
    locale,
    LL,
    setLocale: async (locale: Locales) => {
      await loadLocaleAsync(locale);
      setLocale(locale);
      router.push({}, {}, { locale });
    },
  };
}

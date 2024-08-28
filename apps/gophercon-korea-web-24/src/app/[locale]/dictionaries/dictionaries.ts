import "server-only";

export type LocaleType = "ko" | "en";

const dictionaries: Record<LocaleType, () => Promise<{}>> = {
  en: () => import("./en.json").then((module) => module.default),
  ko: () => import("./ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: LocaleType) => dictionaries[locale]();

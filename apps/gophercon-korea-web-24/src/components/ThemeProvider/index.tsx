"use client";

import { LocaleType } from "@/app/[locale]/dictionaries/dictionaries";
import { LocaleData } from "@/app/[locale]/layout";
import { createContext } from "react";
import enJson from "../../app/[locale]/dictionaries/en.json";

type ContextProps = {
  dict: LocaleData;
  locale: LocaleType;
};

export const GlobalContext = createContext<ContextProps>({
  dict: enJson,
  locale: "ko",
});

export default function ContextProvider({ children, props }: { children: React.ReactNode; props: ContextProps }) {
  return <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>;
}

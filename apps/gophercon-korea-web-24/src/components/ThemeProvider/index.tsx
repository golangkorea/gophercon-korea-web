"use client";

import { createContext } from "react";

type ContextProps = {
  home?: {};
  CoC?: {};
  sponsor?: {};
  festival_intro?: {};
  festival_staff?: {};
  timetable?: {};
};

export const GlobalContext = createContext<ContextProps>({});

export default function ContextProvider({ children, props }: { children: React.ReactNode; props: any }) {
  return <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>;
}

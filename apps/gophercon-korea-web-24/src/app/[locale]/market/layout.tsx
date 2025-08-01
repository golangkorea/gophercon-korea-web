import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Market",
  openGraph: {
    title: "Gophercon Korea 2024 | Flea Market",
  },
};

export default async function FestivalStaffsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

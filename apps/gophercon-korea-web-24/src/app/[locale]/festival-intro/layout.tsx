import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Intro",
  openGraph: {
    title: "Gophercon Korea 2024 Intro",
  },
};

export default async function FestivalIntroLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

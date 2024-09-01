import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Sponsor",
  openGraph: {
    title: "Gophercon Korea 2024 Sponsor",
  },
};

export default async function SponsorLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

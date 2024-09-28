import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Staffs",
  openGraph: {
    title: "Gophercon Korea 2024 Staffs",
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

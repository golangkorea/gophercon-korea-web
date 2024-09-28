import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Timetable",
  openGraph: {
    title: "Gophercon Korea 2024 Timetable",
  },
};

export default async function TimetableLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

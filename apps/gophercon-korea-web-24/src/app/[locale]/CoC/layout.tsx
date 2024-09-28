import Header from "@/components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "CoC",
  openGraph: {
    title: "Gophercon Korea 2024 CoC",
  },
};

export default async function CoCLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <section>{children}</section>
    </>
  );
}

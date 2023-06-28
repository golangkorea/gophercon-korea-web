import styled from "@emotion/styled";
import { Navbar } from "../ui/Navbar";
import { ReactNode } from "react";

const Wrapper = styled.main({
  width: "100vw",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "rgb(14,12,20)",
});

const Page = styled.main({
  width: "100vw",
  height: "calc(100vh - 48px)",
  color: "white",
});

export function NavbarWrapped({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      <Page>{children}</Page>
    </Wrapper>
  );
}

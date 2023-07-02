import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Navbar } from "../ui/Navbar";

const Wrapper = styled.main({
  width: "100vw",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgb(14,12,20)",
});

const Page = styled.main({
  width: "100vw",
  height: "calc(100vh - 80px)",
  color: "white",
  padding: "16px",
});

export function NavbarWrapped({ children }: { children: ReactNode }) {
  return (
    <Wrapper>
      <Navbar />
      <Page>{children}</Page>
    </Wrapper>
  );
}

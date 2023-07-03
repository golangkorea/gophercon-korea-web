import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

const NavbarContainer = styled.nav({
  width: "100vw",
  height: "80px",
  padding: "0 80px",
  display: "flex",
  flexDirection: "row",
  color: "white",
  alignItems: "center",
  borderBottom: "solid 1px white",
  background: "rgba(0, 0, 0, 0.2)",
  backdropFilter: "blur(10px)",
  zIndex: 5,
  position: "fixed",
  top: 0,
});

const Logo = styled.h1({
  fontSize: "28px",
  fontWeight: "bold",
  pointer: "cursor",
});

const SectionsContainer = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "25px",
  marginLeft: "auto",
});

const Section = styled.a({
  color: "white",
  fontSize: "16px",
  textDecoration: "none",
});

export function Navbar() {
  const { pathname } = useRouter();

  return (
    <NavbarContainer>
      <Link href={"/"}>
        <Logo>GopherCon Korea 2023</Logo>
      </Link>
      <SectionsContainer>
        <Section href='/program'>프로그램</Section>
        <Section href='/sponsors'>스폰서</Section>
        <Section href='/coc'>행동강령</Section>
        <Section href='/scolarship-support'>장학지원</Section>
        <Section href='/application'>참가신청</Section>
        <Section href='/inquiries'>행사문의</Section>
      </SectionsContainer>
    </NavbarContainer>
  );
}

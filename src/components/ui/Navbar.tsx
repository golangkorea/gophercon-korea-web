import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NavbarContainer = styled.nav({
  width: "100vw",
  height: "48px",
  display: "flex",
  flexDirection: "row",
  color: "white",
  alignItems: "center",
  borderBottom: "solid 1px white",
});

const Logo = styled.h1({
  fontSize: "1.3em",
  borderLeft: "1rem",
});

const BoldText = styled.span({
  fontWeight: "bold",
});

const SectionsContainer = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "1rem",
  marginLeft: "auto",
});

const Section = styled.a({
  color: "white",
  fontSize: "0.8em",
  textDecoration: "none",
});

export function Navbar() {
  const {} = useRouter();

  return (
    <NavbarContainer>
      <Logo>
        GopherCon <BoldText>Korea</BoldText> 2023
      </Logo>
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

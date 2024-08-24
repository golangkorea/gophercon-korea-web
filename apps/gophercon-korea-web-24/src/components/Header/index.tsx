import LogoSVG from "@/assets/logo.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

interface LinkStyledProps {
  active?: boolean;
  transparent?: boolean;
}

const HeaderContainer = styled.header({
  width: "100%",
  height: 60,
  display: "flex",
  alignItems: "center",
  position: "fixed",
  backgroundColor: "rgba(255, 255, 255, .25)",
  borderBottom: "1px solid rgba(0, 0, 0, .05)",
  top: 0,
  zIndex: 30,
  padding: "10px 20px",
  justifyContent: "space-between",
  backdropFilter: "blur(3px)",
  boxSizing: "border-box",
});

const Inner = styled.div({
  display: "flex",
  alignItems: "center",
  columnGap: 20,
});

const Title = styled.h1({
  display: "inline-block",
  verticalAlign: "middle",
  fontSize: 22,
  fontWeight: 700,
  padding: 0,
  margin: 0,
  border: 0,
  color: "#0029FF",
});

const Link = styled.a<LinkStyledProps>(({ active, transparent }: LinkStyledProps) => ({
  fontSize: 24,
  fontWeight: 600,
  cursor: "pointer",
  outline: "none",
  border: transparent ? "none" : "1px solid transparent",
  padding: 0,
  boxSizing: "border-box",
  backgroundColor: active ? "rgba(0, 0, 0, .05)" : "auto",
  color: active ? "#000" : "#555",
  textDecoration: "none",
  transition: "color .2s ease, background-color .2s ease",
  "&:hover": {
    color: "#000",
  },
}));

const HighlightLink = styled(Link)({
  backgroundColor: "#000",
  padding: "6px 12px",
  backgroundColor: "#000",
  color: "#fff",
  "&:hover": {
    color: "#000",
    backgroundColor: "#edeff1",
  },
});

const Button = styled(Link.withComponent("button"))({
  cursor: "pointer",
});

const MenuButton = styled(Button)({
  marginLeft: "auto",
  fontSize: 30,
  fontWeight: 800,
  "@media (min-width: 1001px)": {
    display: "none",
  },
});

const Header: React.FC = () => (
  <HeaderContainer>
    <Inner>
      <Link href='/'>
        <Image height={40} src={LogoSVG} alt={"GopherCon Korea 2024"} />
      </Link>
    </Inner>
    <Inner>
      <Link href='https://2023.gophercon.kr' target='_blank'>
        지난 고퍼콘 보기
      </Link>
      <HighlightLink href='https://festa.io/events/5098' target='_blank'>
        티켓 구매
      </HighlightLink>
    </Inner>
  </HeaderContainer>
);

export default Header;

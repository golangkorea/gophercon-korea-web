"use client";

import LogoSVG from "@/assets/logo.svg";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import Image from "next/image";
import React, { useContext } from "react";

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

const Link = styled.a({
  fontSize: 24,
  fontWeight: 600,
  cursor: "pointer",
  padding: 0,
  boxSizing: "border-box",
  color: "#555",
  textDecoration: "none",
  transition: "color .2s ease, background-color .2s ease",
  "&:hover": {
    color: "#000",
  },
});

const HighlightLink = styled(Link)({
  backgroundColor: "#000",
  padding: "6px 12px",
  color: "#fff",
  "&:hover": {
    color: "#000",
    backgroundColor: "#edeff1",
  },
});

const Button = styled(Link.withComponent("button"))({
  cursor: "pointer",
});

const Header: React.FC = () => {
  const dict = useContext(GlobalContext) as any;
  return (
    <HeaderContainer>
      <Inner>
        <Link href='/'>
          <Image height={40} src={LogoSVG} alt={"GopherCon Korea 2024"} />
        </Link>
      </Inner>
      <Inner>
        {/* TODO: 아래 Link에 CoC 부분을 locale을 반영한 링크를 걸수 있도록
        locale을 얻어오는 부분을 Hook으로 제공받거나 CustomLink내에 locale을 불러오는 메커니즘을 내장 */}
        <Link href='/CoC'>{dict["nav"]["coc"]}</Link>
        <Link href='https://2023.gophercon.kr' target='_blank'>
          {dict["nav"]["previousGopherCon"]}
        </Link>
        <HighlightLink href='https://festa.io/events/5098' target='_blank'>
          {dict["nav"]["register"]}
        </HighlightLink>
      </Inner>
    </HeaderContainer>
  );
};

export default Header;

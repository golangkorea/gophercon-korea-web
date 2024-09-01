"use client";

import React, { useContext } from "react";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CustomLink from "../CustomLink";
import LogoSVG from "@/assets/logo.svg";

export interface LinkStyledProps {
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

type PathProps = {
  path: string;
  name: string;
};

const headerPaths: PathProps[] = [
  { path: "/CoC", name: "coc" },
  // { path: "/festival-intro", name: "festival_intro" },
  // { path: "/festival-staffs", name: "festival_staffs" },
  // { path: "/sponsor", name: "sponsor" },
  // { path: "/timetable", name: "timetable" },
];

const Header: React.FC = () => {
  const { dict, locale } = useContext(GlobalContext);
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <Inner>
        <CustomLink href='/' locale={locale}>
          <Image height={40} src={LogoSVG} alt={"GopherCon Korea 2024"} />
        </CustomLink>
      </Inner>
      <Inner>
        {headerPaths.map(({ path, name }) => {
          const styleProps: LinkStyledProps = {
            active: pathname === path,
          };
          return (
            <CustomLink key={name} href={path} locale={locale} style={styleProps}>
              {dict.nav[name as keyof typeof dict.nav]}
            </CustomLink>
          );
        })}

        <Link href='https://2023.gophercon.kr' target='_blank'>
          {dict.nav.previousGopherCon}
        </Link>
        <HighlightLink href='https://festa.io/events/5098' target='_blank'>
          {dict.nav.register}
        </HighlightLink>
      </Inner>
    </HeaderContainer>
  );
};

export default React.memo(Header);

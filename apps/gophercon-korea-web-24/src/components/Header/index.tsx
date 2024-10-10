"use client";

import LogoSVG from "@/assets/logo.svg";
import { GlobalContext } from "@/components/ThemeProvider";
import { useCheckMobile } from "@/hooks/useMediaquery";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useContext, useState } from "react";
import CustomLink from "../CustomLink";

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

const HighlightLink = styled(Link)<{ isMobile: boolean }>`
  background-color: #000;
  padding: 6px 12px;
  color: #fff;

  &:hover {
    color: #000;
    background-color: #edeff1;
  }

  // 조건부 스타일 예시
  font-size: 1rem;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileMenu = styled.div({
  display: "none",
  "@media (max-width: 800px)": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
});

const MobileNavs = styled.div({
  width: "100%",
  height: "100vh",
  position: "fixed",
  top: "60px",
  left: "0px",
  display: "none",
  backgroundColor: "rgba(255, 255, 255, 1)",
  "@media (max-width: 800px)": {
    display: "block",
  },
});

const Button = styled(Link.withComponent("button"))({
  cursor: "pointer",
});

const LinkLists = styled.div({
  display: "flex",
  justifyContent: "start",
  gap: "10px",
  alignItems: "center",
  "@media (max-width: 800px)": {
    display: "none",
  },
});

type PathProps = {
  path: string;
  name: string;
};

const headerPaths: PathProps[] = [
  { path: "/coc", name: "coc" },
  { path: "/market", name: "market" },
  // { path: "/festival-intro", name: "festival_intro" },
  // { path: "/festival-staffs", name: "festival_staffs" },
  { path: "/programs", name: "programs" },
  { path: "/sponsor", name: "sponsor" },
];

const MobileNavWrapper = styled.div({
  width: "100%",
  borderBottom: "1px solid #151515",
});

const MobileNavInner = styled.div({
  padding: "20px",
  display: "flex",
  justifyContent: "center",
});

const Header: React.FC = () => {
  const { dict, locale, isDeviceMobile } = useContext(GlobalContext);
  const isMobile = useCheckMobile(isDeviceMobile);
  const pathname = usePathname();
  const [mobileModal, setMobileModal] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <Inner>
        <CustomLink href='/' locale={locale}>
          <Image height={40} src={LogoSVG} alt={"GopherCon Korea 2024"} />
        </CustomLink>
      </Inner>
      <Inner>
        <LinkLists>
          {headerPaths.map(({ path, name }) => {
            const isActive = pathname === path;
            return (
              <CustomLink key={name} href={path} locale={locale}>
                <Text weight={700} color={isActive ? "#000000" : "#555555"} size={isMobile ? "0.75" : "1.25rem"}>
                  {dict.nav[name as keyof typeof dict.nav]}
                </Text>
              </CustomLink>
            );
          })}

          <Link
            href='https://2023.gophercon.kr'
            target='_blank'
            style={{ textDecoration: "none", fontSize: "1.25rem", paddingBottom: "1px" }}
          >
            <Text size={"1.25rem"} weight={700} lineHeight='130%'>
              {dict.nav.previousGopherCon}
            </Text>
          </Link>
        </LinkLists>
        <HighlightLink
          isMobile={isMobile}
          href='https://festa.io/events/5098'
          style={{ textDecoration: "none", fontSize: "1.25rem" }}
          target='_blank'
        >
          {dict.nav.register}
        </HighlightLink>
      </Inner>
      <MobileMenu onClick={() => setMobileModal(!mobileModal)}>
        <Image src={"/headerMenu.svg"} alt='headerMeuu' width={30} height={30} />
      </MobileMenu>
      {mobileModal && (
        <MobileNavs>
          <Flex>
            {headerPaths.map(({ path, name }, idx) => {
              const isActive = pathname === path;

              return (
                <MobileNavWrapper key={`${path}-${idx}`}>
                  <MobileNavInner>
                    <CustomLink key={name} href={path} locale={locale}>
                      <Text weight={700} color={isActive ? "#000000" : "#555555"} size={isMobile ? "0.75" : "1.25rem"}>
                        {dict.nav[name as keyof typeof dict.nav]}
                      </Text>
                    </CustomLink>
                  </MobileNavInner>
                </MobileNavWrapper>
              );
            })}
          </Flex>
        </MobileNavs>
      )}
    </HeaderContainer>
  );
};

export default React.memo(Header);

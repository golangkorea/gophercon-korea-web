import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { WithTranslation, withTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

interface NavLinkStyledProps {
  active?: boolean;
  transparent?: boolean;
}

interface NavMobileStyledProps {
  active?: boolean;
}

interface BlackOverlayStyledProps {
  active?: boolean;
}

const NavbarContainer = styled.div({
  width: "100%",
});

const animationGradient = keyframes({
  from: {
    backgroundPosition: "0 50%",
  },
  to: {
    backgroundPosition: "100% 50%",
  },
});

const NavbarHeader = styled.nav({
  width: "100%",
  height: 60,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  backgroundColor: "rgba(255, 255, 255, .4)",
  borderBottom: "1px solid rgba(255, 255, 255, .4)",
  top: 0,
  zIndex: 30,
  padding: 0,
  backdropFilter: "blur(12px)",
  boxShadow: "0 3px 16px rgba(0, 0, 0, .1)",
});

const NavbarInner = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minWidth: 1440,
  "@media (max-width: 1440px)": {
    width: "100%",
    minWidth: "auto",
    paddingLeft: 40,
    paddingRight: 40,
  },
  "@media (max-width: 1000px)": {
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const NavbarTitle = styled.h1({
  display: "inline-block",
  verticalAlign: "middle",
  fontSize: 22,
  fontWeight: 700,
  padding: 0,
  margin: 0,
  border: 0,
  color: "#0029FF",
});

const NavLink = styled.a<NavLinkStyledProps>(({ active, transparent }: NavLinkStyledProps) => ({
  fontSize: 18,
  fontWeight: 600,
  cursor: "pointer",
  transition: "color .3s ease, border-color .3s ease, background-color .3s ease",
  borderRadius: transparent ? 0 : 10,
  border: transparent ? "none" : "1px solid transparent",
  padding: transparent ? 0 : "6px 12px",
  boxSizing: "border-box",
  backgroundColor: active ? "rgba(0, 0, 0, .05)" : "auto",
  color: active ? "#0029FF" : "auto",
  "&:hover": {
    backgroundColor: transparent ? "auto" : "rgba(0, 0, 0, .05)",
    color: transparent ? "auto" : "#0029FF",
    borderColor: transparent ? "auto" : "rgba(0, 0, 0, .1)",
  },
}));

const NavButton = styled(NavLink.withComponent("button"))({
  cursor: "pointer",
});

const NavMenuButton = styled(NavButton)({
  marginLeft: "auto",
  fontSize: 30,
  fontWeight: 800,
  "@media (min-width: 1001px)": {
    display: "none",
  },
});

const NavRegisterButton = styled(NavButton)({
  backgroundImage: "linear-gradient(-45deg, #BD00FF, #0066FF, #00FFB2)",
  backgroundSize: "600%",
  padding: "6px 12px",
  fontWeight: 600,
  color: "white",
  animation: animationGradient,
  animationDuration: "3s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  borderRadius: 14,
  border: "none",
  "&:hover": {
    color: "white",
  },
});

const NavButtonGroup = styled.div({
  display: "flex",
  alignItems: "center",
  gap: ".25rem",
  marginLeft: "auto",
  "@media (max-width: 1000px)": {
    display: "none",
  },
});

const NavMobile = styled.div<NavMobileStyledProps>(({ active }: NavMobileStyledProps) => ({
  position: "fixed",
  display: "flex",
  width: "100vw",
  height: "50%",
  minHeight: 460,
  zIndex: 20,
  alignItems: "center",
  justifyContent: "space-around",
  flexDirection: "column",
  paddingTop: 100,
  paddingLeft: 40,
  paddingRight: 40,
  paddingBottom: 40,
  backgroundColor: "rgba(255, 255, 255, .8)",
  backdropFilter: "blur(12px)",
  boxSizing: "border-box",
  transform: active ? "translate3d(0, 0, 0)" : "translate3d(0, -100%, 0)",
  transition: "transform .3s ease",
  "a, button": {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
  },
}));

const BlackOverlay = styled.div<BlackOverlayStyledProps>(({ active }: BlackOverlayStyledProps) => ({
  position: "fixed",
  width: "100%",
  height: active ? "100%" : 0,
  zIndex: 15,
  backgroundColor: active ? "rgba(0, 0, 0, .5)" : "transparent",
  transition: "background-color .3s ease",
}));

const Navbar: React.FC<WithTranslation> = ({ t, i18n }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const { pathname } = useRouter();
  const router = useRouter();
  const { locale } = router;

  const toggleMenuOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleChangeLanguage = useCallback(() => {
    const nextLocal = locale === "en" ? "ko" : "en";
    router.push(router.asPath, router.asPath, { locale: nextLocal });
  }, [locale]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  const handleRoute = React.useCallback(
    (href: string) => {
      return () => router.push(href, undefined, { shallow: true }).then(() => setIsOpen(false));
    },
    [router],
  );

  const openNewWindow = () => {
    setIsOpen(false);
    window.open("https://festa.io/events/3435", "_blank");
  };

  return (
    <NavbarContainer>
      <NavbarHeader>
        <NavbarInner>
          <NavLink transparent onClick={handleRoute("/")}>
            <NavbarTitle>GopherCon Korea 2023</NavbarTitle>
          </NavLink>
          <NavButtonGroup>
            <NavLink active={pathname === "/program"} onClick={handleRoute("/program")}>
              {t("nav:program")}
            </NavLink>
            <NavLink active={pathname === "/sponsors"} onClick={handleRoute("/sponsors")}>
              {t("nav:sponsors")}
            </NavLink>
            <NavLink active={pathname === "/coc"} onClick={handleRoute("/coc")}>
              {t("nav:coc")}
            </NavLink>
            <NavLink active={pathname === "/contact"} onClick={handleRoute("/contact")}>
              {t("nav:contact")}
            </NavLink>
            <NavLink>
              <a
                href='https://golang-kr.notion.site/Lost-Found-Zone-25caffe464ef4253bdc23e39a047c1a9?pvs=4'
                target='_blank'
              >
                {t("common:lostAndFound")}
              </a>
            </NavLink>
            {/*<NavRegisterButton onClick={openNewWindow}>{t("common:register")}</NavRegisterButton>*/}
            <NavButton onClick={() => handleChangeLanguage()}>{t("nav:changeLanguage")}</NavButton>
          </NavButtonGroup>
          <NavMenuButton transparent onClick={toggleMenuOpen}>
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </NavMenuButton>
        </NavbarInner>
      </NavbarHeader>
      <BlackOverlay active={isOpen} onClick={toggleMenuOpen} />
      <NavMobile active={isOpen} ref={mobileNavRef}>
        <NavLink active={pathname === "/program"} onClick={handleRoute("/program")}>
          {t("nav:program")}
        </NavLink>
        <NavLink active={pathname === "/sponsors"} onClick={handleRoute("/sponsors")}>
          {t("nav:sponsors")}
        </NavLink>
        <NavLink active={pathname === "/coc"} onClick={handleRoute("/coc")}>
          {t("nav:coc")}
        </NavLink>
        <NavLink active={pathname === "/contact"} onClick={handleRoute("/contact")}>
          {t("nav:contact")}
        </NavLink>
        <NavLink>
          <a
            href='https://golang-kr.notion.site/Lost-Found-Zone-25caffe464ef4253bdc23e39a047c1a9?pvs=4'
            target='_blank'
          >
            {t("common:lostAndFound")}
          </a>
        </NavLink>
        {/*<NavRegisterButton onClick={openNewWindow}>{t("common:register")}</NavRegisterButton>*/}
        <NavButton onClick={() => handleChangeLanguage()}>{t("nav:changeLanguage")}</NavButton>
      </NavMobile>
    </NavbarContainer>
  );
};

export default withTranslation(["common", "nav", "coc"])(Navbar);

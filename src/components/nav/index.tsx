import { useI18n } from "@/hooks/useI18n";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useCallback } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";

interface NavLinkStyledProps {
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
  "0%": {
    backgroundPosition: "0 50%",
  },
  "50%": {
    backgroundPosition: "100% 50%",
  },
  "100%": {
    backgroundPosition: "0 50%",
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
});

const NavbarTitle = styled.h1({
  display: "inline-block",
  verticalAlign: "middle",
  fontSize: 22,
  fontWeight: 700,
  color: "#0029FF",
  margin: 0,
});

const NavLink = styled.a<NavLinkStyledProps>(({ transparent }: NavLinkStyledProps) => ({
  fontSize: 17,
  fontWeight: 600,
  cursor: "pointer",
  transition: "color .3s ease, border-color .3s ease, background-color .3s ease",
  borderRadius: transparent ? 0 : 10,
  border: transparent ? "none" : "1px solid transparent",
  padding: transparent ? 0 : "6px 12px",
  boxSizing: "border-box",
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
  animationDuration: "8s",
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

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const { locale, setLocale, LL } = useI18n();
  const router = useRouter();

  const toggleMenuOpen = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  React.useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

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
            <NavLink onClick={handleRoute("/program")}>{LL?.nav.program()}</NavLink>
            <NavLink onClick={handleRoute("/sponsors")}>{LL?.nav.sponsors()}</NavLink>
            <NavLink onClick={handleRoute("/coc")}>{LL?.nav.coc()}</NavLink>
            <NavLink onClick={handleRoute("/contact")}>{LL?.nav.contact()}</NavLink>
            <NavRegisterButton onClick={openNewWindow}>Register</NavRegisterButton>
            <NavButton onClick={async () => await setLocale(locale === "en" ? "ko" : "en")}>
              {LL?.changeLang()}
            </NavButton>
          </NavButtonGroup>
          <NavMenuButton transparent onClick={toggleMenuOpen}>
            {isOpen ? <RiCloseFill /> : <RiMenuFill />}
          </NavMenuButton>
        </NavbarInner>
      </NavbarHeader>
      <BlackOverlay active={isOpen} onClick={toggleMenuOpen} />
      <NavMobile active={isOpen} ref={mobileNavRef}>
        <NavLink onClick={handleRoute("/program")}>{LL?.nav.program()}</NavLink>
        <NavLink onClick={handleRoute("/sponsors")}>{LL?.nav.sponsors()}</NavLink>
        <NavLink onClick={handleRoute("/coc")}>{LL?.nav.coc()}</NavLink>
        <NavLink onClick={handleRoute("/contact")}>{LL?.nav.contact()}</NavLink>
        <NavRegisterButton onClick={openNewWindow}>Register</NavRegisterButton>
        <NavButton onClick={async () => await setLocale(locale === "en" ? "ko" : "en")}>{LL?.changeLang()}</NavButton>
      </NavMobile>
    </NavbarContainer>
  );
};

export default Navbar;

import LogoSVG from "@/assets/logo.svg";
import GNB from "@/components/layout/GNB";
import MobileNav from "@/components/layout/MobileNav";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const breakpoints = {
  tablet: "1024px",
};

const Header = () => {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang: "ko" | "en") => i18n.changeLanguage(lang);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <HeaderContainer>
        <Logo to='/'>
          <img src={LogoSVG} alt='GopherCon Korea Logo' style={{ height: 50 }} />
        </Logo>
        <NavWrapper>
          <DesktopNav>
            <GNB />
          </DesktopNav>
          <RightSection>
            <LanguageSelector>
              <LangButton $active={i18n.language.startsWith("ko")} onClick={() => changeLanguage("ko")}>
                KOR
              </LangButton>
              <LangButton $active={i18n.language.startsWith("en")} onClick={() => changeLanguage("en")}>
                ENG
              </LangButton>
            </LanguageSelector>
            <MobileMenuButton onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
            </MobileMenuButton>
          </RightSection>
        </NavWrapper>
      </HeaderContainer>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

const HeaderContainer = styled.header(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 2rem",
  height: "80px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  backdropFilter: "blur(10px)",
  borderBottom: "1px solid #eee",
  zIndex: 1000,
}));

const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const NavWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

const DesktopNav = styled.div({
  [`@media (max-width: ${breakpoints.tablet})`]: {
    display: "none",
  },
});

const RightSection = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

const LanguageSelector = styled.div({
  display: "flex",
  gap: "0.5rem",
});

const LangButton = styled.button<{ $active: boolean }>(({ $active, theme }) => ({
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: $active ? "bold" : "normal",
  color: $active ? theme.colors.primary : theme.colors.text,
  opacity: $active ? 1 : 0.6,
  "&:hover": {
    opacity: 1,
  },
}));

const MobileMenuButton = styled.button({
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  [`@media (max-width: ${breakpoints.tablet})`]: {
    display: "block",
    alignItems: "center",
  },
});

export default Header;

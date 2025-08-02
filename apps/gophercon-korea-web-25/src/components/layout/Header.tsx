import LogoSVG from "@/assets/logo.svg";
import LogoGopherSVG from "@/assets/logoGopher.svg";
import GNB from "@/components/layout/GNB";
import MobileNav from "@/components/layout/MobileNav";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const changeLanguage = (lang: "ko" | "en") => i18n.changeLanguage(lang);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <HeaderContainer>
        <Logo to='/'>
          <DesktopLogo src={LogoSVG} alt='GopherCon Korea Logo' />
          <MobileLogo src={LogoGopherSVG} alt='GopherCon Korea Logo' />
        </Logo>
        <NavWrapper>
          <DesktopNav>
            <GNB />
          </DesktopNav>
          <RightSection>
            <CtaButtonWrapper>
              <CtaButton disabled>{t("nav.buy_ticket")}</CtaButton>
              <Tooltip>{t("nav.buy_ticket_soon")}</Tooltip>
            </CtaButtonWrapper>
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

  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: "0 1rem",
  },
}));

const Logo = styled(Link)({
  display: "flex",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
});

const DesktopLogo = styled.img`
  height: 50px;
  display: block;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileLogo = styled.img`
  height: 50px;
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

const NavWrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "2rem",
});

const DesktopNav = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const RightSection = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
});

const CtaButton = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Tooltip = styled.span`
  visibility: hidden;
  width: max-content;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  position: absolute;
  z-index: 1;
  top: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 0.9rem;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent #333 transparent;
  }
`;

const CtaButtonWrapper = styled.div`
  position: relative;
  &:hover > ${Tooltip} {
    visibility: visible;
    opacity: 1;
  }
`;

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

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

export default Header;

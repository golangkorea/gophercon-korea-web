import { GNB_MENU_ITEMS } from "@/constants/menu";
<<<<<<< Updated upstream
import { css, Theme } from "@emotion/react";
=======
import { Theme, css } from "@emotion/react";
>>>>>>> Stashed changes
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const subMenuLinkStyles = (theme: Theme) => css`
  display: block;
  padding: 0.8rem 0;
  font-size: 1.2rem;
  color: ${theme.colors.text};
  text-decoration: none;
`;

const SubMenuInternalLink = styled(Link)`
  ${({ theme }) => subMenuLinkStyles(theme)}
`;
const SubMenuExternalLink = styled.a`
  ${({ theme }) => subMenuLinkStyles(theme)}
`;

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  const { t } = useTranslation();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  const handleLinkClick = () => {
    onClose();
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (labelKey: string) => {
    setOpenSubMenu(openSubMenu === labelKey ? null : labelKey);
  };

  return (
    <NavContainer isOpen={isOpen}>
      <NavList>
        {GNB_MENU_ITEMS.map((menu) => (
          <li key={menu.labelKey}>
            {menu.subMenus ? (
              <>
                <MenuButton onClick={() => toggleSubMenu(menu.labelKey)}>
                  {t(menu.labelKey)}
                  {openSubMenu === menu.labelKey ? <RiArrowUpLine /> : <RiArrowDownLine />}
                </MenuButton>
                {openSubMenu === menu.labelKey && (
                  <SubMenuList>
                    {menu.subMenus.map((subMenu) => (
                      <li key={subMenu.labelKey}>
                        {subMenu.isExternal ? (
                          <SubMenuExternalLink
                            href={subMenu.path}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={onClose}
                          >
                            {t(subMenu.labelKey) || subMenu.labelKey}
                          </SubMenuExternalLink>
                        ) : (
                          <SubMenuInternalLink to={subMenu.path} onClick={handleLinkClick}>
                            {t(subMenu.labelKey)}
                          </SubMenuInternalLink>
                        )}
                      </li>
                    ))}
                  </SubMenuList>
                )}
              </>
            ) : (
              <MenuLink to={menu.path} onClick={handleLinkClick}>
                {t(menu.labelKey)}
              </MenuLink>
            )}
          </li>
        ))}
      </NavList>
    </NavContainer>
  );
};

const NavContainer = styled.nav<{ isOpen: boolean }>(({ isOpen, theme }) => ({
  position: "fixed",
  top: "80px", // Header height
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: theme.colors.background,
  display: isOpen ? "block" : "none",
  zIndex: 999,
  overflowY: "auto",
  padding: "2rem 2rem 4rem",
  [`@media (min-width: ${theme.breakpoints.tablet})`]: {
    display: "none",
  },
}));
const NavList = styled.ul({ listStyle: "none", margin: 0, padding: 0 });
const MenuLink = styled(Link)(({ theme }) => ({
  display: "block",
  padding: "1.2rem 0",
  fontSize: "1.5rem",
  fontWeight: "bold",
  textDecoration: "none",
  color: theme.colors.text,
}));
const MenuButton = styled.button(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "none",
  border: "none",
  color: theme.colors.text,
  cursor: "pointer",
  padding: "1.2rem 0",
  fontSize: "1.5rem",
  fontWeight: "bold",
}));
const SubMenuList = styled.ul({ listStyle: "none", padding: "0 0 1rem 1rem" });

export default MobileNav;

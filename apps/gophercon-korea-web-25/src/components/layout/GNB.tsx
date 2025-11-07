import { GNB_MENU_ITEMS } from "@/constants/menu";
import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const SHOW_FLEA_MARKET_MENU = false;

const subMenuLinkStyles = (theme: Theme, $active: boolean) => css`
  display: block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  color: ${$active ? theme.colors.primary : theme.colors.text};
  font-weight: ${$active ? "bold" : "normal"};
  &:hover {
    background-color: ${theme.colors.footerBg};
    color: ${theme.colors.primary};
  }
`;

const SubMenuInternalLink = styled(Link)<{ $active: boolean }>`
  ${({ theme, $active }) => subMenuLinkStyles(theme, $active)}
`;
const SubMenuExternalLink = styled.a<{ $active: boolean }>`
  ${({ theme, $active }) => subMenuLinkStyles(theme, $active)}
`;

const GNB = () => {
  const { t } = useTranslation();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const location = useLocation();

  const filteredMenuItems = GNB_MENU_ITEMS.filter((menu) => menu.labelKey !== "nav.sponsorship");

  return (
    <Nav onMouseLeave={() => setHoveredMenu(null)}>
      <MenuList>
        {filteredMenuItems.map((menu) => {
          const isActive = menu.subMenus
            ? menu.subMenus.some((subMenu) => location.pathname.startsWith(subMenu.path))
            : location.pathname === menu.path;

          return (
            <MenuItem key={menu.labelKey} onMouseEnter={() => setHoveredMenu(menu.labelKey)}>
              <MenuLink
                to={menu.path}
                $active={isActive}
                onClick={(e) => menu.path === "#" && e.preventDefault()}
                style={{ cursor: menu.path === "#" ? "default" : "pointer" }}
              >
                {t(menu.labelKey)}
              </MenuLink>
              {menu.subMenus && hoveredMenu === menu.labelKey && (
                <SubMenuContainer>
                  {menu.subMenus.map((subMenu) =>
                    subMenu.isExternal ? (
                      <SubMenuExternalLink
                        $active={false}
                        key={subMenu.labelKey}
                        href={subMenu.path}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {t(subMenu.labelKey) || subMenu.labelKey}
                      </SubMenuExternalLink>
                    ) : (
                      <SubMenuInternalLink
                        to={subMenu.path}
                        key={subMenu.labelKey}
                        $active={location.pathname === subMenu.path}
                      >
                        {t(subMenu.labelKey)}
                      </SubMenuInternalLink>
                    ),
                  )}
                </SubMenuContainer>
              )}
            </MenuItem>
          );
        })}
        {SHOW_FLEA_MARKET_MENU && (
          <MenuItem>
            <MenuLink to='/flea-market' $active={location.pathname.startsWith("/flea-market")}>
              {t("nav.flea_market")}
            </MenuLink>
          </MenuItem>
        )}
      </MenuList>
    </Nav>
  );
};

const Nav = styled.nav``;
const MenuList = styled.ul({ margin: 0, padding: 0, listStyle: "none", display: "flex", gap: "2.5rem" });
const MenuItem = styled.li({ position: "relative" });
const MenuLink = styled(Link)<{ $active?: boolean }>(({ $active, theme }) => ({
  display: "block",
  padding: "1rem 0",
  fontSize: "1.1rem",
  fontWeight: $active ? 700 : 500,
  color: $active ? theme.colors.primary : theme.colors.text,
  textDecoration: "none",
  borderBottom: $active ? `2px solid ${theme.colors.primary}` : "2px solid transparent",
  paddingBottom: "calc(1rem - 2px)",
  transition: "color 0.2s, border-bottom-color 0.2s",
  "&:hover": {
    color: theme.colors.primary,
  },
}));
const SubMenuContainer = styled.div({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  padding: "0.5rem 0",
  marginTop: "2px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  minWidth: "180px",
  zIndex: 1001,
});

export default GNB;

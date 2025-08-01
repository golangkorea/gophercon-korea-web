export interface SubMenu {
  labelKey: string;
  path: string;
  isExternal?: boolean;
}

export interface MenuItem {
  labelKey: string;
  path: string;
  subMenus?: SubMenu[];
}

export const GNB_MENU_ITEMS: MenuItem[] = [
  {
    labelKey: "nav.about",
    path: "/about",
  },
  {
    labelKey: "nav.program",
    path: "/program/sessions",
    subMenus: [
      { labelKey: "nav.sessions", path: "/program/sessions" },
      { labelKey: "nav.schedule", path: "/program/schedule" },
    ],
  },
  {
    labelKey: "nav.organizers",
    path: "/organizers",
  },
  {
    labelKey: "nav.sponsorship",
    path: "/sponsorship/guide",
    subMenus: [
      { labelKey: "nav.sponsorship_guide", path: "/sponsorship/guide" },
      { labelKey: "nav.sponsorship_form", path: "/sponsorship/form" },
      { labelKey: "nav.sponsorship_faq", path: "/sponsorship/faq" },
    ],
  },
  {
    labelKey: "nav.venue",
    path: "/venue",
  },
  {
    labelKey: "nav.coc",
    path: "/coc",
  },
  {
    labelKey: "nav.past_gophercons",
    path: "#",
    subMenus: [
      { labelKey: "nav.2024", path: "https://2024.gophercon.kr", isExternal: true },
      { labelKey: "nav.2023", path: "https://2023.gophercon.kr", isExternal: true },
    ],
  },
];

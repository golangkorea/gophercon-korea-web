interface LocaleProps {
  ko: string;
  en: string;
}

export interface GoodsProps {
  name: LocaleProps;
  price: string;
  imgSrc: string;
}

export const goodsList: GoodsProps[] = [
  {
    name: {
      ko: "고퍼 대형 인형",
      en: "Large Gopher Plush",
    },
    price: "85,000",
    imgSrc: "market_bigdoll.png",
  },
  {
    name: {
      ko: "고퍼 고리 인형",
      en: "Gopher Keychain Plush",
    },
    price: "25,000",
    imgSrc: "market_ringdoll.png",
  },
  {
    name: {
      ko: "고퍼 피규어",
      en: "Gopher Figure",
    },
    price: "15,000",
    imgSrc: "market_figure.png",
  },
  {
    name: {
      ko: "고퍼 금속 뱃지",
      en: "Gopher Metal Badge",
    },
    price: "6,000",
    imgSrc: "market_badge.png",
  },
  {
    name: {
      ko: "고퍼 퍼즐",
      en: "Gopher Puzzle",
    },
    price: "19,000",
    imgSrc: "market_puzzle.png",
  },
  {
    name: {
      ko: "고퍼콘 텀블러",
      en: "GopherCon Tumbler",
    },
    price: "15,000",
    imgSrc: "market_tumbler.png",
  },
  {
    name: {
      ko: "고퍼 키캡 & 키링 세트",
      en: "Gopher Keycap & Keyring Set",
    },
    price: "12,000",
    imgSrc: "market_keyring.png",
  },
];

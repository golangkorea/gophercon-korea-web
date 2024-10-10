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
      ko: "고퍼\n대형 인형",
      en: "Large Gopher\nPlush",
    },
    price: "85,000",
    imgSrc: "market_bigdoll.png",
  },
  {
    name: {
      ko: "고퍼\n고리 인형",
      en: "Gopher\nKeychain Plush",
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
      ko: "고퍼\n금속 뱃지",
      en: "Gopher\nMetal Badge",
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
      ko: "고퍼콘\n텀블러",
      en: "GopherCon\nTumbler",
    },
    price: "15,000",
    imgSrc: "market_tumbler.png",
  },
  {
    name: {
      ko: "고퍼 키캡\n& 키링 세트",
      en: "Gopher Keycap &\nKeyring Set",
    },
    price: "12,000",
    imgSrc: "market_keyring.png",
  },
];

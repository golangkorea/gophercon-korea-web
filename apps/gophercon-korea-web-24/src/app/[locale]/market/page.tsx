"use client";

import { pretendard_fontFamily } from "@/app/fonts";
import Section from "@/components/Section";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Space, Text } from "gophercon-common";
import Image from "next/image";
import { FC, useContext } from "react";
import { GoodsProps, goodsList } from "./data";

const MarketContainer = styled.div({
  width: "100%",
  maxWidth: 1000,
  padding: "0 80px",
});

const GoodsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 40,

  "& > :nth-child(odd)": {
    flexDirection: "row",
    justifyContent: "end",
    "& > :first-child": {
      flex: 1,
      alignItems: "end",
      textAlign: "right",
      "@media (max-width: 500px)": {
        alignItems: "center",
      },
    },
    "@media (max-width: 500px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },

  "& > :nth-child(even)": {
    flexDirection: "row-reverse",
    justifyContent: "start",
    "& > :first-child": {
      flex: 1,
      alignItems: "start",
      textAlign: "left",
      "@media (max-width: 500px)": {
        alignItems: "center",
      },
    },
    "@media (max-width: 500px)": {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
});

const EachGoodsContainer = styled.div({
  display: "flex",
  justifyContent: "start",
  columnGap: 40,
  width: "100%",
  padding: 40,
  borderRadius: 40,
  backgroundColor: "#fafafa",
  "&:nth-child(even)": {
    backgroundColor: "transparent",
  },
});

const EachGoodsDescContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  rowGap: 40,
  justifyContent: "center",
});

const GoodsImageContainer = styled.div({
  position: "relative",
  width: "200px",
  height: "200px",
  backgroundColor: "#f6f3f6",
  borderRadius: "80px",
});

const GoodsImage = styled(Image)({
  objectFit: "cover",
  borderRadius: "100px",
});

const EachGoods: FC<GoodsProps> = ({ name, price, imgSrc }) => {
  const { locale } = useContext(GlobalContext);
  return (
    <EachGoodsContainer>
      <EachGoodsDescContainer>
        <Text font={pretendard_fontFamily} size={"2rem"} weight={700}>
          {name[locale]}
        </Text>
        <Text font={pretendard_fontFamily} size={"1.75rem"} weight={600}>
          {price}
          {locale === "ko" ? "원" : "won"}
        </Text>
      </EachGoodsDescContainer>
      <GoodsImageContainer>
        <GoodsImage src={`/goods/${imgSrc}`} alt={name.en} fill />
      </GoodsImageContainer>
    </EachGoodsContainer>
  );
};

const TopTitleContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  "@media (max-width: 800px)": {
    flexDirection: "column",
  },
});

const LogoImage = styled.img({
  height: 110,
  position: "relative",
});

const Market = () => {
  const { dict } = useContext(GlobalContext);
  return (
    <Section>
      <MarketContainer>
        <TopTitleContainer>
          <LogoImage src={"/goods/market_logo.png"} alt='GopherCon Korea Flea Market' />
          <Text font={pretendard_fontFamily} size={"2.75rem"} weight={700} lineHeight='100%'>
            {dict["market"]["title"]}
          </Text>
        </TopTitleContainer>
        <Space height='100px' />
        <GoodsContainer>
          {goodsList.map((info, idx) => (
            <EachGoods key={info.name.en} {...info} />
          ))}
        </GoodsContainer>
      </MarketContainer>
    </Section>
  );
};

export default Market;

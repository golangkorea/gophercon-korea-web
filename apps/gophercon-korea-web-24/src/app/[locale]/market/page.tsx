"use client";

import styled from "@emotion/styled";
import { GoodsProps, goodsList } from "./data";
import { FC, useContext } from "react";
import Image from "next/image";
import { GlobalContext } from "@/components/ThemeProvider";
import { Flex, Space, Text } from "gophercon-common";
import Section from "@/components/Section";
import { pretendard_fontFamily } from "@/app/fonts";

const MarketContainer = styled.div({
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "40px",
});

const GoodsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "50px",

  "& > :nth-child(odd)": {
    flexDirection: "row",
    justifyContent: "start",
    "& > :first-child": {
      alignItems: "end",
      "& > :first-child": {
        textAlign: "right",
      },
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
    justifyContent: "end",
    "& > :first-child": {
      alignItems: "start",
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
  gap: "40px",
  width: "100%",
});

const EachGoodsDescContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
});

const GoodsImageContainer = styled.div({
  position: "relative",
  width: "200px",
  height: "200px",
  backgroundColor: "lightgray",
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
        <Text font={pretendard_fontFamily} size={"1.5rem"} weight={700}>
          {name[locale]}
        </Text>
        <Text font={pretendard_fontFamily} size={"1.25rem"} weight={600}>
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

const LogoImageWrapper = styled.div({
  width: "380px",
  height: "110px",
  position: "relative",
  "@media (max-width: 480px)": {
    width: "300px",
    height: "85px",
  },
});

const LogoImage = styled(Image)({
  objectFit: "cover",
});

const Market = () => {
  const { dict } = useContext(GlobalContext);
  return (
    <Section>
      <MarketContainer>
        <TopTitleContainer>
          <LogoImageWrapper>
            <LogoImage src={"/goods/market_logo.png"} alt='logo' fill />
          </LogoImageWrapper>
          <Text font={pretendard_fontFamily} size={"3.5rem"} weight={700} lineHeight='100%'>
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

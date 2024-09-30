"use client";

import { AirplaneSVG } from "@/components/AirplaneSVG";
import { Carousel } from "@/components/Carousel";
import Header from "@/components/Header";
import Section from "@/components/Section";
import styled from "@emotion/styled";
import { Flex } from "gophercon-common";

const ViewContainer = styled.div({
  maxWidth: 2560,
  margin: "300px auto 0",
  width: "100%",
  height: "100%",
  overflow: "hidden",
});

const FullSection = styled(Section)({
  height: "500vh",
  background:
    "linear-gradient(rgb(255, 255, 255) 0%, rgb(237, 239, 241) 100%), radial-gradient(circle at 27.4336% 44.706%, rgba(247, 61, 61, 0.3) 30%, transparent 70%), radial-gradient(circle at 37.2336% 54.506%, rgb(237, 239, 241) 30%, transparent 70%), radial-gradient(circle at 92.5104% 17.8989%, rgba(102, 48, 217, 0.3) 30%, transparent 70%), radial-gradient(circle at 40.042% 88.6325%, rgba(57, 109, 119, 0.3) 30%, transparent 70%), radial-gradient(circle at 47.2336% 64.506%, rgb(237, 239, 241) 30%, transparent 70%), radial-gradient(circle at -3.00965% 62.8989%, rgb(237, 239, 241) 30%, transparent 70%)",
  transition: "background 0.1s ease-out",
});

export default function Home() {
  return (
    <>
      <Header />
      <FullSection>
        <ViewContainer>
          <AirplaneSVG />
          <Flex gap={20}>
            <Carousel direction='left' />
            <Carousel direction='right' />
          </Flex>
        </ViewContainer>
      </FullSection>
    </>
  );
}

"use client";

import EventQRPng from "@/assets/eventQR.png";
import LOGOWhite from "@/assets/logo_white.svg";
import { AirplaneSVG } from "@/components/AirplaneSVG";
import { Carousel } from "@/components/Carousel";

import Header from "@/components/Header";
import Section from "@/components/Section";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ViewContainer = styled.div({
  position: "relative",
  maxWidth: 2560,
  margin: "0 auto",
  width: "100%",
  height: "100%",
  background: `
    radial-gradient(circle at 35% 7%, rgba(247, 61, 61, 0.15) 0px, transparent 25%),
    radial-gradient(circle at 70% 19%, rgba(102, 48, 217, 0.15) 0px, transparent 20%),
    radial-gradient(circle at 62% 28%, rgba(47, 255, 248, 0.15) 0px, transparent 20%),
    radial-gradient(circle at 16% 52%, rgba(47, 154, 255, 0.3) 0px, transparent 30%)
  `,
  overflow: "hidden",
});

const AirplaneSVGIntro = styled(AirplaneSVG)({
  position: "absolute",
  width: "100%",
  top: 600,
  left: 0,
});

const Intro = styled.div({
  padding: "180px 80px",
  overflow: "hidden",
});

interface TitleStyledProps {
  animActive?: boolean;
}

const IntroTitle = styled.h1<TitleStyledProps>(({ animActive }) => ({
  margin: "0 0 1em",
  padding: 0,
  border: 0,
  lineHeight: 1.6,
  opacity: animActive ? 1 : 0,
  transition: "opacity .5s ease",
  transitionDelay: ".2s",
}));

const IntroSubTitle = styled.h2<TitleStyledProps>(({ animActive }) => ({
  margin: 0,
  padding: 0,
  border: 0,
  color: "#555555",
  opacity: animActive ? 1 : 0,
  transition: "opacity .5s ease",
  transitionDelay: ".5s",
}));

const Ticket = styled.div({
  marginTop: 100,
  float: "right",
  display: "flex",
  alignItems: "stretch",
  overflow: "hidden",
  transform: "translate(1000px, 0)",
});

const TicketLeft = styled.div({
  padding: 40,
  borderRadius: 20,
  backgroundColor: "#ffffff",
});

const TicketRight = styled.div({
  borderRadius: 20,
  backgroundColor: "#ffffff",
  overflow: "hidden",
});

const Speakers = styled.section({
  position: "relative",
  display: "flex",
  rowGap: 40,
  marginTop: 200,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

const TicketLabel = styled.div({
  width: "100%",
  padding: "10px 20px",
  fontSize: 0,
  boxSizing: "border-box",
  background: "linear-gradient(90deg, rgba(102,48,217,1) 0%, rgba(247,61,61,1) 100%)",
});

const TicketFlightInfo = styled.div({
  width: "30vw",
  position: "relative",
  borderBottom: "1px solid #f1f1f1",
  overflow: "hidden",
  padding: 40,
  "&:after": {
    content: '""',
    width: "80%",
    height: 0,
    marginLeft: "-40%",
    borderBottom: "2px dashed #000",
    position: "absolute",
    top: "50%",
    left: "50%",
  },
});

const TicketPoint = styled.div({
  position: "relative",
  zIndex: 1,
  padding: "0 1em",
  backgroundColor: "#ffffff",
});

const TicketPointDescription = styled.div({
  fontSize: "0.75rem",
});

const TicketPointCode = styled.div({
  fontWeight: 600,
  fontSize: "1.25rem",
  textTransform: "uppercase",
});

const TicketDestinationInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  rowGap: 40,
  padding: 40,
});

const TicketDestinationInfoRow = styled.ul({
  display: "flex",
  flex: "1",
  margin: 0,
  padding: 0,
  listStyle: "none",
  alignItems: "stretch",
  justifyContent: "center",
  flexDirection: "row",
  "& > li": {
    flex: 1,
  },
});

const TicketFields = styled.ul({
  listStyle: "none",
  fontSize: "1rem",
  margin: 0,
  padding: 0,
});

const TicketField = styled.li({
  marginBottom: ".375rem",
});

const TicketFieldName = styled.b({
  color: "#777",
  fontSize: "0.75rem",
  textTransform: "uppercase",
});

const TicketFieldValue = styled.p({
  margin: 0,
  fontWeight: 600,
});

const Gallery = styled.div({
  height: 900,
});

const FullSection = styled(Section)({
  height: "500vh",
});

const Home = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const ticketRef = useRef<HTMLDivElement | null>(null);
  const [isAnimActive, setIsAnimActive] = useState<boolean>(false);

  useEffect(() => {
    setIsAnimActive(true);
    if (contentRef.current) {
      const getScrollRatio = (scrollY: number, elementTop: number, elementHeight: number) =>
        (scrollY - elementTop) / elementHeight;

      const updatePathAndAirplane = () => {
        const scrollY = window.scrollY + window.innerHeight;
        const elementTop = contentRef.current!.offsetTop;
        const elementHeight = contentRef.current!.offsetHeight;

        const ratio = getScrollRatio(scrollY - elementTop, elementTop, elementHeight);
        if (ticketRef.current)
          ticketRef.current.style.transform = `translate(${Math.max(1000 - 800 * (ratio - 0.2) * 30, 100)}px, 0)`;
      };

      const scrollHandler = () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        animationFrameRef.current = requestAnimationFrame(updatePathAndAirplane);
      };

      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [setIsAnimActive]);

  return (
    <>
      <Header />
      <FullSection>
        <ViewContainer ref={contentRef}>
          <Intro>
            <IntroTitle animActive={isAnimActive}>
              Go 언어 개발자의 축제
              <br />
              고퍼콘 코리아에 어서오세요!
            </IntroTitle>
            <IntroSubTitle animActive={isAnimActive}>여행 준비는 되셨나요?</IntroSubTitle>
            <Ticket ref={ticketRef}>
              <TicketLeft>
                <TicketFields>
                  <TicketField>
                    <TicketFieldName>PASSANGER NAME</TicketFieldName>
                    <TicketFieldValue>Gopher</TicketFieldValue>
                  </TicketField>
                  <TicketField>
                    <TicketFieldName>FLIGHT</TicketFieldName>
                    <TicketFieldValue>GO24</TicketFieldValue>
                  </TicketField>
                  <TicketField>
                    <TicketFieldName>SEAT</TicketFieldName>
                    <TicketFieldValue>12B</TicketFieldValue>
                  </TicketField>
                  <TicketField>
                    <Image src={EventQRPng} width='120' alt='Event QR Code' />
                  </TicketField>
                </TicketFields>
              </TicketLeft>
              <TicketRight>
                <TicketLabel>
                  <Image src={LOGOWhite} height='26' alt='GopherCon Korea 2024' />
                </TicketLabel>
                <TicketFlightInfo>
                  <TicketPoint style={{ float: "left" }}>
                    <TicketPointDescription>Home</TicketPointDescription>
                    <TicketPointCode>HOM</TicketPointCode>
                  </TicketPoint>
                  <TicketPoint style={{ float: "right" }}>
                    <TicketPointDescription>GopherCon</TicketPointDescription>
                    <TicketPointCode>GO</TicketPointCode>
                  </TicketPoint>
                </TicketFlightInfo>
                <TicketDestinationInfo>
                  <TicketDestinationInfoRow>
                    <TicketField>
                      <TicketFieldName>FLIGHT</TicketFieldName>
                      <TicketFieldValue>GO24</TicketFieldValue>
                    </TicketField>
                    <TicketField>
                      <TicketFieldName>TERMINAL</TicketFieldName>
                      <TicketFieldValue>1</TicketFieldValue>
                    </TicketField>
                    <TicketField>
                      <TicketFieldName>GATE</TicketFieldName>
                      <TicketFieldValue>10A</TicketFieldValue>
                    </TicketField>
                    <TicketField>
                      <TicketFieldName>SEAT</TicketFieldName>
                      <TicketFieldValue>12B</TicketFieldValue>
                    </TicketField>
                  </TicketDestinationInfoRow>
                  <TicketDestinationInfoRow>
                    <TicketField>
                      <TicketFieldName>PASSANGER NAME</TicketFieldName>
                      <TicketFieldValue>Gopher</TicketFieldValue>
                    </TicketField>
                    <TicketField>
                      <TicketFieldName>BOARDING</TicketFieldName>
                      <TicketFieldValue>11:00</TicketFieldValue>
                    </TicketField>
                  </TicketDestinationInfoRow>
                </TicketDestinationInfo>
              </TicketRight>
            </Ticket>
          </Intro>
          <AirplaneSVGIntro />
          <Gallery></Gallery>
          <Speakers>
            <Carousel direction='left' />
            <Carousel direction='right' />
            <Carousel direction='left' />
            <Carousel direction='right' />
          </Speakers>
        </ViewContainer>
      </FullSection>
    </>
  );
};

export default Home;

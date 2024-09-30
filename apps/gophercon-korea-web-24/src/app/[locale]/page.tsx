"use client";

import EventQRPng from "@/assets/eventQR.png";
import LOGOWhite from "@/assets/logo_white.svg";
import { AirplaneSVG } from "@/components/AirplaneSVG";
import { Carousel } from "@/components/Carousel";

import airplane from "@/assets/airplane.svg";
import cameraSVG from "@/assets/camera.svg";
import passportSymbolSVG from "@/assets/passportSymbol.svg";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Section from "@/components/Section";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const FullSection = styled(Section)({
  padding: 0,
  margin: "0 auto",
  overflow: "hidden",
  background: `
    radial-gradient(circle at 35% 7%, rgba(247, 61, 61, 0.15) 0px, transparent 25%),
    radial-gradient(circle at 70% 19%, rgba(102, 48, 217, 0.15) 0px, transparent 20%),
    radial-gradient(circle at 62% 28%, rgba(47, 255, 248, 0.15) 0px, transparent 20%),
    radial-gradient(circle at 16% 40%, rgba(47, 154, 255, 0.3) 0px, transparent 30%)
  `,
});

const InnerSection = styled(Section)({
  width: "100%",
  maxWidth: 2400,
  margin: "0 auto",
});

const ViewContainer = styled.div({
  position: "relative",
  margin: "0 auto",
  width: "100%",
  overflow: "hidden",
});

interface AirplaneSVGIntroStyledProps {
  visible?: boolean;
}

const AirplaneSVGIntro = styled(AirplaneSVG)<AirplaneSVGIntroStyledProps>(({ visible }) => ({
  visibility: visible ? "visible" : "hidden",
  position: "absolute",
  width: "100%",
  top: 760,
  left: 0,
}));

const Intro = styled.div({
  padding: "180px 80px",
  overflow: "hidden",
});

const GallerySection = styled(Gallery)({
  marginLeft: "20vw",
  marginTop: 140,
  height: 400,
  zIndex: 3,
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
  marginTop: 260,
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
  paddingBottom: 300,
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

const PassportShowcase = styled.section({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 120,
  position: "relative",
  zIndex: 3,
  height: 1200,
});

const SponsorStamp = styled.div({
  display: "flex",
  width: 360,
  height: 540,
  flexDirection: "column",
  alignItems: "stretch",
  borderRadius: 20,
  padding: 20,
  backgroundColor: "#0035c8",
  overflow: "hidden",
  boxSizing: "border-box",
});

const Passport = styled.div({
  display: "flex",
  width: 360,
  height: 540,
  flexDirection: "column",
  rowGap: 40,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#0035c8",
  borderRadius: "0 20px 20px 0",
  overflow: "hidden",
});

const PassportTitle = styled.h2({
  fontSize: "2rem",
  fontWeight: 600,
  color: "#ffffff",
  textTransform: "uppercase",
  border: "none",
  margin: 0,
  padding: 0,
});

const PassportSymbol = styled.div({
  borderTop: "1px solid rgba(255, 255, 255, .15)",
  borderBottom: "1px solid rgba(255, 255, 255, .15)",
  padding: "40px 0",
});

const PassportCameraMark = styled.div({});

const Sponsors = styled.div({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
});

const SponsorMark = styled.div({
  width: 70,
  height: 70,
  borderRadius: 999,
  backgroundColor: "#ffffff",
});

const SponsorPlatinumMark = styled(SponsorMark)({
  width: 240,
  height: 80,
  gridColumnStart: 1,
  gridColumnEnd: 4,
});

const SponsorGoldMark = styled(SponsorMark)({
  width: 90,
  height: 90,
  border: "3px solid #ecc675",
});

const SponsorSilverMark = styled(SponsorMark)({
  width: 90,
  height: 90,
  border: "3px solid #aaaaaa",
});

const SponsorBronzeMark = styled(SponsorMark)({
  border: "3px solid #873e23",
});

const MainDisplayText = styled.h1({
  margin: 0,
  padding: 0,
  marginBottom: 200,
  fontSize: "3rem",
  color: "#ffffff",
  textAlign: "center",
  opacity: 0,
  border: "none",
});

interface AirplaneImage {
  visible?: boolean;
}

const AirplaneImage = styled(Image)<AirplaneImage>(({ visible }) => ({
  visibility: visible ? "visible" : "hidden",
  position: "absolute",
  left: "50%",
  top: "50%",
  marginLeft: -25,
  marginTop: -25,
  transform: "rotate(90deg)",
}));

const HighlightedSection = styled.div({
  position: "relative",
  paddingTop: 300,
  isolation: "isolate",
});

const HighlightedSectionNoise = styled.div({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  background: "linear-gradient(transparent, #003239 300px), url(https://grainy-gradients.vercel.app/noise.svg)",
  filter: "contrast(120%) brightness(200%)",
});

const HighlightedSectionAnim = styled.div({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: 600,
  background:
    "radial-gradient(ellipse at bottom, rgba(255, 255, 176, 0.15) 60px, transparent 60%), radial-gradient(ellipse at bottom, rgba(255, 180, 0, 0.15) 15px, transparent 30%)",
});

const HighlightedSectionOverlay = styled.div({
  position: "absolute",
  top: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#ffffff",
  mixBlendMode: "multiply",
});

const CTAContainer = styled.div({
  padding: "20px 0 160px",
  textAlign: "center",
});

const CTAButton = styled.a({
  position: "relative",
  padding: "20px 40px",
  borderRadius: 999,
  color: "#ffffff",
  fontSize: "1.725rem",
  fontWeight: 600,
  backgroundColor: "#000000",
  lineHeight: 1,
  margin: "0 auto",
  cursor: "pointer",
  textDecoration: "none",
  zIndex: 3,
  transition: "bakcground-color .3 ease",
  "&:hover": {
    backgroundColor: "#222222",
  },
});

const Home = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const ticketRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const stampRef = useRef<HTMLDivElement | null>(null);
  const passportRef = useRef<HTMLDivElement | null>(null);
  const mainDisplayTextRef = useRef<HTMLHeadingElement | null>(null);

  const [isAnimActive, setIsAnimActive] = useState<boolean>(false);
  const [isAirplainVisible, setIsAirplainVisible] = useState<boolean>(false);
  const [isGalleryActive, setIsGalleryActive] = useState<boolean>(false);

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

        console.log("ratio", ratio);
        if (ticketRef.current)
          ticketRef.current.style.transform = `translate(${Math.max(1000 - 800 * (ratio - 0.2) * 30, 100)}px, 0)`;
        setIsAirplainVisible(ratio >= 0.2375);

        if (galleryRef.current)
          galleryRef.current.style.transform = `translate(${Math.min((ratio - 0.25) * 5600 - 560, 0)}px, 0)`;

        if (stampRef.current) {
          stampRef.current.style.transform = `translate(${Math.min((ratio - 0.75) * 1.25 * 15000 - 1500, 0)}px, 0)`;
          stampRef.current.style.opacity = String((ratio - 0.75) * 12.5);
        }

        if (passportRef.current) {
          passportRef.current.style.transform = `translate(${1500 - Math.min((ratio - 0.75) * 1.25 * 15000, 1500)}px, 0)`;
          passportRef.current.style.opacity = String(Math.min((ratio - 0.75) * 12.5, 1));
        }

        if (mainDisplayTextRef.current) {
          mainDisplayTextRef.current.style.transform = `translate(0, ${-Math.min((ratio - 0.91) * 12.5 * 50, 50)}px)`;
          mainDisplayTextRef.current.style.opacity = String(Math.min((ratio - 0.91) * 12.5, 1));
        }

        setIsAirplainVisible(ratio >= 0.2375);
        setIsGalleryActive(ratio >= 0.35);
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
  }, [setIsAnimActive, ticketRef, galleryRef]);

  return (
    <>
      <Header />
      <FullSection>
        <InnerSection>
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
                      <Image src={EventQRPng} width='160' alt='Event QR Code' />
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
                    <AirplaneImage visible={!isAirplainVisible} src={airplane} alt='Airplane' width={50} height={50} />
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
            <AirplaneSVGIntro visible={isAirplainVisible} />
            <GallerySection ref={galleryRef} active={isGalleryActive} />
            <Speakers>
              <Carousel direction='left' />
              <Carousel direction='right' />
              <Carousel direction='left' />
              <Carousel direction='right' />
            </Speakers>
            <HighlightedSection>
              <HighlightedSectionNoise />
              <HighlightedSectionOverlay />
              <HighlightedSectionAnim />
              <PassportShowcase>
                <SponsorStamp ref={stampRef}>
                  <Sponsors>
                    <SponsorPlatinumMark></SponsorPlatinumMark>
                    <SponsorGoldMark></SponsorGoldMark>
                    <SponsorGoldMark></SponsorGoldMark>
                    <SponsorSilverMark></SponsorSilverMark>
                    <SponsorSilverMark></SponsorSilverMark>
                    <SponsorBronzeMark></SponsorBronzeMark>
                    <SponsorBronzeMark></SponsorBronzeMark>
                    <SponsorMark></SponsorMark>
                    <SponsorMark></SponsorMark>
                    <SponsorMark></SponsorMark>
                    <SponsorMark></SponsorMark>
                    <SponsorMark></SponsorMark>
                    <SponsorMark></SponsorMark>
                  </Sponsors>
                </SponsorStamp>
                <Passport ref={passportRef}>
                  <PassportTitle>PASSPORT</PassportTitle>
                  <PassportSymbol>
                    <Image width={140} src={passportSymbolSVG} alt='Golang Passport' />
                  </PassportSymbol>
                  <PassportCameraMark>
                    <Image width={32} src={cameraSVG} alt='Passport Chip Mark' />
                  </PassportCameraMark>
                </Passport>
              </PassportShowcase>
              <MainDisplayText ref={mainDisplayTextRef}>You are ready to Go!</MainDisplayText>
              <CTAContainer>
                <CTAButton href='https://festa.io/events/5098' target='_blank'>
                  행사 티켓 페이지로 이동
                </CTAButton>
              </CTAContainer>
            </HighlightedSection>
          </ViewContainer>
        </InnerSection>
      </FullSection>
    </>
  );
};

export default Home;

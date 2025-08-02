import Seo from "@/components/common/Seo";
import { GolobParticle, Particle, useClickableGolob } from "@/components/home/ClickableGolobEffect";
import { Garland } from "@/components/home/Garland";
import IntroAnimation from "@/components/home/IntroAnimation";
import MainBackground from "@/components/home/MainBackground";
import SponsorSlider from "@/components/home/SponsorSlider";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const letterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const Home = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "home" });
  const titleText = t("title");
  const titleAnimationEndDelay = titleText.length * 0.06 + 0.5;
  const { particles, handleClick, handleAnimationEnd } = useClickableGolob();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const garlandParallaxFactor = -0.03;
  const garlandOffsetX = windowSize.width > 0 ? (mousePosition.x - windowSize.width / 2) * garlandParallaxFactor : 0;
  const garlandRotateFactor = 0.005;
  const garlandRotate = windowSize.width > 0 ? (mousePosition.x - windowSize.width / 2) * garlandRotateFactor : 0;

  return (
    <PageWrapper>
      <Seo description={t("subtitle")} />
      <HomeContainer>
        <GarlandContainer
          style={{
            animationDelay: `${titleAnimationEndDelay}s`,
          }}
        >
          <GarlandWrapper
            side='left'
            style={{ transform: `translateX(${garlandOffsetX}px) rotate(${garlandRotate - 8}deg)` }}
          >
            <Garland />
          </GarlandWrapper>
          <GarlandWrapper
            side='right'
            style={{ transform: `translateX(${garlandOffsetX}px) rotate(${garlandRotate + 8}deg)` }}
          >
            <Garland />
          </GarlandWrapper>
        </GarlandContainer>
        {particles.map((p: Particle) => (
          <GolobParticle
            key={p.id}
            src={p.src}
            alt='golob emoji'
            style={{ left: p.x, top: p.y }}
            onAnimationEnd={() => handleAnimationEnd(p.id)}
            endX={p.endX}
            endY={p.endY}
            rotation={p.rotation}
            endHue={p.endHue}
          />
        ))}
        <MemoizedMainBackground />
        <MemoizedIntroAnimation
          startDelay={titleAnimationEndDelay}
          mousePosition={mousePosition}
          windowSize={windowSize}
        />
        <HeroSection onClick={handleClick} onMouseMove={handleMouseMove}>
          <TopContentContainer>
            <MainTitle>
              {titleText.split("").map((char, index) => (
                <span key={`${char}-${index}`} style={{ animationDelay: `${0.3 + index * 0.06}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </MainTitle>
          </TopContentContainer>

          <BottomContentContainer>
            <Subtitle style={{ animationDelay: `${titleAnimationEndDelay}s` }}>{t("subtitle")}</Subtitle>
            <InfoContainer style={{ animationDelay: `${titleAnimationEndDelay + 0.3}s` }}>
              <InfoItem>{t("date")}</InfoItem>
              <InfoDivider />
              <InfoItem>{t("venue")}</InfoItem>
            </InfoContainer>
          </BottomContentContainer>
        </HeroSection>
      </HomeContainer>
      <MemoizedSponsorSlider />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  overflow-x: hidden;
`;

const MemoizedMainBackground = React.memo(MainBackground);
const MemoizedIntroAnimation = React.memo(IntroAnimation);
const MemoizedSponsorSlider = React.memo(SponsorSlider);

const HomeContainer = styled.div`
  position: relative;
  padding: 0;
  max-width: none;
  height: calc(100vh - 80px);
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
  text-align: center;
  cursor: pointer;
  user-select: none;
  padding: 8vh 0;
  box-sizing: border-box;
  z-index: 5;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 8vh 0;
  }
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  white-space: nowrap;
  background-color: white;
  padding: 1rem 2.5rem;
  border-radius: 20px;
  border: 4px solid #1e293b;
  box-shadow: 12px 12px 0px #1e293b;
  transition: all 0.2s ease-in-out;

  span {
    display: inline-block;
    opacity: 0;
    color: ${({ theme }) => theme.colors.primary};
    animation-name: ${letterAnimation};
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 3.8rem;
    padding: 0.8rem 1.2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 2.8rem;
    padding: 0.75rem 1.5rem;
    border-width: 3px;
    box-shadow: 8px 8px 0px #1e293b;
  }
`;

const TopContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GarlandContainer = styled.div`
  opacity: 0;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
  pointer-events: none;
`;

const GarlandWrapper = styled.div<{ side: "left" | "right" }>`
  position: absolute;
  top: 40px;
  width: 120%;
  ${({ side }) => (side === "left" ? "left: -10%;" : "right: -10%;")}
  transform-origin: center top;
  transform-origin: ${({ side }) => (side === "left" ? "top left" : "top right")};
  transition: transform 0.3s ease-out;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  color: #000;
  opacity: 0;
  margin-bottom: 1.5rem;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  background-color: white;
  padding: 1.5rem 2.5rem;
  border-radius: 20px;
  border: 4px solid #1e293b;
  box-shadow: 12px 12px 0px #1e293b;
  transition: all 0.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1rem 1.5rem;
    border-width: 3px;
    box-shadow: 8px 8px 0px #1e293b;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  opacity: 0;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const InfoItem = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000;
`;

const InfoDivider = styled.div`
  width: 1px;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.border};
`;

export default Home;

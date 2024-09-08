"use client";

import GopherSVG from "@/assets/gopher.svg";
import { Carousel } from "@/components/Carousel";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Flex } from "gophercon-common";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { LocaleData } from "./layout";

interface GradientPosition {
  baseX: number;
  baseY: number;
  offsetX: number;
  offsetY: number;
  directionX: number;
  directionY: number;
  speed: number;
  maxDistance: number;
}

const ViewContainer = styled.div`
  max-width: 2560px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FullSection = styled(Section)({
  height: "100%",
  transition: "background 0.1s ease-out",
});

const Hero = styled.section({
  display: "flex",
  flexDirection: "column",
  rowGap: 80,
  textAlign: "center",
  alignItems: "center",
});

const FestivalTitle = styled.h1({
  opacity: 0,
  width: 0,
  height: 0,
});

const HeroTitle = styled.h2({
  fontSize: 40,
  fontWeight: 900,
  padding: 0,
  margin: 0,
  border: 0,
});

const HeroSubTitle = styled.h2({
  fontSize: 32,
  fontWeight: 700,
  color: "#333",
  padding: 0,
  margin: 0,
  border: 0,
});

const HeroImage = styled(Image)`
  transform: translateX(10%);
`;

export default function Home() {
  const { dict } = useContext(GlobalContext);
  const [positions, setPositions] = useState<GradientPosition[]>([
    { baseX: 25, baseY: 25, offsetX: 0, offsetY: 0, directionX: 1, directionY: 1, speed: 0.2, maxDistance: 20 },
    { baseX: 50, baseY: 50, offsetX: 0, offsetY: 0, directionX: -1, directionY: -1, speed: 0.2, maxDistance: 20 },
    { baseX: 75, baseY: 25, offsetX: 0, offsetY: 0, directionX: -1, directionY: 1, speed: 0.15, maxDistance: 30 },
    { baseX: 40, baseY: 80, offsetX: 0, offsetY: 0, directionX: 1, directionY: -1, speed: 0.25, maxDistance: 25 },
    { baseX: 60, baseY: 60, offsetX: 0, offsetY: 0, directionX: -1, directionY: -1, speed: 0.2, maxDistance: 20 },
    { baseX: 30, baseY: 70, offsetX: 0, offsetY: 0, directionX: 1, directionY: 1, speed: 0.15, maxDistance: 30 },
  ]);

  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const animationFrameId = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const relativeX = (clientX - centerX) / centerX; // -1 to 1
      const relativeY = (clientY - centerY) / centerY; // -1 to 1

      setMouseOffset({
        x: relativeX,
        y: relativeY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => {
          let newOffsetX = pos.offsetX + pos.directionX * pos.speed * 0.4;
          let newOffsetY = pos.offsetY + pos.directionY * pos.speed * 0.4;

          if (newOffsetX > pos.maxDistance || newOffsetX < -pos.maxDistance) {
            pos.directionX *= -1;
          }
          if (newOffsetY > pos.maxDistance || newOffsetY < -pos.maxDistance) {
            pos.directionY *= -1;
          }

          return {
            ...pos,
            offsetX: newOffsetX,
            offsetY: newOffsetY,
          };
        }),
      );

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const backgroundStyle = {
    background: `
      linear-gradient(180deg, #ffffff 0%, #edeff1 100%),
      radial-gradient(circle at ${positions[0].baseX + mouseOffset.x * positions[0].maxDistance + positions[0].offsetX}% ${positions[0].baseY + mouseOffset.y * positions[0].maxDistance + positions[0].offsetY}%, rgba(247, 61, 61, 0.3) 30%, transparent 70%),
      radial-gradient(circle at ${positions[1].baseX + mouseOffset.x * positions[1].maxDistance + positions[1].offsetX}% ${positions[1].baseY + mouseOffset.y * positions[1].maxDistance + positions[1].offsetY}%, #edeff1 30%, transparent 70%),
      radial-gradient(circle at ${positions[2].baseX + mouseOffset.x * positions[2].maxDistance + positions[2].offsetX}% ${positions[2].baseY + mouseOffset.y * positions[2].maxDistance + positions[2].offsetY}%, rgba(102, 48, 217, 0.3) 30%, transparent 70%),
      radial-gradient(circle at ${positions[3].baseX + mouseOffset.x * positions[3].maxDistance + positions[3].offsetX}% ${positions[3].baseY + mouseOffset.y * positions[3].maxDistance + positions[3].offsetY}%, rgba(57, 109, 119, 0.3) 30%, transparent 70%),
      radial-gradient(circle at ${positions[4].baseX + mouseOffset.x * positions[4].maxDistance + positions[4].offsetX}% ${positions[4].baseY + mouseOffset.y * positions[4].maxDistance + positions[4].offsetY}%, #edeff1 30%, transparent 70%),
      radial-gradient(circle at ${positions[5].baseX + mouseOffset.x * positions[5].maxDistance + positions[5].offsetX}% ${positions[5].baseY + mouseOffset.y * positions[5].maxDistance + positions[5].offsetY}%, #edeff1 30%, transparent 70%)`,
    backgroundBlendMode: "soft-light, normal, normal, normal",
  };

  return (
    <>
      <Header />
      <FullSection style={backgroundStyle}>
        <ViewContainer>
          <FestivalTitle>GopherCon Korea 2024</FestivalTitle>
          <Hero>
            <HeroTitle>{dict.home.prepare.title}</HeroTitle>
            <HeroSubTitle>{dict.home.prepare.subTitle}</HeroSubTitle>
            <HeroImage width={600} src={GopherSVG} alt={"Golang Gopher"} />
          </Hero>
          <Flex gap={20}>
            <Carousel direction='left' />
            <Carousel direction='right' />
          </Flex>
        </ViewContainer>
      </FullSection>
    </>
  );
}

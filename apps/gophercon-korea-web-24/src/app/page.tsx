"use client";

import GopherSVG from "@/assets/gopher.svg";
import Content from "@/components/Content";
import Header from "@/components/Header";
import Section from "@/components/Section";
import styled from "@emotion/styled";
import localFont from "@next/font/local";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../assets/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
});

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

const FullSection = styled(Section)({
  flex: 1,
  transition: "background 0.1s ease-out",
});

const Hero = styled.section({
  display: "flex",
  flexDirection: "column",
  rowGap: 80,
  textAlign: "center",
});

const HeroTitle = styled.h1({
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

const HeroImage = styled(Image)({
  marginLeft: 100,
});

export default function Home() {
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
    <Content className={pretendard.className}>
      <Header />
      <FullSection style={backgroundStyle}>
        <Hero>
          <HeroTitle>10월 12일 ~ 13일, Go 개발자들의 축제</HeroTitle>
          <HeroSubTitle>하남시 미사, 더 릿에서 곧 만나요!</HeroSubTitle>
          <HeroImage width={600} src={GopherSVG} alt={"Golang Gopher"} />
        </Hero>
      </FullSection>
    </Content>
  );
}

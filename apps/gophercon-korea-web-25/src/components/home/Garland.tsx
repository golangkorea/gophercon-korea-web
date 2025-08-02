import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useMemo, useState } from "react";

const swing = (angle: number) => keyframes`
  0%, 100% {
    transform: rotate(${angle}deg);
  }
  50% {
    transform: rotate(-${angle}deg);
  }
`;

const GarlandWrapper = styled.div`
  display: flex;
  width: fit-content;
  position: relative;
`;

const GarlandSvg = styled.svg`
  overflow: visible;
  flex-shrink: 0;
  height: 60px;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const colors = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71", "#9b59b6", "#e67e22"];
const pathD = "M0 10 C 50 30, 100 0, 150 10 C 200 20, 250 0, 300 10";
const points = [
  { x: 25, y: 12 },
  { x: 75, y: 5 },
  { x: 125, y: 8 },
  { x: 175, y: 12 },
  { x: 225, y: 5 },
  { x: 275, y: 8 },
];

const flagShapes = [
  (p: { x: number; y: number }, w: number, h: number) => `${p.x},${p.y} ${p.x + w},${p.y + h} ${p.x - w},${p.y + h}`,
  (p: { x: number; y: number }, w: number, h: number) =>
    `${p.x - w},${p.y} ${p.x + w},${p.y} ${p.x + w},${p.y + h} ${p.x},${p.y + h * 0.7} ${p.x - w},${p.y + h}`,
  (p: { x: number; y: number }, w: number, h: number) =>
    `${p.x - w * 0.8},${p.y} ${p.x + w * 0.8},${p.y} ${p.x},${p.y + h}`,
];

const SingleGarland = () => {
  const garlandData = useMemo(() => {
    return points.map((p, i) => {
      const baseWidth = 10 + Math.random() * 6;
      const flagHeight = 14 + Math.random() * 8;
      const rotationAngle = 3 + Math.random() * 4;
      const animationDuration = 3 + Math.random() * 3;
      const animationDelay = Math.random();
      const color = colors[i % colors.length];
      const shapeFunc = flagShapes[Math.floor(Math.random() * flagShapes.length)];

      return {
        points: shapeFunc(p, baseWidth, flagHeight),
        color,
        transformOrigin: `${p.x}px ${p.y}px`,
        animation: `${swing(rotationAngle)} ${animationDuration}s ease-in-out infinite`,
        animationDelay: `${animationDelay}s`,
      };
    });
  }, []);

  return (
    <GarlandSvg viewBox='0 0 300 50' xmlns='http://www.w3.org/2000/svg'>
      <path d={pathD} stroke='#d1d1d1' fill='none' strokeWidth='2' strokeDasharray='4 4' />
      {garlandData.map((data, i) => (
        <polygon
          key={i}
          points={data.points}
          fill={data.color}
          style={{
            transformOrigin: data.transformOrigin,
            animation: data.animation,
            animationDelay: data.animationDelay,
          }}
        />
      ))}
    </GarlandSvg>
  );
};

export const Garland = () => {
  const [numGarlands, setNumGarlands] = useState(0);

  useEffect(() => {
    const calculateGarlands = () => {
      setNumGarlands(Math.ceil(window.innerWidth / 300) + 2);
    };
    calculateGarlands();
    window.addEventListener("resize", calculateGarlands);
    return () => window.removeEventListener("resize", calculateGarlands);
  }, []);

  return (
    <GarlandWrapper>
      {Array.from({ length: numGarlands }).map((_, i) => (
        <SingleGarland key={i} />
      ))}
    </GarlandWrapper>
  );
};

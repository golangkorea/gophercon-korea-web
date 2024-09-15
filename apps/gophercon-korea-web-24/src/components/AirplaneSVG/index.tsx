"use client";

import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import airplane from "@/assets/airplane.png";
import Image from "next/image";

export const AirplaneSVG = () => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const heightRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const airplaneRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (pathRef.current && contentRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      path.style.strokeWidth = "2";
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();

      const calcDashOffset = (scrollY: number, elementTop: number, elementHeight: number, length: number) => {
        const scrollRatio = (scrollY - elementTop) / elementHeight;
        const clampedRatio = Math.max(0, Math.min(scrollRatio, 1));
        return length - length * clampedRatio * Math.max(1, 2 - clampedRatio);
      };

      const calculateAngle = (x1: number, y1: number, x2: number, y2: number) => {
        return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
      };

      const updatePathAndAirplane = () => {
        const scrollY = window.scrollY + window.innerHeight;
        const elementTop = contentRef.current!.offsetTop;
        const elementHeight = heightRef.current!.offsetHeight;

        const offset = calcDashOffset(scrollY - elementTop, elementTop, elementHeight, length);
        path.style.strokeDashoffset = offset.toString();

        // Calculate airplane position and rotation
        const progress = 1 - offset / length;
        const currentPoint = path.getPointAtLength(progress * length);
        console.log(currentPoint.x);
        const nextPoint = path.getPointAtLength(Math.min(progress + 0.01, 1) * length);

        const angle = calculateAngle(currentPoint.x, currentPoint.y, nextPoint.x, nextPoint.y);

        if (airplaneRef.current) {
          airplaneRef.current.style.transform = `translate(${currentPoint.x - 1290}px, ${currentPoint.y - 25}px) rotate(${angle}deg)`;
        }
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
  }, []);

  return (
    <AirplaneWrapper ref={contentRef}>
      <AirplaneContainer ref={heightRef}>
        <svg width='1260' height='4124' viewBox='0 0 1260 4124' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            ref={pathRef}
            d='M1221 1C1089.32 227.044 700.001 312.751 323.001 294C-47.1044 275.591 -102.418 651.501 181.998 711.152C341 744.5 438.5 608.5 380.5 472C359.136 421.72 316.564 410.297 291.5 445C259 490 283.802 675.091 181.998 520.5C141.498 459 367.202 623.314 291.5 647C210.001 672.5 159.999 655 108.499 593C4.736 468.081 99.0006 395.5 221.001 363C389.924 318 473.5 363 576.5 391.5C747.347 438.773 787.523 573.095 651 612C514.477 650.905 425.63 609.567 493.001 472C564.501 326 1054.65 232.003 1166 363C1277.35 493.997 384.362 1122.86 652.083 1320.34C919.804 1517.82 1483.33 1829.06 1162.35 1939.37C841.377 2049.69 1040.35 1420.8 1149.28 1510.43C1258.21 1600.06 920.288 2000.93 720.345 1905.89C520.401 1810.84 556.227 1664.08 720.345 1671.96C884.463 1679.84 967.248 2150.15 762.948 2175.76C558.647 2201.37 116.156 2029.5 111.315 1880.28C106.474 1731.06 734.662 2285.8 873 2415.5C1377.5 2888.5 -194.5 3235.5 683.5 4122.5'
            stroke='black'
          />
        </svg>
        <AirplaneImage ref={airplaneRef} src={airplane} alt='Airplane' width={50} height={50} />
      </AirplaneContainer>
    </AirplaneWrapper>
  );
};

const AirplaneWrapper = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

const AirplaneContainer = styled.div`
  position: absolute;
`;

const AirplaneImage = styled(Image)`
  position: absolute;
  transform-origin: center;
`;

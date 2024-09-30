"use client";

import airplane from "@/assets/airplane.svg";
import styled from "@emotion/styled";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface AirplaneSVGProps {
  className?: string;
}

export const AirplaneSVG: React.FC<AirplaneSVGProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
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
        setIsVisible(true);
        const scrollY = window.scrollY + window.innerHeight;
        const elementTop = contentRef.current!.offsetTop;
        const elementHeight = heightRef.current!.offsetHeight;

        const offset = calcDashOffset(scrollY - elementTop, elementTop, elementHeight, length);
        path.style.strokeDashoffset = offset.toString();

        // Calculate airplane position and rotation
        const progress = 1 - offset / length;
        const currentPoint = path.getPointAtLength(progress * length);
        const nextPoint = path.getPointAtLength(Math.min(progress + 0.01, 1) * length);

        const angle =
          (progress < 0.01 ? 0 : calculateAngle(currentPoint.x, currentPoint.y, nextPoint.x, nextPoint.y)) + 90;

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
  }, [setIsVisible]);

  return (
    <AirplaneWrapper visible={isVisible} ref={contentRef} className={className}>
      <AirplaneContainer ref={heightRef}>
        <svg width='1260' height='4124' viewBox='0 0 1260 4124' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path
            ref={pathRef}
            d='M1232.5 1.5H1235C1235 351.5 699.456 312.751 322.456 294C-47.6487 275.591 -102.962 651.501 181.454 711.152C340.456 744.5 437.956 608.5 379.956 472C358.591 421.72 316.019 410.297 290.956 445C258.456 490 283.258 675.091 181.454 520.5C140.954 459 366.658 623.314 290.956 647C209.456 672.5 159.454 655 107.954 593C4.19056 468.081 148 395.5 270 363C438.923 318 472.956 363 575.956 391.5C746.803 438.773 786.979 573.095 650.455 612C513.932 650.905 425.086 609.567 492.456 472C563.957 326 1054.11 232.003 1165.46 363C1276.8 493.997 383.818 1122.86 651.539 1320.34C919.26 1517.82 1482.78 1829.06 1161.81 1939.37C840.833 2049.69 1039.81 1420.8 1148.74 1510.43C1257.66 1600.06 919.744 2000.93 719.801 1905.89C519.857 1810.84 555.682 1664.08 719.801 1671.96C883.919 1679.84 966.704 2150.15 762.404 2175.76C558.103 2201.37 115.611 2029.5 110.77 1880.28C105.928 1731.06 734.117 2285.8 872.456 2415.5C1376.96 2888.5 -195.044 3235.5 682.956 4122.5C1077.41 4521 1086 5261 745 5881.5C668.062 6021.5 682.956 6121.2 682.956 6358'
            stroke='black'
            strokeWidth='2'
            stroke-dasharray='8 8'
          />
        </svg>
        <AirplaneImage ref={airplaneRef} src={airplane} alt='Airplane' width={50} height={50} />
      </AirplaneContainer>
    </AirplaneWrapper>
  );
};

interface AirplaneWrapperStyledProps {
  visible?: boolean;
}

const AirplaneWrapper = styled.div<AirplaneWrapperStyledProps>(({ visible }) => ({
  display: visible ? "flex" : "none",
  position: "relative",
  zIndex: 2,
  justifyContent: "center",
}));

const AirplaneContainer = styled.div`
  position: absolute;
`;

const AirplaneImage = styled(Image)`
  position: absolute;
  transform-origin: center;
`;

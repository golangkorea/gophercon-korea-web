import golobAww from "@/assets/golob/golob_aww.webp";
import golobCute from "@/assets/golob/golob_cute.webp";
import golobHehe from "@/assets/golob/golob_hehe.webp";
import golobHi from "@/assets/golob/golob_hi.webp";
import golobMelt from "@/assets/golob/golob_melt.webp";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useCallback, useRef, useState } from "react";

const golobImages = [golobAww, golobCute, golobHehe, golobHi, golobMelt];

const scatterAndFade = (endX: number, endY: number, rotation: number, endHue: number) => keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
    filter: hue-rotate(0deg);
  }
  to {
    transform: translate3d(calc(-50% + ${endX}px), calc(-50% + ${endY}px), 0) scale(1.2) rotate(${rotation}deg);
    opacity: 0;
    filter: hue-rotate(${endHue}deg);
  }
`;

export const GolobParticle = styled.img<{
  endX: number;
  endY: number;
  rotation: number;
  endHue: number;
}>`
  position: absolute;
  width: 32px;
  height: auto;
  pointer-events: none;
  animation: ${({ endX, endY, rotation, endHue }) => scatterAndFade(endX, endY, rotation, endHue)} 1.5s ease-out
    forwards;
  user-select: none;
  z-index: 100;
`;

export interface Particle {
  id: number;
  x: number;
  y: number;
  src: string;
  endX: number;
  endY: number;
  rotation: number;
  endHue: number;
}

export const useClickableGolob = (limit = 10) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  const addParticle = useCallback(
    (clientX: number, clientY: number, containerRect: DOMRect | null) => {
      if (!containerRect) return;
      setParticles((prevParticles) => {
        if (prevParticles.length >= limit) {
          return prevParticles;
        }

        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 100 + 80;
        const rotation = (Math.random() - 0.5) * 600;
        const endHue = (Math.random() - 0.5) * 720;

        const newParticle: Particle = {
          id: particleIdCounter.current++,
          x: clientX - containerRect.left,
          y: clientY - containerRect.top,
          src: golobImages[Math.floor(Math.random() * golobImages.length)],
          endX: Math.cos(angle) * distance,
          endY: Math.sin(angle) * distance,
          rotation,
          endHue,
        };
        return [...prevParticles, newParticle];
      });
    },
    [limit],
  );

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!event.currentTarget) return;
      addParticle(event.clientX, event.clientY, event.currentTarget.getBoundingClientRect());
    },
    [addParticle],
  );

  const handleAnimationEnd = useCallback((id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return { particles, handleClick, handleAnimationEnd, addParticle };
};

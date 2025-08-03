import facePart from "@/assets/gopher/face_part.svg";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const EYE_SIZE = 32;
const EYE_BORDER_WIDTH = 1;
const EYES_GAP = 16;
const PUPIL_SIZE = 12;
const HIGHLIGHT_SIZE = 4;
const HIGHLIGHT_OFFSET = 2;
const FACE_PART_BOTTOM_OFFSET = "34%";
const FACE_PART_WIDTH = "20%";

const BG_COLOR_SATURATION_MIN = 25;
const BG_COLOR_SATURATION_RANGE = 50;
const BG_COLOR_LIGHTNESS_MIN = 85;
const BG_COLOR_LIGHTNESS_RANGE = 10;

const MAX_PUPIL_MOVE = (EYE_SIZE - PUPIL_SIZE) / 2 - 2;

const GopherHeadContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  cursor: default;
  user-select: none;
`;

const EyesContainer = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: ${EYES_GAP}px;
`;

const Eye = styled.div`
  width: ${EYE_SIZE}px;
  height: ${EYE_SIZE}px;
  background-color: white;
  border-radius: 50%;
  border: ${EYE_BORDER_WIDTH}px solid black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pupil = styled.div`
  width: ${PUPIL_SIZE}px;
  height: ${PUPIL_SIZE}px;
  background-color: black;
  border-radius: 50%;
  position: relative;
  transition: transform 0.1s ease-out;
`;

const Highlight = styled.div`
  width: ${HIGHLIGHT_SIZE}px;
  height: ${HIGHLIGHT_SIZE}px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: ${HIGHLIGHT_OFFSET}px;
  left: ${HIGHLIGHT_OFFSET}px;
`;

const FacePart = styled.img`
  position: absolute;
  bottom: ${FACE_PART_BOTTOM_OFFSET};
  left: 50%;
  transform: translateX(-50%);
  width: ${FACE_PART_WIDTH};
  height: auto;
`;

const GopherHead = () => {
  const [bgColor, setBgColor] = useState("#e0e0e0");
  const [pupilTransform, setPupilTransform] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomPastelColor = () => {
      const h = Math.floor(Math.random() * 360);
      const s = BG_COLOR_SATURATION_MIN + Math.floor(Math.random() * BG_COLOR_SATURATION_RANGE);
      const l = BG_COLOR_LIGHTNESS_MIN + Math.floor(Math.random() * BG_COLOR_LIGHTNESS_RANGE);
      return `hsl(${h}, ${s}%, ${l}%)`;
    };
    setBgColor(randomPastelColor());
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      let moveX = (deltaX / (rect.width / 2)) * MAX_PUPIL_MOVE;
      let moveY = (deltaY / (rect.height / 2)) * MAX_PUPIL_MOVE;

      const distance = Math.sqrt(moveX * moveX + moveY * moveY);
      if (distance > MAX_PUPIL_MOVE) {
        moveX = (moveX / distance) * MAX_PUPIL_MOVE;
        moveY = (moveY / distance) * MAX_PUPIL_MOVE;
      }

      setPupilTransform({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <GopherHeadContainer ref={containerRef} style={{ backgroundColor: bgColor }}>
      <EyesContainer>
        <Eye>
          <Pupil style={{ transform: `translate(${pupilTransform.x}px, ${pupilTransform.y}px)` }}>
            <Highlight />
          </Pupil>
        </Eye>
        <Eye>
          <Pupil style={{ transform: `translate(${pupilTransform.x}px, ${pupilTransform.y}px)` }}>
            <Highlight />
          </Pupil>
        </Eye>
      </EyesContainer>
      <FacePart src={facePart} alt='gopher nose and teeth' />
    </GopherHeadContainer>
  );
};

export default GopherHead;

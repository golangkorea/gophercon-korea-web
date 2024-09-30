import styled from "@emotion/styled";
import { FC, memo } from "react";
import { EachCard } from "../EachCard";
import cardList from "./data";

type CarouselDirection = "left" | "right";

interface CarouselProps {
  direction?: CarouselDirection;
}

const CarouselComponent: FC<CarouselProps> = ({ direction = "left" }: CarouselProps) => {
  return (
    <CarouselContainer>
      <CarouselInner direction={direction}>
        {cardList.map((data, idx) => (
          <EachCard {...data} key={`${data.name}-${idx}`} />
        ))}
        {/* 카드를 반복하여 무한 스크롤처럼 보이게 함 */}
        {cardList.map((data, idx) => (
          <EachCard {...data} key={`repeat-${data.name}-${idx}`} />
        ))}
      </CarouselInner>
    </CarouselContainer>
  );
};

export const Carousel = memo(CarouselComponent);

const CarouselContainer = styled.div({
  display: "flex",
  width: "100%",
  transform: "rotate(10deg)",
});

const CarouselInner = styled.div<{ direction: CarouselDirection }>`
  display: flex;
  gap: 40px;
  left: 0px;
  animation: ${({ direction }) => (direction === "right" ? "scroll-right" : "scroll-left")} 20s linear infinite;

  @keyframes scroll-right {
    from {
      transform: translateX(0px);
    }
    to {
      transform: translateX(calc(-50% - 20px));
    }
  }

  @keyframes scroll-left {
    from {
      transform: translateX(calc(-50% - 20px));
    }
    to {
      transform: translateX(0px);
    }
  }
`;

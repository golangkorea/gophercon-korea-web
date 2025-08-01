import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

// NOTE: 실제 후원사가 정해지면 로고 이미지로 교체될 예정입니다.
const sponsors = [
  { name: "Sponsor A" },
  { name: "Sponsor B" },
  { name: "Sponsor C" },
  { name: "Sponsor D" },
  { name: "Sponsor E" },
  { name: "Sponsor F" },
  { name: "Sponsor G" },
  { name: "Sponsor H" },
];

const slideAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const SponsorSliderContainer = styled.div`
  padding: 80px 0;
  background-color: #fff;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.text};
`;

const SliderWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), #fff 80%);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 80%);
  }
`;

const SliderTrack = styled.div`
  display: flex;
  width: calc(250px * ${sponsors.length * 2});
  animation: ${slideAnimation} 40s linear infinite;
`;

const SponsorLogo = styled.div`
  height: 60px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;

  span {
    font-size: 1.5rem;
    font-weight: 600;
    color: #999;
    filter: grayscale(1);
    opacity: 0.7;
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  &:hover span {
    filter: grayscale(0);
    opacity: 1;
    transform: scale(1.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const SponsorSlider = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "home" });

  return (
    <SponsorSliderContainer>
      <SectionTitle>{t("sponsors_title")}</SectionTitle>
      <SliderWrapper>
        <SliderTrack>
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <SponsorLogo key={index}>
              <span>{sponsor.name}</span>
            </SponsorLogo>
          ))}
        </SliderTrack>
      </SliderWrapper>
    </SponsorSliderContainer>
  );
};

export default SponsorSlider;

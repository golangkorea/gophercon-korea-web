import Seo from "@/components/common/Seo";
import MainBackground from "@/components/home/MainBackground";
import SponsorSlider from "@/components/home/SponsorSlider";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
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

  return (
    <>
      <Seo description={t("subtitle")} />
      <HomeContainer>
        <MainBackground />
        <HeroSection>
          <MainTitle>
            {titleText.split("").map((char, index) => (
              <span key={`${char}-${index}`} style={{ animationDelay: `${0.3 + index * 0.06}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </MainTitle>

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
      <SponsorSlider />
    </>
  );
};

const HomeContainer = styled.div`
  position: relative;
  padding: 0;
  max-width: none;
  height: calc(100vh - 80px);
  overflow: hidden;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: 6rem;
  font-weight: 900;
  background: linear-gradient(45deg, #007d9c, #00c9a7);
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
>>>>>>> Stashed changes
=======
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
>>>>>>> Stashed changes
  color: transparent;
  margin-bottom: 1rem;
  letter-spacing: -1px;

  span {
    display: inline-block;
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    background: inherit;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    opacity: 0;
    animation-name: ${letterAnimation};
    animation-duration: 0.6s;
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 4.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  opacity: 0;
  animation-name: ${fadeInUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  margin-top: 1rem;
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
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoDivider = styled.div`
  width: 1px;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.border};
`;

export default Home;

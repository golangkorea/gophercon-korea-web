import balloon1 from "@/assets/intro/balloon1.svg";
import balloon2 from "@/assets/intro/balloon2.svg";
import balloon3 from "@/assets/intro/balloon3.svg";
import balloon4 from "@/assets/intro/balloon4.svg";
import balloon5 from "@/assets/intro/balloon5.svg";
import balloon6 from "@/assets/intro/balloon6.svg";
import crowdSurfingLeft from "@/assets/intro/crowd_surfing_left_pink_gopher.svg";
import crowdSurfingRight from "@/assets/intro/crowd_surfing_right_purple_gopher.svg";
import gopherParty from "@/assets/intro/gopher_party.svg";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const popIn = keyframes`
  from {
    transform: translate3d(-50%, -50%, 0) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translate3d(-50%, -50%, 0) scale(1);
    opacity: 1;
  }
`;

const scatter = (tx: string, ty: string, r: string) => keyframes`
  from {
    transform: translate3d(0, 0, 0) scale(0.5) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translate3d(${tx}, ${ty}, 0) scale(1) rotate(${r});
    opacity: 1;
  }
`;

const float1 = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(8px, -12px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const float2 = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(-10px, 10px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const float3 = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(12px, 8px, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const shadowFloatUp = keyframes`
  0% { transform: scale(1) translate3d(0, 0, 0); opacity: 0.25; }
  50% { transform: scale(0.85) translate3d(0, 10px, 0); opacity: 0.15; }
  100% { transform: scale(1) translate3d(0, 0, 0); opacity: 0.25; }
`;

const shadowFloatDown = keyframes`
  0% { transform: scale(1) translate3d(0, 0, 0); opacity: 0.25; }
  50% { transform: scale(1.1) translate3d(0, -5px, 0); opacity: 0.4; }
  100% { transform: scale(1) translate3d(0, 0, 0); opacity: 0.25; }
`;

const AnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const ParallaxLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-out;
`;

const ScatterWrapper = styled.div<{
  animationDelay: string;
  finalTranslateX: string;
  finalTranslateY: string;
  finalRotate: string;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  transform-origin: center;
  animation: ${({ finalTranslateX, finalTranslateY, finalRotate }) =>
      scatter(finalTranslateX, finalTranslateY, finalRotate)}
    1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: ${({ animationDelay }) => animationDelay};
`;

const FloatingAssetContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const FloatingAssetImg = styled.img<{
  size: string;
  floatAnimation: ReturnType<typeof keyframes>;
  animationDelay: string;
  blurAmount: number;
}>`
  position: relative;
  z-index: 1;
  width: ${({ size }) => size};
  height: auto;
  animation: ${({ floatAnimation }) => floatAnimation} 4s ease-in-out infinite;
  animation-delay: ${({ animationDelay }) => animationDelay};
  filter: blur(${({ blurAmount }) => blurAmount}px);
`;

const Shadow = styled.div<{
  shadowAnimation: ReturnType<typeof keyframes>;
  animationDelay: string;
}>`
  position: absolute;
  bottom: -8px;
  left: 15%;
  width: 70%;
  height: 10px;
  background-color: rgba(30, 41, 59, 0.25);
  border-radius: 50%;
  z-index: 0;
  animation: ${({ shadowAnimation }) => shadowAnimation} 4s ease-in-out infinite;
  animation-delay: ${({ animationDelay }) => animationDelay};
`;

const MainGopher = styled.img<{ animationDelay: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: auto;
  max-width: 900px;
  max-height: 90vh;
  opacity: 0;
  animation: ${popIn} 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: ${({ animationDelay }) => animationDelay};
  z-index: 4;

  @media (max-width: 768px) {
    max-width: 90vw;
    max-height: 50vh;
  }
`;

const assets = [
  { src: balloon1, size: "100px", tx: "-35vw", ty: "-30vh", r: "-20deg", float: float1, pFactor: 0.045 },
  { src: balloon2, size: "80px", tx: "35vw", ty: "-35vh", r: "15deg", float: float2, pFactor: 0.04 },
  { src: balloon3, size: "90px", tx: "-30vw", ty: "25vh", r: "-25deg", float: float3, pFactor: 0.03 },
  { src: balloon4, size: "120px", tx: "30vw", ty: "30vh", r: "10deg", float: float1, pFactor: 0.035 },
  { src: balloon5, size: "70px", tx: "15vw", ty: "-40vh", r: "5deg", float: float2, pFactor: 0.046 },
  { src: balloon6, size: "85px", tx: "-20vw", ty: "-20vh", r: "-30deg", float: float3, pFactor: 0.042 },
  { src: crowdSurfingLeft, size: "200px", tx: "-35vw", ty: "10vh", r: "-15deg", float: float1, pFactor: 0.05 },
  { src: crowdSurfingRight, size: "200px", tx: "35vw", ty: "5vh", r: "15deg", float: float2, pFactor: 0.048 },
];

const IntroAnimation = ({
  startDelay,
  mousePosition,
  windowSize,
}: {
  startDelay: number;
  mousePosition: { x: number; y: number };
  windowSize: { width: number; height: number };
}) => {
  const isMobile = windowSize.width <= 768;

  return (
    <AnimationContainer>
      {assets.map((asset, index) => {
        const scatterDelay = startDelay + 0.2 + index * 0.05;
        const parallaxFactor = asset.pFactor;

        const minFactor = 0.015;
        const maxFactor = 0.05;
        const minScale = 0.8;
        const maxScale = 1.25;
        const maxBlur = 2.0;

        const mobileFactor = isMobile ? 0.5 : 1;
        const assetTx = `calc(${asset.tx} * ${mobileFactor})`;
        const assetTy = `calc(${asset.ty} * ${mobileFactor})`;

        const normalizedFactor = (parallaxFactor - minFactor) / (maxFactor - minFactor); // 0 to 1
        const scale = minScale + (maxScale - minScale) * normalizedFactor;
        const blurAmount = maxBlur * (1 - normalizedFactor);
        const zIndex = 1 + Math.floor(normalizedFactor * 9); // z-index from 1 to 10

        const offsetX = windowSize.width > 0 ? (mousePosition.x - windowSize.width / 2) * parallaxFactor : 0;
        const offsetY = windowSize.height > 0 ? (mousePosition.y - windowSize.height / 2) * parallaxFactor : 0;

        const isFloatingUp = asset.float === float1;
        const shadowAnimation = isFloatingUp ? shadowFloatUp : shadowFloatDown;

        return (
          <ParallaxLayer key={index} style={{ transform: `translate3d(${offsetX}px, ${offsetY}px, 0)`, zIndex }}>
            <ScatterWrapper
              animationDelay={`${scatterDelay}s`}
              finalTranslateX={assetTx}
              finalTranslateY={assetTy}
              finalRotate={asset.r}
            >
              <FloatingAssetContainer style={{ transform: `scale(${scale})` }}>
                <FloatingAssetImg
                  src={asset.src}
                  alt=''
                  size={`${parseInt(asset.size) * mobileFactor}px`}
                  floatAnimation={asset.float}
                  animationDelay={`${scatterDelay + 1}s`}
                  blurAmount={blurAmount}
                />
                <Shadow shadowAnimation={shadowAnimation} animationDelay={`${scatterDelay + 1}s`} />
              </FloatingAssetContainer>
            </ScatterWrapper>
          </ParallaxLayer>
        );
      })}
      <MainGopher src={gopherParty} alt='Gopher Party' animationDelay={`${startDelay}s`} />
    </AnimationContainer>
  );
};

export default IntroAnimation;

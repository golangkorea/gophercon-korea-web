import styled from "@emotion/styled";

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #f7f9fc;
  z-index: -1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle at 2px 2px, rgba(0, 0, 0, 0.15) 2px, transparent 0);
    background-size: 28px 28px;
    mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(circle at center, black 30%, transparent 75%);
  }
`;

const MainBackground = () => {
  return <BackgroundContainer />;
};

export default MainBackground;

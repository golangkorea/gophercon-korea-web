import styled from "@emotion/styled";

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fdfdfd;
  z-index: -1;
`;

const MainBackground = () => {
  return <BackgroundContainer />;
};

export default MainBackground;

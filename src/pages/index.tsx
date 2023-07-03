import Layout from "@/components/layout";
import styled from "@emotion/styled";

const HomeContainer_Div = styled.div({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
});

const ImageArea_Div = styled.div({});

const VideoArea_Div = styled.div({
  position: "absolute",
  width: "100vw",
  height: "100vh",
});

const Video = styled.video({
  width: "100% !important",
  height: "100%",
  transition: "all 0.3s",
  objectFit: "cover",
});

const TypingArea_Div = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 5,
});

const Title_H1 = styled.h1({
  fontSize: "5rem",
  fontWeight: 800,
});

const SubTitle_H2 = styled.h2({
  fontSize: "2.5rem",
  fontWeight: 600,
  marginBottom: "96px",
});

const Description_P = styled.p({
  fontSize: "2rem",
  color: "#FFFFFF80",
});

export default function Home() {
  return (
    <Layout>
      <HomeContainer_Div>
        {/*<ImageArea_Div>*/}
        {/*  /!*TODO Add Interaction Current Temp Image*!/*/}
        {/*  <Image src={HomeCircle} alt={"circle_pic"} width={912} height={683} />*/}
        {/*</ImageArea_Div>*/}
        <VideoArea_Div>
          <Video autoPlay muted loop playsInline preload={"auto"}>
            <source src='https://changhyeon.s3.ap-northeast-2.amazonaws.com/assets/intro.mp4' type={"video/mp4"} />
          </Video>
        </VideoArea_Div>
        <TypingArea_Div className='typewriter'>
          <Title_H1>“Go in depth”</Title_H1>
          <SubTitle_H2>2023. 08. 05 - 06</SubTitle_H2>
          <Description_P>국내 고 언어 최대 커뮤니티와 함께하세요</Description_P>
        </TypingArea_Div>
      </HomeContainer_Div>
    </Layout>
  );
}

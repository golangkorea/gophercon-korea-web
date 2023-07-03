import Layout from "@/components/layout";
import styled from "@emotion/styled";
import Image from "next/image";
import HomeCircle from "/public/images/home_circle.png";

const HomeContainer_Div = styled.div({
  height: "calc(100vh - 80px)",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ImageArea_Div = styled.div({});

const TypingArea_Div = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Title_H1 = styled.h1({
  fontSize: "5rem",
  fontWeight: 800,
  marginBottom: "30px",
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
        <ImageArea_Div>
          {/*TODO Add Interaction Current Temp Image*/}
          <Image src={HomeCircle} alt={"circle_pic"} width={912} height={683} />
        </ImageArea_Div>
        <TypingArea_Div>
          <Title_H1>“Go in depth”</Title_H1>
          <SubTitle_H2>2023. 08. 05 - 06</SubTitle_H2>
          <Description_P>국내 고 언어 최대 커뮤니티와 함께하세요</Description_P>
        </TypingArea_Div>
      </HomeContainer_Div>
    </Layout>
  );
}

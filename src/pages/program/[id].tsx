import Content from "@/components/content";
import Layout from "@/components/layout";
import { Session, SESSIONS } from "@/constants/sessions";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { GetStaticPaths } from "next";
import { useRouter } from "next/router";
import React from "react";
import Gopher from "/public/images/gopher.png";

interface SpeakerProfileStyledProps {
  url: string;
}

interface ProgramCardSpeakerCircleStyledProps {
  url: string;
}

const animationBounce = keyframes({
  from: {
    transform: "translateY(-80px)",
  },
  to: {
    transform: "translateY(30px)",
  },
});

const ContentProgramDetail = styled.main({
  position: "relative",
  padding: 80,
});
const SpeakerProfileAnimateWrapper = styled.div({
  position: "absolute",
  bottom: -40,
  right: 0,
  animation: animationBounce,
  animationDuration: "3s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  animationTimingFunction: "ease-in-out",
  zIndex: 10,
});
const SpeakerProfileCage = styled.div({
  display: "flex",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  height: 300,
  borderRadius: 40,
  transformStyle: "preserve-3d",
  transform: "perspective(300px) translateX(-200px) translateY(100px) rotateY(-14deg) rotateX(16deg);",
  backgroundColor: "rgba(0, 0, 0, .15)",
  border: "1px solid #0029FF",
  boxShadow: "0 8px 48px rgba(0, 0, 0, .45)",
});
const SpeakerProfile = styled.div<SpeakerProfileStyledProps>(({ url }: SpeakerProfileStyledProps) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  borderRadius: 40,
  backgroundImage: `url('${url ? url : Gopher.src}')`,
  backgroundImageRepeat: "no-repeat",
  backgroundSize: "cover",
  fontSize: 0,
  transform: "scale(0.8) translateX(-30px) translateY(-30px) translateZ(60px)",
  textIndent: 10000,
  overflow: "hidden",
  boxShadow: "0 16px 64px rgba(0, 0, 0, .45)",
}));
const ProgramTitle = styled.h1({});
const ProgramDateTime = styled.p({
  display: "flex",
  gap: 20,
  fontSize: 24,
  fontWeight: 800,
  color: "#999",
});
const ProgramDate = styled.span();
const ProgramTime = styled.span();
const ProgramSpeaker = styled.p({
  display: "flex",
  gap: 20,
  fontSize: 20,
});
const ProgramSpeakerName = styled.span({
  fontSize: 20,
});
const ProgramSpeakerCompany = styled.span({
  color: "#0029FF",
});
const ProgramDescription = styled.p({
  maxWidth: 620,
  minHeight: 200,
  fontSize: 24,
  lineHeight: 1.4,
});
const Programs = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 80,
  gridAutoRows: "minmax(300px, auto)",
});
const ProgramCard = styled.div({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: 40,
  backgroundImage: "linear-gradient(45deg, rgba(28, 28, 191, 1) 0%, rgba(155, 28, 255, 1) 50%)",
  boxShadow: "0 16px 60px rgba(28, 28, 191, .75)",
  backgroundSize: "200%",
  borderRadius: 80,
  boxSizing: "border-box",
  transition: "background-position .3s ease, box-shadow .3s ease, transform .3s ease",
  transform: "scale(1)",
  "&:hover": {
    backgroundPosition: "50% 100%",
    boxShadow: "0 12px 48px rgba(28, 28, 191, 1)",
    transform: "scale(1.02)",
  },
});
const ProgramCardSpeakerCircle = styled.div<ProgramCardSpeakerCircleStyledProps>(
  ({ url }: ProgramCardSpeakerCircleStyledProps) => ({
    width: 150,
    height: 150,
    borderRadius: 65,
    backgroundImage: `url('${url ? url : Gopher.src}')`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
  }),
);
const ProgramCardTitle = styled.p({
  fontSize: 28,
  fontWeight: 800,
  lineHeight: 1.5,
});
const ProgramCardSpeakerName = styled.p({
  fontSize: 24,
  fontWeight: 600,
  color: "rgba(255, 255, 255, .75)",
});
const ProgramCardDateTime = styled.p({
  display: "flex",
  fontSize: 20,
  fontWeight: 600,
  gap: 16,
  color: "rgba(255, 255, 255, .75)",
});
const ProgramCardDate = styled.span();
const ProgramCardTime = styled.span();

const ProgramDetail: React.FC = () => {
  const router = useRouter();
  const [data, setData] = React.useState<Session | undefined>(undefined);

  React.useEffect(() => {
    const { id } = router.query;
    if (id) {
      const target = SESSIONS.find((session) => session.id === Number(id));
      setData(target);
    }
  }, [router]);

  const randomTwo = React.useMemo(() => {
    const { id } = router.query;
    if (!id) return [];
    const target = SESSIONS.filter((session) => session.id !== Number(id) && session.category === "Main Talk");
    let random = Number(id);
    let random2 = Number(id);
    while (Number(id) === random || Number(id) === random2 || random === random2) {
      random = Math.floor(Math.random() * target.length);
      random2 = Math.floor(Math.random() * target.length);
    }
    return [target[random], target[random2]];
  }, [router]);

  if (!data) return null;

  return (
    <Layout>
      <Content>
        <ContentProgramDetail>
          <ProgramDateTime>
            <ProgramDate>2023-{data.date}</ProgramDate>
            <ProgramTime>
              {data.startTime} ~ {data.endTime}
            </ProgramTime>
          </ProgramDateTime>
          <ProgramTitle>
            <p>{data.title}</p>
            <ProgramSpeaker>
              <ProgramSpeakerName>{data.speaker.name}</ProgramSpeakerName>
              <ProgramSpeakerCompany>{data.speaker.company}</ProgramSpeakerCompany>
            </ProgramSpeaker>
          </ProgramTitle>
          <ProgramDescription>{data.description}</ProgramDescription>
          <SpeakerProfileAnimateWrapper>
            <SpeakerProfileCage>
              <SpeakerProfile url={data.speaker.profileImage}>{data.speaker.name}</SpeakerProfile>
            </SpeakerProfileCage>
          </SpeakerProfileAnimateWrapper>
        </ContentProgramDetail>
        <ContentProgramDetail>
          <h2>다른 프로그램도 준비되어 있습니다!</h2>
          <Programs>
            {randomTwo.map((session, index) => (
              <ProgramCard
                key={session.id}
                className='relative flex cursor-pointer'
                onClick={() => router.push(`/program/${session.id}`)}
              >
                <ProgramCardSpeakerCircle url={session.speaker.profileImage} />
                <ProgramCardTitle>{session.title}</ProgramCardTitle>
                <ProgramCardSpeakerName>{session.speaker.name}님</ProgramCardSpeakerName>
                <ProgramCardDateTime>
                  <ProgramCardDate>2023-{session.date}</ProgramCardDate>
                  <ProgramCardTime>
                    {session.startTime} ~ {session.endTime}
                  </ProgramCardTime>
                </ProgramCardDateTime>
              </ProgramCard>
            ))}
          </Programs>
        </ContentProgramDetail>
      </Content>
    </Layout>
  );
};

export default ProgramDetail;

export const getStaticProps = getI18nProps;
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

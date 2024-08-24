import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { WithTranslation, withTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import Content from "../../components/content";
import Layout from "../../components/layout";
import { SEO } from "../../constants/seo";
import { SESSIONS } from "../../constants/sessions";
import Gopher from "/public/images/gopher.png";

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const data = (context.locale === "ko" ? SESSIONS.ko : SESSIONS.en).find((session) => session.id === Number(id));
  return {
    props: {
      data: data || {},
      ...(await serverSideTranslations(context.locale ?? "", ["common", "nav", "coc"])),
    },
  };
};

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

const animationBounceSmall = keyframes({
  from: {
    transform: "translateY(-40px)",
  },
  to: {
    transform: "translateY(15px)",
  },
});

const ContentProgramDetail = styled.main({
  position: "relative",
  padding: 80,
  "@media (max-width: 1200px)": {
    padding: 40,
  },
  "@media (max-width: 768px)": {
    padding: 20,
  },
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
  "@media (max-width: 1200px)": {
    right: -40,
    bottom: -10,
    animation: animationBounceSmall,
    animationDuration: "3s",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    animationTimingFunction: "ease-in-out",
  },
  "@media (max-width: 768px)": {
    position: "static",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 180,
    margin: "20px auto 120px",
  },
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
  "@media (max-width: 1200px)": {
    width: 150,
    height: 150,
    borderRadius: 20,
    transform: "perspective(150px) translateX(-100px) translateY(50px) rotateY(-7deg) rotateX(8deg);",
  },
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
  "@media (max-width: 1200px)": {
    borderRadius: 20,
    boxShadow: "0 8px 32px rgba(0, 0, 0, .45)",
    transform: "scale(0.9) translateX(-15px) translateY(-15px) translateZ(15px)",
  },
}));
const ProgramTitle = styled.h1({
  "@media (max-width: 1000px)": {
    fontSize: "2rem",
  },
});
const ProgramDateTime = styled.p({
  display: "flex",
  gap: 20,
  fontSize: 24,
  fontWeight: 800,
  margin: 0,
  color: "#999",
  "@media (max-width: 1000px)": {
    fontSize: 20,
  },
});
const ProgramTitleInner = styled.p({
  lineHeight: 1.2,
});
const ProgramDate = styled.span();
const ProgramTime = styled.span();
const ProgramSpeaker = styled.p({
  display: "flex",
  gap: 20,
  fontSize: 20,
  "@media (max-width: 1000px)": {
    fontSize: 18,
  },
});
const ProgramSpeakerName = styled.span({
  fontSize: 20,
  "@media (max-width: 1000px)": {
    fontSize: 18,
  },
});
const ProgramSpeakerCompany = styled.span({
  color: "#0029FF",
});
const ProgramDescription = styled.p({
  maxWidth: 620,
  minHeight: 200,
  fontSize: 24,
  lineHeight: 1.4,
  "@media (max-width: 1000px)": {
    fontSize: 20,
  },
});
const Programs = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 80,
  gridAutoRows: "minmax(300px, auto)",
  "@media (max-width: 1000px)": {
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: "auto",
    gapRow: 40,
  },
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
  "@media (max-width: 1000px)": {
    padding: 20,
    borderRadius: 40,
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
  "@media (max-width: 1000px)": {
    fontSize: 20,
  },
});
const ProgramCardSpeakerName = styled.p({
  fontSize: 24,
  fontWeight: 600,
  color: "rgba(255, 255, 255, .75)",
  "@media (max-width: 1000px)": {
    fontSize: 18,
    marginTop: ".8rem",
  },
});
const ProgramCardDateTime = styled.p({
  display: "flex",
  fontSize: 20,
  fontWeight: 600,
  gap: 16,
  color: "rgba(255, 255, 255, .75)",
  "@media (max-width: 1000px)": {
    fontSize: 16,
    marginTop: ".5rem",
  },
});
const ProgramCardDate = styled.span();
const ProgramCardTime = styled.span();

interface ProgramDetailProps extends WithTranslation {
  data: InferGetStaticPropsType<typeof getStaticProps>;
}

const ProgramDetail: React.FC<ProgramDetailProps> = ({ t, data }) => {
  const router = useRouter();
  // const [data, setData] = React.useState<Session | undefined>(undefined);

  // React.useEffect(() => {
  //   const { id } = router.query;
  //   if (id) {
  //     const target = SESSIONS.find((session) => session.id === Number(id));
  //     setData(target);
  //   }
  // }, [router]);

  const randomTwo = React.useMemo(() => {
    const { id } = router.query;
    if (!id) return [];

    const { locale } = router;
    const target = (locale === "ko" ? SESSIONS.ko : SESSIONS.en).filter(
      (session) => session.id !== Number(id) && session.category === "Main Talk",
    );
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
      <NextSeo
        title='GopherCon Korea 2023'
        description='국내에서 진행되는 Go 언어 사용자를 위한 최초의 거대 행사 GopherCon Korea 2023'
        openGraph={{
          title: "GopherCon Korea 2023",
          description: data.title,
          url: `https://gophercon.kr/program/${data.id}`,
          type: "website",
          images: [{ url: data.speaker.profileImage ?? SEO.image }],
        }}
      />
      <Content>
        <ContentProgramDetail>
          <ProgramDateTime>
            <ProgramDate>2023-{data.date}</ProgramDate>
            <ProgramTime>
              {data.startTime} ~ {data.endTime}
            </ProgramTime>
          </ProgramDateTime>
          <ProgramTitle>
            <ProgramTitleInner>{data.title}</ProgramTitleInner>
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
          <h2>{t("common:moreTopics")}</h2>
          <Programs>
            {randomTwo?.map((session, index) => (
              <ProgramCard
                key={session.id}
                className='relative flex cursor-pointer'
                onClick={() => router.push(`/program/${session.id}`)}
              >
                <ProgramCardSpeakerCircle url={session.speaker.profileImage} />
                <ProgramCardTitle>{session.title}</ProgramCardTitle>
                <ProgramCardSpeakerName>{session.speaker.name}</ProgramCardSpeakerName>
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

export default withTranslation(["common", "nav", "coc"])(ProgramDetail);

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

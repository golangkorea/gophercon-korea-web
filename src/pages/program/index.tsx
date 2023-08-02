import Content from "@/components/content";
import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import { Levels, SESSIONS } from "@/constants/sessions";
import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import { DiGo } from "react-icons/di";
import Gopher from "/public/images/gopher.png";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

interface ProgramTabButtonStyledProps {
  active?: boolean;
}

interface ProgramSpeakerCircleStyledProps {
  url: string;
}

interface LevelProps {
  level: Levels;
}

const LevelIcon = styled(DiGo)`
  font-size: xx-large;
`;

const LevelStyles = styled.div<LevelProps>(({ level }: LevelProps) => ({
  color: level === Levels.Low ? "green" : level === Levels.Mid ? "orange" : level === Levels.High ? "red" : "white",
  display: "inline-flex",
  fontSize: 12,
  alignItems: "center",
  float: "right",
  paddingRight: 50,
}));

const LevelDiv = ({ level }: { level: Levels }) => {
  return (
    <LevelStyles level={level}>
      <LevelIcon />
      <span>
        {level === Levels.Low ? "easy" : level === Levels.Mid ? "normal" : level === Levels.High ? "hard" : "none"}
      </span>
    </LevelStyles>
  );
};

const ProgramSpeakerCircle = styled.img<ProgramSpeakerCircleStyledProps>(
  ({ url }: ProgramSpeakerCircleStyledProps) => ({
    width: 40,
    height: 40,
    borderRadius: 65,
    backgroundImage: `url('${url ? url : Gopher.src}')`,
    backgroundImageRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "inline-block",
    margin: 10,
  }),
);

const ProgramTab = styled.div({
  display: "flex",
  gap: 20,
  paddingBottom: 10,
  borderBottom: "3px solid #bbb",
  marginBottom: 40,
});

const ProgramTabButton = styled.button<ProgramTabButtonStyledProps>(({ active }: ProgramTabButtonStyledProps) => ({
  fontSize: 32,
  fontWeight: 600,
  color: active ? "#000" : "#bbb",
  transition: "color .3s ease",
}));

const ProgramTable = styled.table({
  width: "100%",
  margin: 0,
  padding: 0,
  textAlign: "left",
  borderCollapse: "collapse",
  thead: {
    backgroundColor: "#fafafa",
    th: {
      height: "3em",
      fontSize: 20,
      textAlign: "center",
    },
  },
  tbody: {
    tr: {
      borderBottom: "1px solid #eaeaea",
    },
    "th, td": {
      height: "4em",
      verticalAlign: "center",
    },
  },
  "@media screen and (max-width: 1000px)": {
    border: 0,
    thead: {
      clip: "rect(0 0 0 0)",
      height: 0,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 0,
    },
    tbody: {
      tr: {
        display: "block",
        borderBottom: "3px solid #000",
        marginBottom: 40,
      },
      "th, td": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "right",
        "&::before": {
          content: "attr(data-label)",
          float: "left",
          fontWeight: 600,
          textTransform: "uppercase",
        },
        "&:last-child": {
          borderBottom: 0,
        },
      },
    },
  },
});

const ProgramButton = styled.button({
  fontWeight: 800,
  color: "#0029FF",
  transition: "color .2s ease",
  "&:hover": {
    color: "#4692FF",
  },
});

export default function Program() {
  const router = useRouter();
  const { locale } = router;
  const [tab, setTab] = React.useState<"DAY1" | "DAY2">("DAY1");
  const onChangeTab = (tab: "DAY1" | "DAY2") => {
    return () => setTab(tab);
  };
  const { t } = useTranslation(["common", "nav", "coc"]);

  const routeToDetail = (id: number) => {
    return () => {
      router.push(`/program/${id}`);
    };
  };
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <ProgramTab>
          <ProgramTabButton active={tab === "DAY1"} onClick={onChangeTab("DAY1")}>
            DAY1
          </ProgramTabButton>
          <ProgramTabButton active={tab === "DAY2"} onClick={onChangeTab("DAY2")}>
            DAY2
          </ProgramTabButton>
        </ProgramTab>
        <ProgramTable>
          <thead>
            <tr>
              <th>{t("common:title")}</th>
              <th>{t("common:category")}</th>
              <th>{t("common:time")}</th>
              <th>{t("common:speaker")}</th>
              <th>{t("common:more")}</th>
            </tr>
          </thead>
          <tbody>
            {(locale === "ko" ? SESSIONS.ko : SESSIONS.en).map((session) => {
              if (tab === "DAY1" && session.date === "08-06") return;
              if (tab === "DAY2" && session.date === "08-05") return;
              return (
                <tr key={session.id}>
                  <th data-label={t("common:title")}>
                    {session.title}
                    {session.category === "Main Talk" && <LevelDiv level={session.level} />}
                  </th>
                  <td data-label={t("common:category")}>{session.category}</td>
                  <td data-label={t("common:time")}>{`${session.startTime} ~ ${session.endTime}`}</td>
                  {session.category === "Main Talk" && (
                    <>
                      <td data-label={t("common:speaker")}>
                        <ProgramSpeakerCircle url={session.speaker.profileImage} />
                        {`${session.speaker.name} | ${session.speaker.company}`}
                      </td>
                      <td data-label={t("common:more")} onClick={routeToDetail(session.id)}>
                        <ProgramButton>{t("common:more")}</ProgramButton>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </ProgramTable>
      </Content>
    </Layout>
  );
}

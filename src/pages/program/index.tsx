import Content from "@/components/content";
import Layout from "@/components/layout";
import { SESSIONS } from "@/constants/sessions";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

interface ProgramTabButtonStyledProps {
  active?: boolean;
}

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
        display: "block",
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
  const [tab, setTab] = React.useState<"DAY1" | "DAY2">("DAY1");
  const onChangeTab = (tab: "DAY1" | "DAY2") => {
    return () => setTab(tab);
  };

  const routeToDetail = (id: number) => {
    return () => {
      router.push(`/program/${id}`);
    };
  };
  return (
    <Layout>
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
              <th>발표 제목</th>
              <th>구분</th>
              <th>시간</th>
              <th>발표자</th>
              <th>더보기</th>
            </tr>
          </thead>
          <tbody>
            {SESSIONS.map((session) => {
              if (tab === "DAY1" && session.date === "08-06") return;
              if (tab === "DAY2" && session.date === "08-05") return;
              return (
                <tr key={session.id}>
                  <th data-label='발표 제목'>{session.title}</th>
                  <td data-label='구분'>{session.category}</td>
                  <td data-label='시간'>{`${session.startTime} ~ ${session.endTime}`}</td>
                  {session.category === "Main Talk" && (
                    <>
                      <td data-label='발표자'>{`${session.speaker.name} | ${session.speaker.company}`}</td>
                      <td data-label='더보기' onClick={routeToDetail(session.id)}>
                        <ProgramButton>Learn More</ProgramButton>
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

export const getStaticProps = getI18nProps;

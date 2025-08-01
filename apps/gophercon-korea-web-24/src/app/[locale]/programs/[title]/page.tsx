"use client";

import CustomLink from "@/components/CustomLink";
import Section from "@/components/Section";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import { FC, useContext } from "react";
import Markdown from "react-markdown";
import timetableList, { DiffProps } from "../data";

const TechTalkContainer = styled.div({
  maxWidth: "1440px",
  margin: "0 auto",
  padding: "0 80px",
  width: "100%",
  "@media (max-width: 768px)": {
    padding: "0px",
  },
});

const TechTalkInner = styled.div({
  display: "flex",
  alignItems: "start",
  justifyContent: "start",
  gap: 40,
  flexDirection: "column",
  "@media (max-width: 550px)": {
    padding: "20px",
  },
});

const TechTalkHeader = styled.div({
  width: "100%",
  padding: "40px 0",
  borderBottom: "1px solid #f1f1f1",
});

const TechTalkTitle = styled.h1({
  fontSize: "2.75rem",
  padding: 0,
  margin: 0,
  marginBottom: ".5em",
  border: 0,
});

const PresentDescWrapper = styled.div({
  minHeight: 320,
  fontSize: "1.25em",
  padding: "1em 0",
  "& p": {
    lineHeight: 1.6,
  },
  "@media (max-width: 600px)": {
    minHeight: 200,
  },
});

const BottomContainer = styled.div`
  width: 100%;
  background-color: #f8f8f8;
`;

const BottomSpeakerContainer = styled.div`
  width: 100%;
`;

const BottomSpeakerInnerContainer = styled.div({
  padding: "40px 80px",
  borderBottom: "1px solid #e2e2e2",
  "@media (max-width: 550px)": {
    padding: "20px",
  },
});

const SpeakerImage = styled(Image)`
  border-radius: 50%;
`;

const SpeakerBio = styled.div({
  fontSize: "1.125em",
});

const BottomNavContainer = styled.div({
  width: "100%",
  padding: 40,
});

const DiffLabelContainer = styled.div<{ bgColor: string }>(({ bgColor }) => ({
  padding: "0.5em 1em",
  fontFamily: "Plus Jakarta Sans",
  fontWeight: 900,
  color: "#ffffff",
  backgroundColor: bgColor,
  borderRadius: 999,
}));

interface DiffLabelProps {
  diff: DiffProps;
  locale: "ko" | "en";
}

const DiffColor = {
  Beginner: "#00B555",
  Intermediate: "#FF8000",
  Advanced: "#FF4D4D",
};

const DiffLabel: FC<DiffLabelProps> = ({ diff, locale }) => {
  const targetText = diff[locale];
  return <DiffLabelContainer bgColor={DiffColor[diff.en]}>{targetText}</DiffLabelContainer>;
};

interface BottomNavProps {
  idx: number;
  action: "before" | "next";
  locale: "ko" | "en";
  action_title?: string;
}

const BottomNavWrapper = styled.div<{ action: string }>`
  padding-left: ${({ action }) => (action === "before" ? "40px" : "0px")};
  padding-right: ${({ action }) => (action === "next" ? "40px" : "0px")};
`;

const BottomNav: FC<BottomNavProps> = ({ idx, locale, action, action_title }) => {
  const { dict } = useContext(GlobalContext);
  return (
    <BottomNavWrapper action={action}>
      <CustomLink href={`/programs/${action_title}`} locale={locale}>
        <Flex direction='row' gap={10} justify={action === "before" ? "left" : "right"}>
          {action === "before" ? (
            <>
              <Image src={`/navigate_${action}.svg`} alt={`navigate_${action}`} width={32} height={32} />
              <Text cursor='pointer' size={"1.25rem"} weight={700}>
                {dict.timetable.nav_before}
              </Text>
            </>
          ) : (
            <>
              <Text cursor='pointer' size={"1.25rem"} weight={700}>
                {dict.timetable.nav_next}
              </Text>
              <Image src={`/navigate_${action}.svg`} alt={`navigate_${action}`} width={32} height={32} />
            </>
          )}
        </Flex>
      </CustomLink>
    </BottomNavWrapper>
  );
};

const BottomSpeakerInnerResponsive = styled.div({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  gap: "50px",
  flexDirection: "row",
  "@media (max-width: 550px)": {
    flexDirection: "column",
  },
});

const SpeakerNameDiffContainer = styled.div({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "row",
  columnGap: "1em",
});

export default function TechTalkDetail({ params }: { params: { title: string; locale: "en" | "ko" } }) {
  const { title, locale } = params;
  const data = timetableList.find((el) => el.title.en.replaceAll(" ", "-") === title)!;
  const { day, time, speaker, title: titleByLocale, desc, diff } = data;

  const speaker_list = timetableList.filter(({ isSponsor, speaker }) => !isSponsor && speaker);
  const idx_of_list = speaker_list.findIndex((el) => el.speaker?.name.ko === speaker!.name.ko);

  const isThereNoPrev = idx_of_list - 1 < 0;
  const isThereNoNext = idx_of_list + 1 >= speaker_list.length;

  const nav_style = isThereNoPrev ? "right" : isThereNoNext ? "left" : "space-between";

  return (
    <Section>
      <TechTalkContainer>
        <TechTalkInner>
          <TechTalkHeader>
            <TechTalkTitle>{titleByLocale[locale]}</TechTalkTitle>
            <Flex direction='row' gap={10} justify='start'>
              <Text size={"1.25rem"} weight={700}>
                {day}
              </Text>
              <Text size={"1.25rem"} weight={700}>
                {day === "DAY 1" ? "2024. 10. 12" : "2024. 10. 13"}
              </Text>
              <Text size={"1.25rem"} weight={700}>
                {time}
              </Text>
            </Flex>
          </TechTalkHeader>
          <PresentDescWrapper>
            <Markdown>{desc![locale]}</Markdown>
          </PresentDescWrapper>
          <BottomContainer>
            <Flex>
              <BottomSpeakerContainer>
                <BottomSpeakerInnerContainer>
                  <BottomSpeakerInnerResponsive>
                    <SpeakerImage
                      width={100}
                      height={100}
                      src={`/speakers/${speaker!.avatar}`}
                      alt={speaker!.name[locale]}
                    />
                    <Flex justify='start' align='start' gap={10}>
                      <SpeakerNameDiffContainer>
                        <Text
                          size={"1.5rem"}
                          weight={700}
                        >{`${speaker!.name[locale]}${locale === "ko" ? "님" : ""}`}</Text>
                        <DiffLabel diff={diff!} locale={locale} />
                      </SpeakerNameDiffContainer>
                      <SpeakerBio>
                        <Markdown>{`${speaker!.intro![locale]}`}</Markdown>
                      </SpeakerBio>
                    </Flex>
                  </BottomSpeakerInnerResponsive>
                </BottomSpeakerInnerContainer>
              </BottomSpeakerContainer>
              <BottomNavContainer>
                <Flex direction='row' justify={nav_style}>
                  {!isThereNoPrev && (
                    <BottomNav
                      action='before'
                      locale={locale}
                      idx={idx_of_list}
                      action_title={speaker_list[idx_of_list - 1].title.en.replaceAll(" ", "-")}
                    />
                  )}
                  {!isThereNoNext && (
                    <BottomNav
                      action='next'
                      locale={locale}
                      idx={idx_of_list}
                      action_title={speaker_list[idx_of_list + 1].title.en.replaceAll(" ", "-")}
                    />
                  )}
                </Flex>
              </BottomNavContainer>
            </Flex>
          </BottomContainer>
        </TechTalkInner>
      </TechTalkContainer>
    </Section>
  );
}

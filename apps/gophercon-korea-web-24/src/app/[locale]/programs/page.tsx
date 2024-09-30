"use client";

import { pretendard_fontFamily } from "@/app/fonts";
import CustomLink from "@/components/CustomLink";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import { useContext, useState } from "react";
import timetableList, { TargetDay, TimeTableProps } from "./data";

const TimeTableWrapper = styled.div`
  padding: 80px 160px;
`;

const TimeTableContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

const TimeTableSwitchDiv = styled.div``;

export default function Timetable() {
  const [targetDay, setTargetDay] = useState<TargetDay>("DAY 1");
  const switch_data: { day: TargetDay; date: string }[] = [
    { day: "DAY 1", date: "10.12(SAT)" },
    { day: "DAY 2", date: "10.13(SUN)" },
  ];
  return (
    <TimeTableWrapper>
      <TimeTableContainer>
        <Flex align='center' justify='center'>
          <TimeTableSwitchDiv>
            <Flex direction='row' gap={80}>
              {switch_data.map((el) => (
                <Text
                  color={targetDay === el.day ? "#000000" : "#999999"}
                  onClick={() => setTargetDay(el.day)}
                  cursor='pointer'
                  font={pretendard_fontFamily}
                  size={"1.75rem"}
                  weight={700}
                  key={el.date}
                >
                  {el.date}
                </Text>
              ))}
            </Flex>
          </TimeTableSwitchDiv>
          <TimetablePerDay list={timetableList} targetDay={targetDay} />
        </Flex>
      </TimeTableContainer>
    </TimeTableWrapper>
  );
}

const TimeTableDiv = styled.table`
  width: 100%;
`;
const ColGroup = styled.colgroup``;
const Col = styled.col<{ width: number }>`
  width: ${({ width }) => `${width}%`};
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const Th = styled.th`
  text-aling: center;
  padding: 15px 5px;
`;
const Tr = styled.tr<{ isEvent?: boolean; isHead?: boolean }>`
  background-color: ${({ isEvent, isHead }) => (isHead ? "#f1f1f1" : isEvent ? "#f2fbff" : "#ffffff")};
`;
const Td = styled.td<{ isEvent?: boolean }>`
  text-align: ${({ isEvent }) => (isEvent ? "center" : "left")};
  vertical-align: middle;
  padding: 20px 5px 20px ${({ isEvent }) => (isEvent ? "5px" : "30px")};
  border-bottom: 1px solid #d2d2d2;
`;

const SpeakerImage = styled(Image)`
  border-radius: 50%;
`;

const TimetablePerDay = ({ list, targetDay }: { list: TimeTableProps[]; targetDay: TargetDay }) => {
  const { dict, locale } = useContext(GlobalContext);
  const list_per_day = list.filter((el) => el.day === targetDay);
  return (
    <TimeTableDiv>
      <ColGroup>
        <Col width={20} />
        <Col width={45} />
        <Col width={20} />
        <Col width={15} />
      </ColGroup>
      <THead>
        <Tr isHead={true}>
          <Th>
            <Text weight={700} font={pretendard_fontFamily}>
              TIME
            </Text>
          </Th>
          <Th style={{ textAlign: "left", paddingLeft: "30px" }}>
            <Text weight={700} font={pretendard_fontFamily}>
              TITLE
            </Text>
          </Th>
          <Th>
            <Text weight={700} font={pretendard_fontFamily}>
              SPEAKER
            </Text>
          </Th>
          <Th>
            <Text weight={700} font={pretendard_fontFamily}>
              LINK
            </Text>
          </Th>
        </Tr>
      </THead>
      <TBody>
        {list_per_day.map((el: TimeTableProps, idx: number) => {
          const isEvent = el.isSponsor || !el.speaker;
          return (
            <Tr key={`timetable-${idx}`} isEvent={isEvent}>
              <Td isEvent={true}>
                <Text weight={700} font={pretendard_fontFamily}>
                  {el.time}
                </Text>
              </Td>
              <Td isEvent={isEvent} colSpan={isEvent ? 3 : 1}>
                <Text weight={700} font={pretendard_fontFamily}>
                  {el.title[locale]}
                </Text>
              </Td>
              {!isEvent && (
                <>
                  <Td isEvent={true} style={{ textAlign: "center" }}>
                    <Flex direction='row' gap={20} justify='center' align='center'>
                      <SpeakerImage
                        width={60}
                        height={60}
                        src={`/speakers/${el.speaker!.avatar}`}
                        alt={el.speaker!.name[locale]}
                      />
                      <Text weight={700}>{el.speaker!.name[locale]}</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <CustomLink locale={locale} href={`/timetable/${el.title.en.replaceAll(" ", "-")}`}>
                      <Text cursor='pointer' align='center' color='#6630D9' weight={700}>
                        {dict.timetable.detail}
                      </Text>
                    </CustomLink>
                  </Td>
                </>
              )}
            </Tr>
          );
        })}
      </TBody>
    </TimeTableDiv>
  );
};

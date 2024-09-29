"use client";

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
`;

export default function Timetable() {
  const [targetDay, setTargetDay] = useState<TargetDay>("DAY 1");
  return (
    <TimeTableWrapper>
      <TimeTableContainer>
        <TimetablePerDay list={timetableList} targetDay={targetDay} />
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
const THead = styled.thead`
  font-weight: 700;
  font-size: 20px;
  background-color: #f1f1f1;
`;
const TBody = styled.tbody``;
const Th = styled.th`
  font-weight: 700;
  font-size: 20px;
  text-aling: center;
  padding: 15px 5px;
`;
const Tr = styled.tr<{ isEvent: boolean }>`
  background-color: ${({ isEvent }) => (isEvent ? "#f2fbff" : "#ffffff")};
`;
const Td = styled.td<{ isEvent?: boolean }>`
  font-weight: 700;
  font-size: 20px;
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
        <Col width={50} />
        <Col width={20} />
        <Col width={10} />
      </ColGroup>
      <THead>
        <Th>TIME</Th>
        <Th style={{ textAlign: "left", paddingLeft: "30px" }}>TITLE</Th>
        <Th>SPEAKER</Th>
        <Th>LINK</Th>
      </THead>
      <TBody>
        {list_per_day.map((el: TimeTableProps) => {
          const isEvent = el.isSponsor || !el.speaker;
          return (
            <Tr isEvent={isEvent}>
              <Td isEvent={true}>{el.time}</Td>
              <Td isEvent={isEvent} colSpan={isEvent ? 3 : 1}>
                {el.title[locale]}
              </Td>
              {!isEvent && (
                <>
                  <Td isEvent={true}>
                    <Flex direction='row' gap={20} justify='start' align='center'>
                      <SpeakerImage
                        width={60}
                        height={60}
                        src={`/speakers/${el.speaker!.avatar}`}
                        alt={el.speaker!.name[locale]}
                      />
                      <Text size={20} weight={700}>
                        {el.speaker!.name[locale]}
                      </Text>
                    </Flex>
                  </Td>
                  <Td>
                    <CustomLink locale={locale} href={`/timetable/${el.title.en.replaceAll(" ", "-")}`}>
                      {dict.timetable.detail}
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

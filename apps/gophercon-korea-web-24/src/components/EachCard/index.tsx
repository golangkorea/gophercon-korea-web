import { TimeTableProps } from "@/app/[locale]/programs/data";
import { jakartaSans_fontFamily } from "@/app/fonts";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import { FC, useContext } from "react";

const EachCardContainer = styled.div`
  padding: 40px;
  background-color: #ffffff;
  overflow: hidden;
  positon: relative;
  border-radius: 40px;
  width: 340px;
  height: 200px;
`;

const colorObject = {
  Beginner: "#00b555",
  Intermediate: "#ff8000",
  Advanced: "#ff4d4d",
};

const LevelContainer = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 6px 12px;
  border-radius: 100px;
`;

const SpeakerImage = styled(Image)`
  border-radius: 50%;
`;

export const EachCard: FC<TimeTableProps> = ({ day, time, diff, title, speaker }) => {
  const { locale } = useContext(GlobalContext);
  const levelBgColor = colorObject[diff?.en ?? "Beginner"];

  return (
    <EachCardContainer>
      <Flex align='start' justify='start' gap={20}>
        <LevelContainer bgColor={levelBgColor}>
          <Text color='#ffffff' size={16} weight={600} font={jakartaSans_fontFamily}>
            {diff ? diff[locale] : ""}
          </Text>
        </LevelContainer>
        <Flex direction='row' gap={20} justify='start'>
          <SpeakerImage
            src={`/speakers/${speaker?.avatar}`}
            alt={`speaker-image-${speaker?.name}`}
            width={60}
            height={60}
          />
          <Flex align='start' gap={20}>
            <Flex direction='row' justify='start' gap={12} align='center'>
              <Text weight={600} font={jakartaSans_fontFamily} color='#555555' size={20}>
                {day}
              </Text>
              <Text size={20} color='#aaaaaa' font={jakartaSans_fontFamily}>
                |
              </Text>
              <Text size={20} weight={600} font={jakartaSans_fontFamily}>
                {time}
              </Text>
            </Flex>
            <Text size={20} weight={600}>
              {speaker?.name[locale]}
              {locale === "ko" ? "님" : ""}
            </Text>
          </Flex>
        </Flex>
        <Text color='#6630d9' size={20} weight={600}>
          &quot; {title[locale]} &quot;
        </Text>
      </Flex>
    </EachCardContainer>
  );
};

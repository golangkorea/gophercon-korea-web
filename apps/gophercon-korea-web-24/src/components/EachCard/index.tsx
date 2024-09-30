import { jakartaSans_fontFamily } from "@/app/fonts";
import styled from "@emotion/styled";
import { Flex, Text } from "gophercon-common";
import Image from "next/image";
import { FC } from "react";
import { EachCardProps } from "../Carousel/data";

export const EachCard: FC<EachCardProps> = ({ day, hour, level, name, theme, imgSrc }) => {
  const levelBgColor = colorObject[level];

  return (
    <EachCardContainer>
      <Flex align='start' justify='start' gap={20}>
        <LevelContainer bgColor={levelBgColor}>
          <Text color='#ffffff' size={16} weight={600} font={jakartaSans_fontFamily}>
            {level}
          </Text>
        </LevelContainer>
        <Flex direction='row' gap={20} justify='start'>
          <SpeakerImage src={`/${imgSrc}`} alt={`speaker-image-${name}`} width={60} height={60} />
          <Flex align='start' gap={20}>
            <Flex direction='row' justify='start' gap={12} align='center'>
              <Text weight={600} font={jakartaSans_fontFamily} color='#555555' size={20}>
                {day}
              </Text>
              <Text size={20} color='#aaaaaa' font={jakartaSans_fontFamily}>
                |
              </Text>
              <Text size={20} weight={600} font={jakartaSans_fontFamily}>
                {hour}
              </Text>
            </Flex>
            <Text size={20} weight={600}>
              {name}님
            </Text>
          </Flex>
        </Flex>
        <Text color='#6630d9' size={20} weight={600}>
          &quot; {theme} &quot;
        </Text>
      </Flex>
    </EachCardContainer>
  );
};

const EachCardContainer = styled.div`
  padding: 40px;
  background-color: #ffffff;
  overflow: hidden;
  positon: relative;
  border-radius: 40px;
  width: 400px;
  height: 300px;
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

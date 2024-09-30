"use client";
import Section from "@/components/Section";
import styled from "@emotion/styled";
import { FC } from "react";
import { sponsorList, SponsorProps, sponsorColor, GradeColor } from "./data";
import Image from "next/image";
import { Flex, Text } from "gophercon-common";
import { pretendard_fontFamily } from "@/app/fonts";

const sponsorGradeList = ["PLATINUM", "GOLD", "SILVER", "BRONZE", "COMMUNITY", "PUBLISHERS"] as const;

const SponsorWrapper = styled.div({
  padding: "160px 80px 80px 80px",
});

const SponsorModal = () => {};

const EachSponsorWrapper = styled.div({
  padding: "40px",
  backgroundColor: "#F1F1F1",
  boxShadow: "0px 12px 0px rgba(0, 0, 0, 0.12)",
});

const EachSponsorButton: FC<SponsorProps> = ({ imgSrc, grade, desc, link }) => {
  return (
    <EachSponsorWrapper>
      <Image src={`/${imgSrc}`} alt={imgSrc} fill />
    </EachSponsorWrapper>
  );
};

const SponsorDivider = styled.div<GradeColor>(({ startColor, endColor }) => ({
  width: "100%",
  height: "10px",
  background: `linear-gradient(to right, ${startColor}, ${endColor})`,
}));

const Sponsor = () => {
  return (
    <Section>
      <SponsorWrapper>
        {sponsorGradeList.map((grade) => {
          const targetData = sponsorList.filter((info) => info.grade.en === grade);
          const targetColor = sponsorColor[grade];
          return (
            <Flex width='100%' align='start' justify='start'>
              <Flex align='start' justify='start' gap={20}>
                <Text font={pretendard_fontFamily} size={"2.5rem"} weight={700}>
                  {grade}
                </Text>
                <SponsorDivider {...targetColor} />
              </Flex>
            </Flex>
          );
        })}
      </SponsorWrapper>
    </Section>
  );
};

export default Sponsor;

import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import hyunseoJung from "@/assets/profile/hyunseo-jung.webp";
import jaichangPark from "@/assets/profile/jaichang-park.webp";
import jhinLee from "@/assets/profile/jhin-lee.webp";
import jqLee from "@/assets/profile/jq-lee.webp";
import sungminHan from "@/assets/profile/sungmin-han.webp";
import uiseonYu from "@/assets/profile/uiseon-yu.webp";
import wooseokHan from "@/assets/profile/wooseok-han.webp";

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const profileImages: { [key: string]: any } = {
  "jaichang-park": jaichangPark,
  "uiseon-yu": uiseonYu,
  "jq-lee": jqLee,
  "jhin-lee": jhinLee,
  "hyunseo-jung": hyunseoJung,
  "sungmin-han": sungminHan,
  "wooseok-han": wooseokHan,
};

interface Organizer {
  name: string;
  role: string;
  avatar: string;
}

const Organizers = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "organizers" });
  const [shuffledOrganizers, setShuffledOrganizers] = useState<Organizer[]>([]);

  useEffect(() => {
    const organizerList = t("list", { returnObjects: true });
    if (Array.isArray(organizerList)) {
      setShuffledOrganizers(shuffleArray(organizerList as Organizer[]));
    }
  }, [t]);

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("list_desc")} />
      <PageTitle>{t("title")}</PageTitle>
      <Description>{t("list_desc")}</Description>
      <OrganizerGrid>
        {shuffledOrganizers.map((organizer) => (
          <OrganizerCard key={organizer.name}>
            <ProfileImage imageUrl={profileImages[organizer.avatar]} />
            <Name>{organizer.name}</Name>
            <Role>{organizer.role}</Role>
          </OrganizerCard>
        ))}
      </OrganizerGrid>
    </PageContainer>
  );
};

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  max-width: 700px;
  margin: -20px auto 60px;
  line-height: 1.7;
`;

const OrganizerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 40px;
`;

const OrganizerCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  text-align: center;
`;

const ProfileImage = styled.div<{ imageUrl?: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.footerBg};
  margin: 0 auto 20px;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Name = styled.h3`
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Role = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export default Organizers;

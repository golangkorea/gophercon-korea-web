import GopherHead from "@/components/common/GopherHead";
import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import gopherDefault1 from "@/assets/profile/gopher-default1.webp";
import gopherDefault2 from "@/assets/profile/gopher-default2.webp";
import gopherDefault3 from "@/assets/profile/gopher-default3.webp";
import gopherDefault4 from "@/assets/profile/gopher-default4.webp";
import gopherDefault5 from "@/assets/profile/gopher-default5.webp";
import gopherDefault6 from "@/assets/profile/gopher-default6.webp";
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

const defaultGopherImages = [
  gopherDefault1,
  gopherDefault2,
  gopherDefault3,
  gopherDefault4,
  gopherDefault5,
  gopherDefault6,
];

interface Organizer {
  name: string;
  role: string;
  avatar: string;
}

const Organizers = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "organizers" });
  const [shuffledMembers, setShuffledMembers] = useState<Organizer[]>([]);

  useEffect(() => {
    const organizerList = (t("list", { returnObjects: true }) as Organizer[]) || [];
    const prepList = (t("preparatory_committee_list", { returnObjects: true }) as Organizer[]) || [];

    let allMembers: Organizer[] = [];
    if (Array.isArray(organizerList)) allMembers = allMembers.concat(organizerList);
    if (Array.isArray(prepList)) allMembers = allMembers.concat(prepList);

    if (allMembers.length > 0) {
      setShuffledMembers(shuffleArray(allMembers));
    }
  }, [t]);

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("list_desc")} />
      <PageTitle>{t("title")}</PageTitle>
      <Description>{t("list_desc")}</Description>
      <OrganizerGrid>
        {shuffledMembers.map((member, index) => {
          const imageUrl = profileImages[member.avatar] || defaultGopherImages[index % defaultGopherImages.length];
          return (
            <OrganizerCard key={member.name}>
              <ProfileImageContainer>
                {member.avatar === "gopher-head" ? (
                  <GopherHead />
                ) : (
                  <ProfileImage imageUrl={imageUrl} />
                )}
              </ProfileImageContainer>
              <Name>{member.name}</Name>
              <Role>{member.role}</Role>
            </OrganizerCard>
          );
        })}
      </OrganizerGrid>
      <ArtworkCredit>
        <Trans
          i18nKey='organizers.artwork_credit'
          components={[
            <a href='https://gopherize.me/' target='_blank' rel='noopener noreferrer'></a>,
            <a href='http://reneefrench.blogspot.co.uk/' target='_blank' rel='noopener noreferrer'></a>,
            <a href='https://go.dev/blog/gopher' target='_blank' rel='noopener noreferrer'></a>,
            <a href='https://x.com/ashleymcnamara' target='_blank' rel='noopener noreferrer'></a>,
            <br />,
          ]}
        />
      </ArtworkCredit>
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

const ProfileImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 20px;
  border: 4px solid white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div<{ imageUrl?: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
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

const ArtworkCredit = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 60px;
  line-height: 1.6;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default Organizers;

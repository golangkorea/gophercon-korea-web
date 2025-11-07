import ff4500 from "@/assets/speakers/ff4500.webp";
import hyungsubkim03 from "@/assets/speakers/hyungsubkim03.webp";
import joohyungpark from "@/assets/speakers/joohyungpark.webp";
import jqyulee from "@/assets/speakers/jqyulee.webp";
import kyubin2892 from "@/assets/speakers/kyubin2892.webp";
import lth9036 from "@/assets/speakers/lth9036.webp";
import raeperd117 from "@/assets/speakers/raeperd117.webp";
import scottbae37 from "@/assets/speakers/scottbae37.webp";
import GopherHead from "@/components/common/GopherHead";
import { PageContainer } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import { sessions } from "@/data/program";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  RiArrowLeftLine,
  RiBarChart2Line,
  RiFacebookBoxFill,
  RiGithubFill,
  RiGlobalLine,
  RiInstagramLine,
  RiLinkedinBoxFill,
  RiMapPin2Line,
  RiTimeLine,
  RiTwitterXFill,
  RiUserLine,
  RiYoutubeFill,
} from "react-icons/ri";
import { Link, useParams } from "react-router-dom";

const profileImages: { [key: string]: any } = {
  ff4500,
  hyungsubkim03,
  joohyungpark,
  jqyulee,
  kyubin2892,
  lth9036,
  raeperd117,
  scottbae37,
};

const SessionDetail = () => {
  const { sessionId } = useParams<{ sessionId: string }>();
  const { t, i18n } = useTranslation(undefined, { keyPrefix: "program" });
  const lang = i18n.language.startsWith("ko") ? "ko" : "en";
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const session = sessions.find((s) => s.id === sessionId);

  if (!session) {
    return (
      <PageContainer>
        <p>Session not found.</p>
      </PageContainer>
    );
  }

  const isDummySns = (url: string) => url.includes("@@gopher@@");
  const dummySnsMessages = t("dummy_sns_messages", { returnObjects: true }) as { [key: string]: string };
  const speakerImageSrc = profileImages[session.speaker.image];

  return (
    <PageContainer>
      <Seo title={session.title[lang]} description={session.description[lang]} />
      <BackLink to='/program/sessions'>
        <RiArrowLeftLine />
        {t("back_to_sessions")}
      </BackLink>
      <Header>
        <CategoryTag category={session.category.en.toLowerCase()}>{session.category[lang]}</CategoryTag>
        <Title>{session.title[lang]}</Title>
        <SpeakerSubtitle>
          <RiUserLine /> {session.speaker.name[lang]} ({session.speaker.company[lang]})
        </SpeakerSubtitle>
      </Header>

      <Layout>
        <MainContent>
          <h3>{t("session_details")}</h3>
          <Description>{session.description[lang] || t("description_placeholder")}</Description>
        </MainContent>
        <Sidebar>
          <SessionInfoCard>
            <h4>{t("session_info")}</h4>
            <InfoGrid>
              <InfoItem>
                <RiTimeLine />
                <span>{session.time}</span>
              </InfoItem>
              <InfoItem>
                <RiMapPin2Line />
                <span>{session.track[lang]}</span>
              </InfoItem>
              <InfoItem>
                <RiBarChart2Line />
                <span>{session.difficulty[lang]}</span>
              </InfoItem>
            </InfoGrid>
          </SessionInfoCard>
          <SpeakerCard>
            <h4>{t("speaker")}</h4>
            <SpeakerImageContainer>
              {speakerImageSrc ? (
                <SpeakerImage src={speakerImageSrc} alt={session.speaker.name[lang]} />
              ) : (
                <GopherHead />
              )}
            </SpeakerImageContainer>
            <SpeakerName>{session.speaker.name[lang]}</SpeakerName>
            <Company>{session.speaker.company[lang]}</Company>
            {session.speaker.sns && (
              <SnsLinks>
                {session.speaker.sns.github &&
                  (isDummySns(session.speaker.sns.github) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("github")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiGithubFill />
                      {activeTooltip === "github" && <SnsTooltip>{dummySnsMessages.github}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.github} target='_blank' rel='noopener noreferrer'>
                      <RiGithubFill />
                    </a>
                  ))}
                {session.speaker.sns.linkedin &&
                  (isDummySns(session.speaker.sns.linkedin) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("linkedin")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiLinkedinBoxFill />
                      {activeTooltip === "linkedin" && <SnsTooltip>{dummySnsMessages.linkedin}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.linkedin} target='_blank' rel='noopener noreferrer'>
                      <RiLinkedinBoxFill />
                    </a>
                  ))}
                {session.speaker.sns.twitter &&
                  (isDummySns(session.speaker.sns.twitter) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("twitter")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiTwitterFill />
                      {activeTooltip === "twitter" && <SnsTooltip>{dummySnsMessages.twitter}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.twitter} target='_blank' rel='noopener noreferrer'>
                      <RiTwitterXFill />
                    </a>
                  ))}
                {session.speaker.sns.facebook &&
                  (isDummySns(session.speaker.sns.facebook) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("facebook")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiFacebookBoxFill />
                      {activeTooltip === "facebook" && <SnsTooltip>{dummySnsMessages.facebook}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.facebook} target='_blank' rel='noopener noreferrer'>
                      <RiFacebookBoxFill />
                    </a>
                  ))}
                {session.speaker.sns.instagram &&
                  (isDummySns(session.speaker.sns.instagram) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("instagram")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiInstagramLine />
                      {activeTooltip === "instagram" && <SnsTooltip>{dummySnsMessages.instagram}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.instagram} target='_blank' rel='noopener noreferrer'>
                      <RiInstagramLine />
                    </a>
                  ))}
                {session.speaker.sns.youtube &&
                  (isDummySns(session.speaker.sns.youtube) ? (
                    <SnsIconWrapper
                      onMouseEnter={() => setActiveTooltip("youtube")}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <RiYoutubeFill />
                      {activeTooltip === "youtube" && <SnsTooltip>{dummySnsMessages.youtube}</SnsTooltip>}
                    </SnsIconWrapper>
                  ) : (
                    <a href={session.speaker.sns.youtube} target='_blank' rel='noopener noreferrer'>
                      <RiYoutubeFill />
                    </a>
                  ))}
                {session.speaker.sns.blog && (
                    <a href={session.speaker.sns.blog} target='_blank' rel='noopener noreferrer'>
                      <RiGlobalLine />
                    </a>
                  ))}
              </SnsLinks>
            )}
            <SpeakerIntro>{session.speaker.intro[lang]}</SpeakerIntro>
          </SpeakerCard>
        </Sidebar>
      </Layout>
    </PageContainer>
  );
};

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2.5rem;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 120px;
  align-self: start;
`;

const BaseCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.border};

  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const SpeakerCard = styled(BaseCard)`
  text-align: center;
`;

const SessionInfoCard = styled(BaseCard)``;

const CategoryTag = styled.span<{ category: string }>`
  display: inline-block;
  padding: 0.3rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
  background-color: ${({ theme, category }) => (theme.colors.category as any)[category] || theme.colors.primary};
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 2.8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: clamp(1.8rem, 7vw, 2.2rem);
    line-height: 1.3;
  }
`;

const SpeakerSubtitle = styled.div`
  margin-top: 1.5rem;
  font-size: 1.2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const SpeakerImageContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const SpeakerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SpeakerName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Company = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  display: block;
`;

const SpeakerIntro = styled.p`
  font-size: 0.9rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: pre-wrap;
`;

const SnsLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 1.8rem;
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const SnsIconWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.8rem;
`;

const SnsTooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.9rem;
  white-space: nowrap;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  white-space: pre-wrap;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default SessionDetail;

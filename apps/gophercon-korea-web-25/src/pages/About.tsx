import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import styled from "@emotion/styled";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import photo1 from "@/assets/gallery/item1.webp";
import photo2 from "@/assets/gallery/item2.webp";
import photo3 from "@/assets/gallery/item3.webp";
import photo4 from "@/assets/gallery/item4.webp";
import photo5 from "@/assets/gallery/item5.webp";
import { keyframes } from "@emotion/css";
import { RiCheckLine, RiFileCopyLine, RiGlobalLine, RiShareLine, RiTeamLine, RiYoutubeLine } from "react-icons/ri";

const photos = [photo1, photo2, photo3, photo4, photo5];

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const scaleUp = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const AnimatedSectionContainer = styled.div`
  opacity: 0;
  transform: translate3d(0, 50px, 0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out;

  &.is-visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const ScrollAnimatedSection: FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    });

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <AnimatedSectionContainer
      ref={ref}
      className={isVisible ? "is-visible" : ""}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </AnimatedSectionContainer>
  );
};

const About = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "about" });
  const valuesData = t("values", { returnObjects: true });
  const values = Array.isArray(valuesData) ? (valuesData as { title: string; desc: string }[]) : [];
  const valueIcons = [RiTeamLine, RiShareLine, RiGlobalLine];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t: tRoot } = useTranslation();
  const { copy: copyVenue, copyStatus: venueCopyStatus } = useCopyToClipboard();
  const venueName = tRoot("sponsorship_form.venue_name");
  const venueAddress = tRoot("venue.address");
  const fullVenueInfo = `${venueName}, ${venueAddress}`;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("content")} />
      <ScrollAnimatedSection>
        <Section as='header' style={{ paddingBottom: "60px", marginBottom: "60px" }}>
          <PageTitle>{t("title")}</PageTitle>
          <Slogan>"{t("slogan")}"</Slogan>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <Card>
            <SectionTitle>{t("what_is_gophercon_title")}</SectionTitle>
            <SectionSubtitle>{t("what_is_gophercon_subtitle")}</SectionSubtitle>
            <MainContent style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
              <p>{t("what_is_gophercon_content")}</p>
            </MainContent>
          </Card>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <CenteredCard>
            <MainContent>
              <p>{t("content")}</p>
              <p>{t("content2")}</p>
            </MainContent>
            <InfoCard>
              <CopyableContainer>
                <InfoItem>{t("date")}</InfoItem>
                <InfoDivider />
                <InfoItem>{t("venue")}</InfoItem>
                <CopyButton onClick={() => copyVenue(fullVenueInfo)} title='Copy address'>
                  {venueCopyStatus === "copied" ? <RiCheckLine color='green' /> : <RiFileCopyLine />}
                </CopyButton>
              </CopyableContainer>
            </InfoCard>
          </CenteredCard>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <Card>
            <SectionTitle>{t("past_conferences_title")}</SectionTitle>
            <PastConferenceGrid>
              <PastConferenceLink
                href='https://www.youtube.com/watch?v=zdMuLvK0pNg'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiYoutubeLine size={40} />
                <h3>GopherCon Korea 2024</h3>
                <p>{t("watch_now")}</p>
              </PastConferenceLink>
              <PastConferenceLink
                href='https://www.youtube.com/watch?v=75X_eBW0mog&list=PLxEDm5GRSh4Mks_ECe5g3PAppNWGC96F4'
                target='_blank'
                rel='noopener noreferrer'
              >
                <RiYoutubeLine size={40} />
                <h3>GopherCon Korea 2023</h3>
                <p>{t("watch_now")}</p>
              </PastConferenceLink>
            </PastConferenceGrid>
          </Card>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <Card>
            <SectionTitle>{t("photos_title")}</SectionTitle>
            <PhotoGallery>
              {photos.map((photo, index) => (
                <PhotoItem key={index} imageUrl={photo} onClick={() => setSelectedImage(photo)} />
              ))}
            </PhotoGallery>
          </Card>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <Card>
            <SectionTitle>{t("mission_title")}</SectionTitle>
            <ValuesGrid>
              {values.map((value, index) => {
                const Icon = valueIcons[index];
                return (
                  <ValueCard key={index}>
                    <IconWrapper>
                      <Icon size={40} />
                    </IconWrapper>
                    <h3>{value.title}</h3>
                    <p>{value.desc}</p>
                  </ValueCard>
                );
              })}
            </ValuesGrid>
          </Card>
        </Section>
      </ScrollAnimatedSection>

      <ScrollAnimatedSection>
        <Section>
          <Card>
            <SectionTitle>{t("gdg_partnership_title")}</SectionTitle>
            <MainContent style={{ textAlign: "center", maxWidth: 800, margin: "0 auto" }}>
              <p>{t("gdg_partnership_content")}</p>
            </MainContent>
            <CtaWrapper>
              <CtaLink href='https://developers.google.com/community/gdg' target='_blank' rel='noopener noreferrer'>
                {t("gdg_partnership_cta")}
              </CtaLink>
            </CtaWrapper>
          </Card>
        </Section>
      </ScrollAnimatedSection>

      {selectedImage && (
        <FullscreenOverlay onClick={() => setSelectedImage(null)}>
          <FullscreenImage src={selectedImage} alt='Enlarged gallery view' />
        </FullscreenOverlay>
      )}
    </PageContainer>
  );
};

const Section = styled.section`
  margin-bottom: 120px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Slogan = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-style: italic;
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: 1.4;
    padding: 0 1rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: -20px;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 80px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 20px;
  }
`;

const MainContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  p {
    margin-bottom: 1.5em;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1em;
  }
`;

const CenteredCard = styled(Card)`
  text-align: center;

  & > ${MainContent} {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }
`;

const InfoCard = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 60px;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 12px;
`;

const CopyableContainer = styled.div`
  display: flex;
  align-items: center;

  &:hover button {
    opacity: 0.7;
  }
`;

const CopyButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0;
  transition: opacity 0.2s;
  padding: 0 0 0 12px;
  font-size: 1.2rem;
`;

const InfoItem = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const InfoDivider = styled.div`
  width: 1px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.border};
  margin: 0 30px;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 30px;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2.5rem 2rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.primary};
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const PhotoGallery = styled.div`
  display: flex;
  height: 400px;
  gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
  }
`;

const PhotoItem = styled.div<{ imageUrl: string }>`
  position: relative;
  flex: 1;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: none;
    height: 250px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.large};
    z-index: 10;
  }
`;

const PastConferenceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-top: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const PastConferenceLink = styled.a`
  display: block;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2.5rem 2rem;
  border-radius: 8px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.medium};

    svg {
      color: #ff0000;
    }
  }

  svg {
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.text};
  }
  p {
    font-size: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;

const FullscreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease-out;
`;

const FullscreenImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  animation: ${scaleUp} 0.4s cubic-bezier(0.16, 1, 0.3, 1);
`;

const CtaWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const CtaLink = styled.a`
  display: inline-block;
  padding: 14px 28px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ theme }) => theme.shadows.small};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export default About;

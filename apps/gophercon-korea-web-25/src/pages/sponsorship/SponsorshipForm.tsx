import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { RiExternalLinkLine } from "react-icons/ri";

const SponsorshipForm = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "sponsorship_form" });

  const whyJoinList = t("why_join_list", { returnObjects: true });
  const processSteps = t("process_steps", { returnObjects: true });
  const termsArticles = t("terms_articles", { returnObjects: true });

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("invitation_p2")} />
      <PageTitle>{t("title")}</PageTitle>

      <LetterCard>
        <p>{t("invitation_p1")}</p>
        <p>{t("invitation_p2")}</p>
        <SectionTitle style={{ marginTop: "2rem" }}>{t("invitation_moment_title")}</SectionTitle>
        <p>{t("invitation_moment_p1")}</p>
        <p>{t("invitation_moment_p2")}</p>
        <ClosingParagraphs>{t("closing_p1")}</ClosingParagraphs>
        <p>{t("closing_p2")}</p>
        <ClosingSignature>{t("closing_sincerely")}</ClosingSignature>
      </LetterCard>

      <Card>
        <SubTitle>{t("event_overview_title")}</SubTitle>
        <InfoList>
          <li>{t("event_overview_date")}</li>
          <li>{t("event_overview_venue")}</li>
          <li>
            {t("event_overview_attendance")}
            <SubList>
              <li>{t("event_overview_offline")}</li>
              <li>{t("event_overview_online")}</li>
            </SubList>
          </li>
        </InfoList>

        <SubTitle>{t("why_join_title")}</SubTitle>
        <InfoList>
          {Array.isArray(whyJoinList) && (whyJoinList as string[]).map((item, index) => <li key={index}>{item}</li>)}
        </InfoList>

        <SubTitle>{t("to_join_title")}</SubTitle>
        <InfoList>
          <li>{t("to_join_deadline")}</li>
          <li>{t("to_join_contact")}</li>
        </InfoList>
      </Card>

      <Card>
        <SubTitle>{t("about_gophercon_title")}</SubTitle>
        <p style={{ whiteSpace: "pre-wrap" }}>{t("about_gophercon_content")}</p>
      </Card>

      <Card>
        <SubTitle>{t("timeline_title")}</SubTitle>
        <p>{t("timeline_schedule")}</p>
        <p>{t("timeline_registration")}</p>
        <p>{t("timeline_contact")}</p>
      </Card>

      <Card>
        <SubTitle>{t("process_title")}</SubTitle>
        <p style={{ whiteSpace: "pre-wrap", marginBottom: "2rem" }}>{t("process_intro")}</p>
        <ProcessGrid>
          {" "}
          {Array.isArray(processSteps) &&
            (processSteps as { title: string; desc: string }[]).map((step, index) => (
              <ProcessCard key={index}>
                <h4>
                  <span>{index + 1}</span>
                  {step.title}
                </h4>
                <p>{step.desc}</p>
              </ProcessCard>
            ))}
        </ProcessGrid>
      </Card>

      <Card>
        <SubTitle>{t("terms_title")}</SubTitle>
        <TermsContainer>
          {Array.isArray(termsArticles) &&
            (termsArticles as { title: string; content: string }[]).map((article, index) => (
              <Article key={index}>
                <h4>{article.title}</h4>
                <p style={{ whiteSpace: "pre-wrap" }}>{article.content}</p>
              </Article>
            ))}
        </TermsContainer>
      </Card>

      <Card>
        <SubTitle>{t("intro_materials_title")}</SubTitle>
        <LinkGrid>
          <MaterialLink href={t("golangkorea_intro_ko_link")} target='_blank' rel='noopener noreferrer'>
            {t("golangkorea_intro_ko")} <RiExternalLinkLine />
          </MaterialLink>
          <MaterialLink href={t("golangkorea_intro_en_link")} target='_blank' rel='noopener noreferrer'>
            {t("golangkorea_intro_en")} <RiExternalLinkLine />
          </MaterialLink>
          <MaterialLink href={t("gophercon_intro_ko_link")} target='_blank' rel='noopener noreferrer'>
            {t("gophercon_intro_ko")} <RiExternalLinkLine />
          </MaterialLink>
          <MaterialLink href={t("gophercon_intro_en_link")} target='_blank' rel='noopener noreferrer'>
            {t("gophercon_intro_en")} <RiExternalLinkLine />
          </MaterialLink>
        </LinkGrid>
      </Card>

      <CtaContainer>
        <CtaButton href={t("form_link")} target='_blank' rel='noopener noreferrer'>
          {t("apply_button")}
        </CtaButton>
      </CtaContainer>
    </PageContainer>
  );
};

const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 60px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  margin-bottom: 40px;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 1em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 40px 20px;
  }
`;

const LetterCard = styled(Card)`
  background: linear-gradient(135deg, rgba(0, 125, 156, 0.04), rgba(0, 201, 167, 0.04));
  border-left: 6px solid ${({ theme }) => theme.colors.primary};
  padding-top: 40px;
  padding-bottom: 40px;

  p {
    font-size: 1.15rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const SubTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.footerBg};

  &:first-of-type {
    margin-top: 0;
  }
`;

const InfoList = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 2rem;
  li {
    margin-bottom: 0.5em;
  }
`;

const SubList = styled.ul`
  list-style: circle;
  padding-left: 20px;
  margin-top: 0.5em;
`;

const ClosingParagraphs = styled.p`
  margin-top: 2.5rem !important;
`;

const ClosingSignature = styled.p`
  margin-top: 2.5rem !important;
  text-align: right;
  font-style: italic;
  white-space: pre-wrap;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
`;

const ProcessCard = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBg};
  padding: 30px;
  border-radius: 8px;
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      font-size: 1rem;
    }
  }
`;

const TermsContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.footerBg};
  border-radius: 8px;
  padding: 40px;
  max-height: 500px;
  overflow-y: auto;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Article = styled.div`
  margin-bottom: 2rem;
  &:last-of-type {
    margin-bottom: 0;
  }
  h4 {
    font-size: 1.1rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const MaterialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.footerBg};
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    margin-left: 10px;
  }
`;

const CtaContainer = styled.div`
  text-align: center;
  margin: 60px 0;
`;

const CtaButton = styled.a`
  display: inline-block;
  padding: 20px 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

export default SponsorshipForm;

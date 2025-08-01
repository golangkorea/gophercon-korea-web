import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const CoC = () => {
  const { t } = useTranslation();

  return (
    <PageContainer>
      <Seo title={t("coc.title")} description={t("coc.titleCoreDesc")} />
      <PageTitle>{t("coc.title")}</PageTitle>
      <ContentWrapper>
        <Section>
          <SectionTitle>{t("coc.titleCore")}</SectionTitle>
          <Description>{t("coc.titleCoreDesc")}</Description>
          <Description>{t("coc.titleCoreDesc2")}</Description>

          <Statement>{t("coc.titleCoreStatement1")}</Statement>
          <SubStatement>{t("coc.titleCoreStatement1Unit1")}</SubStatement>
          <SubStatement>{t("coc.titleCoreStatement1Unit2")}</SubStatement>
          <SubStatement>{t("coc.titleCoreStatement1Unit3")}</SubStatement>

          <Statement>{t("coc.titleCoreStatement2")}</Statement>
          <SubStatement>{t("coc.titleCoreStatement2Unit1")}</SubStatement>
        </Section>

        <Section>
          <SectionTitle>{t("coc.titleParticipants")}</SectionTitle>

          <Statement>{t("coc.titleParticipantsStatement1")}</Statement>
          <SubStatement>{t("coc.titleParticipantsStatement1Unit1")}</SubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit1Sub1")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit1Sub2")}</SubSubStatement>

          <SubStatement>{t("coc.titleParticipantsStatement1Unit2")}</SubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub1")}</SubSubStatement>
          <Example>{t("coc.titleParticipantsStatement1Unit2Sub1Unit1")}</Example>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub2")}</SubSubStatement>
          <Example>{t("coc.titleParticipantsStatement1Unit2Sub2Unit1")}</Example>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub3")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub4")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub5")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub6")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub7")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub8")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit2Sub9")}</SubSubStatement>

          <SubStatement>{t("coc.titleParticipantsStatement1Unit3")}</SubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit3Sub1")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit3Sub2")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit3Sub3")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit3Sub4")}</SubSubStatement>
          <SubSubStatement>{t("coc.titleParticipantsStatement1Unit3Sub5")}</SubSubStatement>

          <Statement>{t("coc.titleParticipantsStatement2")}</Statement>
          <Description>{t("coc.titleParticipantsStatement2Desc")}</Description>
          <SubStatement>{t("coc.titleParticipantsStatement2Unit1")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement2Unit2")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement2Unit3")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement2Unit4")}</SubStatement>

          <Statement>{t("coc.titleParticipantsStatement3")}</Statement>
          <Description>{t("coc.titleParticipantsStatement3Desc")}</Description>
          <SubStatement>{t("coc.titleParticipantsStatement3Unit1")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement3Unit2")}</SubStatement>

          <Statement>{t("coc.titleParticipantsStatement4")}</Statement>
          <ImportantStatement>{t("coc.titleParticipantsStatement4Important")}</ImportantStatement>
          <Description>{t("coc.titleParticipantsStatement4Desc")}</Description>
          <SubStatement>{t("coc.titleParticipantsStatement4Unit1")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement4Unit2")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement4Unit3")}</SubStatement>
          <SubStatement>{t("coc.titleParticipantsStatement4Unit4")}</SubStatement>
          <Description>{t("coc.titleParticipantsStatement4Desc2")}</Description>
        </Section>
      </ContentWrapper>
    </PageContainer>
  );
};

const ContentWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 4rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.07);
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const Section = styled.section`
  margin-bottom: 4rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Statement = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const ImportantStatement = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 1.5rem 0;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
`;

const SubStatement = styled.p`
  margin-left: 0;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;
  line-height: 1.7;
  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

const SubSubStatement = styled.p`
  margin-left: 1.5rem;
  padding-left: 1.5rem;
  margin-bottom: 0.75rem;
  position: relative;
  line-height: 1.7;
  &::before {
    content: "-";
    position: absolute;
    left: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const Example = styled.p`
  margin-left: 3rem; /* Intentionally kept for deeper nesting */
  font-style: italic;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export default CoC;

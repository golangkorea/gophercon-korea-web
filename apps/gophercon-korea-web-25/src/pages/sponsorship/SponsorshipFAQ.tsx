import { PageContainer, PageTitle } from "@/components/common/PageContainer";
import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine } from "react-icons/ri";

interface FaqItem {
  q: string;
  a: string;
}

const SponsorshipFAQ = () => {
  const { t } = useTranslation(undefined, { keyPrefix: "sponsorship_faq" });
  const faqList = t("faq_list", { returnObjects: true });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.isArray(faqList)
      ? (faqList as FaqItem[]).map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        }))
      : [],
  };

  const answerVariants: Variants = {
    open: { opacity: 1, height: "auto", marginTop: "1.5rem" },
    collapsed: { opacity: 0, height: 0, marginTop: 0 },
  };

  const iconVariants: Variants = {
    open: { rotate: 180 },
    collapsed: { rotate: 0 },
  };

  return (
    <PageContainer>
      <Seo title={t("title")} description={t("description")} />
      <Helmet>
        {faqSchema.mainEntity.length > 0 && <script type='application/ld+json'>{JSON.stringify(faqSchema)}</script>}
      </Helmet>
      <PageTitle>{t("title")}</PageTitle>
      <Description>{t("description")}</Description>

      <FaqContainer>
        {Array.isArray(faqList) &&
          (faqList as FaqItem[]).map((item, index) => (
            <FaqItemWrapper key={index} onClick={() => toggleItem(index)} layout>
              <QuestionRow>
                <QuestionText>{item.q}</QuestionText>
                <IconWrapper
                  animate={openIndex === index ? "open" : "collapsed"}
                  variants={iconVariants}
                  transition={{ duration: 0.3 }}
                >
                  <RiArrowDownSLine size={28} />
                </IconWrapper>
              </QuestionRow>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <Answer
                    variants={answerVariants}
                    initial='collapsed'
                    animate='open'
                    exit='collapsed'
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <AnswerContent>{item.a}</AnswerContent>
                  </Answer>
                )}
              </AnimatePresence>
            </FaqItemWrapper>
          ))}
      </FaqContainer>
    </PageContainer>
  );
};

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: -20px auto 60px;
  line-height: 1.7;
`;

const FaqContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FaqItemWrapper = styled(motion.div)`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem 2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const QuestionRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const QuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
`;

const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Answer = styled(motion.div)`
  overflow: hidden;
`;

const AnswerContent = styled.div`
  padding-top: 1.5rem;
  padding-right: 2rem; /* To avoid overlapping with the icon space */
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: pre-wrap;
`;

export default SponsorshipFAQ;

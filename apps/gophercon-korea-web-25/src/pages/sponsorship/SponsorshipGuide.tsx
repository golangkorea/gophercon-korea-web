import Seo from "@/components/common/Seo";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { PageContainer, PageTitle } from "../../components/common/PageContainer";

interface Tier {
  name: string;
  benefits: { [key: string]: string | boolean };
}

interface Price {
  tier: string;
  price: string;
  requirement: string;
}

const BenefitsTable = ({ tiers, title }: { tiers: Tier[]; title: string }) => {
  const { t } = useTranslation();
  const benefitLabels = t("sponsorship_guide.benefit_labels", { returnObjects: true }) as { [key: string]: string };

  const renderBenefit = (benefit: string | boolean) => {
    if (typeof benefit === "boolean") {
      return benefit ? "✅" : "⬜";
    }
    return benefit;
  };

  return (
    <TableWrapper>
      <SectionTitle>
        {t("sponsorship_guide.benefits_table_title")} #{title}
      </SectionTitle>
      <Table>
        <thead>
          <tr>
            <Th />
            {tiers.map((tier) => (
              <Th key={tier.name}>{tier.name}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(benefitLabels).map((key) => (
            <tr key={key}>
              <Td>{benefitLabels[key]}</Td>
              {tiers.map((tier) => (
                <BenefitCell key={`${tier.name}-${key}`} provided={tier.benefits[key]}>
                  {renderBenefit(tier.benefits[key])}
                </BenefitCell>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

const SponsorshipGuide = () => {
  const { t } = useTranslation();

  const tiers1 = t("sponsorship_guide.tiers1", { returnObjects: true });
  const tiers2 = t("sponsorship_guide.tiers2", { returnObjects: true });
  const priceList = t("sponsorship_guide.price_list", { returnObjects: true });

  return (
    <PageContainer>
      <Seo title={t("sponsorship_guide.title")} description={t("sponsorship_guide.subtitle")} />
      <PageTitle>{t("sponsorship_guide.title")}</PageTitle>
      <Subtitle>{t("sponsorship_guide.subtitle")}</Subtitle>

      <ThankYouCard>
        <h3>{t("sponsorship_guide.thank_you_title")}</h3>
        <p>{t("sponsorship_guide.thank_you_p1")}</p>
        <p>{t("sponsorship_guide.thank_you_p2")}</p>
      </ThankYouCard>

      <SectionTitle>{t("sponsorship_guide.price_table_title")}</SectionTitle>
      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th>{t("sponsorship_guide.price_table_tier")}</Th>
              <Th>{t("sponsorship_guide.price_table_price")}</Th>
              <Th>{t("sponsorship_guide.price_table_requirement")}</Th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(priceList) &&
              (priceList as Price[]).map((item) => (
                <tr key={item.tier}>
                  <Td>{item.tier}</Td>
                  <Td>{item.price}</Td>
                  <Td>{item.requirement}</Td>
                </tr>
              ))}
          </tbody>
        </Table>
      </TableWrapper>
      <VatNotice>{t("sponsorship_guide.price_vat_notice")}</VatNotice>

      {Array.isArray(tiers1) && <BenefitsTable tiers={tiers1 as Tier[]} title='1' />}
      {Array.isArray(tiers2) && <BenefitsTable tiers={tiers2 as Tier[]} title='2' />}

      <CTAButton to='/sponsorship/form'>{t("sponsorship_guide.cta_text")}</CTAButton>
    </PageContainer>
  );
};

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  margin-top: -1.5rem;
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ThankYouCard = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-left: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    line-height: 1.7;
    margin-bottom: 1rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  margin-top: 3rem;
  padding-bottom: 0.5rem;
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 800px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;

  tbody tr:nth-of-type(odd) {
    background-color: #f8f9fa;
  }

  tbody tr:hover {
    background-color: #f1f3f5;
  }
`;

const Th = styled.th`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1.2rem 1rem;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
`;

const Td = styled.td`
  padding: 1.2rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;

  &:first-of-type {
    font-weight: 600;
    background-color: inherit;
    text-align: left;
    position: sticky;
    left: 0;
    z-index: 1;
    border-right: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const BenefitCell = styled(Td)<{ provided: string | boolean }>`
  background-color: ${({ theme, provided }) => {
    if (provided === true) return "rgba(40, 167, 69, 0.1)";
    return "inherit";
  }};
  color: ${({ theme, provided }) => {
    if (provided === true) return "#2b643b";
    if (provided === false) return "#adb5bd";
    return theme.colors.text;
  }};
`;

const VatNotice = styled.p`
  text-align: right;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: -0.5rem;
`;

const CTAButton = styled(Link)`
  display: block;
  width: fit-content;
  margin: 4rem auto 2rem;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export default SponsorshipGuide;

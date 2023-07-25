import Content from "@/components/content";
import Layout from "@/components/layout";
import { SPONSORS } from "@/constants/sponsors";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import SponsorCard from "@/pages/sponsors/_shared/card";
import styled from "@emotion/styled";

const SponsorCards = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: 40,
  paddingBottom: 40,
  gap: "160px 0",
  "@media (max-width: 1000px)": {
    gap: "80px 0",
  },
});

export default function SponsorsPage() {
  return (
    <Layout>
      <Content>
        <h1>당신이 있기에 오늘 GopherCon Korea 2023이 있습니다.</h1>
        <SponsorCards>
          {SPONSORS.map((sponsor) => (
            <SponsorCard {...sponsor} key={sponsor.name} />
          ))}
        </SponsorCards>
      </Content>
    </Layout>
  );
}

export const getServerSideProps = getI18nProps;

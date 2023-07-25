import Layout from "@/components/layout";
import { SPONSORS } from "@/constants/sponsors";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import SponsorCard from "@/pages/sponsors/_shared/card";

export default function SponsorsPage() {
  return (
    <Layout>
      {SPONSORS.map((sponsor) => (
        <SponsorCard {...sponsor} key={sponsor.name} />
      ))}
    </Layout>
  );
}

export const getServerSideProps = getI18nProps;

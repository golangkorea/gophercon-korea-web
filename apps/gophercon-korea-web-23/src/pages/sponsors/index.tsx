import Content from "@/components/content";
import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import { SPONSORS } from "@/constants/sponsors";
import SponsorCard from "@/pages/sponsors/_shared/card";
import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

const SponsorCards = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: 40,
  paddingBottom: 40,
  gap: "80px 0",
  "@media (max-width: 1000px)": {
    gap: "40px 0",
  },
});

export default function SponsorsPage() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation(["common", "nav", "coc"]);
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <h1>{t("common:sponsorTitle")}</h1>
        <SponsorCards>
          {(locale === "ko" ? SPONSORS.ko : SPONSORS.en).map((sponsor) => (
            <SponsorCard {...sponsor} key={sponsor.name} />
          ))}
        </SponsorCards>
      </Content>
    </Layout>
  );
}

import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import About from "@/container/about";
import Location from "@/container/location";
import Session from "@/container/session";
import Sponsors from "@/container/sponsors";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import { NextSeo } from "next-seo";

export const getStaticProps = getI18nProps;

export default function Home() {
  return (
    <Layout main>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Location />
      <About />
      <Session />
      <Sponsors />
    </Layout>
  );
}

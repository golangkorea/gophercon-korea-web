import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import About from "@/container/about";
import Location from "@/container/location";
import Session from "@/container/session";
import Sponsors from "@/container/sponsors";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "program"])),
  },
});

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

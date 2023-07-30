import Accordion from "@/components/accordion";
import Content from "@/components/content";
import Layout from "@/components/layout";
import { QNA } from "@/constants/qna";
import { SEO } from "@/constants/seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav"])),
  },
});

export default function ContactPage() {
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <div className='w-full'>
          {QNA.map((item) => (
            <Accordion key={item.id} title={item.question}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

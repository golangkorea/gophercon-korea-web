import Accordion from "@/components/accordion";
import Content from "@/components/content";
import Layout from "@/components/layout";
import { QNA } from "@/constants/qna";
import { SEO } from "@/constants/seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

export default function ContactPage() {
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <div className='w-full'>
          {(locale === "ko" ? QNA.ko : QNA.en).map((item) => (
            <Accordion key={item.id} title={item.question}>
              {item.answer}
            </Accordion>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

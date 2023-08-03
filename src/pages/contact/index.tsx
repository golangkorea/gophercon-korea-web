import Accordion from "@/components/accordion";
import Content from "@/components/content";
import Layout from "@/components/layout";
import KakaoMap from "@/components/map";
import { QNA } from "@/constants/qna";
import { SEO } from "@/constants/seo";
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

export default function ContactPage() {
  const { t } = useTranslation(["common", "nav", "coc"]);
  const router = useRouter();
  const { locale } = router;
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <div className='flex py-10 max-lg:flex-col'>
          <KakaoMap />
          <div className='flex flex-col justify-center px-10'>
            <p className='mt-0 text-xl'>{`${t("common:subway")}`}</p>
            <p className='mt-2 text-gray-900'>{`${t("common:subwayDescription")}`}</p>
            <p className='text-xl'>{`${t("common:bus")}`}</p>
            <p className='mt-2 text-gray-900'>{`${t("common:busDescription")}`}</p>
            <p className='text-xl'>{`${t("common:lostAndFound")}`}</p>
            <p className='mt-2 text-gray-900'>
              <a className='text-[#0029FF] underline' href='https://gophercon.notion.site' target='_blank'>
                https://gophercon.notion.site
              </a>
            </p>
            <p className='text-xl'>{`${t("common:etc")}`}</p>
            <p className='mt-2 text-gray-900'>
              {`${t("common:email")}`}
              <a className='ml-2 text-[#0029FF] underline' href='mailto:gophercon.kor@gmail.com' target='_blank'>
                gophercon.kor@gmail.com
              </a>
            </p>
            <p className='mt-2 text-gray-900'>
              {`${t("common:kakaoPlus")}`}
              <a className='ml-2 text-[#0029FF] underline' href='https://pf.kakao.com/_wnrqG' target='_blank'>
                https://pf.kakao.com/_wnrqG
              </a>
            </p>
          </div>
        </div>
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

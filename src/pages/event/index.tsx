import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

export default function Event() {
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <div className='flex flex-col justify-center gap-5 px-10 max-sm:px-5'>
        <h2 className='mt-0'>GopherCon Korea 2023 이벤트 당첨 안내</h2>
        <div className='flex flex-col gap-5'>
          <h3 className='border-none'>🎉GopherCon Korea 2023 이벤트 당첨을 축하드립니다.🎉</h3>
          <b className='whitespace-pre-line'>{`당첨자 분들께 개별적으로 배송받을 주소를 입력하실 링크를 전송해드렸습니다.\n제출해주신 개인정보(이름, 휴대폰번호, 우편번호, 주소)는 GopherCon Korea 2023 이벤트 당첨자 배송에 활용되며, 발송 완료 시점에 폐기됩니다.`}</b>
          {/*<a href={"https://forms.gle/qkNG8YaoMkm495LS6"} target={"_blank"} className='text-blue-600 underline'>*/}
          {/*  https://forms.gle/qkNG8YaoMkm495LS6*/}
          {/*</a>*/}
        </div>
        <img src={"/images/event1.png"} alt='event1' />
        <img src={"/images/event2.png"} alt='event2' />
        <img src={"/images/event3.png"} alt='event3' />
      </div>
    </Layout>
  );
}

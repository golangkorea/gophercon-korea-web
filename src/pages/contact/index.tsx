import Accordion from "@/components/accordion";
import Content from "@/components/content";
import Layout from "@/components/layout";
import KakaoMap from "@/components/map";
import { ORGANIZATION } from "@/constants/members";
import { QNA } from "@/constants/qna";
import { SEO } from "@/constants/seo";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import Image from "next/image";
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
              <a
                className='text-[#0029FF] underline'
                href='https://golang-kr.notion.site/Lost-Found-Zone-25caffe464ef4253bdc23e39a047c1a9?pvs=4'
                target='_blank'
              >
                https://golang-kr.notion.site
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
        <div className='mt-20'>
          <p className='mb-10 text-3xl font-bold'>Special Thanks To</p>
          {ORGANIZATION.map((department) => (
            <div key={department.name} className='mb-20'>
              <p className='mb-10 text-2xl font-semibold text-gray-800'>{department.name}</p>
              <div className='flex flex-wrap gap-20'>
                {department.members.map((member) => (
                  <div key={`${member.en_name}-${department.name}`} className='flex w-[400px] flex-col items-center'>
                    <div className='inline-block rounded-full border-8 border-blue-500 p-5'>
                      <Image
                        src={`/profiles/${member.profile_image}`}
                        alt={member.en_name}
                        width={200}
                        height={200}
                        className='h-[200px] w-[200px] rounded-full object-contain'
                      />
                    </div>
                    <div className='flex w-full flex-col'>
                      <div className='flex flex-col'>
                        <p className='text-3xl font-bold tracking-widest'>{member.ko_name}</p>
                        <p className='mt-2 text-lg font-semibold tracking-widest'>{member.en_name}</p>
                        <p
                          className={`mt-5 ${
                            locale === "ko" ? "lg:min-h-[216px]" : "lg:min-h-[297px]"
                          } flex-1 whitespace-pre-line font-light`}
                        >
                          {locale === "ko" ? member.ko_bio : member.en_bio}
                        </p>
                      </div>
                    </div>
                    <div className='mt-10 flex h-14 w-full items-center gap-5 bg-blue-500 px-5'>
                      {member?.github && (
                        <Image
                          src={"/images/github.png"}
                          alt='github'
                          width={32}
                          height={32}
                          className='h-7 w-7 cursor-pointer'
                          onClick={() => {
                            window.open(member.github, "_blank");
                          }}
                        />
                      )}
                      {member?.linkedin && (
                        <Image
                          src={"/images/linkedin.png"}
                          alt='linkedin'
                          width={32}
                          height={32}
                          className='h-7 w-7 cursor-pointer'
                          onClick={() => {
                            window.open(member.linkedin, "_blank");
                          }}
                        />
                      )}
                      {member?.instagram && (
                        <Image
                          src={"/images/instagram.png"}
                          alt='instagram'
                          width={32}
                          height={32}
                          className='h-7 w-7 cursor-pointer'
                          onClick={() => {
                            window.open(member.instagram, "_blank");
                          }}
                        />
                      )}
                      {member?.website && (
                        <Image
                          src={"/images/home.png"}
                          alt='website'
                          width={32}
                          height={32}
                          className='h-7 w-7 cursor-pointer'
                          onClick={() => {
                            window.open(member.website, "_blank");
                          }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

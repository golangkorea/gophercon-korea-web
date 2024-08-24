import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import Content from "../../components/content";
import Layout from "../../components/layout";
import { SEO } from "../../constants/seo";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

const COCSection = styled.section({
  marginBottom: 80,
});

export default function COCPage() {
  const { t } = useTranslation(["common", "nav", "coc"]);
  return (
    <Layout>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      <Content>
        <div className='max-sm:p-4'>
          <h1>{t("coc:title")}</h1>
          <h2>{t("coc:titleCore")}</h2>
          <COCSection>
            {t("coc:titleCoreDesc")}
            <br />
            <br />
            {t("coc:titleCoreDesc2")}
          </COCSection>
          <COCSection>
            <h3>{t("coc:titleCoreStatement1")}</h3>
            <ul>
              <li>{t("coc:titleCoreStatement1Unit1")}</li>
              <li>{t("coc:titleCoreStatement1Unit2")}</li>
              <li>{t("coc:titleCoreStatement1Unit3")}</li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>{t("coc:titleCoreStatement2")}</h3>
            <ul>
              <li>{t("coc:titleCoreStatement2Unit1")}</li>
            </ul>
          </COCSection>
          <h2>{t("coc:titleParticipants")}</h2>
          <COCSection>
            <h3>{t("coc:titleParticipantsStatement1")}</h3>
            <ol>
              <li>
                <b>{t("coc:titleParticipantsStatement1Unit1")}</b>
                <br />
                <ol>
                  <li>{t("coc:titleParticipantsStatement1Unit1Sub1")}</li>
                  <li>{t("coc:titleParticipantsStatement1Unit1Sub2")}</li>
                </ol>
              </li>
              <li>
                <b>{t("coc:titleParticipantsStatement1Unit2")}</b>
                <br />
                <ol>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit2Sub1")}</span>
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit2Sub1Unit1")}</li>
                    </ul>
                  </li>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit2Sub2")}</span>
                    <br />
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit2Sub2Unit1")}</li>
                    </ul>
                  </li>
                  <li>{t("coc:titleParticipantsStatement1Unit2Sub3")}</li>
                  <li>{t("coc:titleParticipantsStatement1Unit2Sub4")}</li>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit2Sub5")}</span>
                    <br />
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit2Sub5Unit1")}</li>
                    </ul>
                  </li>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit2Sub6")}</span>
                    <br />
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit2Sub6Unit1")}</li>
                      <li>{t("coc:titleParticipantsStatement1Unit2Sub6Unit2")}</li>
                    </ul>
                  </li>
                  <li>{t("coc:titleParticipantsStatement1Unit2Sub7")}</li>
                  <li>{t("coc:titleParticipantsStatement1Unit2Sub8")}</li>
                  <li>{t("coc:titleParticipantsStatement1Unit2Sub9")}</li>
                </ol>
              </li>
              <li>
                <b>{t("coc:titleParticipantsStatement1Unit3")}</b>
                <br />
                <ol>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit3Sub1")}</span>
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit3Sub1Unit1")}</li>
                      <li>{t("coc:titleParticipantsStatement1Unit3Sub1Unit2")}</li>
                    </ul>
                  </li>
                  <li>{t("coc:titleParticipantsStatement1Unit3Sub2")}</li>
                  <li>{t("coc:titleParticipantsStatement1Unit3Sub3")}</li>
                  <li>
                    <span>{t("coc:titleParticipantsStatement1Unit3Sub4")}</span>
                    <br />
                    <ul>
                      <li>{t("coc:titleParticipantsStatement1Unit3Sub4Unit1")}</li>
                      <li>{t("coc:titleParticipantsStatement1Unit3Sub4Unit2")}</li>
                      <li>{t("coc:titleParticipantsStatement1Unit3Sub4Unit3")}</li>
                    </ul>
                  </li>
                  <li>{t("coc:titleParticipantsStatement1Unit3Sub5")}</li>
                </ol>
              </li>
            </ol>
          </COCSection>
          <COCSection>
            <h3>{t("coc:titleParticipantsStatement2")}</h3>
            <p>{t("coc:titleParticipantsStatement2Desc")}</p>
            <ul>
              <li>
                <b>
                  <u>{t("coc:titleParticipantsStatement2Unit1")}</u>
                </b>
              </li>
              <li>{t("coc:titleParticipantsStatement2Unit2")}</li>
              <li>{t("coc:titleParticipantsStatement2Unit3")}</li>
              <li>{t("coc:titleParticipantsStatement2Unit4")}</li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>{t("coc:titleParticipantsStatement3")}</h3>
            <p>{t("coc:titleParticipantsStatement3Desc")}</p>
            <ul>
              <li>{t("coc:titleParticipantsStatement3Unit1")}</li>
              <li>{t("coc:titleParticipantsStatement3Unit2")}</li>
            </ul>
          </COCSection>
          <COCSection>
            <h3>{t("coc:titleParticipantsStatement4")}</h3>
            <b>
              <u>{t("coc:titleParticipantsStatement4Important")}</u>
            </b>
            <p>{t("coc:titleParticipantsStatement4Desc")}</p>
            <ul>
              <li>{t("coc:titleParticipantsStatement4Unit1")}</li>
              <li>{t("coc:titleParticipantsStatement4Unit2")}</li>
              <li>{t("coc:titleParticipantsStatement4Unit3")}</li>
              <li>{t("coc:titleParticipantsStatement4Unit4")}</li>
            </ul>
            {t("coc:titleParticipantsStatement4Desc2")}
          </COCSection>
        </div>
      </Content>
    </Layout>
  );
}

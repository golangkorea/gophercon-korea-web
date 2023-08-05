import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import About from "@/container/about";
import Live from "@/container/live";
import Location from "@/container/location";
import Session from "@/container/session";
import Sponsors from "@/container/sponsors";
import dayjs from "dayjs";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";
import React from "react";

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

const DAY1 = dayjs("2023-08-05 10:00", "YYYY-MM-DD HH:mm");
const DAY2 = dayjs("2023-08-06 10:00", "YYYY-MM-DD HH:mm");
export default function Home() {
  const isLive = React.useMemo(() => {
    const now = dayjs();
    // DAY1 시작 1시간 전 이상 남았을 때
    if (now.isBefore(DAY1.subtract(1, "hour"))) {
      return false;
    }
    // DAY1 1시간 전부터
    if (now.isBefore(DAY2) && now.isAfter(DAY1.subtract(1, "hour"))) {
      return true;
    }
    // DAY1 종료 후 && DAY2 시작 전
    if (now.isAfter(dayjs("2023-08-05 18:00", "YYYY-MM-DD HH:mm")) && now.isBefore(DAY2)) {
      return false;
    }
    // DAY2 1시간 전부터
    if (now.isBefore(DAY2.subtract(1, "hour"))) {
      return true;
    }
    // DAY2 종료 후
    if (now.isAfter(dayjs("2023-08-06 18:00", "YYYY-MM-DD HH:mm")) && now.isBefore(DAY2)) {
      return false;
    }
  }, []);
  return (
    <Layout main>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      {isLive && <Live />}
      <Location />
      <About />
      <Session />
      <Sponsors />
    </Layout>
  );
}

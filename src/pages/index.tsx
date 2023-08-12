import Layout from "@/components/layout";
import { SEO } from "@/constants/seo";
import About from "@/container/about";
import Location from "@/container/location";
import Session from "@/container/session";
import Sponsors from "@/container/sponsors";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NextSeo } from "next-seo";

const animationGradient = keyframes({
  from: {
    backgroundPosition: "0 50%",
  },
  to: {
    backgroundPosition: "100% 50%",
  },
});

const EventButton = styled.a({
  backgroundImage: "linear-gradient(-45deg, #BD00FF, #0066FF, #00FFB2)",
  backgroundSize: "600%",
  padding: "6px 12px",
  fontWeight: 600,
  color: "white",
  animation: animationGradient,
  animationDuration: "3s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
  borderRadius: 14,
  border: "none",
  "&:hover": {
    color: "white",
  },
});

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "", ["common", "nav", "coc"])),
  },
});

export default function Home() {
  return (
    <Layout main>
      <EventButton className='fixed right-10 top-20 z-50 text-xl' href={"/event"}>
        이벤트 당첨자 확인
      </EventButton>
      <NextSeo title={SEO.title} description={SEO.description} openGraph={SEO.openGraph} />
      {/*<Live />*/}
      <Location />
      <About />
      <Session />
      <Sponsors />
    </Layout>
  );
}

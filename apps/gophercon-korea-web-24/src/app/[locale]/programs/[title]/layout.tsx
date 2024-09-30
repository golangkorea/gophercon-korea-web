import { ReactNode } from "react";
import timetableList from "../data";
import { Metadata } from "next";

type Props = {
  params: { title: string };
};

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = params.title.replaceAll("-", " ");
  return {
    title,
  };
}

export async function generateStaticParams() {
  const speaker_list = timetableList.filter((el) => !el.isSponsor && el.speaker);

  const speaker_title_list = speaker_list.map(({ title }) => ({
    title: title.en.replaceAll(" ", "-"),
  }));

  return speaker_title_list;
}

export default async function TimetableLayout({
  params,
  children,
}: {
  params: {
    title: string;
  };
  children: ReactNode;
}) {
  return (
    <>
      <section>{children}</section>
    </>
  );
}

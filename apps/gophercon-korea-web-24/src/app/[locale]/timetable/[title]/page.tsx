"use client";

import timetableList from "../data";

export default function TechTalkDetail({ params }: { params: { title: string } }) {
  const data = timetableList.find((el) => el.title.en.replaceAll(" ", "-") === params.title);
  console.log(data);
  return <></>;
}

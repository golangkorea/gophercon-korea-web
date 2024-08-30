"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import { GlobalContext } from "@/components/ThemeProvider";
import styled from "@emotion/styled";
import { useContext } from "react";

// TODO: SSR 적용 필요
// export const metadata = {
//   title: "CoC",
//   openGraph: {
//     title: "Gophercon Korea 2024 CoC",
//   },
// };

const COCSection = styled.section({
  marginBottom: 80,
});

export default function CoC() {
  const dict = useContext(GlobalContext) as any;
  return (
    <>
      <Header />
      <Content>
        <h1>{dict["CoC"]["title"]}</h1>
        <h2>{dict["CoC"]["titleCore"]}</h2>
        <COCSection>
          {dict["CoC"]["titleCoreDesc"]}
          <br />
          <br />
          {dict["CoC"]["titleCoreDesc2"]}
        </COCSection>
        <COCSection>
          <h3>{dict["CoC"]["titleCoreStatement1"]}</h3>
          <ul>
            <li>{dict["CoC"]["titleCoreStatement1Unit1"]}</li>
            <li>{dict["CoC"]["titleCoreStatement1Unit2"]}</li>
            <li>{dict["CoC"]["titleCoreStatement1Unit3"]}</li>
          </ul>
        </COCSection>
        <COCSection>
          <h3>{dict["CoC"]["titleCoreStatement2"]}</h3>
          <ul>
            <li>{dict["CoC"]["titleCoreStatement2Unit1"]}</li>
          </ul>
        </COCSection>
        <h2>{dict["CoC"]["titleParticipants"]}</h2>
        <COCSection>
          <h3>{dict["CoC"]["titleParticipantsStatement1"]}</h3>
          <ol>
            <li>
              <b>{dict["CoC"]["titleParticipantsStatement1Unit1"]}</b>
              <br />
              <ol>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit1Sub1"]}</li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit1Sub2"]}</li>
              </ol>
            </li>
            <li>
              <b>{dict["CoC"]["titleParticipantsStatement1Unit2"]}</b>
              <br />
              <ol>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit2Sub1"]}</span>
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub1Unit1"]}</li>
                  </ul>
                </li>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit2Sub2"]}</span>
                  <br />
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub2Unit1"]}</li>
                  </ul>
                </li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub3"]}</li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub4"]}</li>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit2Sub5"]}</span>
                  <br />
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub5Unit1"]}</li>
                  </ul>
                </li>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit2Sub6"]}</span>
                  <br />
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub6Unit1"]}</li>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub6Unit2"]}</li>
                  </ul>
                </li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub7"]}</li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub8"]}</li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit2Sub9"]}</li>
              </ol>
            </li>
            <li>
              <b>{dict["CoC"]["titleParticipantsStatement1Unit3"]}</b>
              <br />
              <ol>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit3Sub1"]}</span>
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub1Unit1"]}</li>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub1Unit2"]}</li>
                  </ul>
                </li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub2"]}</li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub3"]}</li>
                <li>
                  <span>{dict["CoC"]["titleParticipantsStatement1Unit3Sub4"]}</span>
                  <br />
                  <ul>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub4Unit1"]}</li>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub4Unit2"]}</li>
                    <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub4Unit3"]}</li>
                  </ul>
                </li>
                <li>{dict["CoC"]["titleParticipantsStatement1Unit3Sub5"]}</li>
              </ol>
            </li>
          </ol>
        </COCSection>
        <COCSection>
          <h3>{dict["CoC"]["titleParticipantsStatement2"]}</h3>
          <p>{dict["CoC"]["titleParticipantsStatement2Desc"]}</p>
          <ul>
            <li>
              <b>
                <u>{dict["CoC"]["titleParticipantsStatement2Unit1"]}</u>
              </b>
            </li>
            <li>{dict["CoC"]["titleParticipantsStatement2Unit2"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement2Unit3"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement2Unit4"]}</li>
          </ul>
        </COCSection>
        <COCSection>
          <h3>{dict["CoC"]["titleParticipantsStatement3"]}</h3>
          <p>{dict["CoC"]["titleParticipantsStatement3Desc"]}</p>
          <ul>
            <li>{dict["CoC"]["titleParticipantsStatement3Unit1"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement3Unit2"]}</li>
          </ul>
        </COCSection>
        <COCSection>
          <h3>{dict["CoC"]["titleParticipantsStatement4"]}</h3>
          <b>
            <u>{dict["CoC"]["titleParticipantsStatement4Important"]}</u>
          </b>
          <p>{dict["CoC"]["titleParticipantsStatement4Desc"]}</p>
          <ul>
            <li>{dict["CoC"]["titleParticipantsStatement4Unit1"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement4Unit2"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement4Unit3"]}</li>
            <li>{dict["CoC"]["titleParticipantsStatement4Unit4"]}</li>
          </ul>
          {dict["CoC"]["titleParticipantsStatement4Desc2"]}
        </COCSection>
      </Content>
    </>
  );
}

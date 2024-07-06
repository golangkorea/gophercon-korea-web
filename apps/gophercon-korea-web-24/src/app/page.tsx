"use client";

import { Text } from "gophercon-common";

export default function Home() {
  return (
    <main>
      <Text
        as='h1'
        cursor='pointer'
        onClick={() => {
          console.log("?");
        }}
      >
        고퍼콘 행사다아아~~
      </Text>
      <p
        onClick={() => {
          console.log("?");
        }}
      >
        안녕
      </p>
    </main>
  );
}

import React from "react";

import { pretendard } from "@/app/fonts";
import defaultMetadata from "@/app/metadata";
import { GlobalStyle } from "gophercon-common";
import EmotionStyleRegistry from "gophercon-common/src/style/registry";
import { Metadata } from "next";

export const metadata: Metadata = defaultMetadata;

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={"en"} className={pretendard.className}>
      <body>
        <EmotionStyleRegistry>
          <GlobalStyle />
          {children}
        </EmotionStyleRegistry>
      </body>
    </html>
  );
}

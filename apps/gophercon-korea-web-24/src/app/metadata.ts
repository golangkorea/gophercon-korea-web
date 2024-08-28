import { Metadata } from "next";

import ogImage from "../assets/ogImage.png";
import favicon from "../assets/favicon.ico";

const domain = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://gophercon.kr/";
const festivalTitle = "GopherCon Korea 2024";
const festivalDesc = "Go 언어 사용자들의 국내 최대 규모 연례 행사, GopherCon Korea 2024";

const defaultMetadata: Metadata = {
  generator: "Golang Korea",
  applicationName: festivalTitle,
  title: {
    default: festivalTitle,
    template: `${festivalTitle} | %s`,
  },
  description: festivalDesc,
  metadataBase: new URL(domain),
  alternates: {
    canonical: domain,
    languages: {
      ko: "/ko",
      en: "/en",
    },
  },
  keywords: ["고퍼콘", "GopherCon", "golang", "golang Korea"],
  referrer: "origin-when-cross-origin",
  icons: {
    icon: favicon.src,
  },
  openGraph: {
    url: domain,
    type: "website",
    title: festivalTitle,
    description: festivalDesc,
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
        alt: "Gopheron Korea 2024 Cover Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: festivalTitle,
    description: festivalDesc,
    // siteId: "TBD",
    // creator: "TBD",
    // creatorId: "TBD",
    images: ogImage.src,
  },
};

export default defaultMetadata;

import "@/styles/globals.css";
import localFont from "@next/font/local";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

const pretendard = localFont({
  src: [
    {
      path: "../assets/fonts/Pretendard-Thin.woff2",
      weight: "100",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/Pretendard-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/Pretendard-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../assets/fonts/Pretendard-Black.woff2",
      weight: "900",
    },
  ],
});

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  if (!pageProps.i18n) {
    // Something wrong...!
    return <Component {...pageProps} />;
  }

  console.log("a", pretendard.className);

  return (
    <main className={pretendard.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default appWithTranslation(App);

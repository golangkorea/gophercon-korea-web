import localFont from "next/font/local";

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

const jakartaSans = localFont({
  src: [
    {
      path: "../assets/fonts/PlusJakartaSans-ExtraLight.woff2",
      weight: "200",
    },
    {
      path: "../assets/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Regular.woff2",
      weight: "400",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Medium.woff2",
      weight: "500",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-Bold.woff2",
      weight: "700",
    },
    {
      path: "../assets/fonts/PlusJakartaSans-ExtraBold.woff2",
      weight: "800",
    },
  ],
});

const jakartaSans_fontFamily = jakartaSans.style.fontFamily;
const pretendard_fontFamily = pretendard.style.fontFamily;

export { jakartaSans, jakartaSans_fontFamily, pretendard, pretendard_fontFamily };

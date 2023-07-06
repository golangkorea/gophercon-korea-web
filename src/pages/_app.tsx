import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={plusJakartaSans.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

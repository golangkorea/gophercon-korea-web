import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const noOverlayWorkaroundScript = `
  window.addEventListener('error', event => {
    event.stopImmediatePropagation()
  })

  window.addEventListener('unhandledrejection', event => {
    event.stopImmediatePropagation()
  })`;

export default function Document() {
  return (
    <Html lang='ko'>
      <Head>
        <title>GopherCon Korea 2023</title>
        <meta property='og:title' content='GopherCon Korea 2023' key='title' />
        <meta
          name='description'
          content='국내에서 진행되는 최초의 거대 행사, 2023년 08월 05일 부터 06일, 서울특별시 광진구 능동로 209, 세종대학교 대양 AI 센터 (12층)에서 만나요!'
        />
        <meta name='keywords' content='Golang, Gopher, 고퍼콘, 고퍼콘코리아' />
        <meta charSet='utf-8'></meta>
        <meta name='naver-site-verification' content='800ac9769224e7e4ed567fdabd7ff9708a748536' />
        {process.env.NODE_ENV !== "production" && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-T8BMXV9ZPX' />
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T8BMXV9ZPX');
          `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

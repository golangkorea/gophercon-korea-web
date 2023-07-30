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
  const domain = "https://gophercon.kr";
  const title = "GopherCon Korea 2023";
  const description =
    "국내에서 진행되는 최초의 거대 행사, 2023년 08월 05일 부터 06일, 서울특별시 광진구 능동로 209, 세종대학교 대양 AI 센터 (12층)에서 만나요!";

  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
        <title>{title}</title>

        <meta name='author' content='Golang Korea' />

        <meta name='robots' content='index,follow' />
        <meta property='og:type' content='website' />

        <meta property='og:site_name' content={title} />
        <meta property='twitter:domain' content={domain} />
        <meta name='twitter:title' content={title} />
        <meta property='og:title' content='GopherCon Korea 2023' key='title' />
        <meta name='og:description' content={description} />
        <meta name='description' content={description} />
        <meta name='twitter:description' content={description} />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={"/public/ogImage.png"} />
        <meta property='og:image' content={"/public/ogImage.png"} />

        <meta name='twitter:card' content='summary' />

        <meta name='keywords' content='Golang, Gopher, 고퍼콘, 고퍼콘코리아' />
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

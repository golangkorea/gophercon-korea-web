import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import GlobalStyle from "../styles/GlobalStyle";

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
  const description = "국내에서 진행되는 Go 언어 사용자를 위한 최초의 거대 행사 GopherCon Korea 2023";

  return (
    <Html lang='ko'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='author' content='Golang Korea' />

        <meta name='robots' content='index, follow' />
        <meta property='og:type' content='website' />

        <meta property='og:site_name' content={title} />
        <meta property='twitter:domain' content={domain} />
        <meta name='twitter:title' content={title} />
        <meta property='og:title' content='GopherCon Korea 2023' key='title' />
        <meta name='og:description' content={description} />
        <meta name='description' content={description} />
        <meta name='twitter:description' content={description} />

        <meta name='twitter:card' content='summary_large_image' />
        {/*<meta name='twitter:image' content={"/ogImage.png"} />*/}
        {/*<meta property='og:image' content={"/ogImage.png"} />*/}

        <meta name='twitter:card' content='summary' />

        <meta name='keywords' content='Golang, Gopher, GopherCon Korea, 고퍼콘, 고퍼콘 코리아' />
        <meta name='naver-site-verification' content='800ac9769224e7e4ed567fdabd7ff9708a748536' />
        <meta name='theme-color' content='#000000' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='favicon.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='%PUBLIC_URL%/manifest.json' />
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
      <GlobalStyle />
      <body>
        <Script strategy='beforeInteractive' type='text/javascript' src='/scripts/three.min.js' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

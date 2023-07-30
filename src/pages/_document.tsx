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
        <meta name='naver-site-verification' content='800ac9769224e7e4ed567fdabd7ff9708a748536' />
        {process.env.NODE_ENV !== "production" && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}
        <Script async src='https://www.googletagmanager.com/gtag/js?id=G-T8BMXV9ZPX' />
        <Script>
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

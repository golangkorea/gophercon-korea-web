import { Head, Html, Main, NextScript } from "next/document";

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
        {process.env.NODE_ENV !== "production" && (
          <script dangerouslySetInnerHTML={{ __html: noOverlayWorkaroundScript }} />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

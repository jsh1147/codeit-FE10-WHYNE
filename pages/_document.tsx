import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/meta/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="🍷WINE" />
        <meta
          property="og:description"
          content="한 곳에서 관리하는 나만의 와인창고"
        />
        <meta property="og:image" content="/meta/opengraph.png" />
        <meta property="og:url" content="https://codeit-fe10-wine.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

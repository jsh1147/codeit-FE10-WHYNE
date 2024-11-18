import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';
import GlobalStyle from '@/styles/GlobalStyles';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 700',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Component className={pretendard.className} {...pageProps} />
    </>
  );
}

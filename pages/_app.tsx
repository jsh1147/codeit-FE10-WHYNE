import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';
import GlobalStyle from '@/styles/GlobalStyles';
import Layout from '@/components/layout/Layout';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 700',
});

type MyAppProps = AppProps & {
  Component: { noLayout?: boolean };
};

export default function App({ Component, pageProps }: MyAppProps) {
  const LayoutComponent = Component.noLayout ? Fragment : Layout;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <LayoutComponent>
        <Component className={pretendard.className} {...pageProps} />
      </LayoutComponent>
    </>
  );
}

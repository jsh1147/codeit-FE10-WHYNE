import { Fragment, ReactNode } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import localFont from 'next/font/local';
import { UserProvider } from '@/store/UserContext';
import Layout from '@/components/layout/Layout';
import GlobalStyle from '@/styles/GlobalStyles';

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '400 700',
});

function ProviderComponent({ children }: { children: ReactNode }) {
  return <UserProvider>{children}</UserProvider>;
}

type MyAppProps = AppProps & {
  Component: { noLayout?: boolean };
};

export default function App({ Component, pageProps }: MyAppProps) {
  const LayoutComponent = Component.noLayout ? Fragment : Layout;

  return (
    <>
      <Head>
        <title>WINE</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <ProviderComponent>
        <LayoutComponent>
          <Component className={pretendard.className} {...pageProps} />
        </LayoutComponent>
      </ProviderComponent>
    </>
  );
}

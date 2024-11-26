import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@/store/UserContext';
import BannerSection from '@/components/landing/BannerSection';
import CardsSection from '@/components/landing/CardsSection';
import * as S from '@/styles/landing.css';

export default function Landing() {
  const { push, replace } = useRouter();
  const { isLoading, user } = useUser();

  const handleButtonClick = () => {
    push('/wines');
  };

  useEffect(() => {
    if (user) replace('/wines');
  }, [user, replace]);

  return (
    <>
      <Head>
        <title>WINE</title>
        <meta name="description" content="한 곳에서 관리하는 나만의 와인창고" />
      </Head>
      {!isLoading && !user && (
        <S.Main>
          <BannerSection />
          <CardsSection />
          <S.MoveButton onClick={handleButtonClick}>와인 보러가기</S.MoveButton>
        </S.Main>
      )}
    </>
  );
}

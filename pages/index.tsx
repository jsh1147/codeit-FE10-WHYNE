import Head from 'next/head';
import { useRouter } from 'next/router';
import BannerSection from '@/components/landing/BannerSection';
import CardsSection from '@/components/landing/CardsSection';
import * as S from '@/styles/landing.css';

export default function Landing() {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/wines');
  };

  return (
    <>
      <Head>
        <title>WINE</title>
        <meta name="description" content="한 곳에서 관리하는 나만의 와인창고" />
      </Head>
      <S.Main>
        <S.HiddenH1>WINE 랜딩 페이지</S.HiddenH1>
        <BannerSection />
        <CardsSection />
        <S.MoveButton onClick={handleButtonClick}>와인 보러가기</S.MoveButton>
      </S.Main>
    </>
  );
}

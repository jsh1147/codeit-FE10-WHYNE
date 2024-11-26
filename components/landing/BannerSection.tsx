import { useRouter } from 'next/router';
import cards from '@/public/images/cards.png';
import * as S from './BannerSection.css';

export default function BannerSection() {
  const { push } = useRouter();

  const handleButtonClick = () => {
    push('/wines');
  };

  return (
    <S.Section>
      <S.Logo aria-label="WINE 로고" />
      <S.Description>
        한 곳에서 관리하는
        <br />
        나만의 와인창고
      </S.Description>
      <S.MoveButton onClick={handleButtonClick}>와인 보러가기</S.MoveButton>
      <S.CardsImage src={cards} alt="" />
    </S.Section>
  );
}

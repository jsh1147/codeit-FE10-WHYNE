import logo from '@/public/icons/logo_color.svg';
import cards from '@/public/images/cards.png';
import * as S from './BannerSection.css';

export default function BannerSection() {
  return (
    <S.Section>
      <S.Logo src={logo} alt="WINE 로고" />
      <S.Description>
        한 곳에서 관리하는
        <br />
        나만의 와인창고
      </S.Description>
      <S.CardsImage src={cards} alt="" />
    </S.Section>
  );
}

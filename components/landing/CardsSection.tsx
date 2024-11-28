import recommendImage from '@/public/images/card_recommend.png';
import wineImage from '@/public/images/card_wine.png';
import filterImage from '@/public/images/card_filter.png';
import reviewImage from '@/public/images/card_review.png';
import * as S from './CardsSection.css';

export default function CardsSection() {
  return (
    <S.Section>
      <S.Card $rightGradient>
        <S.TextBox>
          <S.CardTitle>
            매달 새롭게 만나는
            <br />
            와인 추천 콘텐츠
          </S.CardTitle>
          <S.CardDescription>
            매달 다양한 인기 와인을 만나보세요.
          </S.CardDescription>
        </S.TextBox>
        <S.RecommendImage src={recommendImage} alt="이달의 추천 와인 이미지" />
      </S.Card>
      <S.Card>
        <S.TextBox>
          <S.CardTitle>
            다양한 필터로 찾는
            <br />내 맞춤 와인
          </S.CardTitle>
          <S.CardDescription>
            와인 타입, 가격, 평점으로
            <br />
            나에게 맞는 와인을 쉽게 검색해요.
          </S.CardDescription>
        </S.TextBox>
        <S.WindImage src={wineImage} alt="와인 이미지" />
        <S.FilterImage src={filterImage} alt="필터 이미지" />
      </S.Card>
      <S.Card>
        <S.TextBox>
          <S.CardTitle>
            직관적인
            <br />
            리뷰 시스템
          </S.CardTitle>
          <S.CardDescription>
            더 구체화된 리뷰 시스템으로
            <br />
            쉽고 빠르게 와인 리뷰를 살펴보세요.
          </S.CardDescription>
        </S.TextBox>
        <S.ReviewImage src={reviewImage} alt="리뷰 이미지" />
      </S.Card>
    </S.Section>
  );
}

import Image from 'next/image';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { fetchRecommendedWines } from '@/apis/wineListApi';
import { RecommendWines } from '@/types/wineListTypes';
import { useEffect, useState } from 'react';
import * as S from './MonthlyWineSection.css';
import { NextArrowBtn, PrevArrowBtn } from './SliderArrowButtons';
import { useRouter } from 'next/router';
import CustomRating from '../common/CustomRating';

export default function MonthlyWineSection() {
  const [recommendedList, setRecommendedList] = useState<RecommendWines[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow: <NextArrowBtn />, // 화살표 버튼을 커스텀해서 사용
    prevArrow: currentIndex > 0 ? <PrevArrowBtn /> : undefined, // 인덱스가 0보다 클 때만 prev 버튼 렌더링
    beforeChange: (oldIndex: number, newIndex: number) =>
      setCurrentIndex(newIndex), // 인덱스 업데이트
  };

  useEffect(() => {
    const getRecommendedWines = async () => {
      try {
        const wines: RecommendWines[] = await fetchRecommendedWines(10); // limit 값을 전달
        //TODO: 테스트를 위한 코드, 수정 필요 --> 아래코드로 fast reload 경고 발생했었다.
        // setRecommendedList([...wines, ...wines, ...wines]);
        setRecommendedList(wines || []);
      } catch (error) {
        console.error('추천와인 불러오기 에러:', error);
      }
    };

    getRecommendedWines();
  }, []);

  const handleWineClick = (wineId: number) => {
    router.push({
      pathname: `wines/${wineId}`,
    });
  };

  return (
    <section className="container">
      <S.MonthlyWineContainer>
        <S.WinesPageSectionTitle>이번 달 추천 와인</S.WinesPageSectionTitle>
        <S.MonthlyWineCardContainer>
          <S.StyledSlider {...settings}>
            {recommendedList.map((item, idx) => (
              <S.MonthlyWineCard
                onClick={() => handleWineClick(item.id)}
                key={idx}
              >
                <S.MonthlyWineCardContent>
                  <S.CardThumbnail>
                    <S.ImageWrapper>
                      <Image
                        priority
                        src={item.image}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt="와인이미지"
                        sizes="(min-width: 1200px) 50vw, 25vw"
                      />
                    </S.ImageWrapper>
                  </S.CardThumbnail>
                  <S.MonthlyWineCardInfo>
                    {/* NOTE: 정수일 때, 소수점 처리 */}
                    <p>{item.avgRating.toFixed(1)}</p>
                    <CustomRating
                      defaultValue={item.avgRating}
                      size="small"
                      readOnly
                    />

                    <S.MonthlyWineCardInfoText>
                      <span>{item.name}</span>
                    </S.MonthlyWineCardInfoText>
                  </S.MonthlyWineCardInfo>
                </S.MonthlyWineCardContent>
              </S.MonthlyWineCard>
            ))}
          </S.StyledSlider>
        </S.MonthlyWineCardContainer>
      </S.MonthlyWineContainer>
    </section>
  );
}

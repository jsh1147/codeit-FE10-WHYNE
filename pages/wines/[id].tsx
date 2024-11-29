import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { WineDetailTypes } from '@/types/wineDetailTypes';
import { ReviewList } from '../../components/wineDetail/ReviewList';
import { instance } from '@/apis/instance';
import { WineInfo } from '../../components/wineDetail/WineInfoSection';
import { WineRating } from '../../components/wineDetail/WineRating';
import * as S from '../../styles/WineDetail.css';

export default function WineDetail() {
  const [wine, setWine] = useState<WineDetailTypes | null>(null);
  const router = useRouter();
  const { id } = router.query;

  const wineId = Number(id);

  async function getWine(wineId: number) {
    try {
      const response = await instance.get<WineDetailTypes>(`wines/${wineId}`);
      const wineData = response.data;
      setWine(wineData);
    } catch (error) {
      console.error('와인 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  useEffect(() => {
    if (!wineId) return;
    getWine(wineId);
  }, [wineId]);

  if (!wine) return null;

  return (
    <S.WineDetailContainer>
      <S.WineDetailHeader>
        {
          <WineInfo
            id={wine.id}
            name={wine.name}
            region={wine.region}
            price={wine.price}
            image={wine.image}
          />
        }
      </S.WineDetailHeader>
      <S.WineStats>
        {
          <WineRating
            avgRating={wine.avgRating}
            reviewCount={wine.reviewCount}
            avgRatings={wine.avgRatings}
            wineId={wine.id}
            wineName={wine.name}
          />
        }
      </S.WineStats>
      <S.WineReviews>
        {<ReviewList reviews={wine.reviews} wineName={wine.name} />}
      </S.WineReviews>
    </S.WineDetailContainer>
  );
}

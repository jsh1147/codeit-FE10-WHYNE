import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { WineDetailTypes, ReviewsType } from '@/types/wineDetailTypes';
import { ReviewList } from '../../components/wines/ReviewList';
import { instance } from '@/apis/instance';
import { WineDetailInfo } from '../../components/wines/WineDetailInfo';
import { WineRating } from '../../components/wines/WineRating';
import * as S from '../../components/wines/WineDetail.css';

export default function WineDetail() {
  const [wine, setWine] = useState<WineDetailTypes | null>(null);
  const [wineReviews, setWineReviews] = useState<ReviewsType[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const wineId = Number(id);

  const loadMore = () => {
    if (!wineId) return;
    getWineReviews(wineId, wineReviews.length);
  };

  const { loadMoreRef } = useInfiniteScroll(hasMore, loadMore);

  async function getWine(wineId: number) {
    try {
      const response = await instance.get<WineDetailTypes>(`wines/${wineId}`);
      const wineData = response.data;
      setWine(wineData);
    } catch (error) {
      console.error('와인 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  async function getWineReviews(wineId: number, offset: number) {
    try {
      const response = await instance.get<{ reviews: ReviewsType[] }>(
        `wines/${wineId}`,
        {
          params: { offset, limit: 5 },
        },
      );
      const newWineReviews = Array.isArray(response.data.reviews)
        ? response.data.reviews
        : [];
      setWineReviews((prevWineReviews) => [
        ...prevWineReviews,
        ...newWineReviews,
      ]);
      if (newWineReviews.length < 5) {
        setHasMore(false);
      }
    } catch (error) {
      console.error('리뷰 데이터를 가져오는 중 오류 발생:', error);
    }
  }

  useEffect(() => {
    if (!wineId) return;
    getWine(wineId);
  }, [wineId]);

  useEffect(() => {
    if (!wineId || !hasMore) return;
    getWineReviews(wineId, wineReviews.length);
  }, [wineId, hasMore]);

  if (!wine) return null;

  return (
    <S.WineDetailContainer>
      <WineDetailInfo
        id={wine.id}
        name={wine.name}
        region={wine.region}
        price={wine.price}
        image={wine.image}
      />
      <WineRating
        avgRating={wine.avgRating}
        reviewCount={wine.reviewCount}
        avgRatings={wine.avgRatings}
      />
      <ReviewList reviews={wineReviews} />
      <div ref={loadMoreRef} style={{ textAlign: 'center', padding: '20px' }}>
        로딩 중...
      </div>
    </S.WineDetailContainer>
  );
}

import { useWineList } from '@/hooks/useWineList';
import { WineDetails } from '@/types/wineListTypes';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import WineCard from './WineCard';
import * as S from './WineCardList.css';

export interface WineCardListProps {
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

export default function WineCardList(props: WineCardListProps) {
  const [wines, setWines] = useState<WineDetails[]>([]);
  const cursorRef = useRef<number>();
  const [wineList, nextCursor, setOptions] = useWineList({
    ...props,
    cursor: cursorRef.current,
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreWines = async () => {
    setOptions((prev) => ({
      ...prev,
      cursor: cursorRef.current,
    }));
  };

  useEffect(() => {
    setHasMore(nextCursor !== null)
    setWines((prevWines) => {
      const wineIds = new Set(prevWines.map((w) => w.id)); // 현재 상태의 ID를 Set으로 만듦
      const newWines = wineList.filter((wine) => !wineIds.has(wine.id)); // 중복 제거
      cursorRef.current = nextCursor;

      return [...prevWines, ...newWines];
    });
  }, [wineList]);

  return (
    <>
      <InfiniteScroll
        dataLength={wines.length} // 현재 데이터 길이
        next={fetchMoreWines} // 데이터를 불러오는 함수
        hasMore={hasMore} // 더 이상 데이터가 없으면 false로 설정
        loader={<h4>Loading...</h4>} // 로딩 중일 때 표시될 UI
        endMessage={<p>No more wines available</p>} // 더 이상 데이터가 없을 때 메시지
      >
        <S.WineCardListContainer>
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </S.WineCardListContainer>
      </InfiniteScroll>
    </>
  );
}

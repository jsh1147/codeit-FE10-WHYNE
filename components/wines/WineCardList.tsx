import { useWineList } from '@/hooks/useAllWines';
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
  const [wineList, setOptions] = useWineList({
    ...props,
    cursor: cursorRef.current,
  });

  const fetchMoreWines = async () => {
    console.log('fetchMoreWines', cursorRef.current);

    setOptions((prev) => ({
      ...prev,
      cursor: cursorRef.current,
    }));
  };

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (wineList.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

    const newWines = [];
    for (const wine of wineList) {
      if (!wines.find((w) => w.id === wine.id)) {
        newWines.push(wine);
      }
    }

    if (newWines.length === 0) {
    } else {
      cursorRef.current = newWines[newWines.length - 1].id;
      setWines([...wines, ...newWines]);
    }

    console.log('wines', wines);
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

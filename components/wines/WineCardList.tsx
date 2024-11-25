import { useWineList } from '@/hooks/useWineList';
import { WineDetails } from '@/types/wineListTypes';
import { useEffect, useRef, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import WineCard from './WineCard';
import * as S from './WineCardList.css';

export class WineFilterOptions {
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

interface WineCardListProps {
  filterOptions: WineFilterOptions;
}

export default function WineCardList(props: WineCardListProps) {
  const { filterOptions } = props;
  const [wines, setWines] = useState<WineDetails[]>([]);
  const cursorRef = useRef<number>();
  const [wineList, nextCursor, setOptions] = useWineList({
    ...filterOptions,
    cursor: cursorRef.current,
  });
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreWines = async () => {
    console.log('fetchMoreWines');
    setOptions((prev) => ({
      ...prev,
      cursor: cursorRef.current,
    }));
  };

  useEffect(() => {
    console.log('useEffect-filterOptions');
    cursorRef.current = undefined;
    setOptions(filterOptions);
  }, [filterOptions]);

  useEffect(() => {
    console.log('useEffect-wineList');
    setHasMore(nextCursor !== null);

    const prevWines = [...wines];
    const newWines = [];
    if (cursorRef.current === undefined) {
      cursorRef.current = nextCursor;

      newWines.push(...wineList);
    } else {
      cursorRef.current = nextCursor;
      const wineIds = new Set(prevWines.map((w) => w.id)); // 현재 상태의 ID를 Set으로 만듦
      const wines = wineList.filter((wine) => !wineIds.has(wine.id)); // 중복 제거

      newWines.push(...prevWines, ...wines);
    }

    setWines(newWines);
  }, [wineList]);

  return (
    <>
      <InfiniteScroll
        height={'calc(100vh - 537px)'} // 스크롤 영역의 높이
        dataLength={wines.length} // 현재 데이터 길이
        next={fetchMoreWines} // 데이터를 불러오는 함수
        hasMore={hasMore} // 더 이상 데이터가 없으면 false로 설정
        scrollThreshold="90%"
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

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
      const wineIds = new Set(prevWines.map((w) => w.id));
      const wines = wineList.filter((wine) => !wineIds.has(wine.id));

      newWines.push(...prevWines, ...wines);
    }

    setWines(newWines);
  }, [wineList]);

  return (
    <S.StyledInfiniteScroll>
      <InfiniteScroll
        height={670}
        dataLength={wines.length}
        next={fetchMoreWines}
        hasMore={hasMore}
        scrollThreshold="90%"
        loader={<h4>Loading...</h4>}
        endMessage={<p>No more wines available</p>}
      >
        <S.WineCardListContainer>
          {wines.map((wine) => (
            <WineCard key={wine.id} wine={wine} />
          ))}
        </S.WineCardListContainer>
      </InfiniteScroll>
    </S.StyledInfiniteScroll>
  );
}

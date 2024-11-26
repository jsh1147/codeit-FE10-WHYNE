import { fetchWineList } from '@/apis/wineListApi';
import { WineDetails } from '@/types/wineListTypes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface useWineListProps {
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

type UseWineListReturnType = [
  WineDetails[], // allWineList
  number | undefined, // nextCursor
  Dispatch<SetStateAction<useWineListProps>>, // setCondition
];

export const useWineList = (props: useWineListProps): UseWineListReturnType => {
  const [options, setOptions] = useState<useWineListProps>(props);
  const [wineList, setWineList] = useState<WineDetails[]>([]);
  const [nextCursor, setNextCursor] = useState<number>();

  useEffect(() => {
    console.log('options:', options);
    const fetchWines = async () => {
      try {
        const data = await fetchWineList({ limit: 10, ...options });
        setWineList(data.list || []);
        setNextCursor(data.nextCursor);
      } catch (error) {
        console.error('모든 와인 불러오기 에러:', error);
      }
    };

    fetchWines();
  }, [options]);

  return [wineList, nextCursor, setOptions];
};

import { fetchAllWines } from '@/apis/wineListApi';
import { WineDetails } from '@/types/wineListTypes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface UseAllWinesProps {
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

type UseAllWinesReturnType = [
  WineDetails[], // allWineList
  UseAllWinesProps, // condition
  Dispatch<SetStateAction<UseAllWinesProps>>, // setCondition
];

export const useAllWines = (props: UseAllWinesProps): UseAllWinesReturnType => {
  const [condition, setCondition] = useState<UseAllWinesProps>(props);
  const [allWineList, setAllWineList] = useState<WineDetails[]>([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const wines = await fetchAllWines({ limit: 10, ...condition });
        console.log('모든 와인 불러오기:', wines);
        setAllWineList(wines || []);
      } catch (error) {
        console.error('모든 와인 불러오기 에러:', error);
      }
    };

    fetchWines();
  }, [condition]);

  return [allWineList, condition, setCondition];
};

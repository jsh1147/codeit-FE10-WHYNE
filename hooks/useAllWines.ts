import { fetchWineList } from '@/apis/wineListApi';
import { WineDetails } from '@/types/wineListTypes';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export interface FetchAllWinesOptions {
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

type UseWineListReturnType = [
  WineDetails[], // allWineList
  Dispatch<SetStateAction<FetchAllWinesOptions>>, // setCondition
];

export const useWineList = (
  props: FetchAllWinesOptions,
): UseWineListReturnType => {
  const [options, setOptions] = useState<FetchAllWinesOptions>(props);
  const [wineList, setWineList] = useState<WineDetails[]>([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const wines = await fetchWineList({ limit: 10, ...options });
        console.log('모든 와인 불러오기:', wines);
        setWineList(wines || []);
      } catch (error) {
        console.error('모든 와인 불러오기 에러:', error);
      }
    };

    fetchWines();
  }, [options]);

  return [wineList, setOptions];
};

import { fetchAllWines } from '@/apis/wineListApi';
import { WineDetails } from '@/types/wineListTypes';
import { useEffect, useState } from 'react';

export interface UseAllWinesProps {
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

export const useAllWines = (props: UseAllWinesProps) => {
  const [allWineList, setAllWineList] = useState<WineDetails[]>([]);

  useEffect(() => {
    const fetchWines = async () => {
      try {
        const wines = await fetchAllWines({ limit: 10, ...props });
        setAllWineList(wines || []);
      } catch (error) {
        console.error('모든 와인 불러오기 에러:', error);
      }
    };

    fetchWines();
  }, [props]);

  return allWineList;
};

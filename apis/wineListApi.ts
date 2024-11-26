import { instance } from '@/apis/instance';
import { WineDetails, Wine } from '@/types/wineListTypes';

export const fetchRecommendedWines = async (
  limit: number = 10,
): Promise<Wine[]> => {
  try {
    const response = await instance.get(`/wines/recommended?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recommended wines:', error);
    throw error;
  }
};

interface fetchWineListProps {
  limit?: number;
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

export const fetchWineList = async (
  props: fetchWineListProps,
): Promise<{ list: WineDetails[]; nextCursor: number }> => {
  // 기본값 설정
  if (props.limit === undefined) props.limit = 10;

  // 조건 설정
  let options = `limit=${props.limit}`;
  if (props.cursor !== undefined) options += `&cursor=${props.cursor}`;
  if (props.type !== undefined) options += `&type=${props.type}`;
  if (props.minPrice !== undefined) options += `&minPrice=${props.minPrice}`;
  if (props.maxPrice !== undefined) options += `&maxPrice=${props.maxPrice}`;
  if (props.rating !== undefined) options += `&rating=${props.rating}`;
  if (props.name !== undefined) options += `&name=${props.name}`;

  try {
    const response = await instance.get(`/wines?${options}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all wines:', error);
    throw error;
  }
};

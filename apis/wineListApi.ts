import { axiosInstance } from '@/apis/axiosInstance';
import { WineDetails, Wine } from '@/types/wineListTypes';

export const fetchRecommendedWines = async (
  limit: number = 10,
): Promise<Wine[]> => {
  try {
    const response = await axiosInstance.get(
      `/wines/recommended?limit=${limit}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching recommended wines:', error);
    throw error;
  }
};

interface fetchAllWinesProps {
  limit?: number;
  cursor?: number;
  type?: 'RED' | 'WHITE' | 'SPARKLING';
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  name?: string;
}

export const fetchAllWines = async (
  props: fetchAllWinesProps,
): Promise<WineDetails[]> => {
  // 기본값 설정
  if (props.limit === undefined) props.limit = 10;
  if (props.cursor === undefined) props.cursor = 0;

  // 조건 설정
  let condition = `limit=${props.limit}&cursor=${props.cursor}`;
  if (props.type !== undefined) condition += `&type=${props.type}`;
  if (props.minPrice !== undefined) condition += `&minPrice=${props.minPrice}`;
  if (props.maxPrice !== undefined) condition += `&maxPrice=${props.maxPrice}`;
  if (props.rating !== undefined) condition += `&rating=${props.rating}`;
  if (props.name !== undefined) condition += `&name=${props.name}`;

  try {
    const response = await axiosInstance.get(`/wines?${condition}`);
    return response.data.list;
  } catch (error) {
    console.error('Error fetching all wines:', error);
    throw error;
  }
};

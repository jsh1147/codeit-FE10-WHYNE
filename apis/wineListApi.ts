import { axiosInstance } from '@/apis/axiosInstance';

export const fetchRecommendedWines = async (limit: number = 10) => {
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

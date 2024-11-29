import { instance } from './instance';

export const deleteReview = async (reviewId: number) => {
    try {
        const response = await instance.delete(`/reviews/${reviewId}`);
        return response.data;
    } catch (error) {
        console.error('리뷰 삭제 실패:', error);
        throw error;
    }
};
export const deleteWine = async (wineId: number) => {
    try {
        const response = await instance.delete(`/wines/${wineId}`);
        return response.data;
    } catch (error) {
        console.error('와인 삭제 실패:', error);
        throw error;
    }
};
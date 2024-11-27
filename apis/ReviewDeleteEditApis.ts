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
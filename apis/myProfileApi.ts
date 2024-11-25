import { instance } from './instance';

interface PatchNicknameReq {
    nickname: string;
}

export interface GetReviews {
    totalCount: number;
    nextCursor: number;
    list: Review[];
}

export interface Review {
    id: number;
    rating: number;
    lightBold: number;
    smoothTannic: number;
    drySweet: number;
    softAcidic: number;
    aroma: [];
    content: string;
    createdAt: string; 
    updatedAt: string; 
    user: User;
    isLiked: Record<string, any>; 
    wine:Wine;
}

interface Wine {
    id:number;
    name:string;
    region:string;
    image:string;
    price:number;
    avgRating:number;
    type:string;
}

interface User {
    id:number;
    nickname:string;
    image:string;
}

export const patchNickname = async (data:PatchNicknameReq) => {
    try {
        const response = await instance.patch<PatchNicknameReq>('users/me', data);
        return response.data;
      } catch (error) {
        console.error('닉네임 수정 실패:', error);
        throw error;
    }
}
export const getReviews = async(limit=10, cursor=0) => {
    try{
        const response = await instance.get<GetReviews>('users/me/reviews',{
            params: { limit,cursor }})
        return response.data;
    }catch(error){
        console.log('리뷰 불러오기 오류')
    }
}
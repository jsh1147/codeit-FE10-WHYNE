import { instance } from './instance';

interface PatchNicknameReq {
    nickname: string,
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
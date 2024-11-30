import { instance } from './instance';

interface GetMeRes {
  id: number;
  nickname: string;
  teamId: string;
  createdAt: string;
  updatedAt: string;
  image: string | null;
}

export const getMe = async () => {
  const response = await instance.get<GetMeRes>('users/me');
  return response.data;
};

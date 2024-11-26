import { instance } from './instance';

interface PostRefreshParams {
  refreshToken: string;
}

interface PostRefreshRes {
  accessToken: string;
}

export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const bodyObj = { refreshToken };

  const response = await instance.post<PostRefreshRes>(
    'auth/refresh-token',
    bodyObj,
  );
  return response.data;
};

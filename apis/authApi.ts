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

interface PostSignUpParams {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}

interface PostSignUpRes {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    teamId: string;
    updatedAt: string;
    createdAt: string;
    image: string | null;
  };
}

export const postSignUp = async ({
  email,
  nickname,
  password,
  passwordConfirmation,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password, passwordConfirmation };

  const response = await instance.post<PostSignUpRes>('auth/signUp', bodyObj);
  return response.data;
};

interface PostLogInParams {
  email: string;
  password: string;
}

type PostLogInRes = PostSignUpRes;

export const postLogIn = async ({ email, password }: PostLogInParams) => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>('auth/signIn', bodyObj);
  return response.data;
};

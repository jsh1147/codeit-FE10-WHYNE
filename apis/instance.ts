import axios, { AxiosError } from 'axios';
import { postRefresh } from './auth';

const BASE_URL = 'https://winereview-api.vercel.app/10-2/';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(async (config) => {
  if (config.url === 'auth/refresh-token') return config;

  try {
    const refresh = localStorage.getItem('refreshToken');
    if (!refresh) throw new AxiosError('토큰이 존재하지 않습니다.', '401');
    const { accessToken } = await postRefresh({ refreshToken: refresh });
    localStorage.setItem('accessToken', accessToken);
  } catch {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  const access = localStorage.getItem('accessToken');
  if (access) config.headers['Authorization'] = `Bearer ${access}`;
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<{ message: string }>) => {
    const res = error.response;
    if (res)
      console.log(`[${error.status}:${res.config.url}] ${res.data.message}`);

    return Promise.reject(error);
  },
);
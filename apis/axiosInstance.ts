import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://winereview-api.vercel.app/10-2/',
});

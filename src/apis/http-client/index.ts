import axios, { type AxiosInstance } from 'axios';

export const httpClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5173',
});

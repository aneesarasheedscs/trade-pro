import axios, { AxiosError } from 'axios';
import { storedUserDetail } from '@/utils/storageService';

const logoutRedirect = (error: AxiosError) => {
  alert('Session Expired!');
  localStorage.clear();

  window.location.href = window.location.origin + '/';
  return Promise.reject(error);
};

const https = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

const userDetail = storedUserDetail();

// Adds request interceptor
https.interceptors.request.use(
  (config) => {
    if (userDetail?.access_token) {
      config.headers['Authorization'] = `Bearer ${userDetail?.access_token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Adds response interceptor
https.interceptors.response.use(
  (response) => response,
  (error) => {
    const axiosError = error as AxiosError;
    const originalRequest = axiosError.config;

    if ([401, 402].includes(error.response.status) && originalRequest?.url !== '/api/token') {
      logoutRedirect(error);
    }

    return Promise.reject(error);
  }
);

export default https;

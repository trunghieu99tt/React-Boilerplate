import axios, { AxiosRequestConfig } from 'axios';
import { API_URL } from '@config/secret';
import { ResponseCode } from 'constants/http-status.constant';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const REQ_TIMEOUT = 15000; // 15 seconds

const client = axios.create({
  baseURL: API_URL || 'http://localhost:3000/api/',
  headers,
  timeout: REQ_TIMEOUT,
});

const requestInterceptor = (config: AxiosRequestConfig) => {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
};

client.interceptors.request.use(requestInterceptor, (error) => {
  return Promise.reject(error);
});

const errorResponseInterceptor = (error: any) => {
  const statusCode = error?.response?.status;
  const originalRequest = error?.response?.config;
  const { data } = error?.response;

  if (statusCode === ResponseCode.TOKEN_REMOVED) {
    // logout
  }

  if (statusCode === ResponseCode.UNAUTHORIZED) {
    // const refreshRes: any = await apiRefreshToken();
    // if (refreshRes) {
    //   originalRequest.headers[
    //     'Authorization'
    //   ] = `Bearer ${refreshRes?.accessToken}`;
    //   SocketUtils?.getInstance?.()?.restart?.();
    //   return instance(originalRequest);
    // }

    return Promise.reject({ ...error });
  }

  return Promise.reject({ ...error });
};

client.interceptors.response.use((response) => {
  return response?.data;
}, errorResponseInterceptor);

export default client;

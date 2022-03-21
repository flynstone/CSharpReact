import axios, { AxiosResponse } from 'axios';
import { Article } from '../models/article';

const sleep = (delay: number) => {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

axios.defaults.baseURL = 'http://localhost:4000/api';

axios.interceptors.response.use(async res => {
  try {
    await sleep(1000);
    return res;
  } catch (error) {
    console.log(error);
    return await Promise.reject(error);
  }
});

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T> (url: string) => axios.get<T>(url).then(responseBody),
  post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Articles = {
  list: () => requests.get<Article[]>('/articles')
}

const agent = {
  Articles
}

export default agent;
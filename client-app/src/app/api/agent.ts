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

const responseBody = <T> (res: AxiosResponse<T>) => res.data;

const requests = {
  get: <T> (url: string) => axios.get<T>(url).then(responseBody),
  post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T> (url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T> (url: string) => axios.delete<T>(url).then(responseBody),
}

const Articles = {
  list: () => requests.get<Article[]>('/articles'),
  details: (id: string) => requests.get<Article>(`/articles/${id}`),
  create: (article: Article) => axios.post<void>('/articles', article),
  update: (article: Article) => axios.put<void>(`/articles/${article.id}`, article),
  delete: (id: string) => axios.delete<void>(`articles/${id}`)
}

const agent = {
  Articles
}

export default agent;
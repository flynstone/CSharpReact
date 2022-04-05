import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Article } from '../models/article';
import { Profile } from '../models/profile';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';

const sleep = (delay: number) => {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

axios.defaults.baseURL = 'http://localhost:4000/api';

axios.interceptors.request.use(config => {
  const token = store.commonStore.token;
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

axios.interceptors.response.use(async res => {
    await sleep(1000);
    return res;
}, (error: AxiosError) => {
  const { data, status, config } = error.response!;
  switch (status) {
    case 400:
      if (typeof data === 'string') {
        toast.error(data);
      }
      if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
        history.push('/not-found');
      }
      if (data.errors) {
        const modalStateErrors = [];
        for (const key in data.errors) {
          if (data.errors[key]) {
            modalStateErrors.push(data.errors[key]);
          }
        }
        throw modalStateErrors.flat();
      }
      break;
    case 401:
      toast.error('unauthorized');
      break;
    case 404:
      history.push('/not-found');
      break;
    case 500:
      store.commonStore.setServerError(data);
      history.push('/server-error');
      break;
    
  }
  return Promise.reject(error);
});

const responseBody = <T>(res: AxiosResponse<T>) => res.data;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody),
  post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
}

const Articles = {
  list: () => requests.get<Article[]>('/articles'),
  details: (id: string) => requests.get<Article>(`/articles/${id}`),
  create: (article: Article) => axios.post<void>('/articles', article),
  update: (article: Article) => axios.put<void>(`/articles/${article.id}`, article),
  delete: (id: string) => axios.delete<void>(`articles/${id}`)
}

const Account = {
  current: () => requests.get<User>('/account'),
  login: (user: UserFormValues) => requests.post<User>('/account/login', user),
  register: (user: UserFormValues) => requests.post<User>('/account/register', user)
}

const Profiles = {
  get: (username: string) => requests.get<Profile>(`/profiles/${username}`)
}

const agent = {
  Articles,
  Account,
  Profiles
}

export default agent;
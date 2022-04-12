import axios, { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';
import { Article } from '../models/article';
import { PaginatedResult } from '../models/pagination';
import { Photo, Profile } from '../models/profile';
import { User, UserFormValues } from '../models/user';
import { store } from '../stores/store';

const sleep = (delay: number) => {
  return new Promise((res) => {
    setTimeout(res, delay);
  });
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.request.use(config => {
  const token = store.commonStore.token;
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config;
});

axios.interceptors.response.use(async res => {
  if (process.env.NODE_ENV === 'development') await sleep(1000);  
  const pagination = res.headers['pagination'];
  if (pagination) {
    res.data = new PaginatedResult(res.data, JSON.parse(pagination));
    return res as AxiosResponse<PaginatedResult<any>>
  }
    return res;
}, (error: AxiosError) => {
  const { data, status, config, headers } = error.response!;
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
      if (status === 401 && headers['www-authenticate'].startsWith('Bearer error="invalid_token"')) {
        store.userStore.logout();
        toast.error('Your session has expired, please login again');
      }   
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
  list: (params: URLSearchParams) => axios.get<PaginatedResult<Article[]>>('/articles', {params}).then(responseBody),
  details: (id: string) => requests.get<Article>(`/articles/${id}`),
  create: (article: Article) => axios.post<void>('/articles', article),
  update: (article: Article) => axios.put<void>(`/articles/${article.id}`, article),
  delete: (id: string) => axios.delete<void>(`articles/${id}`)
}

const Account = {
  current: () => requests.get<User>('/account'),
  login: (user: UserFormValues) => requests.post<User>('/account/login', user),
  register: (user: UserFormValues) => requests.post<User>('/account/register', user),
  refreshToken: () => requests.post<User>('/account/refreshToken', {}),
  verifyEmail: (token: string, email: string) => requests.post<void>(`/account/verifyEmail?token=${token}&email=${email}`, {}),
  resendEmailConfirm: (email: string) => requests.get(`/account/resendEmailConfirmationLink?email=${email}`)
}

const Profiles = {
  get: (username: string) => requests.get<Profile>(`/profiles/${username}`),
  uploadPhoto: (file: Blob) => {
    let formData = new FormData();
    formData.append('File', file);
    return axios.post<Photo>('photos', formData, {
      headers: {'Content-Type': 'multipart/form-data'}
    })
  },
  setMainPhoto: (id: string) => requests.post(`/photos/${id}/setMain`, {}),
  deletePhoto: (id: string) => requests.del(`/photos/${id}`),
  updateProfile: (profile: Partial<Profile>) => requests.put(`/profiles`, profile),
  updateFollowing: (username: string) => requests.post(`/follow/${username}`, {}),
  listFollowings: (username: string, predicate: string) => 
    requests.get<Profile[]>(`/follow/${username}?predicate=${predicate}`)
}

const agent = {
  Articles,
  Account,
  Profiles
}

export default agent;
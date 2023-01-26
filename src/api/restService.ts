import axios, { AxiosError, AxiosResponse, AxiosInstance, AxiosRequestHeaders } from 'axios';
import { ApiMessageError } from './serverErrorModel';

const API_V1 = 'https://hugimserverwebapi.azurewebsites.net';

class RestAPI {
  url: string;

  tokenName: string;

  constructor(url: string) {
    this.url = url || '';
    this.tokenName = 'token';
  }

  handleSuccess = (response: AxiosResponse): AxiosResponse => response;

  handleError = (error: AxiosError): Promise<object> | void => {
    switch (error?.response?.status) {
      case 404:
        // TODO: do text by habrew
        return Promise.reject(new ApiMessageError('Ошибка API, обратитесь к администратору'));
      case 401:
        localStorage.removeItem(this.tokenName);
        // TODO: do text by habrew
        return Promise.reject(new ApiMessageError('Ошибка авторизации'));
      case 502:
        // TODO: do text by habrew
        return Promise.reject(new ApiMessageError('Сервер не доступен'));
      case 400:
        return Promise.reject(error);
      default:
        break;
    }
    // TODO: do text by habrew
    return Promise.reject(new ApiMessageError('Что-то пошло не так, обратитесь к администратору'));
  };

  private create = (headers?: any): AxiosInstance => {
    const cancel = axios.CancelToken.source();
    const token = localStorage.getItem(this.tokenName);
    const headerAuth = token && { Authorization: `Bearer ${token}` };
    const service = axios.create({
      headers: {
        ...headers,
        ...headerAuth
      },
      cancelToken: cancel.token
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    return service;
  };

  public get = <T>(
    path: string = '',
    params?: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: 'GET',
      url: `${this.url}${path}`,
      params
    });
  };

  public post = <T>(
    path: string,
    data: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: 'POST',
      url: `${this.url}${path}`,
      data
    });
  };

  public put = <T>(
    path: string,
    data?: T,
    params?: T,
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: 'PUT',
      url: `${this.url}${path}`,
      data: {
        ...data
      },
      params
    });
  };

  public delete = <T>(
    path: string,
    data: T,
    params: object = {},
    headers?: AxiosRequestHeaders
  ): Promise<AxiosResponse> => {
    const service = this.create(headers);
    return service.request({
      method: 'DELETE',
      url: `${this.url}${path}`,
      data: {
        ...data
      },
      params
    });
  };
}

export default new RestAPI(API_V1);

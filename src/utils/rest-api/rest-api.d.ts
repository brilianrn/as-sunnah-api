import { AxiosRequestConfig } from 'axios';

export interface ResponseREST<T = object | Array<object | number | string>> {
  success?: boolean;
  message: string;
  data?: T;
}

export interface RequestAPI {
  get: ({
    endpoint,
    config,
    queryParam,
  }: {
    endpoint: string;
    queryParam?: Record<
      string,
      Partial<{
        [key: string]: string | string[];
      }>
    >;
    config?: AxiosRequestConfig;
  }) => Promise<ResponseREST>;
}

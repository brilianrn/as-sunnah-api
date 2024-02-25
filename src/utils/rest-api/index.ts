import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { serializeParam } from '../helper/serialize';
import { RequestAPI, ResponseREST } from './rest-api';

export const http: AxiosInstance = axios.create({
  baseURL: process.env.API_HOST,
  timeout: Number(process.env.TIMEOUT),
});

export class RestAPI implements RequestAPI {
  private http: AxiosInstance;
  private httpDefault: AxiosInstance = axios.create({
    timeout: 30000,
  });

  constructor(http?: AxiosInstance, token?: string) {
    this.http = http ?? this.httpDefault;
    if (token) {
      this.http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  async get({
    endpoint,
    queryParam,
    config,
  }: {
    endpoint: string;
    queryParam?: Record<
      string,
      Partial<{
        [key: string]: string | string[];
      }>
    >;
    config?: AxiosRequestConfig;
  }): Promise<ResponseREST> {
    let url = endpoint;

    if (queryParam && Object.keys(queryParam).length > 0) {
      url += '?' + serializeParam(queryParam);
    }

    const res = await this.http.get(url, config);

    if (res.status !== 200) {
      return { ...res.data, success: false };
    }

    return res.data;
  }
}

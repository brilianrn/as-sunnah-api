import { Injectable } from '@nestjs/common';
import { gadingQuranApi } from 'src/utils/constants/endpoint';
import logError from 'src/utils/helper/log-error';
import { RestAPI, http } from 'src/utils/rest-api';
import { SurahDetailType, SurahType } from './domain';
import { SurahServicePort } from './port/service.port';

@Injectable()
export class SurahService implements SurahServicePort {
  getListSurah = async () => {
    try {
      const api = new RestAPI(http);
      const { data } = await api.get({
        endpoint: gadingQuranApi.surahList,
        config: { baseURL: process.env.GADING_QURAN_API_URL },
      });
      return data as Array<SurahType>;
    } catch (error) {
      logError(error, 'getListSurah');
      return undefined;
    }
  };

  getDetailSurah = async (id: string) => {
    try {
      const api = new RestAPI(http);
      const { data } = await api.get({
        endpoint: gadingQuranApi.surahDetail(id),
        config: { baseURL: process.env.GADING_QURAN_API_URL },
      });
      return data as SurahDetailType;
    } catch (error) {
      logError(error, 'getDetailSurah');
      return undefined;
    }
  };
}

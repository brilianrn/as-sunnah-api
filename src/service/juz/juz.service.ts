import { Injectable } from '@nestjs/common';
import { gadingQuranApi } from 'src/utils/constants/endpoint';
import { convertNumToArr } from 'src/utils/helper/formattor';
import logError from 'src/utils/helper/log-error';
import { RestAPI, http } from 'src/utils/rest-api';
import { DataJuz } from './domain';
import { JuzServicePort } from './port/service.port';

@Injectable()
export class JuzService implements JuzServicePort {
  getListJuz = () => convertNumToArr(30, 1);

  getDetailJuz = async (id: string): Promise<DataJuz> => {
    try {
      const api = new RestAPI(http);
      const { data } = await api.get({
        endpoint: gadingQuranApi.juzDetail(id),
        config: { baseURL: process.env.GADING_QURAN_API_URL },
      });
      return data as DataJuz;
    } catch (error) {
      logError(error, 'getDetailJuz');
      return undefined;
    }
  };
}

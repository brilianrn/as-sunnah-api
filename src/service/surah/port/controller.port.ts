import { Response } from 'express';
import { ResponseREST } from 'src/utils/rest-api/rest-api';
import { SurahDetailType, SurahType } from '../domain';

export interface SurahControllerPort {
  listSurah: (
    res: Response,
  ) => Promise<Response<ResponseREST<Array<SurahType>>>>;
  detailSurah: (
    res: Response,
    id: string,
  ) => Promise<Response<ResponseREST<SurahDetailType>>>;
}

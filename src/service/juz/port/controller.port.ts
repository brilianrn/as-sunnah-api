import { Response } from 'express';
import { ResponseREST } from 'src/utils/rest-api/rest-api';
import { DataJuz } from '../domain';

export interface JuzControllerPort {
  listJuz: (res: Response) => Response<ResponseREST<Array<number>>>;
  detailJuz: (
    res: Response,
    id: string,
  ) => Promise<Response<ResponseREST<DataJuz>>>;
}

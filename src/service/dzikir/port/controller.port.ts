import { Response } from 'express';
import { ResponseREST } from 'src/utils/rest-api/rest-api';
import { DzikirDataType, DzikirType } from '../domain';

export interface DzikirControllerPort {
  dzikir: (
    res: Response,
    type: DzikirType,
  ) => Promise<Response<ResponseREST<DzikirDataType>>>;
}

import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';
import responseRest from 'src/utils/rest-api/response-rest';
import { ResponseREST } from 'src/utils/rest-api/rest-api';

@Controller()
export class AppController {
  @Get()
  app(@Res() res: Response): Response<ResponseREST> {
    try {
      return responseRest[HttpStatus.OK](res, { message: 'As-Sunnah API' });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }
}

import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { JuzService } from 'src/service/juz/juz.service';
import { JuzControllerPort } from 'src/service/juz/port/controller.port';
import responseMessage from 'src/utils/constants/response-message';
import { juzRoute } from 'src/utils/constants/route';
import responseRest from 'src/utils/rest-api/response-rest';

@Controller(juzRoute.index)
export class JuzController implements JuzControllerPort {
  constructor(private readonly juzService: JuzService) {}

  @Get()
  listJuz(@Res() res: Response) {
    try {
      const data = this.juzService.getListJuz();
      return responseRest[HttpStatus.OK](res, {
        message: responseMessage('juz').findAll,
        data,
      });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }

  @Get('/:id')
  async detailJuz(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.juzService.getDetailJuz(id);
      if (!data) {
        return responseRest[HttpStatus.NOT_FOUND](res, {
          message: responseMessage(`juz ${id}`)[404],
          data,
        });
      }
      return responseRest[HttpStatus.OK](res, {
        message: responseMessage(`juz ${id}`).findDetail,
        data,
      });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }
}

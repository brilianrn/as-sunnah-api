import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { SurahControllerPort } from 'src/service/surah/port/controller.port';
import { SurahService } from 'src/service/surah/surah.service';
import responseMessage from 'src/utils/constants/response-message';
import { surahRoute } from 'src/utils/constants/route';
import responseRest from 'src/utils/rest-api/response-rest';

@Controller(surahRoute.index)
export class SurahController implements SurahControllerPort {
  constructor(private readonly surahService: SurahService) {}

  @Get()
  async listSurah(@Res() res: Response) {
    try {
      const data = await this.surahService.getListSurah();
      if (!data) {
        return responseRest[HttpStatus.NOT_FOUND](res, {
          message: responseMessage('Daftar surat')[404],
          data,
        });
      }
      return responseRest[HttpStatus.OK](res, {
        message: responseMessage('surat').findAll,
        data,
      });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }

  @Get('/:id')
  async detailSurah(@Res() res: Response, @Param('id') id: string) {
    try {
      const data = await this.surahService.getDetailSurah(id);
      if (!data) {
        return responseRest[HttpStatus.NOT_FOUND](res, {
          message: responseMessage('Detail surat')[404],
          data,
        });
      }
      return responseRest[HttpStatus.OK](res, {
        message: responseMessage('surat').findDetail,
        data,
      });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }
}

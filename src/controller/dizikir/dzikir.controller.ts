import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { DzikirDataType, DzikirType } from 'src/service/dzikir/domain';
import { DzikirControllerPort } from 'src/service/dzikir/port/controller.port';
import { DzikirService } from 'src/service/dzikir/surah.service';
import responseMessage from 'src/utils/constants/response-message';
import { dzikirRoute } from 'src/utils/constants/route';
import responseRest from 'src/utils/rest-api/response-rest';

@Controller(dzikirRoute.index)
export class DzikirController implements DzikirControllerPort {
  constructor(private readonly dzikirService: DzikirService) {}

  @Get('/:type')
  async dzikir(@Res() res: Response, @Param('type') type: DzikirType) {
    try {
      const messageType = `Dzikir ${type === 'morning' ? 'pagi' : type === 'afternoon' ? 'petang' : ''}`;
      let data: DzikirDataType = undefined;
      switch (type) {
        case 'morning':
          data = await this.dzikirService.getMorningDzikir();
          break;
        case 'afternoon':
          data = await this.dzikirService.getAfternoonDzikir();
          break;
      }
      if (!data) {
        return responseRest[HttpStatus.NOT_FOUND](res, {
          message: responseMessage(messageType)[404],
          data,
        });
      }
      return responseRest[HttpStatus.OK](res, {
        message: responseMessage(messageType).findDetail,
        data,
      });
    } catch (error) {
      return responseRest[HttpStatus.INTERNAL_SERVER_ERROR](res);
    }
  }
}

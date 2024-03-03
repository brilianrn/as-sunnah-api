import { Injectable } from '@nestjs/common';
import logError from 'src/utils/helper/log-error';
import { DzikirDataType } from './domain';
import { DzikirServicePort } from './port/service.port';

@Injectable()
export class DzikirService implements DzikirServicePort {
  getMorningDzikir = async () => {
    try {
      return {
        name: 'Dzikir Pagi',
        type: 'morning',
        url: 'https://jumpshare.com/s/9gZIspdxIPGmrihfkJMv',
      } as DzikirDataType;
    } catch (error) {
      logError(error, 'getMorningDzikir');
      return undefined;
    }
  };

  getAfternoonDzikir = async () => {
    try {
      return {
        name: 'Dzikir Petang',
        type: 'afternoon',
        url: 'https://jmp.sh/s/uR9Q2woUGY56Pnd2rNvJ',
      } as DzikirDataType;
    } catch (error) {
      logError(error, 'getAfternoonDzikir');
      return undefined;
    }
  };
}

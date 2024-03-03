import { DzikirDataType } from '../domain';

export interface DzikirServicePort {
  getMorningDzikir: () => Promise<DzikirDataType>;
  getAfternoonDzikir: () => Promise<DzikirDataType>;
}

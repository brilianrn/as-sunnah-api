import { SurahType } from '../domain';

export interface SurahServicePort {
  getListSurah: (id: string) => Promise<Array<SurahType>>;
}

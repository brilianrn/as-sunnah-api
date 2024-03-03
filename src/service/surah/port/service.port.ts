import { SurahDetailType, SurahType } from '../domain';

export interface SurahServicePort {
  getListSurah: () => Promise<Array<SurahType>>;
  getDetailSurah: (id: string) => Promise<SurahDetailType>;
}

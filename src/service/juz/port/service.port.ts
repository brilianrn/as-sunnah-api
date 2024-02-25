import { DataJuz } from '../domain';

export interface JuzServicePort {
  getListJuz: () => Array<number>;
  getDetailJuz: (id: string) => Promise<DataJuz>;
}

import {
  JuzVersesTextTransliteration,
  JuzVersesTranslation,
} from 'src/service/juz/domain';

export type SurahRevelation = {
  arab: string;
  en: 'Meccan' | 'Medinan';
  id: 'Makkiyyah' | 'Madaniyyah';
};

export type SurahName = {
  short: string;
  long: string;
  transliteration: JuzVersesTextTransliteration;
  translation: JuzVersesTranslation;
};

export type SurahType = {
  number: number;
  sequence: number;
  numberOfVerses: number;
  name: SurahName;
  revelation: SurahRevelation;
  tafsir: { id: string };
};

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

export type VerseSurahType = {
  number: {
    inQuran: number;
    inSurah: number;
  };
  meta: {
    juz: number;
    page: number;
    manzil: number;
    ruku: number;
    hizbQuarter: number;
    sajda: {
      recommended: boolean;
      obligatory: boolean;
    };
  };
  text: {
    arab: string;
    transliteration: {
      en: string;
    };
  };
  translation: {
    en: string;
    id: string;
  };
  audio: {
    primary: string;
    secondary: Array<string>;
  };
  tafsir: {
    id: {
      short: string;
      long: string;
    };
  };
};

export type SurahDetailType = SurahType & {
  verses: Array<VerseSurahType>;
};

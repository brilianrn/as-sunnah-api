export type JuzVersesNumber = {
  inQuran: number;
  inSurah: number;
};

export type JuzVersesMeta = {
  juz: number;
  page: number;
  manzil: number;
  ruku: number;
  hizbQuarter: number;
};

export type JuzVersesTextTransliteration = {
  en: string;
};

export type JuzVersesText = {
  arab: string;
  transliteration: JuzVersesTextTransliteration;
};

export type JuzVersesTranslation = {
  en: string;
  id: string;
};

export type JuzVersesAudio = {
  primary: string;
  secondary: Array<string>;
};

export type JuzVersesTafsir = {
  id: {
    short: string;
    long: string;
  };
};

export type JuzVerses = {
  number: JuzVersesNumber;
  meta: JuzVersesMeta;
  text: JuzVersesText;
  translation: JuzVersesTranslation;
  audio: JuzVersesAudio;
  tafsir: JuzVersesTafsir;
};

export type DataJuz = {
  juz: number;
  juzStartSurahNumber: number;
  juzEndSurahNumber: number;
  juzStartInfo: string;
  juzEndInfo: string;
  totalVerses: number;
  verses: JuzVerses;
};

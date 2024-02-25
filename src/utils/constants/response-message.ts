import { capitalizeFirstLetter } from '../helper/formattor';

/* eslint-disable */
export default (label?: string) => ({
  findAll: `Daftar ${label?.toLowerCase() || ''} berhasil ditemukan`,
  findDetail: `${capitalizeFirstLetter(label) || 'Data'} berhasil ditemukan`,
  200: (message?: string) => message || `${label} berhasil`,
  201: `${capitalizeFirstLetter(label) || 'Kolom ini'} berhasil dibuat`,
  400: `${capitalizeFirstLetter(label) || 'Kolom ini'} tidak valid`,
  404: `${capitalizeFirstLetter(label) || 'Kolom ini'} tidak ditemukan!`,
  401: 'Tidak diizinkan!',
  500: 'Internal server error',
});

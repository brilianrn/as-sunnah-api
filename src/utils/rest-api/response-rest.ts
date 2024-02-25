import { HttpStatus } from '@nestjs/common';
import responseMessage from 'src/utils/constants/response-message';
import { ResponseREST } from './rest-api';
import { Response } from 'express';

/* eslint-disable-next-line */
export default {
  [HttpStatus.OK]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.OK).json({
      success: success || true,
      message: message || 'Sukses!',
      data,
    });
  },
  [HttpStatus.CREATED]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.CREATED).json({
      success: success || true,
      message: message || 'Berhasil dibuat!',
      data,
    });
  },
  [HttpStatus.BAD_REQUEST]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.BAD_REQUEST).json({
      success: success || false,
      message: message || 'Tidak valid!',
      data,
    });
  },
  [HttpStatus.UNAUTHORIZED]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.UNAUTHORIZED).json({
      success: success || false,
      message: message || 'Tidak diizinkan!',
      data,
    });
  },
  [HttpStatus.FORBIDDEN]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.FORBIDDEN).json({
      success: success || false,
      message: message || 'Gagal!',
      data,
    });
  },
  [HttpStatus.NOT_FOUND]: (
    response: Response,
    { success, message, data }: ResponseREST,
  ) => {
    return response.status(HttpStatus.NOT_FOUND).json({
      success: success || false,
      message: message || 'Tidak ditemukan!',
      data,
    });
  },
  [HttpStatus.INTERNAL_SERVER_ERROR]: (
    response: Response,
    payload?: ResponseREST,
  ) => {
    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: payload?.message || responseMessage()[500],
    });
  },
};

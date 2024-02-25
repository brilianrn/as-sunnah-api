import { Test, TestingModule } from '@nestjs/testing';
import { response } from 'express';
import { AppService } from '../service/app.service';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.app(response)).toBe('Hello World!');
    });
  });
});

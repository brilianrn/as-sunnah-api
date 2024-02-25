import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';
import { prefixRoute } from './utils/constants/route';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefixRoute.v1);
  await app.listen(Number(process.env.PORT));
};
bootstrap();

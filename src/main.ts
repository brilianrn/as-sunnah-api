import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app.module';

const bootstrap = async () => {
  console.log(process.env.PORT);
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
};
bootstrap();

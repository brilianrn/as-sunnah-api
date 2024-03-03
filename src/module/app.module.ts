import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JuzController } from 'src/controller/juz/juz.controller';
import { SurahController } from 'src/controller/surah/surah.controller';
import { JuzService } from 'src/service/juz/juz.service';
import { SurahService } from 'src/service/surah/surah.service';
import { AppController } from '../controller/app.controller';
import { AppService } from '../service/app.service';
import { DzikirController } from 'src/controller/dizikir/dzikir.controller';
import { DzikirService } from 'src/service/dzikir/surah.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    AppController,
    JuzController,
    SurahController,
    DzikirController,
  ],
  providers: [AppService, JuzService, SurahService, DzikirService],
})
export class AppModule {}

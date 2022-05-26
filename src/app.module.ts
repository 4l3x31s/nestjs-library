/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { LibAleModule } from '@ruat/lib-ale';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    LibAleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

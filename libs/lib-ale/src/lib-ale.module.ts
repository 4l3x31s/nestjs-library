import { Module } from '@nestjs/common';
import { LibAleService } from './lib-ale.service';

@Module({
  providers: [LibAleService],
  exports: [LibAleService],
})
export class LibAleModule {}

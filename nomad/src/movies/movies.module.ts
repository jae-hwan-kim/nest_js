import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  controllers: [MoviesController], // injection
  providers: [MoviesService], // injection
})
export class MoviesModule {}

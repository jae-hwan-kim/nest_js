import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app.controller';

// app.module은 MoviesModule 하나만 가지고 있어야한다.
// nest g mo 를 통해 movies.module.ts 를 만들고, import 했다.
@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}

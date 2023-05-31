import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies') // 엔트리 포인트를 관리한다.
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    // return 'This will return all movies';
    return this.moviesService.getAll();
  }

  // search Get 과 :id Get 이 순서에 영향을 받는다.
  @Get('search') // localhost:3000/movies/search?year=2000
  search(@Query('year') searchYear: string) {
    return this.moviesService.search(searchYear);
  }

  @Get('/:id') // '/:id' 의 id 와 @Param('id') 의 id 는 같아야한다.
  getOne(@Param('id') moviId: string): Movie {
    return this.moviesService.getOne(moviId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): boolean {
    return this.moviesService.deleteOne(id);
  }

  @Patch('/:id') // Put 은 전체를 업데이트한다. Patch 는 부분을 업데이트한다.
  patch(@Param('id') movieId: string, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}

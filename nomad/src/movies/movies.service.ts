import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  getAll() {
    return 'This will return all movies';
  }

  getOne(id: string) {
    return `This will return one movie : ID ${id}`;
  }

  create(movieData) {
    return movieData;
  }

  remove(id: string) {
    return `This will delete a movie : ID ${id}`;
  }

  patch(movieId: string, updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }

  search(searchYear) {
    return searchYear;
  }
}

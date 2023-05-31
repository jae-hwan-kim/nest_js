import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getAll(): Movie[];
    search(searchYear: string): any;
    getOne(moviId: string): Movie;
    create(movieData: any): void;
    remove(id: string): boolean;
    patch(movieId: string, updateData: any): any;
}

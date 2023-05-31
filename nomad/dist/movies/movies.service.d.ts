import { Movie } from './entities/movie.entity';
export declare class MoviesService {
    private movies;
    getAll(): Movie[];
    getOne(id: string): Movie;
    create(movieData: any): void;
    deleteOne(id: string): boolean;
    patch(movieId: string, updateData: any): any;
    search(searchYear: any): any;
}

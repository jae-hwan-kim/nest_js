import { MoviesService } from './movies.service';
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getAll(): string;
    search(searchYear: string): any;
    getOne(moviId: string): string;
    create(movieData: any): any;
    remove(id: string): string;
    patch(movieId: string, updateData: any): any;
}

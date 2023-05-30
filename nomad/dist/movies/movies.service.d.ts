export declare class MoviesService {
    getAll(): string;
    getOne(id: string): string;
    create(movieData: any): any;
    remove(id: string): string;
    patch(movieId: string, updateData: any): any;
    search(searchYear: any): any;
}

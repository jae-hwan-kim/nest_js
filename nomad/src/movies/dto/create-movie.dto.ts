import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @IsNotEmpty()
  @IsString({ each: true })
  readonly genres: string[];
}

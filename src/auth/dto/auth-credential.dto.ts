import { IsNotEmpty } from 'class-validator';

export class AuthCreadentailsDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

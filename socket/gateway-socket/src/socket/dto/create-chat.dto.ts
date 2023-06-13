import { IsNotEmpty } from 'class-validator';

export class CreateChatDto {
  @IsNotEmpty()
  sender: string;

  @IsNotEmpty()
  text: string;
}

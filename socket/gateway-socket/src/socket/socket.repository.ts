import { DataSource, Repository } from 'typeorm';
import { Chat } from './socket.entity';
import { CreateChatDto } from './dto/create-chat.dto';
import { Injectable } from '@nestjs/common';

// @EntityRepository 는 사라졌다... 그래서 @Injectable() 을 하고, module 에 프로바이더에 추가했다.
@Injectable()
export class ChatRepository extends Repository<Chat> {
  constructor(private dataSource: DataSource) {
    super(Chat, dataSource.createEntityManager());
  }
  async createChat(createChatDto: CreateChatDto): Promise<Chat> {
    const { sender, text } = createChatDto;

    const chat = this.create({
      sender,
      text,
    });

    await this.save(chat);
    return chat;
  }
}

import { Logger, OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io'; // gateway에서는 서버, client 에서는 소켓
import { ChatRepository } from './app.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @WebSocketGateway(81, { transports: ['websocket'] })
// @WebSocketGateway(80, { namespace: 'events' })
// @WebSocketGateway({
//   namespace: 'chat',
//   cors: {
//     origin: ['http://localhost:3001'],
//   },
// })

@WebSocketGateway()
export class AppGateway implements OnModuleInit {
  // private logger: Logger = new Logger('AppGateway');
  // afterInit(server: any) {
  //   this.logger.log('Initialized!');
  // }

  constructor(
    @InjectRepository(ChatRepository)
    private chatRepository: ChatRepository,
  ) {}

  // 웹 소켓 서버 시작
  @WebSocketServer()
  server: Server; // npm install socket.io

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });
  }

  @SubscribeMessage('clientA')
  handleAMessage(@MessageBody() body: any) {
    console.log('clientA Say:\n', body);
    this.updateChat('clientA', body);
    this.server.emit('fromClientA', {
      msg: 'New Message',
      content: body,
    });
  }

  @SubscribeMessage('clientB')
  handleBMessage(@MessageBody() body: any) {
    console.log('clientB Say:\n', body);
    this.updateChat('clientB', body);
    this.server.emit('fromClientB', {
      msg: 'New Message',
      content: body,
    });
  }

  async updateChat(sender: string, text: string) {
    console.log('Table - ', sender, ':', text);
    const chat = this.chatRepository.create({
      sender,
      text,
    });
    console.log(text);
    await this.chatRepository.save(chat);
  }
}

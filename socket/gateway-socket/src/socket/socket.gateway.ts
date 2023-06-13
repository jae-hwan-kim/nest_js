import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io'; // gateway에서는 서버, client 에서는 소켓
import { ChatRepository } from './socket.repository';
import { InjectRepository } from '@nestjs/typeorm';
// @WebSocketGateway(81, { transports: ['websocket'] })
// @WebSocketGateway(80, { namespace: 'events' })
@WebSocketGateway()
export class SocketGateway implements OnModuleInit {
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

  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any) {
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
  /* 데코레이터에 속성 키를 전단해서 수신 메시지 본문에서 추출 가능 */
  // @SubscribeMessage('events')
  // handleEvent(@MessageBody() body: any) {
  //   console.log('Subscribe: events, Emit: onReply\n');
  //   this.server.emit('onReply', {
  //     msg: 'New Message',
  //     content: body,
  //   });
  // }

  // 데코레이터를 사용하지 않는 경우 다음 코드는 위 코드와 기능적으로 같다.
  // 첫 번째 인자는 플랫폼별 소켓 인스턴스, 두 번째 인자는 클라이언트에서 받은 데이터
  // @SubscribeMessage('events')
  // handleEvent(client: Socket, data: string): string {
  //   return data;
  // }
}

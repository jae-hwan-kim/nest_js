import { OnModuleInit } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io'; // gateway에서는 서버, client 에서는 소켓

// @WebSocketGateway(81, { transports: ['websocket'] })
// @WebSocketGateway(80, { namespace: 'events' })
@WebSocketGateway()
export class SocketGateway implements OnModuleInit {
  // 웹 소켓 서버 시작
  @WebSocketServer()
  server: Server; // npm install socket.io

  onModuleInit() {
    this.server.on('connection', (socket) => {
      console.log(socket.id);
      console.log('Connected');
    });
    this.server.on('onMessage', () => {
      console.log('aaaaaa');
    });
  }

  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any) {
  @SubscribeMessage('message')
  handleMessage(@MessageBody() body: any) {
    console.log('Subscribe: message, Emit: onMessage\n');
    // 다른 곳에 보냄
    this.server.emit('onMessage', {
      msg: 'New Message',
      content: body,
    });
  }

  /* 데코레이터에 속성 키를 전단해서 수신 메시지 본문에서 추출 가능 */
  @SubscribeMessage('events')
  handleEvent(@MessageBody() body: any) {
    console.log('Subscribe: events, Emit: onReply\n');
    this.server.emit('onReply', {
      msg: 'New Message',
      content: body,
    });
  }
  // 데코레이터를 사용하지 않는 경우 다음 코드는 위 코드와 기능적으로 같다.
  // 첫 번째 인자는 플랫폼별 소켓 인스턴스, 두 번째 인자는 클라이언트에서 받은 데이터
  // @SubscribeMessage('events')
  // handleEvent(client: Socket, data: string): string {
  //   return data;
  // }
}

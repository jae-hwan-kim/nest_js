import { Bind, Logger } from '@nestjs/common';
import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from, map } from 'rxjs';

@WebSocketGateway({
  cors: {
    // 클라이언트가 랜더링 되고 있는 포트 번호를 입력해준다.
    origin: 'http://localhost:3001',
  },
  transports: ['polling', 'websocket'],
})
export class eventsGateway implements OnGatewayInit, OnGatewayConnection {
  @WebSocketServer()
  server: Server; // npm install socket.io

  private logger: Logger = new Logger('AppGateway');
  afterInit() {
    this.logger.log('Initialized!');

    this.server.on('connection', (socket) => {
      console.log(socket.id, 'Connected');
    });
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @Bind(MessageBody())
  @SubscribeMessage('events')
  handleEvent(data: string) {
    console.log('data : ', data);
    return data;
  }

  // @SubscribeMessage('events')
  // handleEvent(@MessageBody() data: unknown): WsResponse<unknown> {
  //   console.log('data : ', data);
  //   const event = 'events';
  //   return { event, data };
  // }

  @Bind(MessageBody())
  @SubscribeMessage('events')
  onEvent(data) {
    console.log('data : ', data);
    const event = 'events';
    const response = [1, 2, 3];

    return from(response).pipe(map((data) => ({ event, data })));
  }

  @Bind(MessageBody('id'))
  @SubscribeMessage('events')
  handleEventId(id) {
    console.log('id : ', id);
    return id;
  }
}

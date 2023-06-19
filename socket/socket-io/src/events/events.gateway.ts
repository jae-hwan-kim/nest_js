import { Bind } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { from, map } from 'rxjs';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  transports: ['polling', 'websocket'],
})
export class eventsGateway {
  @WebSocketServer()
  server: Server; // npm install socket.io
  // @SubscribeMessage('message')
  // handleMessage(client: any, payload: any): string {
  //   return 'Hello world!';
  // }

  // @Bind(MessageBody())
  // @SubscribeMessage('events')
  // handleEvent(data: string) {
  //   console.log('data : ', data);
  //   return data;
  // }

  @Bind(MessageBody())
  @SubscribeMessage('events')
  onEvent(data) {
    console.log('data : ', data);
    const event = 'events';
    const response = [1, 2, 3];

    return from(response).pipe(map((data) => ({ event, data })));
  }

  // @SubscribeMessage('events')
  // handleEvent(@MessageBody() data: unknown): WsResponse<unknown> {
  //   console.log('data : ', data);
  //   const event = 'events';
  //   return { event, data };
  // }

  // @Bind(MessageBody('id'))
  // @SubscribeMessage('events')
  // handleEventId(id) {
  //   console.log('id : ', id);
  //   return id;
  // }

  // @Bind(MessageBody(), ConnectedSocket())
  // @SubscribeMessage('events')
  // handleEventMessageAndSocket(data, client) {
  //   console.log('data : ', data, ' client : ', client);
  //   return data;
  // }
}

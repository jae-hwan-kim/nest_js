import { Bind, Body } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
  namespace: 'events',
  transports: ['polling', 'websocket'],
})
export class eventsGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }

  @Bind(MessageBody())
  @SubscribeMessage('events')
  handleEvent(data: string) {
    console.log('data : ', data);
    // return data;
  }

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

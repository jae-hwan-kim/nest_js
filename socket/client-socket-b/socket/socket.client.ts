import { Injectable, OnModuleInit } from '@nestjs/common';
import { io, Socket } from 'socket.io-client';

@Injectable()
export class SocketClient implements OnModuleInit {
  public socketClient: Socket;

  constructor() {
    this.socketClient = io('http://localhost:3000');
  }

  onModuleInit() {
    this.registerConsumerEvents();
  }

  private registerConsumerEvents() {
    this.socketClient.on('connect', () => {
      console.log('ClientB Connected to Gateway');
    });
    this.socketClient.on('fromClientA', (payload: any) => {
      console.log('clientA\n', payload);
    });
    // this.socketClient.on('onMessage', (payload: any) => {
    //   console.log('', payload);
    // });
    // this.socketClient.on('onReply', (payload: any) => {
    //   console.log('socket-client: onReply\n', payload);
    // });
  }
}

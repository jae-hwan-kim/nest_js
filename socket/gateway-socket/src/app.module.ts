import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SocketGateway } from './socket/socket.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ChatRepository } from './socket/socket.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService, SocketGateway, ChatRepository],
})
export class AppModule {}

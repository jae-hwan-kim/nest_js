import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { ChatRepository } from './app.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [AppController],
  providers: [AppService, AppGateway, ChatRepository],
})
export class AppModule {}

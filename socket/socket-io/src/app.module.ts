import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { eventsGateway } from './events/events.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, eventsGateway],
})
export class AppModule {}

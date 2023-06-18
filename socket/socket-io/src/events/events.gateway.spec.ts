import { Test, TestingModule } from '@nestjs/testing';
import { eventsGateway } from './events.gateway';

describe('WebsocketGateway', () => {
  let gateway: eventsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [eventsGateway],
    }).compile();

    gateway = module.get<eventsGateway>(eventsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});

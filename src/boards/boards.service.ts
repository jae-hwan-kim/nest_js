import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enums';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardsService {
  // Inject Repository to Service
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}
}

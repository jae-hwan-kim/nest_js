import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards') // location
export class BoardsController {
  // Service injection
  constructor(private boardsService: BoardsService) {}

  // 메서드와 함께 getter 를 선언해야한다.
  @Get('/')
  getAllBoard() {
    return this.boardsService.getAllBoards();
  }
}

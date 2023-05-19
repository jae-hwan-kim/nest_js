import { Controller, Get, Post, Body } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards') // location
export class BoardsController {
  // Service injection
  constructor(private boardsService: BoardsService) {}

  // 메서드와 함께 getter 를 선언해야한다.
  @Get('/') // R
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post() // C
  createBoard(
    @Body('title') title: string,
    @Body('description') description: string,
  ): Board {
    return this.boardsService.createBoard(title, description);
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enums';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // 다른 곳에서 참조하는 것을 방지하기 위해 private 으로 선언
  // /*------------------------------------------------------*/
  // // READ
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // getBoardById(id: string): Board {
  //   return this.boards.find((board) => board.id === id);
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   if (!found) {
  //     throw new NotFoundException();
  //   }
  //   this.boards = this.boards.filter((boards) => boards.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}

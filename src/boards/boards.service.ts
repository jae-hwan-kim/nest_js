import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // 다른 곳에서 참조하는 것을 방지하기 위해 private 으로 선언
  private boards: Board[] = [];

  /*------------------------------------------------------*/
  // READ
  getAllBoards(): Board[] {
    return this.boards;
  }

  // CREAT
  // createBoard(title: string, description: string) {
  //   // id 는 유니크 값이라 무조건 넣어줘야한다. 하지만 여기서는 필요없다.
  //   // uuid 모듈을 사용해서 임의로 유니크 값을 넣어주자.
  //   // npm install uuid --save
  //   const board: Board = {
  //     id: uuid(),
  //     title, // title: title,
  //     description, // description: description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };
    this.boards.push(board);
    return board;
  }
}

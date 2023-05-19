import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  // 다른 곳에서 참조하는 것을 방지하기 위해 private 으로 선언
  private boards = ['a'];

  getAllBoards() {
    return this.boards;
  }
}

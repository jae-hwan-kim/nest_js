import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board-status.enums';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards') // location
export class BoardsController {
  // Service injection
  constructor(private boardsService: BoardsService) {}

  // 메서드와 함께 getter 를 선언해야한다.
  // @Get('/') // R
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // // localhost:5000?id=abc 의 경우 @Body 로 못가져온다. @Param 을 사용한다.
  // // 만약 localhost:5000?id=abc&title=good 와 같이 2개를 받을 때는 다음과 같이 쓴다.
  // // @Param() params: string[]
  // @Get('/:id') // R
  // getBoardById(@Param('id') id: string): Board {
  //   const found = this.boardsService.getBoardById(id);

  //   if (!found) {
  //     throw new NotFoundException(`There is no Board id ${id}`);
  //   }
  //   return found;
  // }

  // @Post() // C
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   // createBoard(@Body(ParseIntPipe) createBoardDto: CreateBoardDto): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  // @Delete('/:id') // D
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // @Patch('/:id/status') // U
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}

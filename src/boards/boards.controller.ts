import {
  Controller,
  Get,
  Param,
  Patch,
  UsePipes,
  Post,
  Body,
  ValidationPipe,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enums';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user-decorator';
import { User } from 'src/auth/user.entity';
// import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

@Controller('boards') // location
@UseGuards(AuthGuard())
export class BoardsController {
  // Service injection
  constructor(private boardsService: BoardsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @Body() CreateBoardDto: CreateBoardDto,
    @GetUser() user: User,
  ): Promise<Board> {
    return this.boardsService.createBoard(CreateBoardDto, user);
  }

  @Get()
  getAllBoard(@GetUser() user: User): Promise<Board[]> {
    return this.boardsService.getAllBoards(user);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status') // U
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status') status: BoardStatus, // BoardStatusValidationPipe 를 지우면 됨...
  ) {
    console.log('안됨', status);
    return this.boardsService.updateBoardStatus(id, status);
  }
}

import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enums';
import { User } from 'src/auth/user.entity';
export declare class BoardsController {
    private boardsService;
    private logger;
    constructor(boardsService: BoardsService);
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    getAllBoard(user: User): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    deleteBoard(id: any, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}

import { BoardStatus } from './board-status.enums';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { User } from 'src/auth/user.entity';
export declare class BoardsService {
    private boardRepository;
    constructor(boardRepository: BoardRepository);
    getAllBoards(user: User): Promise<Board[]>;
    getBoardById(id: number): Promise<Board>;
    createBoard(createBoardDto: CreateBoardDto, user: User): Promise<Board>;
    deleteBoard(id: number, user: User): Promise<void>;
    updateBoardStatus(id: number, status: BoardStatus): Promise<Board>;
}

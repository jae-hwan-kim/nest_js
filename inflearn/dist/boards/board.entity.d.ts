import { BaseEntity } from 'typeorm';
import { BoardStatus } from './board-status.enums';
import { User } from 'src/auth/user.entity';
export declare class Board extends BaseEntity {
    id: number;
    title: string;
    description: string;
    status: BoardStatus;
    user: User;
}

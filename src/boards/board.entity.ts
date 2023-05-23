import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board-status.enums';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}

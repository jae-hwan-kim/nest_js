import { PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enums';
export declare class BoardStatusValidationPipe implements PipeTransform {
    readonly StatusOptions: BoardStatus[];
    transform(value: any): void;
    private isStatusValid;
}

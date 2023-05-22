import {
  // ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status`);
    }
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
  //   transform(value: any, metadata: ArgumentMetadata) {
  //     console.log('value', value);
  //     console.log('metadata', metadata);
  //     if (value !== 'PUBLIC' || value !== 'PRIVATE') {
  //       throw new NotFoundException('error');
  //     }

  //     return value;
  //   }
}

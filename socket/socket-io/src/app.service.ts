import { Injectable, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Injectable()
export class AppService {
  getChat(@Res() res: Response) {
    const filePath = path.resolve(__dirname, '..', 'public', 'index2.html');
    res.sendFile(filePath);
  }
}

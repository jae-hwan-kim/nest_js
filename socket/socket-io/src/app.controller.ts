import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // sendFile() {
  //   return this.appService.sendFile();
  // }

  @Get()
  getHello(@Res() res: Response) {
    const filePath = path.resolve(__dirname, '..', 'public', 'index.html');
    res.sendFile(filePath);
  }
}

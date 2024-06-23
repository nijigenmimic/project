import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Logger } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller()
export class IndexController {
  logger = new Logger('IndexController');

  constructor(private readonly appService: IndexService) {}

  @Get()
  init(@Req() req: Request, @Res() res: Response) {
    this.logger.debug('🚀 Start Application.');

    return res.render('index');
  }
}

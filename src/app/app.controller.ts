import { Controller, Get, Post, Req, Res, Query, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  init(@Req() req: Request, @Res() res: Response) {
    return res.render('index');
  }
}

import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateTodoDto } from './dto/CreateTodoDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root() {
    const todos = await this.appService.getTodos();
    return {
      todos,
    };
  }

  @Post('/todo/create')
  async createTodo(
    @Res() response: Response,
    @Body() createTodoDto: CreateTodoDto,
  ) {
    await this.appService.createTodo(createTodoDto);
    return response.redirect('/');
  }
}

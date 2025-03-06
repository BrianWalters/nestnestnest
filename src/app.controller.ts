import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { CreateTodoDto } from './dto/CreateTodoDto';
import { DoneTodoDto } from './dto/DoneTodoDto';

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

  @Post('/todo/done')
  async doneTodo(@Res() response: Response, @Body() doneTodoDto: DoneTodoDto) {
    await this.appService.doneTodo(doneTodoDto);
    return response.redirect('/');
  }
}

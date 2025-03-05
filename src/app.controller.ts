import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  @Get()
  getHello(): string {
    return JSON.stringify(this.todoRepository.find(), null, 2);
  }
}

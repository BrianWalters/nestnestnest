import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateTodoDto } from './dto/CreateTodoDto';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private dataSource: DataSource,
  ) {}

  getTodos() {
    return this.todoRepository.find();
  }

  async createTodo(todoDto: CreateTodoDto) {
    await this.dataSource.transaction(async (entityManager) => {
      const todo = new Todo();
      todo.title = todoDto.title;
      todo.description = todoDto.description;
      await entityManager.save(todo);
    });
  }
}

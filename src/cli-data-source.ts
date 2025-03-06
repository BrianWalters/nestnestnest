import { Todo } from './entities/todo.entity';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config({
  path: ['.env'],
});

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Todo],
  migrations: [join(__dirname, 'migrations/*.ts')],
  migrationsTableName: 'migrations',
});

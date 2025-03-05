import { Todo } from './entity/todo.entity';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Test1741212118837 } from './migrations/1741212118837-test';

config({
  path: ['.env'],
});

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Todo],
  migrations: [Test1741212118837],
  migrationsTableName: 'migrations',
});

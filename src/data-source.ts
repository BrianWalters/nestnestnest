import { Todo } from './entities/todo.entity';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { Test1741212118837 } from './migrations/1741212118837-test';
import { Test1741283564693 } from './migrations/1741283564693-test';
import { Donecolumn1741283697534 } from './migrations/1741283697534-donecolumn';

config({
  path: ['.env'],
});

export default new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [Todo],
  migrations: [Test1741212118837, Test1741283564693, Donecolumn1741283697534],
  migrationsTableName: 'migrations',
});

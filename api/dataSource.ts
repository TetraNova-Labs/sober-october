import { DataSource } from 'typeorm';
import * as path from 'path';
import { User } from './src/user/user.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'sober-october-test',
  synchronize: false,
  logging: false,
  migrations: [path.join(__dirname, 'src', 'migrations', '*.{js,ts}')],
  migrationsTableName: 'migrations_history',
});

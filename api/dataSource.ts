import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'sober-october',
  synchronize: false,
  logging: false,
  logger: 'file',
  entities: [
    __dirname + '/src/**/*.entity.ts'
  ],
  migrations: [
    __dirname + '/src/migrations/*.ts'
  ],
  migrationsTableName: 'migrations_history',
});

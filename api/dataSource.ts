import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  logger: 'file',
  /*
  commented - did not start tests - breaking tests
  entities: [
    __dirname + '/!**!/!*.entity.{js,ts}', // load .ts in Vitest, .js when compiled
  ],
  migrations: [__dirname + '/migrations/!*.{js,ts}'],*/
  migrationsTableName: 'migrations_history',
});

import { AppDataSource } from '../../dataSource';

export const clearDatabase = async () => {
  const entities = AppDataSource.entityMetadatas;
  for (const entity of entities) {
    const repo = AppDataSource.getRepository(entity.name);
    await repo.query(`TRUNCATE TABLE \`${entity.tableName}\`;`);
  }
};

export const setupDatabase = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }

  await AppDataSource.dropDatabase();
  await AppDataSource.runMigrations();
};

export const teardownDatabase = async () => {
  if (AppDataSource.isInitialized) {
    await AppDataSource.dropDatabase();
    await AppDataSource.destroy();
  }
};

// typeorm.config.ts
import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';

const configService = new ConfigService();

/*
export default new DataSource({
    type: 'postgres',
    url: configService.get<string>('DB_URL'),
    entities: ['dist/!**!/!*.entity{.ts,.js}'],
    migrations: ['dist/migrations/!*.js'],
});
*/

export default new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'sober-october',
    synchronize: false,
    dropSchema: false,
    logging: false,
    logger: 'file',
    entities: ['./**/*.entity{.ts,.js}'],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    migrationsTableName: 'migration_table',
});


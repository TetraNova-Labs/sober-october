import { DataSource } from "typeorm";
import * as path from "path";
import { User } from "./src/user/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EnvSchema } from "./src/config/validationSchema";
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from "@nestjs/typeorm";

// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

const config: ConfigService = new ConfigService();

const dbConfig = {
  type: "mysql" as const,
  host: config.get("DB_HOST"),
  port: 3306,
  username: config.get("DB_USERNAME"),
  password: config.get("DB_PASSWORD"),
  database: config.get("DB_DATABASE"),
  autoLoadEntities: true,
  entities: [__dirname + "/../**/*.entity.js"],
  synchronize: false,
  logging: false,
  migrations: [path.join(__dirname, "src", "migrations", "*.{js,ts}")],
  migrationsTableName: "migrations_history",
};

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return dbConfig;
  },
};

export default new DataSource(dbConfig);

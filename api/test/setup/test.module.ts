import { Module } from "@nestjs/common";
import { UserManagement } from "../user/user.management";
import { UserModule } from "../../src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../src/user/user.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "../../src/config/configuration";
import path from "path";

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        //TODO setup db conf based on environment
        type: "mysql",
        host: "127.0.0.1",
        port: 3306,
        username: "root",
        password: "root",
        database: "sober-october-test",
        autoLoadEntities: true,
        entities: [__dirname + "/../**/*.entity.js"],
        synchronize: false,
        logging: false,
        migrations: [path.join(__dirname, "src", "migrations", "*.{js,ts}")],
        migrationsTableName: "migrations_history",
      }),
    }),
    UserModule,
  ],
  providers: [UserManagement],
})
export class TestModule {}

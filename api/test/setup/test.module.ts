import { Module } from "@nestjs/common";
import { UserManagement } from "../user/user.management";
import { UserModule } from "../../src/user/user.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../../src/user/user.entity";
import { ConfigModule } from "@nestjs/config";
import configuration from "../../src/config/configuration";
import { AppModule } from "../../src/app.module";
import { typeOrmAsyncConfig } from "../../dataSource";

@Module({
  imports: [
    AppModule,
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    UserModule,
  ],
  providers: [UserManagement],
})
export class TestModule {}

import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import configuration from "./config/configuration";
import { EnvSchema, envSchema } from "./config/validationSchema";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SandboxModule } from "./sandbox/sandbox.module";
import { UserModule } from "./user/user.module";
import { SandboxController } from "./sandbox/sandbox.controller";
import { typeOrmAsyncConfig } from "../dataSource";
import { AuthModule } from "./auth/auth.module";
import { User } from "./user/user.entity";
import path from "path";
import { CqrsModule } from "@nestjs/cqrs";
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => envSchema.parse(config),
      isGlobal: true,
    }),
    CqrsModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    SandboxModule,
    UserModule,
    AuthModule,
    ActivityModule,
  ],
  controllers: [SandboxController],
  providers: [],
})
export class AppModule {}

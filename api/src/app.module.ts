import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { envSchema } from './config/validationSchema';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SandboxModule } from './sandbox/sandbox.module';
import { UserModule } from './user/user.module';
import { SandboxController } from './sandbox/sandbox.controller';
import { AppDataSource } from '../dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => envSchema.parse(config),
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        ...AppDataSource.options,
      }),
    }),
    SandboxModule,
    UserModule,
  ],
  controllers: [AppController, SandboxController],
  providers: [AppService],
})
export class AppModule {}

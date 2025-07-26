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

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validate: (config) => envSchema.parse(config),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      /*entities: [
              User
          ],*/
      synchronize: false,
      autoLoadEntities: true,
    }),
    SandboxModule,
    UserModule,
  ],
  controllers: [AppController, SandboxController],
  providers: [AppService],
})
export class AppModule {}

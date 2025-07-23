import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "@nestjs/config";
import configuration from "./config/configuration";
import {envSchema} from "./config/validationSchema";

@Module({
  imports: [
      ConfigModule.forRoot({
        load: [configuration],
        validate: (config) => envSchema.parse(config),
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

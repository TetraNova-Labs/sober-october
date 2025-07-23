import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {EnvSchema} from "./config/validationSchema";

@Injectable()
export class AppService {
  constructor(
      private cfg: ConfigService<EnvSchema>
  ) {
    console.log("env test log", this.cfg.get("DB_URL"))
  }


  getHello(): string {
    return 'Hello World!';
  }
}
